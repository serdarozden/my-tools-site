import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Compute Shaders for Particle Simulations in Three.js | serdarozden.com',
  description: 'Harness WebGPU compute pipelines in Three.js to simulate millions of interactive dynamic particles on the GPU at steady 60 FPS in modern web browsers.',
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
              WebGPU & Advanced Shaders
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Building 1 Million+ Particle Simulations with WebGPU Compute Shaders
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Transition from WebGL transform feedback to native WebGPU compute pipelines using WGSL inside Three.js for massive parallel particle physics.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              WebGL-based particle systems are bound by CPU-to-GPU memory transfer limits or hacky ping-pong texture techniques. WebGPU introduces dedicated Compute Shaders, allowing arbitrary data processing directly on GPU execution units.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Storage Buffers and WGSL Compute Kernel Design
            </h2>
            <p>
              Define structured GPU Storage Buffers containing position, velocity, and lifespan attributes. Write a WebGPU Shading Language (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">WGSL</code>) compute kernel to update particle positions using parallel thread groups.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Integrating WebGPURenderer in Three.js
            </h2>
            <p>
              Replace the traditional <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">WebGLRenderer</code> with Three.js's native <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">WebGPURenderer</code>. Pass compute node instances into render passes without unbinding GPU buffers between updates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Vector Field and Attractor Physics Engine
            </h2>
            <p>
              Inject 3D curl noise and point attractor math directly inside compute passes to simulate dynamic fluid flow fields across 1,000,000 active particles while keeping CPU usage near 0%.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}