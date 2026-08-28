import Link from 'next/link';

export const metadata = {
  title: '3D Gaussian Splatting vs Polygon Mesh for WebGL | serdarozden.com',
  description: 'Technical comparison between 3D Gaussian Splatting (3DGS) and traditional polygon meshes. Learn scene representation, rasterization, and web rendering performance.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Real-Time Graphics & AI
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Gaussian Splatting vs Polygon Mesh: The Future of Web 3D Rendering
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            An engineering analysis comparing radiance field representations with discrete polygon meshes for real-time WebGL and WebGPU canvas pipelines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional web-based 3D applications rely on explicit polygon geometry and UV texture maps. 3D Gaussian Splatting (3DGS) introduces volumetric radiance fields rendered as millions of parameterized 3D Gaussians in real time.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Geometry Representation: Triangles vs Point Gaussians
            </h2>
            <p>
              Polygon meshes utilize vertex buffers, indices, and normal vectors for rasterization. In contrast, 3DGS stores opacity, covariance matrices, and spherical harmonics coefficients per point, enabling photorealistic reflections without complex shader calculations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. WebGL Sorting Overhead and WebGPU Compute Advantage
            </h2>
            <p>
              Rendering Gaussians correctly requires alpha blending via depth sorting on every frame. Leveraging WebGPU compute shaders allows parallel GPU-based radix sorting, bypassing CPU bottlenecks found in legacy WebGL renderers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Asset Compression & Delivery Strategies
            </h2>
            <p>
              While raw <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.ply</code> Gaussian files can exceed hundreds of megabytes, modern web pipelines apply quantization and chunked progressive loading to stream photorealistic environments under tight bandwidth budgets.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}