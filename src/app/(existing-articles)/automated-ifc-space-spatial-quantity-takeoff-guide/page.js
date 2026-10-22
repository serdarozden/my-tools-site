import Link from 'next/link';

export const metadata = {
  title: 'Automated Space & Quantity Takeoff in OpenBIM IFC | serdarozden.com',
  description: 'How to build automated space utilization analysis and material quantity takeoff (QTO) engines for architectural IFC building models.',
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
              BIM Data & Quantity Takeoff
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Spatial Analysis and Quantity Takeoff (QTO) in OpenBIM IFC
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting net floor areas, room boundary volumes, and bill of quantities (BOQ) automatically from architectural IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Manual cost estimation and architectural area programming are prone to human oversight. Parsing semantic `IfcSpace` entities and material quantity sets programmatically allows web tools to generate accurate takeoffs instantly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Parsing IfcSpace Boundaries & Net Floor Areas
            </h2>
            <p>
              Traversing `IfcRelSpaceBoundary` relations extracts precise room perimeters, usable floor areas, and ceiling heights without requiring manual CAD polygon tracing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Automated Material Volume & Surface Takeoff (QTO)
            </h2>
            <p>
              Aggregating `IfcElementQuantity` property sets across concrete walls, steel framing, and finishes computes total material volume and formwork surface areas for automated cost estimation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive WebGL Spatial Heatmap Visualization
            </h2>
            <p>
              Color-coding floor plan zones in WebGL based on occupancy limits, room types, or cost metrics provides interactive visual insights for facility managers and cost consultants.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}