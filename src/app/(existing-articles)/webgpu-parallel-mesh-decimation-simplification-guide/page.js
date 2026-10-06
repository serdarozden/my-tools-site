import Link from 'next/link';

export const metadata = {
  title: 'WebGPU GPU-Accelerated Parallel Mesh Decimation | serdarozden.com',
  description: 'Architecting parallel Quadric Error Metric (QEM) mesh simplification algorithms using WebGPU WGSL compute shaders for instant browser polygon reduction.',
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
              WebGPU & Geometry Algorithms
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            GPU-Driven Mesh Decimation Pipeline with WebGPU Compute Shaders
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Accelerating polygon reduction on massive 3D models using parallel Quadric Error Metric (QEM) evaluation in browser WGSL compute passes.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simplifying high-density 3D scans or CAD geometry on the CPU blocks main threads and freezes user interfaces. Implementing Quadric Error Metric (QEM) mesh decimation directly in WebGPU compute shaders parallelizes edge-collapse operations across thousands of GPU cores.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Quadric Error Metric (QEM) Formulation
            </h2>
            <p>
              QEM measures geometric error introduced by collapsing vertex pairs into single points. Evaluating symmetric 4x4 quadric matrices in parallel WGSL compute workgroups identifies candidate edges with minimum visual distortion.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Lock-Free Atomic Edge Collapse Passes
            </h2>
            <p>
              Preventing topological mesh corruption during concurrent compute passes requires atomic memory flags to lock adjacent vertex buffers while executing edge-collapse operations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Level-of-Detail (LOD) Generation
            </h2>
            <p>
              Generating progressive geometric LOD levels in real time directly on the GPU avoids round-trip network transfers for pre-computed simplified assets, minimizing initial page load size.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}