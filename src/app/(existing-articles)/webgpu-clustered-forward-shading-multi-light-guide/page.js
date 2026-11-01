import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Clustered Forward Shading Multi-Light Architecture | serdarozden.com',
  description: 'Learn how to implement tile and cluster-based forward rendering pipelines in WebGPU to handle thousands of simultaneous dynamic lights efficiently.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>←</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              WebGPU Rendering Shaders
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">15 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Nov 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            WebGPU Clustered Forward Shading Multi-Light Architecture
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Breaking through traditional light-count limits in browser graphics by building 3D frustum clusters and compute-driven light assignment buffers in WGSL.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional forward rendering suffers from performance degradation when scaling up the number of dynamic light sources, as each mesh vertex or fragment must evaluate every light loop. Clustered forward shading solves this by subdividing the camera frustum into a 3D grid of sub-cells and assigning lights via compute shaders.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Frustum Subdivision and 3D Grid Construction
            </h2>
            <p>
              Dividing camera view space into logarithmic depth slices and 2D screen tiles creates a structured 3D grid of AABBs (Axis-Aligned Bounding Boxes) stored in GPU buffers for rapid spatial indexing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Compute Shader Light Culling and Assignment
            </h2>
            <p>
              Dispatching a WebGPU compute pass tests light bounding spheres against cluster frustums in parallel, populating global index lists and counter buffers without CPU interruption.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Fragment Shader Light Index Lookup
            </h2>
            <p>
              During the final rendering pass, fragment shaders compute their corresponding cluster coordinate based on screen position and depth, fetching only the specific subset of active lights influencing that cluster.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}