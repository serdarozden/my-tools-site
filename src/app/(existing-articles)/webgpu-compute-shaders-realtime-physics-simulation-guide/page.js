import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Compute Shaders for Real-Time Web Physics Simulations | serdarozden.com',
  description: 'Explaining how to harness WebGPU WGSL compute shaders for massively parallelized particle systems, cloth dynamics, and structural collision detection.',
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
              WebGPU & Compute Graphics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">15 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Unlocking GPU Parallelism: WebGPU Compute Shaders for Web Physics Engines
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Building massively parallel physics solvers in WGSL to simulate millions of active particles and rigid body collisions directly in browser viewports.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional JavaScript physics engines run single-threaded on the CPU, bottlenecking at a few thousand objects. WebGPU compute shaders allow executing general-purpose mathematical algorithms directly across thousands of GPU cores simultaneously.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Authoring WGSL Compute Pipelines
            </h2>
            <p>
              Constructing WebGPU Shading Language (WGSL) compute pipelines enables executing arbitrary buffer calculations independently of standard render passes or draw pipelines.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Ping-Pong Storage Buffers for Particle Physics
            </h2>
            <p>
              Alternating between dual storage buffers across consecutive compute dispatches prevents race conditions while evaluating position, velocity, and force accumulation arrays in parallel.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Direct Zero-Copy Render Binding
            </h2>
            <p>
              Binding compute storage buffers directly as vertex buffers in subsequent render passes avoids CPU memory readbacks, achieving real-time 60 FPS simulations of complex physical systems.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}