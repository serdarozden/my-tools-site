import Link from 'next/link';

export const metadata = {
  title: 'AutoCAD to Blender Precision Modeling Workflow | serdarozden.com',
  description: 'Learn how to import AutoCAD DXF/DWG vector geometry into Blender with millimeter precision, accurate scale preservation, and clean vertex cleanup.',
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
              CAD & 3D Interoperability
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            AutoCAD to Blender Precision Modeling: Scale & Mesh Clean-up Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Bridge 2D drafting precision with 3D architectural visualization. Import vector geometry cleanly without scale shifts or rogue doubled vertices.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Architectural visualizers frequently need to translate 2D vector CAD drawings into 3D polygon meshes. Transferring lines from AutoCAD to Blender requires disciplined unit management to prevent distortion during extrusions.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Preparing DXF Exports and Purging Unused AutoCAD Layers
            </h2>
            <p>
              Before exporting, execute the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">PURGE</code> and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">OVERKILL</code> commands in AutoCAD to eliminate overlapping line work. Save your drawing as an AutoCAD 2007/2010 ASCII DXF file to ensure maximum compatibility with open-source importers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Unit Matching and Scale Alignment in Blender
            </h2>
            <p>
              Match Blender’s scene units precisely to your CAD system (Metric/Millimeters or Meters). When using the DXF importer, toggle <strong className="text-white">Merge Vertices</strong> and set the scale factor explicitly. This keeps structural wall footprints aligned perfectly to real-world measurements.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Converting Curves to Meshes and Resolving Non-Manifold Geometry
            </h2>
            <p>
              Once imported as Bezier curve vectors, convert geometry using <strong className="text-white">Right Click &gt; Convert to Mesh</strong>. Run a <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Merge by Distance</code> operation to stitch loose nodes, followed by recalculating normals (<strong className="text-white">Shift+N</strong>) before applying solidifying modifiers.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}