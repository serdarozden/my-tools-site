import Link from 'next/link';

export const metadata = {
  title: 'GPU-Driven Terrain Rendering & Quadtree LOD in WebGPU | serdarozden.com',
  description: 'Master GPU-driven terrain rendering, clipmap tessellation, and spatial quadtree LOD management using WebGPU compute shaders.',
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
              WebGPU Terrains & LOD
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            GPU-Driven Terrain Rendering and Quadtree LOD Management in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Rendering massive open-world geospatial elevation maps at 60 FPS using dynamic clipmaps and parallel compute-driven quadtree subdivision.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Visualizing expansive geographical terrain models requires adapting geometric resolution dynamically based on camera distance. Offloading quadtree hierarchy updates and frustum culling to WebGPU compute shaders eliminates CPU bottlenecking entirely.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Clipmap-Based Nested Grid Tessellation
            </h2>
            <p>
              Nesting concentric square grid layers centered around the camera view provides dense geometric detail near the focal point while scaling down polygon density exponentially toward the horizon.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. GPU Quadtree Paging and Frustum Culling
            </h2>
            <p>
              Evaluating spatial bounding boxes inside WGSL compute passes culls invisible terrain tiles before dispatching draw calls, preventing unnecessary rasterization overhead across large maps.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Seamless LOD Skirting & Crack Elimination
            </h2>
            <p>
              Adjacent terrain patches with differing detail levels often produce visible T-junction cracks. Applying vertex displacement skirting rules in vertex shaders closes gaps seamlessly across LOD boundaries.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}