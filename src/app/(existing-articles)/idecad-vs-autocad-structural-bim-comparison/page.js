import Link from 'next/link';

export const metadata = {
  title: 'iDECAD vs AutoCAD: Structural BIM vs 2D Drafting | serdarozden.com',
  description: 'Detailed comparison between iDECAD and AutoCAD for structural engineering, reinforced concrete design, BIM integration, and architectural workflows.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              AEC & Structural Software
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            iDECAD vs AutoCAD: Choosing the Right Tool for Structural & Architectural Design
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Compare iDECAD’s automated structural analysis and reinforced concrete detailing against AutoCAD’s flexible drafting capabilities.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Architects and structural engineers often debate whether to rely on general-purpose drafting software like AutoCAD or specialized parametric BIM solutions like iDECAD for building design and structural calculations.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Structural Analysis vs General CAD Drafting
            </h2>
            <p>
              AutoCAD is a versatile computer-aided design platform ideal for 2D floor plans, sections, and custom 3D geometry. In contrast, iDECAD is an integrated BIM software specifically tailored for structural analysis, finite element modeling, and seismic code compliance verification.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Automated Rebar Detailing and Quantity Takeoffs
            </h2>
            <p>
              While AutoCAD requires structural rebar schedules to be drawn manually or via dynamic blocks, iDECAD automatically generates rebar placement drawings, beam/column schedules, and steel quantity takeoffs directly from the 3D analytical model.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. BIM Coordination and Interoperability
            </h2>
            <p>
              iDECAD supports full IFC export for multidisciplinary BIM coordination with architectural models. AutoCAD projects can be imported directly into iDECAD as DWG underlays to serve as the reference framework for structural column and wall placement.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}