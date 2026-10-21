import Link from 'next/link';

export const metadata = {
  title: 'Automated OpenBIM Building Code Compliance Engine | serdarozden.com',
  description: 'How to build web-based rule execution engines for checking municipal building codes, fire evacuation routes, and spatial accessibility directly on IFC models.',
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
              BIM Automation & Regulations
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Building Automated Regulatory Code Checking Engines for OpenBIM Models
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Converting municipal planning laws and zoning regulations into computable JavaScript/WASM rule sets evaluated against IFC spatial structures.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Manual permit reviews for architectural drawings take weeks and introduce human error. Building an automated rule engine parses standardized IFC building models, validating door clear widths, ceiling heights, and fire safety distances in seconds.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Declarative Rule Definitions with buildingSMART IDS
            </h2>
            <p>
              Expressing regulatory requirements using Information Delivery Specification (IDS) XML/JSON schemas ensures property sets, classification tags, and geometric dimensional constraints are formally verified.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Topological Space & Pathfinding Validation
            </h2>
            <p>
              Constructing navigation mesh graphs from `IfcSpace` entities allows algorithms to measure actual egress walking distances to fire exits, verifying compliance with municipal emergency evacuation rules.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Visual Non-Compliance Reports & BCF Export
            </h2>
            <p>
              Highlighting failing building elements directly in the WebGL 3D viewport and exporting detailed BCF (Building Collaboration Format) issues enables design teams to resolve code violations rapidly.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}