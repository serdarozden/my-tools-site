import Link from 'next/link';

export const metadata = {
  title: 'AutoCAD 3D to Blender ArchViz Guide: DWG Export & Materials | serdarozden.com',
  description: 'How to import AutoCAD 3D DWG/DXF models into Blender for architectural visualization. Clean up geometry, assign PBR materials, and render with Cycles.',
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
            AutoCAD 3D to Blender ArchViz: DWG Export & Photorealistic Rendering
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to bridge AutoCAD 3D architectural models into Blender Cycles. Clean up CAD solids, fix face normals, and set up realistic lighting environments.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              AutoCAD remains the standard for precise 2D drafting and structural 3D solid modeling. However, rendering architectural scenes directly inside CAD suites yields flat, artificial results. Exporting geometry to Blender allows architectural visualizers to leverage PBR materials, physical sun studies, and Cycles path-tracing.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Preparing AutoCAD 3D Solids for Export
            </h2>
            <p>
              Before exporting, purge unused blocks and layers using the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">PURGE</code> command. Group elements by architectural material (Walls, Glass, Concrete, Metals) rather than structural assemblies. Export the scene as an <strong className="text-white">FBX or DXF file</strong> with tessellation set to smooth curve tolerance.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Fixing Topology & Normal Orientation in Blender
            </h2>
            <p>
              CAD triangulations often import with inverted face normals or sharp edge artifacts. Select your imported mesh in Blender, enter Edit Mode, and run <strong className="text-white">Recalculate Outside (Shift+N)</strong>. Apply the <em className="text-white">Weighted Normal Modifier</em> with Sharp Edges enabled to preserve clean 90-degree architectural bevels.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Lighting & Architectural Camera Setup
            </h2>
            <p>
              Set up a Nishita Sky Texture or HDRI environment map for natural daylighting. Enable <strong className="text-white">Shift Y (Vertical Shift)</strong> on your camera settings to align 2-point architectural perspectives, eliminating unwanted vertical convergence in building facades.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}