import Link from 'next/link';

export default function ConvertUnitsEasilyPage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Ana Sayfaya Dön */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
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
            How to Convert Measurement Units Easily in CAD & Construction
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            A comprehensive guide on converting length, area, and structural units for technical drafting and engineering.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Why Accurate Unit Conversion Matters
            </h2>
            <p className="text-slate-100">
              When working on architectural drawings, CAD projects, or structural engineering planning, working with precise measurement conversions is essential. A single decimal mistake during unit translation can cause massive scaling errors during site execution, material estimation, or 3D rendering phases.
            </p>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Quick Reference Conversion Factors
            </h2>
            <p className="text-slate-100">
              Here are the most frequently used technical unit equivalents across metric and imperial systems for drafting:
            </p>
            
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm text-slate-200">
                1 Meter (m) = 1,000 Millimeters (mm) = 3.28084 Feet (ft)
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm text-slate-200">
                1 Centimeter (cm) = 10 Millimeters (mm) = 0.3937 Inches (in)
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm text-slate-200">
                1 Square Meter (m&sup2;) = 10.7639 Square Feet (sq ft)
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm text-slate-200">
                1 Cubic Meter (m&sup3;) = 35.3147 Cubic Feet (cu ft)
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm text-slate-200">
                1 Bar (Pressure) = 100,000 Pascals (Pa) = 14.5038 PSI
              </div>
            </div>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Common Pitfalls in CAD Unit Scaling
            </h2>
            <p className="text-slate-100">
              Many CAD software packages (like AutoCAD or Blender) use unitless workspace dimensions by default. When importing models from external contractors or civil engineers, keep these critical points in mind:
            </p>

            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">Check Insertion Scale:</strong> Always verify drawing units (INSUNITS) before inserting external blocks or Xrefs.
              </li>
              <li>
                <strong className="text-white">Area vs. Length Conversions:</strong> Remember that converting area requires squaring the conversion factor (e.g., 1 m = 3.28084 ft, but 1 m&sup2; = 3.28084&sup2; = 10.7639 sq ft).
              </li>
              <li>
                <strong className="text-white">Precision and Rounding:</strong> For structural calculations, avoid aggressive rounding early in the process. Keep at least 4 decimal places during intermediate steps.
              </li>
            </ul>
          </section>

          {/* Bölüm 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Streamlining Your Workflow
            </h2>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-4">
              <p className="text-slate-100 font-medium leading-relaxed">
                To avoid manual calculation mistakes on site or during drafting, utilize specialized unit converters built specifically for CAD and construction tasks rather than basic search engine calculators.
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}