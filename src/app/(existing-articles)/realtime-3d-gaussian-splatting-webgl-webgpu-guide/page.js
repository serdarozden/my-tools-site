import Link from 'next/link';

export const metadata = {
  title: 'Real-Time 3D Gaussian Splatting in WebGL & WebGPU | serdarozden.com',
  description: 'Learn how to render photorealistic 3D Gaussian Splatting point clouds in real-time using WebGL, WebGPU, and custom sorting shaders in web browsers.',
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
              Photorealistic Web3D
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time 3D Gaussian Splatting Pipeline for Modern Web Viewers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Architecting high-fidelity neural radiance field alternatives using GPU radix sorting and WebGPU compute dispatches in web browsers.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              3D Gaussian Splatting provides real-time photorealistic scene reconstruction directly in the browser. Unlike implicit NeRF fields, Splatting treats scenes as collections of 3D Gaussians, enabling fast rasterization on web GPUs.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. GPU Radix Sorting for Alpha Blending
            </h2>
            <p>
              Proper transparency rendering requires sorting millions of 3D Gaussian splats back-to-front every frame based on camera orientation. Executing parallel radix sorting via WebGPU compute shaders maintains fluid 60 FPS performance.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Spherical Harmonics Evaluation in Fragment Shaders
            </h2>
            <p>
              View-dependent directional coloring is achieved by evaluating spherical harmonics coefficients in fragment shaders, producing view-dependent specularity and realistic reflections.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Chunked PLY File Streaming & Compression
            </h2>
            <p>
              Compressing Gaussian covariance matrices and streaming binary PLY payloads via chunked HTTP range requests allows instant progressive loading of dense photorealistic captures.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}