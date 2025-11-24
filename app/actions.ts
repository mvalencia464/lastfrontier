'use server';

type SubmitQuoteResponse = {
  success: boolean;
  message: string;
};

type QuoteData = {
  service: string | null;
  addons: string[];
  address: string;
  email: string;
  phone: string;
};

export async function submitQuote(data: QuoteData): Promise<SubmitQuoteResponse> {
  try {
    const { service, addons, address, email, phone } = data;

    // HighLevel Webhook URL
    const WEBHOOK_URL = process.env.GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/wnfQfg2IIyeI7768WeGf/webhook-trigger/L6Doz0Dx7k2FXGIe5Zml';

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service,
        addons: addons.join(', '), // Convert array to string
        address,
        email,
        phone,
        source: 'Website Quote Modal',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HighLevel API responded with status: ${response.status}`);
    }

    return { success: true, message: 'Quote request submitted successfully' };
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote request' };
  }
}
