import Link from 'next/link';

export const metadata = {
  title: 'BIM IFC Data Exchange & Interoperability Workflow | serdarozden.com',
  description: 'Master IFC schema data exchange between AutoCAD, Revit, and open-source BIM viewers. Ensure parameter mapping and geometric integrity across structural models.',
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
              BIM & CAD Interoperability
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            BIM IFC Data Exchange: Schema Mapping & Geometry Preservation
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Maintain parametric data integrity when transferring Industry Foundation Classes (IFC) files across multi-platform BIM architectural software pipelines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Interoperability remains a critical challenge in structural engineering and architectural workflows. OpenBIM standards rely on IFC schema specifications to ensure structural metadata translates seamlessly between proprietary software environments.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding IFC4 vs IFC2x3 Schema Specifications
            </h2>
            <p>
              While IFC2x3 remains widely used across legacy AEC applications, IFC4 offers superior support for complex non-uniform rational B-spline (NURBS) surfaces and precise geolocation data. Selecting the correct schema export preset prevents wall axis drift during structural coordination.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Parameter Mapping Sets and Custom Pset Definition
            </h2>
            <p>
              Ensure custom architectural metadata parameters are mapped directly to standardized Property Sets (Psets) like <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Pset_WallCommon</code>. Unmapped custom attributes risk being dropped during multi-disciplinary model aggregation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Eliminating Tessellation Artifacts in Open-Source Viewers
            </h2>
            <p>
              When exporting complex curved facades, balance geometric representation between explicit B-Rep geometry and tessellated meshes. Setting precise facet tolerance prevents visual mesh degradation when opening models in open-source IFC viewers.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}