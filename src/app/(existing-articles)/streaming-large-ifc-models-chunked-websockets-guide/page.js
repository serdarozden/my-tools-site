import Link from 'next/link';

export const metadata = {
  title: 'Streaming Large IFC Models via Chunked WebSockets & WebWorker | serdarozden.com',
  description: 'Architecting progressive streaming pipelines for multi-gigabyte IFC building models using Node.js, WebSockets, WebWorkers, and WebAssembly.',
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
              Data Streaming & Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Progressive IFC Model Streaming Architecture for Web-Based BIM
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Overcoming browser memory limits by splitting massive IFC building files into geometry-aware binary chunks for background deserialization.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Loading entire multi-gigabyte STEP-formatted IFC files into browser RAM causes tab crashes. Progressive streaming parses entity trees server-side and streams geometry chunks on demand over persistent WebSocket connections.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Spatial Indexing & Chunk Partitioning
            </h2>
            <p>
              Pre-indexing IFC building models by storey elevations and spatial bounding boxes enables server pipelines to push immediate viewport assets before lower-priority background elements.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Multithreaded WebWorker Deserialization
            </h2>
            <p>
              Offloading binary buffer parsing to dedicated WebWorker threads keeps the main user interface responsive during intensive geometry instantiation and index buffer construction.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Memory Garbage Collection Strategies
            </h2>
            <p>
              Implementing custom geometry pools ensures unused mesh buffers are explicitly disposed of from GPU VRAM when users navigate away from specific building zones.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}