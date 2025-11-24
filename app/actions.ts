'use server';

type SubmitQuoteResponse = {
  success: boolean;
  message: string;
  contactId?: string;
};

type QuoteData = {
  service: string | null;
  addons: string[];
  address: string;
  email: string;
  phone: string;
};

type UploadImageResponse = {
  success: boolean;
  message: string;
  imageUrl?: string;
};

export async function submitQuote(data: QuoteData): Promise<SubmitQuoteResponse> {
  try {
    const { service, addons, address, email, phone } = data;

    // Extract name from email if not provided separately
    const emailName = email.split('@')[0];
    const firstName = emailName.split('.')[0] || 'Lead';
    const lastName = emailName.split('.')[1] || '';

    // GHL API Configuration
    const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
    const GHL_API_BASE = 'https://services.leadconnectorhq.com';

    if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
      console.error('GHL API credentials not configured');
      // Fallback to webhook if API not configured
      const WEBHOOK_URL = process.env.GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/wnfQfg2IIyeI7768WeGf/webhook-trigger/L6Doz0Dx7k2FXGIe5Zml';

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          addons: addons.join(', '),
          address,
          email,
          phone,
          source: 'Website Quote Modal',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        throw new Error(`Webhook responded with status: ${webhookResponse.status}`);
      }

      return { success: true, message: 'Quote request submitted successfully' };
    }

    // Create contact via GHL API
    const contactPayload = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      address1: address,
      locationId: GHL_LOCATION_ID,
      source: 'Last Frontier Website',
      tags: ['Website Lead', 'Quote Request', 'new_lead', service || 'General'].filter(Boolean),
      customFields: [
        {
          key: 'primary_service',
          field_value: service || 'Not specified',
        },
        {
          key: 'additional_services',
          field_value: addons.join(', ') || 'None',
        },
        {
          key: 'lead_source',
          field_value: 'Website Quote Form',
        },
        {
          key: 'submission_date',
          field_value: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
        'Accept': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL API Error:', response.status, errorText);
      throw new Error(`GHL API responded with status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Contact created successfully:', result);

    return {
      success: true,
      message: 'Quote request submitted successfully',
      contactId: result.contact?.id
    };
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote request' };
  }
}

export async function uploadProjectImage(
  contactId: string,
  fileData: { name: string; type: string; base64: string }
): Promise<UploadImageResponse> {
  try {
    const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
    const GHL_API_BASE = 'https://services.leadconnectorhq.com';

    if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
      throw new Error('GHL API credentials not configured');
    }

    // Convert base64 to Buffer
    const buffer = Buffer.from(fileData.base64, 'base64');
    const blob = new Blob([buffer], { type: fileData.type });

    // Create FormData for upload
    const uploadFormData = new FormData();
    uploadFormData.append('file', blob, fileData.name);
    uploadFormData.append('contactId', contactId);

    const uploadResponse = await fetch(`${GHL_API_BASE}/medias/upload-file`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_TOKEN}`,
        'Version': '2021-07-28',
      },
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error('GHL Media Upload Error:', uploadResponse.status, errorText);
      throw new Error(`Failed to upload image: ${uploadResponse.status}`);
    }

    const uploadResult = await uploadResponse.json();
    console.log('Image uploaded successfully:', uploadResult);

    return {
      success: true,
      message: 'Image uploaded successfully',
      imageUrl: uploadResult.url || uploadResult.fileUrl,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, message: 'Failed to upload image' };
  }
}
