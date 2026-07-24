import Link from 'next/link';

export const metadata = {
  title: 'Complete Pressure Unit Conversion Guide: Bar, PSI, MPa, kPa',
  description: 'Master pressure conversions with our ultimate engineering guide. Learn exact formulas and quick reference charts to convert between Bar, PSI, MPa, kPa, and N/mm² instantly.',
};

export default function PressureGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500/80 hover:text-blue-400 transition"
        >
          &larr; Back to all guides
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-slate-800/60">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-500/80 mb-4">
          <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400/80">
            Engineering
          </span>
          <span className="text-slate-800">•</span>
          <span className="text-slate-600 font-normal">6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-300 tracking-tight mb-6 leading-tight">
          Complete Pressure Unit Conversion Guide: Bar, PSI, MPa, and kPa Explained
        </h1>

        <p className="text-lg text-slate-500 leading-relaxed font-normal">
          Master pressure conversions with our ultimate engineering guide. Learn exact formulas and quick reference charts to convert between Bar, PSI, MPa, kPa, and N/mm² instantly.
        </p>
      </header>

      {/* Article Body */}
      <article className="text-slate-500 leading-relaxed space-y-6 text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            Understanding Pressure Units in Modern Engineering
          </h2>
          <p className="mb-4">
            Pressure conversion is one of the most frequent technical calculations required across civil engineering, automotive design, mechanical systems, and CAD modeling. Different regions and industries rely on distinct measurement standards, making accurate conversion essential for safety and structural integrity.
          </p>
          <p>
            Whether you are calculating hydraulic system limits, checking tire pressure tolerances, or reading structural load specifications, understanding how units like <strong className="text-slate-400">Bar</strong>, <strong className="text-slate-400">PSI</strong>, <strong className="text-slate-400">MPa</strong>, and <strong className="text-slate-400">kPa</strong> relate to one another prevents critical conversion errors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            1. Bar (Metric Pressure Unit)
          </h2>
          <p className="mb-3">
            The <strong className="text-slate-400">Bar</strong> is a metric unit of pressure defined as exactly 100,000 Pascals (Pa) or 100 kilopascals (kPa). Although it is not an official SI unit, it is universally recognized and widely used in fluid mechanics, automotive engineering, and meteorology.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-400">1 Bar = 14.5038 PSI</strong></li>
            <li><strong className="text-slate-400">1 Bar = 0.1 MPa</strong></li>
            <li><strong className="text-slate-400">1 Bar = 100 kPa</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            2. PSI (Pounds per Square Inch)
          </h2>
          <p className="mb-3">
            Commonly used in the United States and Imperial measurement systems, <strong className="text-slate-400">PSI</strong> measures the force exerted on one square inch of area. It is the primary unit for automotive tire pressure, compressed air systems, and industrial piping specs in Imperial standards.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-400">1 PSI = 0.0689476 Bar</strong></li>
            <li><strong className="text-slate-400">1 PSI = 6.89476 kPa</strong></li>
            <li><strong className="text-slate-400">1 PSI = 0.00689476 MPa</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            3. Megapascal (MPa) & Kilopascal (kPa)
          </h2>
          <p className="mb-3">
            The <strong className="text-slate-400">Pascal (Pa)</strong> is the official SI unit for pressure and stress. Because one Pascal represents a very small force (1 Newton per square meter), engineering disciplines rely on larger multiples:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-400">Kilopascal (kPa):</strong> Equal to 1,000 Pascals. Frequently used in HVAC, soil mechanics, and building ventilation systems.</li>
            <li><strong className="text-slate-400">Megapascal (MPa):</strong> Equal to 1,000,000 Pascals (or 1 N/mm²). This is the standard unit for concrete compressive strength, steel tensile strength, and structural engineering materials.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            Quick Pressure Unit Conversion Chart
          </h2>
          <p className="mb-3">For rapid reference on job sites or during design workflows, use these key benchmark equivalencies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-400">1 MPa</strong> = 10 Bar = 145.038 PSI = 1,000 kPa</li>
            <li><strong className="text-slate-400">1 Bar</strong> = 0.1 MPa = 14.5038 PSI = 100 kPa</li>
            <li><strong className="text-slate-400">100 PSI</strong> = 6.89476 Bar = 0.689476 MPa = 689.476 kPa</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            Why Precise Conversions Matter in Engineering
          </h2>
          <p className="mb-4">
            In accurate structural modeling and CAD draftings, misinterpreting pressure ratings can lead to catastrophic material failure. For example, specifying a hydraulic pipe rated for 100 PSI when the system operates at 100 Bar (approx. 1,450 PSI) will cause immediate system breakdown.
          </p>
        </section>
      </article>

      {/* Call to Action Card */}
      <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl my-10">
        <h3 className="text-xl font-bold text-slate-300 mb-2">Need to run quick conversions?</h3>
        <p className="text-slate-500 text-sm mb-4">
          Use our free universal engineering unit converter to switch between metric, imperial, pressure, and CAD measurements instantly.
        </p>
        <Link 
          href="/tools/unit-converter"
          className="inline-block bg-blue-600/90 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-blue-500 transition shadow-md shadow-blue-600/10"
        >
          Open Unit Converter &rarr;
        </Link>
      </div>
    </main>
  );
}