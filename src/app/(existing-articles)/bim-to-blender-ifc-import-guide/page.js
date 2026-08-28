import Link from 'next/link';

export const metadata = {
  title: 'BIM to Blender Import Guide: IFC, STEP & Archipack Workflows | serdarozden.com',
  description: 'How to import BIM models (IFC & STEP) into Blender for architectural visualization. Fix BIM metadata bloat, clean up geometry, and optimize workflows.',
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
              BIM & 3D Visualization
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          {/* SEO Dostu Ana Başlık (H1) */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            BIM to Blender Import Guide: IFC Files, STEP Format & Archviz Setup
          </h1>

          {/* Özet / Açıklama */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to bridge Building Information Modeling (BIM) data with Blender using open standard formats like IFC and STEP for high-end architectural rendering.
          </p>

          {/* İçerik Gövdesi */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              As Building Information Modeling (BIM) becomes the absolute standard in civil and structural engineering, architectural visualizers are increasingly tasked with importing raw BIM data directly into mesh-based 3D suites like Blender. However, standard BIM containers carry heavy metadata and parametric constraints that can stall traditional rendering pipelines.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Working with OpenBIM and IFC Standard Formats
            </h2>
            <p>
              Industry Foundation Classes (IFC) is the universal open format for BIM data. To open IFC files directly inside Blender without manual conversion, utilize the native <strong className="text-white">Bonsai (formerly BlenderBIM)</strong> add-on. This preserves spatial hierarchies (site, building, story, element) while allowing you to isolate structural components like columns, slabs, and curtain walls with precision.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Handling Mechanical CAD Data via STEP Files
            </h2>
            <p>
              When working with detailed structural connections, rebar layouts, or mechanical equipment, models often arrive as <strong className="text-white">STEP (.stp)</strong> files. Since Blender natively operates on polygon meshes rather than NURBS surfaces, use tessellation importers to convert STEP curves into clean, low-density quad geometry to keep viewport performance fast.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Stripping Metadata Bloat for Faster Rendering
            </h2>
            <p>
              BIM files are packed with non-graphical information—such as material manufacturer codes, cost schedules, and structural load factors—that increase memory usage during rendering. When prepping your file for Cycles or Eevee, purge unneeded custom properties and join static geometry by material assignment to drastically reduce draw calls.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              Preparing Materials for Photorealistic Archviz
            </h2>
            <p>
              BIM solid colors are meant for drafting clarity, not photorealism. Once geometry is imported, replace basic parametric CAD materials with PBR (Physically Based Rendering) shaders. Ensure proper UV unwrapping using Blender's <strong className="text-white">Cube Projection</strong> for quick architectural surfaces like concrete, glass, and steel structural framing.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}