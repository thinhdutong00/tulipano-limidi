export const dynamic = 'force-dynamic';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, persone, data, ora, note } = body;

    const dataResend = await resend.emails.send({
      from: 'Il Tulipano <prenotazioni@iltulipanocarpi.it>', // Mittente autorizzato
      to: ['ristorantetulipanocarpi@gmail.com'],           // La tua email Gmail
      replyTo: email,                                     // Rispondi al cliente
      subject: `Nuova Prenotazione: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nuova richiesta dal sito</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${telefono}</p>
          <p><strong>Persone:</strong> ${persone}</p>
          <p><strong>Data e Ora:</strong> ${data} alle ${ora}</p>
          <p><strong>Note:</strong> ${note}</p>
        </div>
      `,
    });

    return NextResponse.json(dataResend);
  } catch (error) {
    return NextResponse.json({ error: 'Errore invio' }, { status: 500 });
  }
}