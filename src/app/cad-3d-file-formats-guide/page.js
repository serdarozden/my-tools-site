import Link from 'next/link';

export default function CadAnd3dFileFormatsGuidePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Geri Dön Butonu */}
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Blog
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              CAD & Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Navigating the world of 3D modeling and Computer-Aided Design (CAD) often comes with a common headache: choosing the right file format. Whether you are exporting a model for 3D printing, transferring architectural assets between software, or preparing a high-poly render, the format you choose determines geometry precision, scale accuracy, and material data retention.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Mesh vs Parametric Section */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Mesh vs. Parametric (CAD) Geometry: The Fundamental Difference
            </h2>
            <p className="text-slate-100">
              Before diving into specific formats, it is crucial to understand the two main categories of 3D data representation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Mesh Geometry (Polygonal)</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Uses flat triangles or polygons to approximate curved surfaces. Best for 3D printing, CGI, game development, and organic modeling. <br />
                  <span className="text-blue-400 font-semibold text-xs mt-2 inline-block">Examples: STL, OBJ, FBX</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Parametric CAD Geometry (NURBS)</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Uses mathematical equations to define exact curves, circles, and boundary surfaces. Essential for mechanical engineering, manufacturing, CNC machining, and architectural drafting. <br />
                  <span className="text-blue-400 font-semibold text-xs mt-2 inline-block">Examples: STEP, IGES</span>
                </p>
              </div>
            </div>
          </section>

          {/* 1. STEP */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. STEP (.stp / .step) — The Universal CAD Standard
            </h2>
            <p className="text-slate-100">
              STEP (Standard for the Exchange of Product Model Data) is the gold standard for transferring 3D CAD data across different engineering software like AutoCAD, iDECAD, SolidWorks, and Fusion 360.
            </p>
            
            <ul className="space-y-3 my-4 pl-4 border-l-2 border-blue-500">
              <li className="text-slate-100">
                <strong className="text-white font-bold">True Mathematical Precision:</strong> Retains exact curves and cylindrical geometry without converting them into flat triangles.
              </li>
              <li className="text-slate-100">
                <strong className="text-white font-bold">Feature & Assembly Data:</strong> Can store complex assembly structures, individual part layers, and metadata.
              </li>
              <li className="text-slate-100">
                <strong className="text-white font-bold">Software Interoperability:</strong> Supported by virtually every professional CAD and BIM application.
              </li>
            </ul>
          </section>

          {/* 2. IGES */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. IGES (.igs / .iges) — The Legacy Engineering Format
            </h2>
            <p className="text-slate-100">
              Initial Graphics Exchange Specification (IGES) is one of the oldest vendor-neutral formats in computer graphics, dating back to the late 1970s.
            </p>
            <p className="text-slate-100">
              While it transfers 3D wireframes and surface geometry reliably, it lacks modern solid data models. IGES often transfers models as "hollow surface shells" rather than solid bodies, requiring manual surface stitching in modern CAD tools.
            </p>
          </section>

          {/* 3. STL */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              3. STL (.stl) — The 3D Printing Workhorse
            </h2>
            <p className="text-slate-100">
              STL (Stereolithography) is the undisputed standard for 3D printing slicers (e.g., Cura, PrusaSlicer). It represents 3D surfaces as a continuous mesh of interconnected triangles.
            </p>

            <ul className="space-y-3 my-4 pl-4 border-l-2 border-blue-500">
              <li className="text-slate-100">
                <strong className="text-white font-bold">Universal Slicer Compatibility:</strong> Every 3D printer software natively supports STL files.
              </li>
              <li className="text-slate-100">
                <strong className="text-white font-bold">No Color or Scale:</strong> Cannot store materials, colors, or unit scales (relies on slicer default units).
              </li>
            </ul>
          </section>

          {/* 4. OBJ */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              4. OBJ (.obj) — Flexible Graphics & Textures
            </h2>
            <p className="text-slate-100">
              Developed by Wavefront Technologies, OBJ is an open-source mesh format widely used in digital visualization, Blender, and 3D graphics applications.
            </p>
            <p className="text-slate-100">
              Unlike STL, OBJ pairs with an external <code className="bg-zinc-900 text-blue-400 border border-zinc-700 px-2 py-0.5 rounded text-sm font-mono">.MTL</code> (Material Template Library) file to map colors and image textures, making it ideal for rendering pipelines.
            </p>
          </section>

          {/* 5. FBX */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              5. FBX (.fbx) — Animation & Game Engines
            </h2>
            <p className="text-slate-100">
              Owned by Autodesk, FBX (Filmbox) is the industry standard for interchange between 3D animation tools and real-time rendering engines like Unreal Engine and Unity. It stores geometry, UV maps, materials, lighting, skeletal rigs, and animation keyframes in a single file.
            </p>
          </section>

          {/* Quick Reference Comparison Matrix Tablosu */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Quick Reference Comparison Matrix
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 my-6">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-zinc-900 text-white font-bold border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Format</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Primary Use Case</th>
                    <th className="p-4">Textures?</th>
                    <th className="p-4">Exact Curves?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">STEP</td>
                    <td className="p-4 text-slate-200">Parametric CAD</td>
                    <td className="p-4 text-slate-200">Mechanical Design & CNC</td>
                    <td className="p-4 text-slate-200">No</td>
                    <td className="p-4 text-blue-400 font-semibold">Yes</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">IGES</td>
                    <td className="p-4 text-slate-200">Surface CAD</td>
                    <td className="p-4 text-slate-200">Legacy CAD Interchange</td>
                    <td className="p-4 text-slate-200">No</td>
                    <td className="p-4 text-blue-400 font-semibold">Yes</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">STL</td>
                    <td className="p-4 text-slate-200">Mesh</td>
                    <td className="p-4 text-slate-200">3D Printing & Slicing</td>
                    <td className="p-4 text-slate-200">No</td>
                    <td className="p-4 text-slate-200">No</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">OBJ</td>
                    <td className="p-4 text-slate-200">Mesh</td>
                    <td className="p-4 text-slate-200">3D Graphics & Rendering</td>
                    <td className="p-4 text-blue-400 font-semibold">Yes</td>
                    <td className="p-4 text-slate-200">No</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">FBX</td>
                    <td className="p-4 text-slate-200">Complex Scene</td>
                    <td className="p-4 text-slate-200">Animation & Game Engines</td>
                    <td className="p-4 text-blue-400 font-semibold">Yes</td>
                    <td className="p-4 text-slate-200">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Yönlendirme Kartı */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10 shadow-2xl">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Exporting Assets for Unreal Engine 5?</h4>
              <p className="text-sm text-slate-200">
                Learn how to properly configure scale, axes, and materials when exporting FBX models from Blender.
              </p>
            </div>
            <Link 
              href="/blog/blender-to-ue5-export-guide" 
              className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-600/30"
            >
              Read UE5 Export Guide &rarr;
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}