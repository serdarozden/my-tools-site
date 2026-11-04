import Link from 'next/link';

export const metadata = {
  title: 'Automated IFC Structural Seismic Story Drift Analysis Guide | serdarozden.com',
  description: 'How to automate inter-story drift calculations and seismic code compliance checks directly from structural IFC building models.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>←</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              OpenBIM Seismic Analysis
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">15 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Nov 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated IFC Structural Seismic Story Drift Analysis Architecture
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting lateral displacement matrices and computing inter-story drift ratios automatically from structural analysis properties embedded in IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Evaluating structural earthquake safety requires checking relative lateral displacements between adjacent building storeys. Automating these computations from semantic IFC data models streamlines structural compliance verification.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Parsing Storey Elevation and Displacement Data
            </h2>
            <p>
              Traversing `IfcBuildingStorey` hierarchies and structural load analysis results retrieves nodal displacement vectors across horizontal floor diaphragms.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Computing Inter-Story Drift Ratios
            </h2>
            <p>
              Calculating the relative displacement difference between floor $i$ and floor $i-1$ divided by storey height evaluates drift limits against seismic code thresholds.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Visualizing Stress and Drift Heatmaps in Web Viewers
            </h2>
            <p>
              Mapping calculated drift ratios into vertex color attributes allows web-based IFC viewers to render instant structural safety heatmaps directly in the browser.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}