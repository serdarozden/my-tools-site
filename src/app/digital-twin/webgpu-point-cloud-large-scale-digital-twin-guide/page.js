import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Point Cloud Rendering for Large-Scale Digital Twins | serdarozden.com',
  description: 'Render millions of LiDAR points and massive BIM CAD models smoothly in browser viewports using WebGPU compute shaders and LOD streaming.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link 
            href="/digital-twin" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Digital Twin Hub
          </Link>
          <span className="text-zinc-700">•</span>
          <Link 
            href="/" 
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              WebGPU & 3D Engineering
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Massive Scale Digital Twins: WebGPU Compute Shaders & LiDAR Point Cloud Rendering
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Overcoming WebGL memory limitations by utilizing WebGPU compute shaders and octree spatial partitioning to render billion-point CAD assemblies directly in the browser.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Industrial facilities, power plants, and infrastructure sites are captured using dense LiDAR scans. Displaying these multi-gigabyte point clouds in web applications requires moving beyond WebGL limits into WebGPU hardware acceleration.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Octree Spatial Partitioning for Out-of-Core Streaming
            </h2>
            <p>
              Dividing massive point clouds into hierarchical Octree nodes allows WebGPU viewports to dynamically load and unload spatial data blocks based on camera frustum intersection and distance-based Level of Detail (LOD).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Compute Shader Hardware Acceleration in WGSL
            </h2>
            <p>
              Using WebGPU Shading Language (WGSL), compute pipelines perform frustum culling, point splatting sizing, and intensity colorization directly on the GPU, completely bypassing JavaScript CPU thread bottlenecks.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Seamless Hybrid Rendering: Mesh BIM + Point Cloud Integration
            </h2>
            <p>
              Aligning georeferenced glTF BIM meshes directly with LiDAR point clouds provides operators with exact structural overlays, enabling real-time tolerance measurements between design intent and physical structures.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}