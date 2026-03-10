export const dynamic = 'force-dynamic'; // Aggiungi questa riga

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, persone, data, ora, note } = body;

    const dataResend = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Finché non colleghi il dominio lascia questo
      to: ['tua-email-di-resend@esempio.it'], // Metti la tua mail di registrazione Resend
      subject: `Nuova Prenotazione: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Richiesta di prenotazione ricevuta</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${telefono}</p>
          <p><strong>Persone:</strong> ${persone}</p>
          <p><strong>Data:</strong> ${data} ore ${ora}</p>
          <p><strong>Note:</strong> ${note}</p>
        </div>
      `,
    });

    return NextResponse.json(dataResend);
  } catch (error) {
    return NextResponse.json({ error: "Errore durante l'invio" }, { status: 500 });
  }
}