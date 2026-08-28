import Link from 'next/link';

export const metadata = {
  title: 'AutoCAD to Blender Import Guide: DWG, DXF & Scale Calibration | serdarozden.com',
  description: 'Learn how to cleanly import AutoCAD DWG/DXF files into Blender. Fix scale factors, curve resolution, and clean up CAD geometry for 3D rendering.',
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
              CAD & 3D Workflows
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          {/* SEO Dostu Ana Başlık (H1) */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            AutoCAD to Blender Import Guide: DWG, DXF & Clean 3D Workflows
          </h1>

          {/* Özet / Açıklama */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Step-by-step pipeline for importing 2D CAD floor plans and 3D DWG geometry from AutoCAD into Blender without scale misalignment or messy mesh topology.
          </p>

          {/* İçerik Gövdesi */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Bridging the gap between precise CAD drafting and artistic 3D visualization is a standard requirement for modern architects, structural engineers, and visualizers. However, bringing native AutoCAD files directly into Blender often results in missing geometry, incorrect unit scales, or overwhelming vertex counts.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Preparing AutoCAD Files Before Export
            </h2>
            <p>
              Before transferring files out of AutoCAD, clean up your drawing. Run the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">PURGE</code> command to eliminate unused layers, blocks, and linestyles. Isolate essential architectural boundaries or structural axes, and move your model close to the AutoCAD Origin point <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">(0,0,0)</code> to avoid floating-point precision glitches in 3D software.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. DXF vs FBX: Choosing the Right Format
            </h2>
            <p>
              While Blender has built-in support for <strong className="text-white">DXF files</strong> via community add-ons, complex 3D CAD solids are best exported as <strong className="text-white">FBX</strong> or <strong className="text-white">OBJ</strong> formats. For 2D floorplan tracing, DXF vectors preserve exact line dimensions and polyline curves, allowing you to use them directly as snapping guides in Blender.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Fixing Scale Mismatch in Blender
            </h2>
            <p>
              AutoCAD often operates in millimeters or inches, whereas Blender’s world settings default to metric meters. Upon importing your DXF/FBX, navigate to <em className="text-white">Scene Properties &rarr; Units</em> and match your length scale. Always select all imported CAD objects and apply scale (<kbd className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded text-xs font-mono text-white">Ctrl + A</kbd> &rarr; <em className="text-white">Scale</em>) before extruding walls or applying modifiers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              Optimizing CAD Meshes for Rendering
            </h2>
            <p>
              Imported 3D CAD geometry tends to generate dense, triangulated surfaces. Use Blender's <strong className="text-white">Limited Dissolve</strong> tool or the <strong className="text-white">Remesh Modifier</strong> to flatten planar surfaces, reduce polycounts, and prepare clean geometry ready for high-resolution Cycles or Eevee rendering.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}