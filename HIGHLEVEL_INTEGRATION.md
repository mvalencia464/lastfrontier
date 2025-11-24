# HighLevel Integration - Last Frontier Lawns

**Status: ✅ WORKING** - Tested and confirmed with real GHL account.

## Overview

This Next.js application integrates directly with GoHighLevel (GHL) to create contacts from website quote form submissions. The integration uses server-side API calls for security and Doppler for secrets management.

**Features:**
- ✅ Direct contact creation in GHL
- ✅ Optional project image upload after form submission (reduces friction)
- ✅ Images uploaded to GHL Media Library and associated with contact
- ✅ Automatic tagging and custom field mapping

## How It Works

1. User fills out quote form on website
2. Form data is sent to Next.js server action (`app/actions.ts`)
3. Server action creates contact in GHL via API
4. Contact appears in GHL with tags, custom fields, and source tracking
5. **Optional:** User can upload a project image on the success screen
6. Image is uploaded to GHL Media Library and associated with the contact

## Setup

### 1. GHL Private Integration

Create a Private Integration in your GHL account:

1. Go to **Settings** → **Integrations** → **Private Integrations**
2. Click **"Create Integration"**
3. Name: `Last Frontier Website`
4. Required scopes:
   - ✅ `contacts.write` (required for creating contacts)
   - ✅ `contacts.read` (recommended)
   - ✅ `businesses.read` (required)
   - ✅ `medias.write` (required for image uploads)
5. Save and copy the token (starts with `pit-...`)

### 2. Get Location ID

1. In GHL, go to **Settings** → **Business Profile**
2. Copy your Location ID

### 3. Add to Doppler

```bash
doppler secrets set GHL_API_TOKEN="pit-your-token-here"
doppler secrets set GHL_LOCATION_ID="your-location-id-here"
```

### 4. Run Development Server

```bash
npm run dev
```

The dev script is configured to use Doppler: `doppler run -- next dev`

## What Gets Created in GHL

When a quote is submitted, the following contact is created:

**Contact Fields:**
- First Name / Last Name (extracted from email)
- Email
- Phone
- Address

**Tags:**
- `Website Lead`
- `Quote Request`
- Service type (e.g., `Deck Building`, `Christmas Lights`)

**Custom Fields:**
- `primary_service` - Main service selected
- `additional_services` - Add-ons selected
- `lead_source` - "Website Quote Form"
- `submission_date` - ISO timestamp

**Source:** `Last Frontier Website`

## Testing

Test the integration with a curl request:

```bash
doppler run -- node -e "
const token = process.env.GHL_API_TOKEN;
const locationId = process.env.GHL_LOCATION_ID;

fetch('https://services.leadconnectorhq.com/contacts/', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json',
    'Version': '2021-07-28',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'Test',
    lastName: 'Contact',
    name: 'Test Contact',
    email: 'test@example.com',
    phone: '(907) 555-1234',
    address1: '123 Test St, Anchorage, AK',
    locationId: locationId,
    source: 'Last Frontier Website',
    tags: ['Website Lead', 'Quote Request', 'Test']
  })
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)))
.catch(err => console.error(err));
"
```

## Files

- **`app/actions.ts`** - Server action that creates GHL contacts
- **`app/page.tsx`** - Quote form UI
- **`package.json`** - Dev script configured with Doppler

## Troubleshooting

**"The token does not have access to this location"**
- Verify your Location ID is correct
- Ensure the Private Integration has required scopes

**"GHL API credentials not configured"**
- Check Doppler secrets are set: `doppler secrets`
- Restart dev server after adding secrets

**Contact not appearing in GHL**
- Check server logs for API errors
- Verify the API token hasn't expired
- Confirm Location ID matches your GHL account

## Environment Variables

All secrets are managed in Doppler:

| Variable | Description |
|----------|-------------|
| `GHL_API_TOKEN` | Private Integration token (starts with `pit-`) |
| `GHL_LOCATION_ID` | Your GHL location ID |
| `GHL_WEBHOOK_URL` | Webhook URL (fallback if API fails) |

## API Details

**Endpoint:** `https://services.leadconnectorhq.com/contacts/`  
**Method:** POST  
**Headers:**
- `Authorization: Bearer {token}`
- `Content-Type: application/json`
- `Version: 2021-07-28`
- `Accept: application/json`

## Success Criteria

✅ Contact created in GHL  
✅ All form fields mapped correctly  
✅ Tags applied automatically  
✅ Custom fields populated  
✅ Source tracking enabled  
✅ No manual automation setup required
