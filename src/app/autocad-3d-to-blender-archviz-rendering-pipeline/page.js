import Link from 'next/link';

export const metadata = {
  title: 'AutoCAD 3D to Blender ArchViz Rendering Pipeline | serdarozden.com',
  description: 'Bridge AutoCAD 2D/3D technical drafts with Blender Cycles rendering. Learn layer management, material assignments, and realistic lighting setups for architectural visualization.',
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
              CAD & ArchViz Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            AutoCAD 3D to Blender: Professional Architectural Visualization Pipeline
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Combine the technical precision of AutoCAD drafting with Blender’s photorealistic Cycles rendering engine for high-end architectural presentations.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Architectural firms rely heavily on AutoCAD for precise floor plans and structural elevations. Transferring these technical drawings into Blender unlocks photorealistic Cycles rendering, HDRI sky lighting, and advanced PBR material texturing.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Structuring AutoCAD Layers for Seamless Import
            </h2>
            <p>
              Before exporting, organize geometry strictly by material type rather than building components (e.g., group all glass panels on a single layer, concrete walls on another). This allows Blender’s importer to join objects by layer automatically, saving hours of manual material assignment.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Scale Standardization and Unit Conversions
            </h2>
            <p>
              Mismatching CAD units leads to lighting calculation errors in Blender. Verify that your AutoCAD drawing units (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">UNITS</code>) match Blender’s Scene Unit Scale exactly (meters or millimeters) prior to executing DXF or FBX imports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Architectural Lighting and Sun Positioner Setup
            </h2>
            <p>
              Incorporate real-world solar positioning into Blender ArchViz shots using the <strong className="text-white">Sun Position Add-on</strong>. Match latitude, longitude, and time-of-day parameters to illuminate interior spaces with realistic physical sunlight and shadow angles.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}