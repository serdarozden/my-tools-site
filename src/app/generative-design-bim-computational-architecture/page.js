import Link from 'next/link';

export const metadata = {
  title: 'Generative Design in BIM: Computational Architecture Workflows | serdarozden.com',
  description: 'Explore how generative design and algorithms transform BIM workflows in Revit and Grasshopper. Optimize spatial layouts, structural grids, and solar radiation.',
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
              BIM & Algorithmic Design
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Generative Design in BIM: Computational Workflows for Modern Architecture
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how programmatic algorithms, Dynamo, and Grasshopper integrate into Building Information Modeling (BIM) to optimize spatial layouts, structural grids, and environmental performance.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional architectural design relies on iterative manual adjustments. Generative design combined with Building Information Modeling (BIM) allows architects to define parametric goals and evaluation rules to automatically generate thousands of optimized building configurations.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Multi-Criteria Spatial Optimization Algorithms
            </h2>
            <p>
              By defining constraints such as maximum floor area ratio (FAR), daylit perimeter depth, and structural grid spans, algorithms can evaluate hundreds of building massing options per minute inside Revit or Rhino Inside BIM environments.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Integrating Grasshopper with IFC BIM Schemas
            </h2>
            <p>
              Using computational nodes in Grasshopper, parametric geometries can be directly categorized under native IFC (Industry Foundation Classes) entities like <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcWall</code> and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcColumn</code>, preserving BIM metadata across platforms.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Environmental and Structural Performance Feedback Loops
            </h2>
            <p>
              Generative solvers continuously calculate solar exposure, structural stress concentrations, and wind load distribution during geometry creation, delivering real-time metric feedback prior to construction documentation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}