import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Compute Shaders vs. WebGL Fragment Shaders Performance | serdarozden.com',
  description: 'Deep dive performance comparison between WebGPU WGSL compute shaders and GPGPU WebGL fragment shaders for parallel computing on the web.',
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
              WebGPU & Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            WebGPU Compute Shaders vs. WebGL Fragment Shaders: Architecture & Performance
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Evaluating GPGPU compute limitations in WebGL against raw WGSL parallel execution models for heavy web-based computations.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Before WebGPU, general-purpose GPU computing (GPGPU) on the web required tricking WebGL by encoding numerical data into floating-point textures and evaluating algorithms inside fragment shaders. WebGPU compute shaders bypass these rendering overheads completely.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Hacky Era of GPGPU in WebGL
            </h2>
            <p>
              In WebGL, performing parallel array operations forced developers to attach 2D texture framebuffers and execute full-screen quad render passes. This approach incurred fixed rasterization pipeline overhead and rigid texture output dimensions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Explicit Memory Access with Storage Buffers
            </h2>
            <p>
              WebGPU compute shaders operate directly on arbitrary Storage Buffers without dummy render targets. Threads in WGSL compute workgroups can read and write to shared memory blocks concurrently with atomic memory operations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Benchmarking Compute Workloads
            </h2>
            <p>
              For workloads like particle physics, matrix multiplications, and spatial sorting algorithms, WebGPU compute dispatches reduce driver overhead significantly compared to WebGL texture-based framebuffers, delivering up to 4x higher throughput.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}