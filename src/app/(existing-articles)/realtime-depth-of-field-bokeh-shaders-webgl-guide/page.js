import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Depth of Field (DOF) & Bokeh Shaders in WebGL | serdarozden.com',
  description: 'Master physically-based Depth of Field (DOF) post-processing passes, Circle of Confusion (CoC) calculations, and hexagonal Bokeh blurs in WebGL and WebGPU.',
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
              Post-Processing & Optics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Implementing Physically-Based Depth of Field and Bokeh Shaders in WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating realistic camera aperture lens blurs, Circle of Confusion (CoC) maps, and polygonal Bokeh shapes in web-based 3D viewports.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating cinematic optics bridges the gap between raw interactive 3D rendering and photorealistic presentation. Implementing Depth of Field (DOF) in WebGL requires evaluating lens focus distances and blurring background/foreground geometry dynamically based on camera optics.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Circle of Confusion (CoC) Evaluation in Fragment Shaders
            </h2>
            <p>
              Calculating pixel-level Circle of Confusion values using thin-lens formulas evaluates focal plane distance against linear depth texture buffers, determining exact blur radii for out-of-focus surface points.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Hexagonal & Octagonal Bokeh Blur Kernels
            </h2>
            <p>
              Replacing simple Gaussian blurs with aperture-shaped sampling kernels (such as hexagonal or octagonal disk distributions) reproduces realistic highlight Bokeh artifacts on bright specular reflections.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Eliminating Foreground Leakage & Depth Bleeding
            </h2>
            <p>
              Sharp in-focus foreground edges often bleed into blurred background regions. Applying separate foreground/background CoC passes prevents visual haloing and depth-bleeding artifacts across geometric boundaries.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}