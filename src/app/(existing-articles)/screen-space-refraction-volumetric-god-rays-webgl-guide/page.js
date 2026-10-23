import Link from 'next/link';

export const metadata = {
  title: 'Screen-Space Refraction & Volumetric Light Shafts in WebGL | serdarozden.com',
  description: 'Authoring physically accurate Screen-Space Refraction (SSR) and Volumetric Light Shafts (God Rays) shaders for glass, liquid, and atmospheric WebGL scenes.',
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
              Atmospherics & Optics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Implementing Screen-Space Refraction and Volumetric Light Shafts in WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating chromatic light distortion across glass media and crepuscular light rays in dusty atmospheric interior CAD viewports.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Transparent materials like glass or water require bending light rays according to Snell's law. Combining Screen-Space Refraction (SSR) with post-processing Volumetric Light Shafts enhances architectural realism without heavy offline path tracing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Snell's Law & Chromatic Dispersion in Screen Space
            </h2>
            <p>
              Fragment shaders offset background scene texture UV coordinates based on surface normal vectors and Index of Refraction (IOR) ratios, separating RGB channels slightly to reproduce physical glass dispersion.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Radial Blur Crepuscular Light Shafts
            </h2>
            <p>
              Sampling occlusion depth masks along radial screen vectors origin-centered at light positions generates atmospheric light shafts (God Rays) piercing through architectural windows and structural openings.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Mie Scattering & Atmospheric Phase Functions
            </h2>
            <p>
              Evaluating the Henyey-Greenstein phase function inside volumetric ray-marching loops simulates directional forward light scattering through atmospheric haze and dust particles.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}