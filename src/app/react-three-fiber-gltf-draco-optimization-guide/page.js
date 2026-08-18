import Link from 'next/link';

export const metadata = {
  title: 'Optimizing 3D Models in React Three Fiber with Draco & Meshopt | serdarozden.com',
  description: 'Learn how to compress GLTF/GLB assets using Draco and Meshopt, implement progressive loading, and boost FPS in React Three Fiber (R3F) applications.',
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
              React & Web3D Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Draco Compression and Meshopt Pipeline in React Three Fiber
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Reduce 3D mesh file sizes by up to 90% and prevent main-thread lag during model instantiation in React Three Fiber web experiences.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Loading heavy CAD or photogrammetry exports directly into a web browser causes high network bandwidth usage and noticeable frame drops during geometry parsing. Integrating compressed geometric pipelines directly into React Three Fiber solves these runtime bottlenecks.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Draco Mesh Compression vs. Meshopt Simplification
            </h2>
            <p>
              While Google Draco offers extreme compression ratios for static vertex attributes, Meshoptimizer (Meshopt) delivers faster WebAssembly decompression speed and preserves key attributes required for GPU vertex animation pipelines.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Pre-processing GLTF Pipelines with glTF-Transform
            </h2>
            <p>
              Before client delivery, run CLI batch operations using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">@gltf-transform/cli</code> to deduplicate materials, resample animations, and apply Draco quantization parameters tailored for web viewports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Suspense and UseGLTF Hook Preloading
            </h2>
            <p>
              Utilize <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">useGLTF.preload()</code> in Next.js layout trees alongside React Suspense boundaries to decode WebAssembly workers off the main thread before component mounting.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}