export async function sendContactEmail(payload: any) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.SENDGRID_TO || 'hello@weddingstation.example';
  const from = process.env.SENDGRID_FROM || 'hello@weddingstation.example';
  if (!apiKey) {
    console.warn('SENDGRID_API_KEY not configured — skipping email send.');
    return { ok: true };
  }

  const body = {
    personalizations: [
      { to: [{ email: to }], subject: `New enquiry — ${payload.name || 'Wedding Station'}` }
    ],
    from: { email: from, name: 'Wedding Station Website' },
    content: [
      { type: 'text/plain', value: JSON.stringify(payload, null, 2) }
    ]
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'SendGrid error');
  }

  return { ok: true };
}
