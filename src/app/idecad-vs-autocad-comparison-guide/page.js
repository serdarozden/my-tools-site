import Link from 'next/link';

export default function IdeCADVsAutoCADPage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Ana Sayfaya Dön */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              CAD & Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            iDECAD vs. AutoCAD: Which Software Should Engineers & Architects Choose?
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Selecting the right software for civil engineering, structural design, and architectural documentation is critical for workflow efficiency. While AutoCAD remains the world standard for general 2D drafting and vector illustration, specialized BIM software like iDECAD provides integrated structural analysis and building modeling. Here is an in-depth breakdown of how they compare.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Core Paradigm Differences
            </h2>
            <p className="text-slate-100">
              The fundamental distinction between AutoCAD and iDECAD lies in their underlying design philosophy:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">AutoCAD (Computer-Aided Drafting):</strong>
                <span className="text-sm text-slate-200">Focuses on geometric accuracy using lines, polylines, hatches, and 3D solids. It is software-agnostic and used across civil, mechanical, and electrical engineering disciplines.</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">iDECAD (Building Information Modeling / Structural Analysis):</strong>
                <span className="text-sm text-slate-200">Designed specifically for AEC (Architecture, Engineering, and Construction). It handles 3D architectural modeling simultaneously with structural finite element analysis (FEA) and rebar detailing.</span>
              </div>
            </div>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. Integrated Structural Engineering & FEA
            </h2>
            <p className="text-slate-100">
              One of iDECAD&apos;s greatest strengths is its automated compliance with building codes and integrated structural calculations for reinforced concrete and steel structures.
            </p>
            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">Automated Rebar Schedules:</strong> iDECAD generates automatic structural drawings, beam schedules, and rebar quantity takeoffs directly from the structural model.
              </li>
              <li>
                <strong className="text-white">AutoCAD Limitations:</strong> AutoCAD requires manual drawing of structural members and rebar callouts, unless combined with specialized toolsets like AutoCAD Structural Detailing or third-party LISP scripts.
              </li>
            </ul>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. Drafting Flexibility & Vector Precision
            </h2>
            <p className="text-slate-100">
              For pure 2D drafting, custom detailing, and general vector manipulation, AutoCAD is unmatched. AutoCAD gives designers complete control over layers, line weights, dynamic blocks, and Xrefs (External References), making it the universal standard for sharing 2D drawings across subcontractors and municipal offices.
            </p>
          </section>

          {/* Bölüm 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              3. BIM Collaboration & File Formats
            </h2>
            <p className="text-slate-100">
              Modern construction projects rely on smooth file exchanges between structural, architectural, and MEP teams.
            </p>
            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">DWG / DXF Standard:</strong> AutoCAD&apos;s native DWG format is supported by almost every technical drawing program in existence.
              </li>
              <li>
                <strong className="text-white">IFC & STEP Export:</strong> iDECAD supports OpenBIM IFC formats, allowing seamless data transfer between Revit, ArchiCAD, and Tekla Structures.
              </li>
            </ul>
          </section>

          {/* Bölüm 5: Feature Comparison Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Feature Comparison Matrix
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-700 bg-zinc-900 text-white">
                    <th className="p-3 font-bold">Feature</th>
                    <th className="p-3 font-bold">AutoCAD</th>
                    <th className="p-3 font-bold">iDECAD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 bg-zinc-950">
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Primary Purpose</td>
                    <td className="p-3 text-slate-100">General 2D/3D Drafting</td>
                    <td className="p-3 text-slate-100">BIM Architectural & Structural Design</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Structural FEA Analysis</td>
                    <td className="p-3 text-slate-100">No (Requires Extensions)</td>
                    <td className="p-3 text-slate-100">Yes (Built-in)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Automated Rebar Schedules</td>
                    <td className="p-3 text-slate-100">Manual</td>
                    <td className="p-3 text-slate-100">Automatic</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">2D Drafting Flexibility</td>
                    <td className="p-3 text-slate-100">Industry Leader</td>
                    <td className="p-3 text-slate-100">Good (Parametric-based)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">File Formats Supported</td>
                    <td className="p-3 text-slate-100">DWG, DXF, DWF</td>
                    <td className="p-3 text-slate-100">DWG, DXF, IFC, STEP, OBJ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}