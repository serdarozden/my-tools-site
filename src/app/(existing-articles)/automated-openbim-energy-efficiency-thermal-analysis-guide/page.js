import Link from 'next/link';

export const metadata = {
  title: 'Automated Building Energy Efficiency & Thermal Analysis in IFC | serdarozden.com',
  description: 'How to build automated thermal transmittance (U-value) auditors and energy simulation data pipelines directly on architectural IFC building models.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              BIM Energy & Sustainability
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Building Energy Efficiency and Thermal Performance Analysis in OpenBIM
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting thermal transmittance (U-values), material layer properties, and window-to-wall ratios automatically from IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Evaluating building energy performance early in design phases ensures compliance with sustainability standards. Parsing semantic material layers and thermal properties from IFC models enables web tools to calculate overall heat transfer coefficients automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Extracting Thermal Transmittance (U-Values) from IFC
            </h2>
            <p>
              Traversing `IfcMaterialLayerSet` and thermal property sets across walls, roofs, and slabs computes composite U-values based on material thickness and conductivity coefficients.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Window-to-Wall Ratio (WWR) & Solar Heat Gain Calculations
            </h2>
            <p>
              Comparing total fenestration areas (`IfcWindow`, `IfcDoor`) against exterior envelope surface areas calculates Window-to-Wall Ratios (WWR) to assess solar heat gain and daylighting performance.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Exporting gbXML for Energy Simulation Engines
            </h2>
            <p>
              Converting spatial zones and envelope thermal boundaries into standardized gbXML or JSON schemas enables seamless integration with external energy simulation tools for annual heating and cooling load calculations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}