import Link from 'next/link';

export const metadata = {
  title: 'Parametric Design: Rhino Grasshopper to Blender Workflow | serdarozden.com',
  description: 'Bridge computational parametric design in Rhino Grasshopper with Blender. Export clean OBJ/FBX files, convert NURBS surfaces to quads, and render in Cycles.',
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
              Computational & Parametric Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Parametric Design Workflow: Rhino Grasshopper to Blender Cycles
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Integrate complex parametric mathematical surfaces from Rhino Grasshopper into Blender for photorealistic rendering, animation, and scene compositing.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Rhino and Grasshopper are the industry standards for parametric form-finding and algorithmic architectural design. However, rendering complex mathematical NURBS surfaces requires converting them to clean polygon meshes prior to importing into Blender.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Baking Grasshopper Algorithms to Quad Meshes
            </h2>
            <p>
              Instead of baking Grasshopper definitions directly as NURBS surfaces in Rhino, pass the final geometry through Grasshopper’s <strong className="text-white">Mesh Brep</strong> or <strong className="text-white">QuadRemesh</strong> component. This ensures the output geometry maintains balanced polygon distribution prior to export.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Export Formats: OBJ with Vertex Normals vs. FBX
            </h2>
            <p>
              When exporting from Rhino, select <strong className="text-white">Wavefront OBJ</strong>. In the export dialog, ensure <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Export vertex normals</code> is checked. Vertex normals preserve the smooth appearance of curved parametric panels inside Blender without needing extra Subdivision Surface modifiers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Assigning Procedural Materials and Geometry Nodes in Blender
            </h2>
            <p>
              Once inside Blender, clear custom split normal data if shading issues occur (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Data Properties &gt; Geometry Data &gt; Clear Custom Split Normals Data</code>). Apply procedural shaders using Noise and Bump nodes to emphasize the sweeping curves of your parametric model.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}