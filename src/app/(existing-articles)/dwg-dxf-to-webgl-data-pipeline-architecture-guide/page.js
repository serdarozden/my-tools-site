import Link from 'next/link';

export const metadata = {
  title: 'Building DWG/DXF to WebGL Conversion Pipelines | serdarozden.com',
  description: 'Architecting server-side parsing pipelines to convert proprietary CAD DWG and DXF vector formats into WebGL-compatible mesh buffers and SVG layers.',
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
              CAD Data Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Architecting High-Speed DWG and DXF Translation Pipelines for Web Viewers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Converting complex AutoCAD CAD entity structures, polylines, hatch patterns, and block references into high-performance web graphics.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Integrating native CAD drawings into web applications requires converting heavy binary DWG or ASCII DXF formats into lightweight, GPU-friendly vertex arrays or vector paths without losing layer visibility controls.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. C++ Headless Parsing & Binary Buffer Generation
            </h2>
            <p>
              Leveraging serverless C++ routines to parse entity tables extracts 2D/3D geometry, line weights, and coordinate systems into optimized binary FlatBuffers for fast client-side deserialization.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Tessellating Curves and Complex Polylines on Web Workers
            </h2>
            <p>
              Converting NURBS curves, arcs, and spline entities into smooth line segments using adaptive chordal deviation algorithms offloads CPU-bound calculations to client background Web Workers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Layer State Synchronization & Dynamic Styling
            </h2>
            <p>
              Preserving original CAD layer hierarchies allows web applications to dynamically toggle geometry visibility, update line colors, and apply custom interactive material shaders at runtime.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}