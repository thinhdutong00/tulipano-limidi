import Image from 'next/image';

export default function InformazioniPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO DELLA PAGINA (Bottiglie) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image 
          src="/scaffale-dei-vini-tulipano.webp" 
          alt="Sfondo Informazioni"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white drop-shadow-2xl">
            Informazioni
          </h1>
        </div>
      </section>

      {/* 2. SEZIONE CITAZIONE: "Pensa, Credi, Sogna, Osa" */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] tracking-tight">
              Pensa, Credi, Sogna, Osa
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-lg">
            <div className="space-y-6">
              <p>Il Tulipano, nato a Carpi nel 2010, è situato a due passi dal centro storico della città in via Aldo Moro Interna 1R, vicino allo stadio di Carpi. Da noi troverete un&apos;atmosfera calda e accogliente, quasi familiare.</p>
              <p>Ogni dettaglio del nostro ristorante è stato pensato per rendere ancora più piacevole la vostra esperienza e per farvi godere ogni attimo passato insieme a noi. La specialità del Tulipano è sicuramente la pizza.</p>
            </div>
            <div className="space-y-6">
              <p>Ma non mancano di certo le proposte a base di pesce e i piatti tradizionali emiliani. A pranzo inoltre potrete sperimentare il nostro menù del giorno, perfetto per chi ha una pausa pranzo breve ma che non vuole rinunciare al gusto del buon cibo.</p>
              <p>Al Tulipano verrete accolti con un sorriso e professionalità e potrete scegliere se accomodarvi nella nostra sala principale o nel nostro dehor, riscaldato in inverno e fresco d&apos;estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE: LE NOSTRE SPECIALITÀ (ARANCIONE CON ONDE) */}
      <section className="relative bg-[#FFA500] text-white pt-20 pb-32">
        {/* SVG Onda Superiore */}
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c67.81-23.09,144.29-30.7,214.34-12.21C260,111,313,95.53,356,79Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-medium text-center mb-20 tracking-tight">
            Le Nostre specialità
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Colonna Pizza */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Pizza</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                La nostra pizza è frutto di una paziente lievitazione e della ricerca di ingredienti italiani selezionati. 
                Cotto in forno a legna, il nostro impasto soffice e croccante non può che conquistarti al primo morso. 
                Dalle pizze classiche tradizionali alle speciali che abbinano ingredienti particolari, fino ai nostri calzoni e siluri, 
                ripieni super farciti e gustosi, ogni boccone è un&apos;esperienza unica.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Entrando nel dettaglio ci teniamo a sottolineare la qualità delle nostre materie prime, garantite dai nostri fornitori 
                italiani con i quali vantiamo rapporti lavorativi decennali.
              </p>
            </div>

            {/* Colonna Cucina */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Cucina</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Al Tulipano anche la cucina occupa un posto di rilievo. Il nostro menù propone piatti a base di pesce fresco, 
                ma anche piatti della tradizione emiliana, come il gnocco fritto, i tortelli e i tortellini.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                La preparazione dei nostri dolci è totalmente artigianale e troverete dolci del giorno diversi ogni settimana. 
                Inoltre per la pausa pranzo proponiamo un menù del giorno conveniente e variegato perfetto per chi desidera 
                un buon piatto nella frenesia della giornata lavorativa. Accettiamo anche buoni pasto Edenred.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}