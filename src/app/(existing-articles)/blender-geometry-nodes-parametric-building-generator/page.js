import Link from 'next/link';

export const metadata = {
  title: 'Blender Geometry Nodes Parametric Building Generator Guide | serdarozden.com',
  description: 'Learn how to build a parametric procedural building generator using Blender Geometry Nodes. Instantiate wall modules, control floor heights, and auto-tile roofs.',
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
              Blender & Procedural Modeling
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender Geometry Nodes: Building a Parametric Architectural Generator
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Harness the power of Blender Geometry Nodes to create a dynamic building generator. Control story counts, wall panel variations, and window distribution procedurally.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Procedural modeling allows architects and 3D artists to generate complex urban environments without manually extruding individual faces. Blender's Geometry Nodes framework offers flexible non-destructive workflows for architectural asset generation.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Grid Resampling & Curves to Instance Setup
            </h2>
            <p>
              Start by converting base footprint curves into resampled point networks using the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Resample Curve</code> node. Distribute instanced structural columns along corner vertices and feed edge vectors into an <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Instance on Points</code> node to distribute repeatable wall modules automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Procedural Floor Instancing & Height Controls
            </h2>
            <p>
              Utilize integer math nodes to repeat building stories along the global Z-axis. By exposing floor height and total level parameters to the modifier stack, you can scale structures dynamically while automatically capping top floors with custom roof ledge modules.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Assigning Dynamic Materials and UV Mapping
            </h2>
            <p>
              Procedural instancing often breaks standard UV unwrapping. Inject <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Store Named Attribute</code> nodes within your geometry tree to output vector coordinates directly into Cycles/EEVEE procedural material shaders for seamless brick and concrete tiling.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}