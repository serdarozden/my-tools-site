import Link from 'next/link';

export const metadata = {
  title: 'Automated Regulatory Code Checking with IFC-SG & OpenBIM | serdarozden.com',
  description: 'Understand regulatory BIM submission standards like IFC-SG. Learn how openBIM models automate building code compliance, fire safety, and permit checks.',
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
              OpenBIM & Automated Compliance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Building Code Checking: Regulatory Compliance via IFC-SG Standard
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Explore how modern municipalities transition from 2D plan approvals to automated 3D OpenBIM verification using standardized regulatory IFC schemas.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional building permit checks require manual review of hundreds of 2D CAD drawings. Regulatory BIM initiatives like Singapore’s IFC-SG set a global precedent for automated machine-readable code compliance.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Structuring Models for Machine-Readable Code Audit
            </h2>
            <p>
              Automated checking engines require standardized parameter naming and space boundary definitions. Enforcing schema rules like <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcSpace</code> and property set extensions guarantees spatial clearance validation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Writing Rulesets via Open Source Rule Engines (Solibri / IfcOpenShell)
            </h2>
            <p>
              By combining Python scripts via <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ifcopenshell</code> with buildingSMART IDS rules, municipal servers validate egress widths, accessibility slopes, and fire compartmentation automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Eliminating Plan Approval Bottlenecks with BCF Integration
            </h2>
            <p>
              Instead of rejecting entire model submissions, automated checkers return pinpointed BCF (BIM Collaboration Format) markers directly into the architect’s CAD authoring software for immediate revision.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}