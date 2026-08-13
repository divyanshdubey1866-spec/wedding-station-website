import { sendContactEmail } from '../../lib/sendMail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Basic server-side validation
    if (!body.name || !body.email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    await sendContactEmail(body);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err?.message || 'Unknown error' }), { status: 500 });
  }
}
