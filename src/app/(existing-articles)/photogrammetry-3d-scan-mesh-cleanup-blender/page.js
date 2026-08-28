import Link from 'next/link';

export const metadata = {
  title: 'Photogrammetry 3D Scan Mesh Cleanup in Blender | serdarozden.com',
  description: 'Step-by-step guide to cleaning raw photogrammetry 3D scans in Blender. Fix non-manifold geometry, re-project vertex color textures, and optimize high-poly meshes.',
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
              3D Scan Processing
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Photogrammetry 3D Scan Mesh Cleanup & Texture Reprojection in Blender
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to turn messy photogrammetry point clouds and high-polygon raw scans into production-ready 3D assets with clean UV unwrapping.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Photogrammetry produces highly accurate surface details, but raw outputs frequently contain internal geometry artifacts, floating polygon islands, and non-manifold edges that break real-time rendering pipelines.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Removing Non-Manifold Geometry and Isolated Islands
            </h2>
            <p>
              In Blender Edit Mode, select <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Select &gt; Select All by Trait &gt; Non Manifold</code> to isolate holes and degenerate faces. Delete loose geometry and use the <strong className="text-white">Grid Fill</strong> operator to patch open surface boundaries cleanly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Quad Remeshing and UV Packing
            </h2>
            <p>
              Duplicate the cleaned scan mesh to serve as the high-poly reference. Apply Blender’s <strong className="text-white">Voxel Remesh</strong> or Quad Remesher extension to generate a uniform, low-poly quad layout. Perform a clean UV unwrap using Smart UV Project with an island margin of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">0.002</code> to prevent texture bleeding.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Baking High-Poly Texture Maps to Low-Poly UVs
            </h2>
            <p>
              Set the rendering engine to Cycles. In the Bake settings, check <strong className="text-white">Selected to Active</strong>, select the high-poly raw scan first, shift-select the low-poly remeshed asset second, and set an Ray Distance offset of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">0.01</code> to transfer diffuse texture and normal details cleanly.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}