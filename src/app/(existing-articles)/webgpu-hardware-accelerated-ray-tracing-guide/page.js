import Link from 'next/link';

export const metadata = {
  title: 'Hardware-Accelerated Ray Tracing with WebGPU | serdarozden.com',
  description: 'Learn how to implement hardware-accelerated ray tracing and acceleration structures (BVH) in browsers using WebGPU and WGSL shaders.',
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
              WebGPU & Advanced Rendering
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Hardware-Accelerated Web Ray Tracing Architecture in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Building real-time path tracers in browsers using Bottom-Level (BLAS) and Top-Level Acceleration Structures (TLAS) in WGSL.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional WebGL rasterization approximates realistic lighting via shadow maps and reflection probes. WebGPU enables true hardware-driven ray tracing pipelines capable of evaluating real-time global illumination and path-traced reflections directly on client GPUs.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Bounding Volume Hierarchies: BLAS and TLAS
            </h2>
            <p>
              Ray tracing efficiency relies on spatial acceleration structures. Bottom-Level Acceleration Structures (BLAS) store static mesh triangles, while Top-Level Acceleration Structures (TLAS) hold scene instance transforms for fast ray intersection queries.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Ray Generation and Closest-Hit Compute Shaders
            </h2>
            <p>
              Dispatching ray generation compute passes calculates primary view rays from camera origins. Intersection shaders evaluate ray-triangle collisions, passing material attributes to closest-hit passes for recursive indirect bounce calculations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Progressive Accumulation and Temporal Denoising
            </h2>
            <p>
              To maintain 60 FPS viewport interaction during camera movement, path tracers accumulate noisy lighting samples across static frames while applying spatio-temporal denoisers to filter monte carlo variance.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}