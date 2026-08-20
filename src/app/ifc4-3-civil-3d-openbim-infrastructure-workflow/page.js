import Link from 'next/link';

export const metadata = {
  title: 'IFC4.3 for Infrastructure: Civil 3D to OpenBIM Guide | serdarozden.com',
  description: 'Master IFC4.3 infrastructure data exchange from Civil 3D. Map alignments, corridors, and terrain surfaces into openBIM standards without data loss.',
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
              OpenBIM & Infrastructure
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            IFC4.3 for Infrastructure: Exporting Civil 3D Models to OpenBIM Standards
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how buildingSMART’s IFC4.3 schema bridges linear infrastructure modeling, corridor geometry mapping, and OpenBIM interoperability for civil engineering projects.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Legacy IFC formats focused primarily on vertical building structures. With IFC4.3, civil infrastructure objects—including alignments, roads, railways, and bridges—can finally be exchanged using open standards.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding IFC4.3 Entity Schemas for Civil Engineering
            </h2>
            <p>
              IFC4.3 introduces native infrastructure classes such as <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcAlignment</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcRoad</code>, and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcFacilityPart</code>, allowing precise semantic classification of civil assets beyond generic solids.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Mapping Civil 3D Corridors and Surfaces to IFC Classes
            </h2>
            <p>
              When exporting from Civil 3D using the official IFC infra extension, map corridor subassemblies directly to appropriate predefined types and configure Property Sets (Psets) to retain volumetric material metadata.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Georeferencing & Model Validation in Open Source Viewers
            </h2>
            <p>
              Ensure map projection coordinates match coordinate reference systems (CRS) using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcMapConversion</code>. Validate the exported file integrity using open-source IFC inspection tools before coordination reviews.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}