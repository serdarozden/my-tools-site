import Link from 'next/link';

export const metadata = {
  title: '3D Scan Retopology & Photogrammetry Optimization Guide | serdarozden.com',
  description: 'Master retopology workflows for raw photogrammetry and 3D scan meshes in Blender. Transform high-poly point clouds into clean, game-ready quad topology.',
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
              Asset Optimization &amp; Scans
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Scan Retopology: Converting Photogrammetry Scans to Game-Ready Geometry
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn step-by-step techniques to decimate, retopologize, and bake high-poly photogrammetry scans into optimized low-poly meshes with clean quad topology.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Raw 3D photogrammetry outputs consist of dense, unstructured triangle clouds containing millions of polygons. Transforming these meshes for real-time game engines or interactive applications requires structured retopology.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Automated Decimation vs. Manual Quad Retopology
            </h2>
            <p>
              While automated decimation filters reduce triangle counts rapidly, they create irregular topology prone to shading artifacts during deformation. Quad-based retopology using snapping constraints and shrinkwrap modifiers preserves structural edge loops along deformation zones.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Normal and Displacement Map Baking Workflow
            </h2>
            <p>
              Transfer high-frequency surface details from the raw million-polygon scan to the retopologized low-poly mesh. Using xNormal or Blender&apos;s native Cycles bake engine, project surface normals, ambient occlusion, and cavity maps onto unified UV space.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Seam Placement and Delighting Photogrammetry Textures
            </h2>
            <p>
              Photogrammetry textures often contain baked directional lighting shadows. Remove environmental shadow gradients using delighting algorithms or albedo extraction filters in Substance 3D Painter to ensure dynamic lighting reacts correctly in-engine.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}