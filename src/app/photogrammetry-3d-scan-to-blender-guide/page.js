import Link from 'next/link';

export const metadata = {
  title: 'Photogrammetry & 3D Scan to Blender Guide: Clean Meshes & Retopology | serdarozden.com',
  description: 'How to clean up raw 3D scans and photogrammetry models in Blender. Fix heavy polycounts, bake high-poly details to low-poly meshes, and optimize CAD workflows.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Geri Dönüş Linki */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Kategori ve Okuma Süresi */}
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              3D Scanning & Retopology
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          {/* SEO Dostu H1 Başlık */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Scan & Photogrammetry to Blender: Mesh Optimization & Retopology
          </h1>

          {/* Özet */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Master the pipeline for taking raw, dense point clouds and photogrammetry 3D scans from Polycam or RealityCapture into clean, production-ready Blender meshes.
          </p>

          {/* İçerik */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Photogrammetry and mobile LiDAR scanning have made capturing real-world assets effortless. However, raw 3D scans typically arrive with millions of messy, non-manifold triangles, uneven texture atlases, and severe performance overhead.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Decimation vs. Manual Retopology
            </h2>
            <p>
              For static background props, applying Blender's <strong className="text-white">Decimate Modifier</strong> in Planar or Un-subdivide mode can quickly reduce polycount by 80% without losing visual form. However, for hero assets or dynamic game objects, manual retopology using snap tools or quad-remeshing plugins provides clean edge loops and optimized topology.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Baking Normal Maps from High-Poly Scans
            </h2>
            <p>
              Preserve fine surface micro-details without keeping millions of polygons. Position your low-poly retopologized mesh over the original high-poly 3D scan, unwrap UVs, and use Cycles' <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Bake Selected to Active</code> feature to transfer high-resolution detail into a lightweight Normal Map.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Fixing Photogrammetry Lighting Artifacts
            </h2>
            <p>
              Scanned textures often contain baked-in real-world shadows and highlights. Use delighting tools or Blender's Shader Editor to isolate diffuse color maps, balancing light intensity so your asset reacts naturally to dynamic lighting in Unreal Engine or Unity.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}