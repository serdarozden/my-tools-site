import Link from 'next/link';

export const metadata = {
  title: 'Integrating 3D Gaussian Splatting Viewers in WebGL Applications | serdarozden.com',
  description: 'Stream photorealistic real-world scans into modern web browsers using GPU-accelerated 3D Gaussian Splatting rendering pipelines.',
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
              Web Graphics & Photogrammetry
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Integrating 3D Gaussian Splatting Viewers in WebGL Applications
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Stream photorealistic real-world scans into modern web browsers using GPU-accelerated 3D Gaussian Splatting rendering pipelines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              3D Gaussian Splatting is revolutionizing web-based 3D visualization by allowing real-time rasterization of dense, high-fidelity neural scans directly within WebGL viewports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding Gaussian Splatting Data Streams
            </h2>
            <p>
              Unlike traditional polygonal meshes, Gaussian Splatting models represent scenes using millions of 3D Gaussians characterized by position, covariance, opacity, and spherical harmonics for direction-dependent appearance.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Integrating Splat Viewers into WebGL Canvases
            </h2>
            <p>
              By decoupling scene sorting routines into Web Workers and feeding pre-sorted buffers directly into WebGL vertex shaders, web applications achieve seamless 60 FPS interaction with complex scanned environments.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Practical Optimizations for Web Deployment
            </h2>
            <p>
              Compressing PLY datasets into custom binary formats reduces initial payload sizes significantly, allowing fast network streaming and instant interactive display across desktop and mobile browsers.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}