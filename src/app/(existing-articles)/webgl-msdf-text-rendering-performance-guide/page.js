import Link from 'next/link';

export const metadata = {
  title: 'High-Performance WebGL Text Rendering via MSDF | serdarozden.com',
  description: 'Learn how to implement crisp, resolution-independent 3D text and dimension labels in WebGL and Three.js using Multi-channel Signed Distance Fields (MSDF).',
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
              WebGL Typography & UI
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Resolution-Independent Vector Text Rendering in WebGL via MSDF
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Rendering thousands of crisp dimension labels, tags, and annotations inside 3D CAD viewports without DOM overlays or blurry texture maps.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Overlaying HTML elements for 3D measurements creates severe DOM thrashing during camera rotation. Multi-channel Signed Distance Fields (MSDF) allow GPU fragment shaders to reconstruct vector font contours cleanly at any zoom scale or screen resolution.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Single-Channel SDF vs. Multi-Channel MSDF
            </h2>
            <p>
              Standard single-channel Signed Distance Fields blur sharp glyph corners when zoomed close. MSDF stores edge distance fields in RGB channels independently, preserving sharp font corners and precise geometric curves across scale changes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Batching Billboards and Dynamic Text Instancing
            </h2>
            <p>
              Combining all text glyphs into single texture atlases and drawing labels through instanced vertex attributes eliminates draw-call bottlenecks when rendering thousands of structural measurements simultaneously.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Screen-Space Scale Invariance in Shaders
            </h2>
            <p>
              Evaluating perspective projection matrices inside vertex shaders allows text annotations to retain fixed pixel dimensions regardless of camera zoom distance, ensuring technical readability.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}