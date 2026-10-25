import Link from 'next/link';

export const metadata = {
  title: 'High-Performance Bloom & Lens Flare Optimization in WebGL | serdarozden.com',
  description: 'Master dual-filter bloom downsampling, threshold extraction, and anamorphic lens flare post-processing effects in WebGL and WebGPU viewports.',
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
              Post-Processing & Shaders
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing Bloom and Anamorphic Lens Flare Passes in WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Implementing energy-conserving dual-kawase downsampling and bright-pass threshold filters for cinematic lighting effects in 3D web applications.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Cinematic bloom effects make high-intensity light sources pop against dark backgrounds. Standard Gaussian blurs require multiple texture lookups, whereas dual-kawase filtering achieves smooth wide-radius bloom efficiently.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Bright-Pass Luminance Threshold Extraction
            </h2>
            <p>
              Fragment shaders extract pixels exceeding specific HDR luminance thresholds, isolating bright specular reflections and emissive materials before applying downsampling blur chains.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Dual-Kawase Downsampling & Upsampling Pyramids
            </h2>
            <p>
              Iteratively downsampling framebuffers into half-resolution mipmaps and upsampling them back with tent-filter kernels generates wide, artifact-free bloom glows while minimizing GPU texture bandwidth.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Anamorphic Streak Lens Flares
            </h2>
            <p>
              Stretching bloom sampling kernels horizontally across specific color channels reproduces sci-fi anamorphic lens flare streaks common in automotive and architectural rendering packages.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}