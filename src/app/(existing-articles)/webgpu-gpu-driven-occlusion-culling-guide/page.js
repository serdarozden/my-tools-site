import Link from 'next/link';

export const metadata = {
  title: 'WebGPU GPU-Driven Occlusion Culling & Hi-Z Buffer Optimization | serdarozden.com',
  description: 'Learn how to implement Hierarchical-Z (Hi-Z) buffer generation and compute shader-based occlusion culling in WebGPU for massive 3D scenes.',
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
              WebGPU Occlusion Culling
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">16 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Nov 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            WebGPU GPU-Driven Occlusion Culling and Hi-Z Pipeline Architecture
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Bypassing CPU bottlenecks by generating Hierarchical-Z mipmaps and executing compute-driven object visibility tests entirely within WebGPU workgroups.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Rendering sprawling architectural models or dense city environments in web browsers requires culling obscured geometry before submitting draw calls. Relying on CPU bounding-box tests introduces severe frame latency, making GPU-driven occlusion culling essential.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Constructing Hierarchical-Z (Hi-Z) Mipmaps
            </h2>
            <p>
              Iteratively downsampling depth buffers into max-reduction mipchain textures allows bounding boxes to be tested against depth values in a single texture lookup regardless of scale.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Compute Shader Object Visibility Dispatch
            </h2>
            <p>
              Running parallel WGSL compute passes evaluates instance bounding spheres against the Hi-Z buffer, filtering out occluded objects directly into indirect draw command buffers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Indirect Multi-Draw Rendering in WebGPU
            </h2>
            <p>
              Feeding filtered storage buffers straight into `drawIndirect` or `drawIndexedIndirect` calls eliminates CPU-GPU synchronization stalls and minimizes draw call overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}