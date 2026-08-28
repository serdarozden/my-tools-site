import Link from 'next/link';

export const metadata = {
  title: 'OpenBIM BCF Guide: BIM Collaboration Format for Issue Tracking | serdarozden.com',
  description: 'Master OpenBIM workflows with BCF (BIM Collaboration Format). Learn how to manage structural clash reports, revision tracking, and IFC model coordination.',
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
              BIM & OpenBIM Workflows
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            OpenBIM BCF Architecture: Standardizing Issue Tracking in IFC Models
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Streamline cross-disciplinary coordination by exchanging lightweight BCF XML and API payloads instead of re-exporting multi-gigabyte IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In large-scale structural engineering and architectural projects, re-transferring full IFC files simply to point out a single column collision creates massive data redundancy. The BIM Collaboration Format (BCF) solves this by decoupling topic data from geometry.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. BCF XML vs. BCF API Infrastructure
            </h2>
            <p>
              While file-based <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.bcfzip</code> exchange suits standalone desktop applications, web-based CDE (Common Data Environment) platforms utilize RESTful BCF APIs. This allows real-time status updates, comment threads, and element GUID referencing directly inside web viewports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Camera Viewports and Element Selection via GUIDs
            </h2>
            <p>
              Each BCF issue snapshot embeds world camera positions (perspective or orthographic) alongside explicit IFC Global Unique Identifiers (GUIDs). When an engineer opens a BCF snippet in Revit, iDECAD, or Solibri, the viewport automatically aligns to the exact clash coordinate.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated BCF Workflow Integration
            </h2>
            <p>
              By leveraging open-source libraries like OpenBIM Components and IFC.js, developers can parse BCF topics programmatically, enabling automated daily clash summaries directly within custom web dashboards.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}