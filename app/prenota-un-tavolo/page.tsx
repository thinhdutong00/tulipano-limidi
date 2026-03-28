"use client";
import { useState } from 'react';

export default function PrenotaTavoloPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-[#FDFCF9] pt-32 pb-20 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-[#800020] uppercase tracking-[0.4em] text-[10px] font-bold mb-3">Esperienza Tulipano</h2>
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6 text-[#1a1a1a]">Prenota un Tavolo</h1>
          <div className="w-20 h-0.5 bg-[#800020] mx-auto"></div>
        </div>

        {status === 'success' ? (
          <div className="bg-white p-12 text-center shadow-xl border-t-4 border-[#800020] animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-serif italic mb-4 text-[#800020]">Richiesta Inviata!</h3>
            <p className="text-gray-600 mb-8">Grazie. Ti ricontatteremo via email o telefono per confermare la disponibilità.</p>
            <button onClick={() => setStatus('idle')} className="text-xs uppercase tracking-widest font-bold border-b border-gray-300 pb-1 hover:border-[#800020] transition-colors">Invia un'altra richiesta</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Nome e Cognome</label>
                <input name="nome" required className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] transition-colors bg-transparent" placeholder="Inserisci il tuo nome" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Email</label>
                <input name="email" type="email" required className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] transition-colors bg-transparent" placeholder="esempio@email.it" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Telefono</label>
                <input name="telefono" required className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] transition-colors bg-transparent" placeholder="333 0000000" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Data</label>
                <input name="data" type="date" required className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] transition-colors bg-transparent" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Ora</label>
                <input name="ora" type="time" required className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] transition-colors bg-transparent" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div>
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Numero Persone</label>
                <select name="persone" className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] bg-transparent cursor-pointer">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Persone'}</option>)}
                </select>
              </div>
              <div className="flex items-end italic text-xs text-gray-400 pb-2">
                * La prenotazione è soggetta a conferma.
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block mb-1">Note (Allergie, compleanni, etc.)</label>
              <textarea name="note" rows={2} className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#800020] resize-none bg-transparent"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-[#800020] text-white py-5 font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-black transition-all duration-300 disabled:bg-gray-300 shadow-xl"
            >
              {status === 'loading' ? 'Elaborazione in corso...' : 'Invia Richiesta di Prenotazione'}
            </button>
            
            {status === 'error' && <p className="text-red-600 text-center text-[11px] uppercase tracking-widest">Si è verificato un errore. Riprova più tardi.</p>}
          </form>
        )}
      </div>
    </main>
  );
}