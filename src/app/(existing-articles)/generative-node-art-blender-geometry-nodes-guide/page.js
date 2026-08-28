import Link from 'next/link';

export const metadata = {
  title: 'Generative Minimalist Art in Blender: Geometry Nodes & Shaders | serdarozden.com',
  description: 'Learn how to create procedural, minimalist 3D artwork using Blender Geometry Nodes. Master mathematical arrays, procedural displacement, and studio lighting setups.',
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
              3D Art & Geometry Nodes
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Creating Generative Minimalist 3D Art with Blender Geometry Nodes
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            A practical guide to building procedurally generated, mathematically balanced 3D art structures for digital exhibitions and Web3 collections.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Minimalist 3D art relies on precision, balance, and subtle procedural variations rather than dense surface detailing. By leveraging Blender's Geometry Nodes, digital sculptors can design infinite procedural variations from a single node graph.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Mathematical Distribution and Field Vectors
            </h2>
            <p>
              Instead of manually positioning objects, use Math nodes (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Sine</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Modulo</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Vector Rotate</code>) combined with instance scattering. This produces clean geometric formations—such as spheres, cubes, and parametric ribbons—ideal for gallery-style renders.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Procedural Monochromatic Shading
            </h2>
            <p>
              High-end digital art highlights form through shadow and light interaction. Use custom Subsurface Scattering (SSS) combined with procedural Noise and Musgrave bump maps to give primitive shapes an organic, tactile, ceramic, or metallic surface finish.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Rendering High-Resolution 1:1 Aspect Ratios
            </h2>
            <p>
              When rendering hero pieces for digital art platforms or social showcases, optimize Cycles sampling using AGX color management. Ensure your camera framing utilizes square 1:1 or 4:5 ratios with high depth-of-field (DOF) for high visual impact.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}