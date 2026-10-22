import Link from 'next/link';

export const metadata = {
  title: 'Ray-Traced Soft Shadows (RTSS) in WebGPU & WebGL | serdarozden.com',
  description: 'Master hardware-accelerated Ray-Traced Soft Shadows (RTSS), area light sampling, and percentage-closer soft shadows in WebGPU and WebGL 2.',
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
              WebGPU Lighting & Ray Tracing
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Implementing Ray-Traced Soft Shadows (RTSS) in WebGPU Viewports
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating physically accurate area light penumbras and soft contact shadows using ray intersection queries and Monte Carlo sampling in WGSL.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional shadow maps suffer from pixelation and fixed filter widths. WebGPU ray tracing enables true Ray-Traced Soft Shadows (RTSS) that expand penumbra widths realistically as the distance between occluders and shadow receivers increases.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Area Light Sampling & Shadow Ray Dispatches
            </h2>
            <p>
              Evaluating rectangular or spherical area lights requires casting stochastic shadow rays toward random points distributed across light source surfaces, accumulating visibility factors per pixel.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. BLAS / TLAS Acceleration for Fast Intersection
            </h2>
            <p>
              Traversing Bottom-Level and Top-Level Acceleration Structures in WGSL compute shaders allows ray queries to test scene geometry boundaries instantly without evaluating every polygon manually.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Spatial Denoising & Temporal Accumulation
            </h2>
            <p>
              Low sample-count Monte Carlo shadow rays introduce grain noise. Applying spatial-temporal filter passes smooths soft shadows across frames while preserving sharp contact boundaries near occluders.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}