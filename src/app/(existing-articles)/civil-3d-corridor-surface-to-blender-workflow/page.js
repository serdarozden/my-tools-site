import Link from 'next/link';

export const metadata = {
  title: 'Exporting Civil 3D Corridor Surfaces to Blender | serdarozden.com',
  description: 'Step-by-step technical guide for transferring Civil 3D road corridor assemblies, TIN surfaces, and alignment geometry into Blender for photorealistic infrastructure visualization.',
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
              Civil Engineering & 3D Viz
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Civil 3D Corridor Surfaces to Blender Infrastructure Workflow
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Convert parametric Civil 3D highway corridors, subassemblies, and terrain TIN surfaces into optimized, quad-dominant meshes for Blender Cycles rendering.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Highway corridor models designed in Autodesk Civil 3D contain complex subassembly feature lines and dense triangulation. Exporting raw surfaces directly often results in overlapping UV coordinates and broken surface shading.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Extracting Corridor Solids and Feature Lines
            </h2>
            <p>
              Use the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">EXPORTCORRIDORTSOLIDS</code> command to convert parametric subassemblies (pavement layers, curbs, daylight slopes) into discrete 3D solids, separating asphalt top courses from sub-base layers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Quad Remeshing Triangulated TIN Terrains
            </h2>
            <p>
              Civil 3D surface exports utilize heavy TIN triangulation. Import the surface mesh into Blender and apply a non-destructive <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Remesh</code> modifier or Geometry Nodes grid projection to generate clean quad topology suitable for displacement mapping.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Procedural Asphalt Marking and Road Shader Setup
            </h2>
            <p>
              Leverage extracted corridor feature lines as curve guides inside Blender. Geometry Nodes can sweep road marking materials, guardrails, and street lamps directly along alignment offsets with zero manual vertex placement.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}