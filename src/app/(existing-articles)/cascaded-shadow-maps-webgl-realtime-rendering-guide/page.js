import Link from 'next/link';

export const metadata = {
  title: 'Cascaded Shadow Maps (CSM) in WebGL & Three.js Guide | serdarozden.com',
  description: 'Master Cascaded Shadow Mapping (CSM) techniques in WebGL and Three.js to eliminate directional shadow aliasing across expansive 3D scenes.',
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
              WebGL Lighting & Shadows
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Cascaded Shadow Mapping Architecture for Large-Scale WebGL Viewports
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Eliminating pixelated shadow edges and perspective aliasing in large architectural scenes through frustum splitting and PCF filtering.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard shadow maps suffer from severe perspective aliasing when applied across extensive camera distances. Cascaded Shadow Maps (CSM) solve this by partitioning the view frustum into logarithmic slices, rendering targeted shadow textures for each cascade.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Logarithmic Frustum Splitting
            </h2>
            <p>
              Distributing shadow map cascades using a hybrid combination of linear and logarithmic distance metrics ensures high shadow depth resolution near the camera while covering distant objects efficiently.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Percentage-Closer Filtering (PCF) Soft Shadows
            </h2>
            <p>
              Applying multi-sample PCF kernel filtering in fragment shaders softens shadow map boundaries, hiding Texel discretization artifacts without heavy blur passes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Cascade Blend Transitions
            </h2>
            <p>
              Implementing linear blending between adjacent shadow cascade boundaries prevents visible seam artifacts as the main camera orbits through large CAD models.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}