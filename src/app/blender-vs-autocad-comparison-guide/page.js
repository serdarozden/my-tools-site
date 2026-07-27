import Link from 'next/link';

export default function BlenderVsAutoCADPage() {
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
            Blender vs. AutoCAD: Which Software Should You Choose for 3D & Technical Design?
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Choosing between Blender and AutoCAD depends heavily on whether your primary focus is photorealistic 3D visualization or precise technical drafting. While AutoCAD serves as the global standard for 2D engineering drawings and CAD precision, Blender dominates organic 3D modeling, rendering, and visual effects. Here is a comprehensive guide to understanding their distinct workflows.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Core Workflow Philosophy
            </h2>
            <p className="text-slate-100">
              The primary difference between Blender and AutoCAD is rooted in vector-based CAD precision versus polygon-based artistic creation:
            </p>
            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">AutoCAD (Computer-Aided Design):</strong>
                <span className="text-sm text-slate-200">Built around real-world mathematical accuracy, precise dimensional constraints, and layer-based vector documentation. Ideal for floor plans, elevation drawings, and structural details.</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <strong className="text-white block mb-1">Blender (3D Creation Suite):</strong>
                <span className="text-sm text-slate-200">Built around mesh modeling, subdivision surfaces, lighting, and Cycles/EEVEE rendering engines. Ideal for architectural visualization (ArchViz), asset creation, and animation.</span>
              </div>
            </div>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. Precision Drafting vs. Visual Rendering
            </h2>
            <p className="text-slate-100">
              Engineers and architects often combine both tools to bridge the gap between technical execution and visual presentation:
            </p>
            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">AutoCAD for Construction Documents:</strong> Delivers exact millimeter precision, automated dimension lines, title blocks, and plot configurations required for municipal submission.
              </li>
              <li>
                <strong className="text-white">Blender for Photorealism:</strong> Takes 2D/3D geometry and turns it into realistic marketing materials using procedural materials, HDRI lighting, and realistic camera parameters.
              </li>
            </ul>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. Interoperability & File Formats
            </h2>
            <p className="text-slate-100">
              Moving assets smoothly between CAD software and Blender is essential for modern technical visualizers.
            </p>
            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">DXF & DWG Exchange:</strong> AutoCAD natively relies on DWG and DXF formats. Blender supports DXF importing via built-in add-ons to convert line drawings into editable 3D meshes.
              </li>
              <li>
                <strong className="text-white">3D Export Capabilities:</strong> Blender excels at exporting OBJ, FBX, STL, and GLTF files, making it a universal bridge between CAD systems and 3D web viewers or game engines.
              </li>
            </ul>
          </section>

          {/* Bölüm 4: Feature Comparison Matrix */}
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
                    <th className="p-3 font-bold">Blender</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 bg-zinc-950">
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Primary Focus</td>
                    <td className="p-3 text-slate-100">2D Drafting & Vector CAD</td>
                    <td className="p-3 text-slate-100">3D Modeling & Rendering</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Dimensional Precision</td>
                    <td className="p-3 text-slate-100">High (Sub-millimeter)</td>
                    <td className="p-3 text-slate-100">Visual (Mesh-based)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Photorealistic Rendering</td>
                    <td className="p-3 text-slate-100">Basic</td>
                    <td className="p-3 text-slate-100">Advanced (Cycles / EEVEE)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Licensing Model</td>
                    <td className="p-3 text-slate-100">Paid Subscription</td>
                    <td className="p-3 text-slate-100">Free & Open Source</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Supported Formats</td>
                    <td className="p-3 text-slate-100">DWG, DXF, DWF</td>
                    <td className="p-3 text-slate-100">OBJ, FBX, STL, DXF, GLTF, Blend</td>
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