export default async function handler(req, res) {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: 'Resend API key is not configured on the server' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'alpersenturk@gmail.com',
        subject: `[Portfolio Contact] New Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 5px;">
            <h2 style="color: #2b6cb0; border-bottom: 2px solid #2b6cb0; padding-bottom: 8px;">New Portfolio Message</h2>
            <p>You received a new message from your portfolio contact form:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 100px;">Name:</td>
                <td style="padding: 6px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Email:</td>
                <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-left: 4px solid #cbd5e0; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <p style="margin-top: 25px; font-size: 11px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 10px;">
              Sent via alpersenturk.net contact form and Resend
            </p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Resend API Error' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
