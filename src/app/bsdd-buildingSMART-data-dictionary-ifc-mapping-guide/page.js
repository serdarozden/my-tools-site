import Link from 'next/link';

export const metadata = {
  title: 'bSDD (buildingSMART Data Dictionary) & IFC Mapping Guide | serdarozden.com',
  description: 'Understand buildingSMART Data Dictionary (bSDD). Learn how to classify IFC entities, manage classification systems, and automate BIM data validation.',
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
              OpenBIM & Standards
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            bSDD Integration: Automating Data Classification in OpenBIM Workflows
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Master the buildingSMART Data Dictionary API to bridge regional classification systems (CCI, Uniclass, Omniclass) with core IFC entity schemas.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In large-scale BIM projects, inconsistent object properties break automated compliance checks. The buildingSMART Data Dictionary (bSDD) acts as an online service providing standardized concepts, classifications, and property sets.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. What is bSDD and How Does It Extend IFC?
            </h2>
            <p>
              Rather than hardcoding custom attributes into IFC files, bSDD provides globally unique identifiers (URIs) linking local project data to standardized definitions across languages and jurisdictions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Querying the bSDD GraphQL and REST APIs
            </h2>
            <p>
              Integrating bSDD queries into authoring software or custom WebBIM viewers allows real-time validation of entity classifications like <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcWall</code> and property requirements before exporting final models.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated IDS (Information Delivery Specification) Verification
            </h2>
            <p>
              Pairing bSDD data structures with buildingSMART IDS XML rules enables automated server-side model audits, ensuring submitted IFC models conform strictly to client Asset Information Requirements (AIR).
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}