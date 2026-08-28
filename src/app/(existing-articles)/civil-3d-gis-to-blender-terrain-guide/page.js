import Link from 'next/link';

export const metadata = {
  title: 'Civil 3D & GIS to Blender Terrain Guide: DEM & Heightmaps | serdarozden.com',
  description: 'How to import Civil 3D surfaces and GIS topographical data into Blender. Create accurate 3D site terrains using DEM heightmaps and satellite imagery.',
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
              GIS & Civil Visualization
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          {/* SEO Dostu H1 Başlık */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Civil 3D & GIS to Blender: Importing Terrain Surfaces & DEM Data
          </h1>

          {/* Özet */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to convert civil engineering TIN surfaces, DEM heightmaps, and GIS contours into photorealistic 3D landscape renderings inside Blender.
          </p>

          {/* İçerik */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Site context and accurate topography are essential for realistic civil engineering visualization and architectural site analysis. Bringing raw Civil 3D surfaces or GIS shapefiles into Blender allows you to render cinematic landscape environments with exact elevation contours.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Exporting Surfaces from Civil 3D
            </h2>
            <p>
              Rather than exporting dense TIN mesh triangles directly, extract contour polylines or export terrain surfaces as 32-bit grayscale <strong className="text-white">DEM (Digital Elevation Model)</strong> heightmaps from Civil 3D. Heightmaps preserve continuous surface curves without creating jagged mesh artifacts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Using BlenderGIS Add-on for Automatic Elevation
            </h2>
            <p>
              The open-source <strong className="text-white">BlenderGIS</strong> add-on simplifies site modeling. You can fetch satellite imagery basemaps directly inside Blender's viewport and displace a plane geometry using elevation data automatically pulled from SRTM or NASA topography servers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Matching True Scale & Coordinate Systems
            </h2>
            <p>
              Geographic spatial data uses UTM or State Plane coordinates, placing assets far from Blender's origin point. Always set a local origin anchor point when exporting CAD terrain data to prevent precision floating-point rendering bugs inside Cycles or Eevee.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}