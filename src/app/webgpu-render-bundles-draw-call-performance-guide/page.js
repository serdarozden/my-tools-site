import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Render Bundles: Eliminating Draw Call Overhead | serdarozden.com',
  description: 'Master GPURenderBundle in WebGPU to eliminate JavaScript draw call bottlenecks. Learn how to pre-record render commands for dense 3D web scenes.',
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
              WebGPU Engine Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            WebGPU Render Bundles: Eliminating Draw Call Overhead in Complex Web Scenes
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Discover how pre-recording GPU drawing commands with GPURenderBundle bypasses main-thread JavaScript execution bottlenecks in WebGPU.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In WebGL, issuing thousands of draw calls per frame strains CPU threads due to JavaScript driver overhead. WebGPU introduces **Render Bundles** to pre-bake GPU state commands for static or instanced geometry.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The CPU Draw-Call Bottleneck in Traditional WebGL
            </h2>
            <p>
              Each <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">gl.drawElements()</code> call in WebGL triggers CPU validation and state binding. When rendering dense CAD models or urban environments, frame rates collapse due to CPU-bound JS loops.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Pre-Recording Commands with GPURenderBundleEncoder
            </h2>
            <p>
              With WebGPU, reusable render passes are recorded once using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">GPURenderBundleEncoder</code>. The resulting bundle can be re-executed by the GPU across multiple render passes with zero CPU overhead.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Practical Gains for Web CAD & Three.js WebGPU Renderer
            </h2>
            <p>
              Combining instanced rendering with render bundles allows complex industrial models with over 100,000 discrete parts to render smoothly at 60 FPS on integrated mobile GPUs.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}