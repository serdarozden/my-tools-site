import Link from 'next/link';

export const metadata = {
  title: 'Fixing Floating Point Jitter in Web CAD & 3D WebGL | serdarozden.com',
  description: 'Solve floating-point precision loss and vertex jitter in large-scale Web CAD applications. Master RTC (Relative to Center) rendering techniques in WebGL and WebGPU.',
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
              Web Graphics Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Fixing Floating-Point Precision Loss in Large-Scale Web CAD Viewers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Overcome 32-bit single-precision float limitations in WebGL shaders when rendering massive GIS coordinates or millimeter-precise CAD assemblies.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              When rendering high-precision CAD objects positioned far from the coordinate origin, GPUs experience single-precision floating-point degradation, resulting in visual mesh flickering and vertex jittering.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The 32-Bit Float Constraint in Shader Pipelines
            </h2>
            <p>
              Standard GPUs process 32-bit floats (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">highp float</code>). At world coordinates exceeding millions of units, precision degrades to several centimeters, breaking sub-millimeter CAD snapping operations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Relative to Center (RTC) Rendering Strategy
            </h2>
            <p>
              The RTC method subtracts a local camera origin offset on the CPU before passing double-precision coordinates down to vertex shaders, ensuring geometry is evaluated relative to the current camera position.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Emulating 64-Bit Precision in WebGL/WebGPU
            </h2>
            <p>
              Splitting 64-bit coordinates into two 32-bit floats (high and low components) inside WGSL or GLSL shaders restores millimeter accuracy across continental GIS coordinates without performance degradation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}