import Link from 'next/link';

export const metadata = {
  title: 'Unreal Engine 5 Nanite Guide: Virtualized Geometry & Mesh Setup | serdarozden.com',
  description: 'Master Unreal Engine 5 Nanite virtualized geometry. Learn high-poly import workflows, fallback mesh configuration, material limits, and performance tuning.',
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
              Unreal Engine 5 Tech
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Unreal Engine 5 Nanite: Virtualized Geometry & High-Poly Optimization
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand how Unreal Engine 5's Nanite system processes film-quality high-polygon meshes in real-time without traditional manual LOD chains.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Nanite virtualized geometry fundamentally changes real-time 3D workflows by streaming geometric clusters directly into memory, allowing developers to import raw CAD or ZBrush sculpts without baking normal maps for micro-details.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. How Nanite Cluster Streaming Works
            </h2>
            <p>
              Nanite breaks dense polygon meshes into hierarchical clusters of triangles. At runtime, UE5 analyzes pixel density on screen and renders only the exact triangle count needed per pixel, eliminating traditional polygon bottlenecks and geometry POP artifacts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Enabling Nanite for Imported FBX and OBJ Assets
            </h2>
            <p>
              When importing meshes from Blender, check <strong className="text-white">Enable Nanite</strong> in the static mesh settings. For rigid hard-surface props and environmental scans, ensure UVs are free from overlapping island boundaries to avoid lightmap resolution errors.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Material Restrictions and Fallback Mesh Setup
            </h2>
            <p>
              Nanite supports standard Opaque materials with PBR channels. Translucent materials, World Position Offset deformations, and skeletal character meshes require specialized setting flags or fallback meshes for non-Nanite rendering passes.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}