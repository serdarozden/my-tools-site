import Link from 'next/link';

export const metadata = {
  title: 'Real-time WebGL & Three.js Occlusion Culling Guide | serdarozden.com',
  description: 'Master GPU-accelerated occlusion culling, hierarchical z-buffering, and frustum culling techniques for rendering dense 3D scenes in WebGL and Three.js.',
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
              WebGL & Rendering Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            High-Performance Occlusion Culling in Large-Scale WebGL Scenes
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Eliminating overdraw and hidden geometry rendering using GPU queries, Bounding Volume Hierarchies (BVH), and Hierarchical Z-Buffer (HZB) culling.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Rendering complex architectural models or expansive interactive CAD environments in the browser suffers when hidden objects are rasterized. Implementing hardware-accelerated occlusion culling ensures only visible geometry enters the graphics pipeline.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Frustum Culling vs. Hardware Occlusion Queries
            </h2>
            <p>
              While CPU-based frustum culling removes objects outside the camera field of view, hardware occlusion queries ask the GPU if any pixels of an object bounding box pass the depth test before issuing draw calls for detailed meshes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Hierarchical Z-Buffer (HZB) Culling on GPU
            </h2>
            <p>
              Generating a mipmapped depth pyramid from the previous frame allows compute shaders to test bounding boxes against low-resolution depth textures, discarding occluded geometry in a single dispatch pass.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Spatial Partitioning with Dynamic BVH
            </h2>
            <p>
              Organizing scene objects into spatial Bounding Volume Hierarchies minimizes the number of visibility tests required per frame, enabling smooth 60 FPS rendering of dense industrial models.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}