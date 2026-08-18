import Link from 'next/link';

export const metadata = {
  title: 'Building OpenBIM IFC Viewers in Next.js with web-ifc | serdarozden.com',
  description: 'Parse and render OpenBIM IFC files natively in web browsers using web-ifc and Three.js inside Next.js App Router applications.',
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
              BIM Engineering & Web3D
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Building Client-Side OpenBIM IFC Viewers in Next.js
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Parse complex architectural and structural IFC data directly in the browser using WebAssembly without server-side rendering bottlenecks.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional BIM software requires dedicated desktop environments to inspect spatial relationships and material properties. Web-native OpenBIM viewers allow direct browser parsing of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.ifc</code> files using WebAssembly (WASM).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Configuring WebAssembly Asset Workers in Next.js
            </h2>
            <p>
              Next.js bundlers require explicit Webpack static asset copies for <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">web-ifc.wasm</code>. Serving WASM binaries directly from the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">public/</code> directory ensures zero CORS header conflicts during multi-thread parsing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Extracting IFC Entity Metadata and Spatial Trees
            </h2>
            <p>
              Query structural hierarchy (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcBuildingElementProxy</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcBeam</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcColumn</code>) directly from geometry buffers to build interactive object trees alongside the 3D canvas viewport.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Raycasting and Expressing Geometry Material Overrides
            </h2>
            <p>
              Implement GPU raycasting to pick individual IFC IDs, dynamic highlighting, and section plane clipping for on-the-fly structural inspection directly inside React state trees.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}