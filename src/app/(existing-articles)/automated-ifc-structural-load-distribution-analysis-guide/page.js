import Link from 'next/link';

export const metadata = {
  title: 'Automated Structural Load Distribution Analysis in IFC | serdarozden.com',
  description: 'How to build web-based automated structural load path analysis engines that evaluate gravity and lateral shear loads directly from OpenBIM IFC models.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              BIM Engineering & Structural Math
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Structural Load Path Extraction and Analysis in OpenBIM IFC Models
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting spatial structural topology, tributary slab areas, and column axial load transfers directly inside web-based engineering viewers.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Automating preliminary structural sizing requires tracing vertical and lateral load paths across building skeletons. Extracting topological connectivity from IFC structural analysis schemas enables client-side web tools to calculate load transfers instantly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Extracting Topological Graphs from IfcStructuralAnalysisModel
            </h2>
            <p>
              Parsing `IfcStructuralMember`, `IfcStructuralConnection`, and structural boundary conditions extracts directed graph topologies representing slabs, beams, columns, and foundations.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Voronoi Tributary Area Decomposition
            </h2>
            <p>
              Computing Voronoi polygon decompositions over structural floor plate meshes distributes slab dead and live loads to supporting beam and column nodes automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive Load Flow Diagram Shader Visualization
            </h2>
            <p>
              Rendering color-coded axial force vectors and moment diagrams over 3D WebGL framing models provides immediate feedback on load accumulation during preliminary design iterations.
            </p>

          </div>
        </article>
      </main>
    </div>
  );
}