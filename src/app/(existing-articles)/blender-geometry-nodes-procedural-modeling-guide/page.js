import Link from 'next/link';

export const metadata = {
  title: 'Blender Geometry Nodes Procedural Modeling Guide | serdarozden.com',
  description: 'Master procedural modeling in Blender using Geometry Nodes. Learn fields, attribute instancing, curve deformation, and non-destructive 3D asset generation.',
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
              Blender Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender Geometry Nodes: Non-Destructive Procedural Modeling Architecture
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Build flexible procedural asset generators, dynamic scattering systems, and parametric architectural elements using Blender's node-based geometry engine.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Geometry Nodes transformed Blender into a powerful parametric modeling suite. By shifting from destructive manual polygon editing to node-based data flow, technical artists can iterate on complex 3D scenes effortlessly.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding Field Flow and Context Evaluation
            </h2>
            <p>
              Geometry Nodes operate using fields—functions evaluated in the context of specific geometry elements (vertices, edges, or faces). Mastering the distinction between single values and field context is fundamental to controlling vector offsets dynamically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Point Instancing and Memory-Efficient Memory Scattering
            </h2>
            <p>
              Replace heavy duplicated mesh objects with <strong className="text-white">Instance on Points</strong> nodes. Instancing drastically reduces viewport memory overhead, allowing scenes to render millions of procedural objects like foliage or structural rivets in real time.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Curve-to-Mesh Profiling for Architectural Cables
            </h2>
            <p>
              Utilize <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Curve to Mesh</code> nodes combined with custom profile curves to automatically generate parametric conduits, structural trusses, and adaptive railings along guide splines.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}