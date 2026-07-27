import Link from 'next/link';

export default function PressureUnitConversionGuidePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Geri Dön Butonu */}
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Blog
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              Engineering & Tools
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">5 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Complete Pressure Unit Conversion Guide: Bar, PSI, MPa, and kPa Explained
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Master pressure conversions with our ultimate engineering guide. Learn exact formulas and quick reference charts to convert between Bar, PSI, MPa, kPa, and N/mm² instantly.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Giriş Bölümü */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Understanding Pressure Units in Modern Engineering
            </h2>
            <p className="text-slate-100">
              Pressure conversion is one of the most frequent technical calculations required across civil engineering, automotive design, mechanical systems, and CAD modeling. Different regions and industries rely on distinct measurement standards, making accurate conversion essential for safety and structural integrity.
            </p>
            <p className="text-slate-100">
              Whether you are calculating hydraulic system limits, checking tire pressure tolerances, or reading structural load specifications, understanding how units like Bar, PSI, MPa, and kPa relate to one another prevents critical conversion errors.
            </p>
          </section>

          {/* 1. Bar */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. Bar (Metric Pressure Unit)
            </h2>
            <p className="text-slate-100">
              The Bar is a metric unit of pressure defined as exactly 100,000 Pascals (Pa) or 100 kilopascals (kPa). Although it is not an official SI unit, it is universally recognized and widely used in fluid mechanics, automotive engineering, and meteorology.
            </p>
            
            <ul className="space-y-2 my-4 pl-4 border-l-2 border-blue-500 font-mono text-sm sm:text-base text-slate-100">
              <li><strong className="text-white font-bold">1 Bar</strong> = 14.5038 PSI</li>
              <li><strong className="text-white font-bold">1 Bar</strong> = 0.1 MPa</li>
              <li><strong className="text-white font-bold">1 Bar</strong> = 100 kPa</li>
            </ul>
          </section>

          {/* 2. PSI */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. PSI (Pounds per Square Inch)
            </h2>
            <p className="text-slate-100">
              Commonly used in the United States and Imperial measurement systems, PSI measures the force exerted on one square inch of area. It is the primary unit for automotive tire pressure, compressed air systems, and industrial piping specs in Imperial standards.
            </p>
            
            <ul className="space-y-2 my-4 pl-4 border-l-2 border-blue-500 font-mono text-sm sm:text-base text-slate-100">
              <li><strong className="text-white font-bold">1 PSI</strong> = 0.0689476 Bar</li>
              <li><strong className="text-white font-bold">1 PSI</strong> = 6.89476 kPa</li>
              <li><strong className="text-white font-bold">1 PSI</strong> = 0.00689476 MPa</li>
            </ul>
          </section>

          {/* 3. MPa & kPa */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              3. Megapascal (MPa) & Kilopascal (kPa)
            </h2>
            <p className="text-slate-100">
              The Pascal (Pa) is the official SI unit for pressure and stress. Because one Pascal represents a very small force (1 Newton per square meter), engineering disciplines rely on larger multiples:
            </p>
            
            <div className="space-y-4 my-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-1">Kilopascal (kPa)</h3>
                <p className="text-sm text-slate-200">
                  Equal to 1,000 Pascals. Frequently used in HVAC, soil mechanics, and building ventilation systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-1">Megapascal (MPa)</h3>
                <p className="text-sm text-slate-200">
                  Equal to 1,000,000 Pascals (or 1 N/mm²). This is the standard unit for concrete compressive strength, steel tensile strength, and structural engineering materials.
                </p>
              </div>
            </div>
          </section>

          {/* Dönüşüm Tablosu */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Quick Pressure Unit Conversion Chart
            </h2>
            <p className="text-slate-100">
              For rapid reference on job sites or during design workflows, use these key benchmark equivalencies:
            </p>
            
            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 my-6">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-zinc-900 text-white font-bold border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Base Unit</th>
                    <th className="p-4">Equivalent Values</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 font-mono">
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white font-sans">1 MPa</td>
                    <td className="p-4 text-blue-400 font-semibold">10 Bar = 145.038 PSI = 1,000 kPa</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white font-sans">1 Bar</td>
                    <td className="p-4 text-blue-400 font-semibold">0.1 MPa = 14.5038 PSI = 100 kPa</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white font-sans">100 PSI</td>
                    <td className="p-4 text-blue-400 font-semibold">6.89476 Bar = 0.689476 MPa = 689.476 kPa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Vurgu Kutusu / Önemli Not */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Why Precise Conversions Matter in Engineering
            </h2>
            
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
              <p className="text-slate-100 font-medium">
                In accurate structural modeling and CAD draftings, misinterpreting pressure ratings can lead to catastrophic material failure. For example, specifying a hydraulic pipe rated for 100 PSI when the system operates at 100 Bar (approx. 1,450 PSI) will cause immediate system breakdown.
              </p>
            </div>
          </section>

          {/* İç Araç / Yönlendirme Kartı */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10 shadow-2xl">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Need an Instant Conversion?</h4>
              <p className="text-sm text-slate-200">
                Use our interactive engineering unit converter to convert pressure, force, and dimensions in real time.
              </p>
            </div>
            <Link 
              href="/tools/unit-converter" 
              className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-600/30"
            >
              Open Unit Converter &rarr;
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}