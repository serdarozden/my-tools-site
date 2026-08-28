import Link from 'next/link';

export const metadata = {
  title: 'Parametric Design Guide: Rhino Grasshopper to Blender Workflow | serdarozden.com',
  description: 'How to transition procedural parametric architecture models from Rhino Grasshopper to Blender for photorealistic Cycles rendering and animation.',
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
              Parametric Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Parametric Architecture: Rhino & Grasshopper to Blender Workflow
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to bridge mathematical parametric geometry from Grasshopper into Blender for lighting, material assignment, and cinematic archviz animation.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Parametric architecture relies on visual scripting algorithm frameworks like Rhino Grasshopper to generate complex facades, Voronoi patterns, and kinetic structural elements. However, rendering these NURBS surfaces inside Rhino can be limiting compared to Blender's Cycles engine.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Baking Geometry with Clean Mesh Density
            </h2>
            <p>
              Before transferring Grasshopper definitions to Blender, convert NURBS surfaces into mesh objects inside Rhino using controlled polygon meshing. Adjust density sliders to preserve smooth facade curves while maintaining clean, predictable quad topology.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. OBJ vs. FBX Transfer with Vertex Colors
            </h2>
            <p>
              When exporting parametric panels, embed computational analytical data (like solar radiation or structural stress values) into <strong className="text-white">Vertex Color channels</strong>. Blender can parse vertex color data inside its shader editor to drive procedural material gradients automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Geometry Nodes vs. Grasshopper
            </h2>
            <p>
              Blender's native <strong className="text-white">Geometry Nodes</strong> system now provides parametric capabilities similar to Grasshopper directly inside the 3D viewport, eliminating import/export loops for responsive layout iterations.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}