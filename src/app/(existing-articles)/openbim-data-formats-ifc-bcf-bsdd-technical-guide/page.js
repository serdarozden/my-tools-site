import Link from 'next/link';

export const metadata = {
  title: 'OpenBIM Data Formats Guide: IFC, BCF, bSDD, and COBie Explained | serdarozden.com',
  description: 'An architectural reference guide to openBIM data standards including IFC4.3, BCF REST API, buildingSMART Data Dictionary (bSDD), and COBie data structures.',
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
              OpenBIM Infrastructure
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Understanding OpenBIM Data Standards: IFC4.3, bSDD, BCF, and COBie
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Architectural analysis of vendor-neutral digital building formats powering modern AEC software interoperability and lifecycle asset management.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              OpenBIM standards defined by buildingSMART form the backbone of open digital construction. Understanding how geometry schemas, semantic data dictionaries, and communication layers interoperate is crucial for building modern CAD and WebGL applications.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Industry Foundation Classes (IFC4.3 Schema)
            </h2>
            <p>
              IFC serves as the core spatial and geometric data model. The expanded IFC4.3 standard introduces comprehensive definitions for infrastructure assets including roads, railways, bridges, and alignment curves.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Semantic Standardization via bSDD
            </h2>
            <p>
              The buildingSMART Data Dictionary (bSDD) provides cloud-accessible ontology mappings, ensuring localized classification codes (such as Uniclass or OmniClass) remain semantically consistent across international IFC models.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Asset Management Integration with COBie
            </h2>
            <p>
              Construction Operations Building Information Exchange (COBie) extracts facility management metadata from IFC models, delivering structured spreadsheets for building commissioning and maintenance.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}