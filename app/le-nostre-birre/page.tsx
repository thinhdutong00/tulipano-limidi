"use client";
import Image from 'next/image';

export default function BirrePage() {
  const birreAllaSpina = [
    { name: "Pilsner Urquell", desc: "La prima Pilsner al mondo, dal gusto inconfondibile e amaro bilanciato.", price: "5.50€", tag: "Bionda" },
    { name: "Grolsch Weizen", desc: "Classica birra di frumento, fresca, torbida e naturalmente fruttata.", price: "6.00€", tag: "Weiss" },
    { name: "Meantime IPA", desc: "Intensa, luppolata con spiccate note agrumate e floreali.", price: "6.50€", tag: "IPA" },
  ];

  const birreInBottiglia = [
    { name: "Peroni Gran Riserva", desc: "Doppio malto, gusto intenso e avvolgente con note di malto tostato.", price: "5.00€" },
    { name: "St. Benoit Blanche", desc: "Birra belga d'abbazia, leggera, fresca e piacevolmente speziata.", price: "6.00€" },
    { name: "San Biagio Artigianale", desc: "Eccellenza italiana non filtrata, prodotta con metodi tradizionali.", price: "7.50€" },
    { name: "Birra analcolica", desc: "Tutto il gusto della birra premium, ma senza alcol.", price: "4.00€" },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#333333] pt-32 pb-20 relative overflow-hidden">
      
      {/* Texture Carta (Overlay leggerissimo) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/felt.png')` }}>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* TITOLO PRINCIPALE */}
        <div className="text-center mb-20">
          <h2 className="text-[#800020] uppercase tracking-[0.4em] text-xs font-bold mb-3">La Selezione del Tulipano</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 text-[#1a1a1a]">Le Nostre Birre</h1>
          <div className="w-24 h-1 bg-[#800020] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed italic font-serif text-lg">
            "Una collezione curata di birre alla spina e in bottiglia, scelte per esaltare i sapori 
            della nostra cucina e delle nostre pizze artigianali."
          </p>
        </div>

        {/* SEZIONE: ALLA SPINA */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-serif italic text-[#800020]">Dalla Spina</h3>
            <div className="h-[1px] flex-1 bg-[#800020]/20"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {birreAllaSpina.map((birra, i) => (
              <div key={i} className="group border-l-2 border-transparent hover:border-[#800020] pl-4 transition-all">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold tracking-tight text-[#1a1a1a]">
                    {birra.name}
                  </h4>
                  <span className="text-[#800020] font-serif font-bold text-lg">{birra.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{birra.desc}</p>
                {birra.tag && (
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#800020]/60 border border-[#800020]/20 px-2 py-0.5 rounded-full">
                    {birra.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IMMAGINE DECORATIVA - Effetto Cornice Antica */}
        <div className="relative h-[400px] w-full my-24 shadow-xl border-[12px] border-white">
          <Image 
            src="/scaffale-dei-vini-tulipano.webp" 
            alt="Atmosfera Ristorante" 
            fill 
            className="object-cover sepia-[0.3] hover:sepia-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* SEZIONE: IN BOTTIGLIA */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-serif italic text-[#800020]">In Bottiglia</h3>
            <div className="h-[1px] flex-1 bg-[#800020]/20"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {birreInBottiglia.map((birra, i) => (
              <div key={i} className="flex justify-between items-start border-b border-[#800020]/10 pb-4">
                <div className="pr-4">
                  <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">{birra.name}</h4>
                  <p className="text-gray-500 text-xs italic">{birra.desc}</p>
                </div>
                <span className="font-bold text-[#800020]">{birra.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER PAGINA */}
        <div className="text-center pt-20 border-t border-[#800020]/10">
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-8 italic text-center">
             Chiedi al personale per maggiori informazioni
          </p>
          <button className="bg-[#800020] hover:bg-[#600018] text-white px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] transition-all shadow-lg text-xs">
            Prenota un tavolo per stasera
          </button>
        </div>

      </div>
    </main>
  );
}