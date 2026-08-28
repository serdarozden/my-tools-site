import Link from 'next/link';

export default function AIGenerativeDesignGuidePage() {
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
            AI Generative Design in BIM & CAD: How Artificial Intelligence is Transforming AEC
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Artificial intelligence and algorithmic optimization are fundamentally changing how architects and structural engineers design buildings. By defining project constraints—such as material weight, cost, solar orientation, and load requirements—generative design algorithms automatically evaluate thousands of structural variations in minutes. Here is how AI-driven workflows integrate into traditional BIM and CAD environments.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              What is Generative Design in Modern CAD?
            </h2>
            <p className="text-slate-100">
              Unlike traditional 2D drafting or 3D modeling where designers manually draw every wall, column, and beam, generative design uses parametric algorithms and AI:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">Constraint Input:</strong>
                <span className="text-sm text-slate-200">Engineers set strict mechanical bounds, including maximum allowable stress, soil bearing capacity, concrete grade, and structural grid rules.</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">Algorithmic Generation:</strong>
                <span className="text-sm text-slate-200">AI models simulate structural performance (FEA) and present lightweight, structurally optimal geometry that human designers might never conceive manually.</span>
              </div>
            </div>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. Bridging AI Concept Models with Structural BIM
            </h2>
            <p className="text-slate-100">
              Generating an optimal 3D shape is only the first step. The true value comes from connecting AI concepts directly with BIM tools like iDECAD, Revit, and AutoCAD:
            </p>
            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">Automated Rebar & Quantities:</strong> Once an AI-optimized column or truss geometry is selected, BIM software automatically generates reinforced concrete rebar schedules and material quantity takeoffs.
              </li>
              <li>
                <strong className="text-white">OpenBIM IFC Standards:</strong> AI platforms export parametric models directly into OpenBIM IFC formats, allowing instant collaboration between architects and civil engineers.
              </li>
            </ul>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. Major Benefits for Structural Engineers & Architects
            </h2>
            <p className="text-slate-100">
              Adopting AI-assisted CAD workflows offers massive efficiency gains across residential and commercial projects:
            </p>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-4">
              <p className="text-slate-100 font-medium leading-relaxed">
                By shifting repetitive modeling tasks to automation, engineers reduce material waste, optimize foundation sizing for seismic conditions, and streamline construction documentation before ground is broken.
              </p>
            </div>
          </section>

          {/* Bölüm 4: Feature Comparison Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Traditional CAD vs. AI-Assisted BIM Workflow
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-700 bg-zinc-900 text-white">
                    <th className="p-3 font-bold">Workflow Stage</th>
                    <th className="p-3 font-bold">Traditional CAD Drafting</th>
                    <th className="p-3 font-bold">AI Generative BIM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 bg-zinc-950">
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Design Exploration</td>
                    <td className="p-3 text-slate-100">Manual (2–3 iterations)</td>
                    <td className="p-3 text-slate-100">Automated (Hundreds of options)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Material Efficiency</td>
                    <td className="p-3 text-slate-100">Standard Safety Margins</td>
                    <td className="p-3 text-slate-100">Optimized Material Reduction</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Code Compliance Checks</td>
                    <td className="p-3 text-slate-100">Manual Calculations</td>
                    <td className="p-3 text-slate-100">Real-Time Parametric Rules</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Interoperability</td>
                    <td className="p-3 text-slate-100">2D DWG / DXF</td>
                    <td className="p-3 text-slate-100">OpenBIM IFC, STEP, Parametric API</td>
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