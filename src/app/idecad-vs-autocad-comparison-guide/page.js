import Link from 'next/link';

export const metadata = {
  title: 'iDECAD vs. AutoCAD: Comparison Guide for Architects & Structural Engineers',
  description: 'Compare iDECAD and AutoCAD for structural engineering and architectural drafting. Learn key differences in BIM workflow, reinforced concrete design, and 2D CAD drafting.',
};

export default function IdecadVsAutocadGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-100 bg-black min-h-screen">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-zinc-800">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
          <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
            CAD & Architecture
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-300 font-medium">8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          iDECAD vs. AutoCAD: Which Software Should Engineers & Architects Choose?
        </h1>

        <p className="text-lg text-slate-200 leading-relaxed font-normal">
          Selecting the right software for civil engineering, structural design, and architectural documentation is critical for workflow efficiency. While AutoCAD remains the world standard for general 2D drafting and vector illustration, specialized BIM software like iDECAD provides integrated structural analysis and building modeling. Here is an in-depth breakdown of how they compare.
        </p>
      </header>

      {/* Article Body */}
      <article className="text-slate-200 leading-relaxed space-y-8 text-base">
        
        {/* Core Differences Section */}
        <section className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-black text-white mb-4">Core Paradigm Differences</h2>
          <p className="mb-4 text-slate-200">
            The fundamental distinction between AutoCAD and iDECAD lies in their underlying design philosophy:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-white font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">AutoCAD (Computer-Aided Drafting):</strong> Focuses on geometric accuracy using lines, polylines, hatches, and 3D solids. It is software-agnostic and used across civil, mechanical, and electrical engineering disciplines.
            </li>
            <li>
              <strong className="text-white font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">iDECAD (Building Information Modeling / Structural Analysis):</strong> Designed specifically for AEC (Architecture, Engineering, and Construction). It handles 3D architectural modeling simultaneously with structural finite element analysis (FEA) and rebar detailing.
            </li>
          </ul>
        </section>

        {/* Structural Analysis */}
        <section>
          <h2 className="text-2xl font-extrabold text-white mb-3 border-b border-zinc-800 pb-2">
            1. Integrated Structural Engineering & FEA
          </h2>
          <p className="mb-4 text-slate-200">
            One of iDECAD&apos;s greatest strengths is its automated compliance with building codes and integrated structural calculations for reinforced concrete and steel structures.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-200">
            <li>
              <strong className="text-white font-bold">Automated Rebar Schedules:</strong> iDECAD generates automatic structural drawings, beam schedules, and rebar quantity takeoffs directly from the structural model.
            </li>
            <li>
              <strong className="text-white font-bold">AutoCAD Limitations:</strong> AutoCAD requires manual drawing of structural members and rebar callouts, unless combined with specialized toolsets like AutoCAD Structural Detailing or third-party LISP scripts.
            </li>
          </ul>
        </section>

        {/* Drafting Flexibility */}
        <section>
          <h2 className="text-2xl font-extrabold text-white mb-3 border-b border-zinc-800 pb-2">
            2. Drafting Flexibility & Vector Precision
          </h2>
          <p className="mb-4 text-slate-200">
            For pure 2D drafting, custom detailing, and general vector manipulation, AutoCAD is unmatched.
          </p>
          <p className="text-slate-200">
            AutoCAD gives designers complete control over layers, line weights, dynamic blocks, and Xrefs (External References), making it the universal standard for sharing 2D drawings across subcontractors and municipal offices.
          </p>
        </section>

        {/* BIM Interoperability */}
        <section>
          <h2 className="text-2xl font-extrabold text-white mb-3 border-b border-zinc-800 pb-2">
            3. BIM Collaboration & File Formats
          </h2>
          <p className="mb-4 text-slate-200">
            Modern construction projects rely on smooth file exchanges between structural, architectural, and MEP teams.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-200">
            <li>
              <strong className="text-white font-bold">DWG / DXF Standard:</strong> AutoCAD&apos;s native DWG format is supported by almost every technical drawing program in existence.
            </li>
            <li>
              <strong className="text-white font-bold">IFC & STEP Export:</strong> iDECAD supports OpenBIM IFC formats, allowing seamless data transfer between Revit, ArchiCAD, and Tekla Structures.
            </li>
          </ul>
        </section>

        {/* Comparison Matrix Table */}
        <section className="my-10 overflow-x-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4 border-b border-zinc-800 pb-2">
            Feature Comparison Matrix
          </h2>
          <table className="w-full text-left text-sm text-slate-200 border-collapse border border-zinc-800">
            <thead>
              <tr className="bg-zinc-900 text-white border-b border-zinc-800">
                <th className="p-3 border-r border-zinc-800 font-bold text-base">Feature</th>
                <th className="p-3 border-r border-zinc-800 font-bold text-base">AutoCAD</th>
                <th className="p-3 font-bold text-base">iDECAD</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800 bg-zinc-950">
                <td className="p-3 font-bold text-white border-r border-zinc-800">Primary Purpose</td>
                <td className="p-3 border-r border-zinc-800 text-slate-200">General 2D/3D Drafting</td>
                <td className="p-3 text-slate-200">BIM Architectural & Structural Design</td>
              </tr>
              <tr className="border-b border-zinc-800 bg-zinc-900/50">
                <td className="p-3 font-bold text-white border-r border-zinc-800">Structural FEA Analysis</td>
                <td className="p-3 border-r border-zinc-800 text-red-400 font-bold">No (Requires Extensions)</td>
                <td className="p-3 text-emerald-400 font-bold">Yes (Built-in)</td>
              </tr>
              <tr className="border-b border-zinc-800 bg-zinc-950">
                <td className="p-3 font-bold text-white border-r border-zinc-800">Automated Rebar Schedules</td>
                <td className="p-3 border-r border-zinc-800 text-red-400 font-bold">Manual</td>
                <td className="p-3 text-emerald-400 font-bold">Automatic</td>
              </tr>
              <tr className="border-b border-zinc-800 bg-zinc-900/50">
                <td className="p-3 font-bold text-white border-r border-zinc-800">2D Drafting Flexibility</td>
                <td className="p-3 border-r border-zinc-800 text-emerald-400 font-bold">Industry Leader</td>
                <td className="p-3 text-slate-200">Good (Parametric-based)</td>
              </tr>
              <tr className="bg-zinc-950">
                <td className="p-3 font-bold text-white border-r border-zinc-800">File Formats Supported</td>
                <td className="p-3 border-r border-zinc-800 text-slate-200">DWG, DXF, DWF</td>
                <td className="p-3 text-slate-200">DWG, DXF, IFC, STEP, OBJ</td>
              </tr>
            </tbody>
          </table>
        </section>

      </article>

      {/* Call to Action Card */}
      <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl my-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Explore 3D & CAD File Formats</h3>
          <p className="text-slate-300 text-sm font-medium">
            Learn how to export STEP, IGES, and STL files seamlessly between software platforms.
          </p>
        </div>
        <Link 
          href="/cad-3d-file-formats-guide"
          className="bg-blue-600 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 whitespace-nowrap"
        >
          View Formats Guide &rarr;
        </Link>
      </div>
    </main>
  );
}