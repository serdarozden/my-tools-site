import Link from 'next/link';

export const metadata = {
  title: 'Building Web-Based OpenBIM Viewers with IFC.js | serdarozden.com',
  description: 'Technical walkthrough for parsing building information models (IFC) on the client side using WebAssembly and rendering interactive 3D BIM data with IFC.js.',
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
              OpenBIM
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Building Browser-Based OpenBIM Viewers with IFC.js and WebAssembly
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Deploying client-side OpenBIM web applications that parse IFC geometry and query structural BIM data directly inside modern browsers without cloud server rendering.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional BIM software requires expensive desktop hardware to process complex IFC files. IFC.js uses WebAssembly to compile C++ IFC parsing logic into high-speed browser modules that render interactive building models right in JavaScript.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Parsing ExpressID and Spatial Trees
            </h2>
            <p>
              IFC schemas rely on hierarchical structures: <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcProject</code> &rarr; <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcSite</code> &rarr; <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcBuilding</code> &rarr; <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcBuildingStorey</code>. IFC.js parses these metadata relations on worker threads to build interactive UI tree navigation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Raycasting and Element Property Selection
            </h2>
            <p>
              Clicking on a structural column or HVAC duct returns its unique <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">expressID</code>. Querying property sets (Psets) allows displaying material characteristics, acoustic ratings, and structural load metrics in side panels.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. WebWorker Geometry Generation
            </h2>
            <p>
              Parsing large IFC models can freeze the browser main thread. Running IFC geometry extraction in background WebWorker threads guarantees liquid-smooth 60 FPS viewport manipulation during heavy file loading.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}