import Link from 'next/link';

export const metadata = {
  title: 'Automated HVAC Duct & Pipe Sizing Analysis in OpenBIM | serdarozden.com',
  description: 'How to build automated MEP hydraulic sizing engines, friction loss calculators (Darcy-Weisbach), and duct network analyzers for IFC building models.',
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
              BIM MEP Engineering & Hydraulics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated HVAC Duct and Pipe Network Sizing Analysis in OpenBIM IFC
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting MEP flow rates, calculating frictional pressure drops, and auditing duct dimensions automatically from architectural IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Manual MEP sizing and pressure drop calculations for complex building ventilation systems are time-consuming and prone to friction estimation errors. Parsing semantic MEP networks from IFC models enables web tools to validate hydraulic requirements instantly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Traversing IfcDistributionFlowElement & Port Topologies
            </h2>
            <p>
              Extracting `IfcDuctSegment`, `IfcPipeSegment`, and port connection relationships builds directed graph networks representing building air distribution and plumbing circuits.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Friction Loss Calculations via Darcy-Weisbach Equation
            </h2>
            <p>
              Evaluating fluid flow velocities, hydraulic diameters, and internal roughness coefficients calculates pressure drops and head losses across duct segments automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive MEP Clash & Sizing Reports in WebGL
            </h2>
            <p>
              Highlighting under-sized ducts or spatial routing conflicts directly in the 3D WebGL viewport streamlines mechanical coordination reviews for building services engineers.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}