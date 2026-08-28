import Link from 'next/link';

export const metadata = {
  title: '3D Asset Topology Guide: Quads vs Triangles vs N-Gons | serdarozden.com',
  description: 'Master mesh topology for real-time engines and subdivision modeling. Learn when to use quads, triangles, and how to eliminate N-gons for deformation.',
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
              3D Modeling Standards
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Topology Rules: Quad-Based Modeling vs Real-Time Triangulation
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand the mathematical behavior of edge loops, polygon vertex counts, shading artifacts, and rigging deformation in real-time graphics.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Clean mesh topology ensures smooth subdivision surfaces, predictable character skinning deformations, and error-free shading normal calculations across modern renderers.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Why Quads Rule Animation Pipelines
            </h2>
            <p>
              Four-sided polygons (<strong className="text-white">Quads</strong>) allow edge loops to flow naturally along object contours. This predictable flow is essential for skeletal deforming areas like elbow joints or facial muscle groups.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. GPU Triangulation and Engine Rendering
            </h2>
            <p>
              GPUs inherently render geometry in triangles (<strong className="text-white">Tris</strong>). All quad-based models are converted to triangles during engine import. Controlling triangulation manually on complex hard-surface planes prevents unintended shading artifacts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Eliminating N-Gons to Fix Shading Errors
            </h2>
            <p>
              Polygons with 5 or more vertices (<strong className="text-white">N-Gons</strong>) disrupt normal calculation algorithms, leading to dark shading pinched spots on curved surfaces. Always resolve planar N-gons into clean quad loops or triangulated fan meshes.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}