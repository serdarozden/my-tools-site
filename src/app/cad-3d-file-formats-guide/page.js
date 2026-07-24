import Link from 'next/link';

export const metadata = {
  title: 'Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX | Technical Guide',
  description: 'A comprehensive engineering guide to 3D file formats. Learn the differences between mesh and parametric CAD files, and choose the right format for 3D printing, rendering, and CAD.',
};

export default function CadFileFormatsGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Navigation Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 bg-blue-950/60 border border-blue-800/50 px-3 py-1.5 rounded-lg transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Header & Meta */}
      <header className="mb-10 pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
          <span className="bg-blue-950 border border-blue-800/60 px-3 py-1 rounded-md uppercase tracking-wider">
            CAD & Architecture
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-normal">7 min read</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-normal">Updated July 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX Explained
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          Navigating the world of 3D modeling and Computer-Aided Design (CAD) often comes with a common headache: choosing the right file format. Whether you are exporting a model for 3D printing, transferring architectural assets between software, or preparing a high-poly render, the format you choose determines geometry precision, scale accuracy, and material data retention.
        </p>
      </header>

      {/* Main Article Body */}
      <article className="prose prose-invert max-w-none text-slate-300 space-y-8 leading-relaxed">
        
        {/* Intro Section */}
        <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-3">Mesh vs. Parametric (CAD) Geometry: The Fundamental Difference</h2>
          <p className="text-sm text-slate-300 mb-4">
            Before diving into specific formats, it is crucial to understand the two main categories of 3D data representation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
            <li>
              <strong className="text-white">Mesh Geometry (Polygonal / Tessellated):</strong> Uses flat triangles or polygons to approximate curved surfaces. Ideal for 3D printing, CGI, game development, and organic modeling. <em>(Examples: STL, OBJ, FBX)</em>
            </li>
            <li>
              <strong className="text-white">Parametric CAD Geometry (NURBS / Solid Modeling):</strong> Uses mathematical equations to define exact curves, circles, and boundary surfaces. Essential for mechanical engineering, manufacturing, CNC machining, and architectural drafting. <em>(Examples: STEP, IGES)</em>
            </li>
          </ul>
        </section>

        {/* STEP Format */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            1. STEP (.stp / .step) — The Universal CAD Standard
          </h2>
          <div className="flex gap-2 text-xs font-semibold mb-2">
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded-md">Category: Parametric CAD</span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Best For: CNC Machining, Mechanical Engineering</span>
          </div>
          <p>
            STEP (Standard for the Exchange of Product Model Data) is the gold standard for transferring 3D CAD data across different engineering software like AutoCAD, iDECAD, SolidWorks, and Fusion 360.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-200">True Mathematical Precision:</strong> Retains exact curves and cylindrical geometry without converting them into flat triangles.</li>
            <li><strong className="text-slate-200">Assembly Data:</strong> Can store complex assembly structures, individual part layers, and metadata.</li>
            <li><strong className="text-slate-200">Interoperability:</strong> Supported by virtually every professional CAD and BIM application.</li>
          </ul>
        </section>

        {/* IGES Format */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            2. IGES (.igs / .iges) — The Legacy Engineering Format
          </h2>
          <div className="flex gap-2 text-xs font-semibold mb-2">
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded-md">Category: Surface CAD Model</span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Best For: Legacy Systems, Surface Geometry</span>
          </div>
          <p>
            Initial Graphics Exchange Specification (IGES) is one of the oldest vendor-neutral formats in computer graphics, dating back to the late 1970s.
          </p>
          <p className="text-sm">
            While it transfers 3D wireframes and surface geometry reliably, it lacks modern solid data models. IGES often transfers models as &quot;hollow surface shells&quot; rather than solid bodies, requiring manual surface stitching in modern CAD tools.
          </p>
        </section>

        {/* STL Format */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            3. STL (.stl) — The 3D Printing Workhorse
          </h2>
          <div className="flex gap-2 text-xs font-semibold mb-2">
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded-md">Category: Mesh Geometry</span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Best For: Additive Manufacturing (3D Printing)</span>
          </div>
          <p>
            STL (Stereolithography) is the undisputed standard for 3D printing slicers (e.g., Cura, PrusaSlicer). It represents 3D surfaces as a continuous mesh of interconnected triangles.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
            <li><strong className="text-slate-200">Universal Slicer Support:</strong> Every 3D printer software natively opens STL files.</li>
            <li><strong className="text-slate-200">No Color/Scale:</strong> Does not store materials, textures, or unit scales (relies on slicer default units).</li>
          </ul>
        </section>

        {/* OBJ Format */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            4. OBJ (.obj) — Flexible Graphics & Textures
          </h2>
          <div className="flex gap-2 text-xs font-semibold mb-2">
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded-md">Category: Mesh Geometry</span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Best For: 3D Rendering & CGI Art</span>
          </div>
          <p>
            Developed by Wavefront Technologies, OBJ is an open-source mesh format widely used in digital visualization, Blender, and 3D graphics applications.
          </p>
          <p className="text-sm">
            Unlike STL, OBJ pairs with an external <code className="text-blue-400 bg-slate-900 px-1.5 py-0.5 rounded">.MTL</code> (Material Template Library) file to map colors and image textures, making it ideal for rendering pipelines.
          </p>
        </section>

        {/* FBX Format */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            5. FBX (.fbx) — Animation & Game Engines
          </h2>
          <div className="flex gap-2 text-xs font-semibold mb-2">
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded-md">Category: 3D Asset / Scene Interchange</span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">Best For: Game Development, Animation, VR</span>
          </div>
          <p>
            Owned by Autodesk, FBX (Filmbox) is the industry standard for interchange between 3D animation tools and real-time rendering engines like Unreal Engine and Unity. It stores geometry, UV maps, materials, lighting, skeletal rigs, and animation keyframes in a single file.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="my-10 overflow-x-auto">
          <h3 className="text-xl font-bold text-white mb-4">Quick Reference Comparison Matrix</h3>
          <table className="w-full text-left text-sm text-slate-300 border-collapse border border-slate-800">
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-800">
                <th className="p-3 border-r border-slate-800">Format</th>
                <th className="p-3 border-r border-slate-800">Type</th>
                <th className="p-3 border-r border-slate-800">Primary Use Case</th>
                <th className="p-3 border-r border-slate-800">Textures?</th>
                <th className="p-3">Exact Curves?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/60 bg-slate-900/30">
                <td className="p-3 font-bold text-white border-r border-slate-800">STEP</td>
                <td className="p-3 border-r border-slate-800">Parametric CAD</td>
                <td className="p-3 border-r border-slate-800">Mechanical Design & CNC</td>
                <td className="p-3 border-r border-slate-800 text-red-400">No</td>
                <td className="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr className="border-b border-slate-800/60">
                <td className="p-3 font-bold text-white border-r border-slate-800">IGES</td>
                <td className="p-3 border-r border-slate-800">Surface CAD</td>
                <td className="p-3 border-r border-slate-800">Legacy CAD Interchange</td>
                <td className="p-3 border-r border-slate-800 text-red-400">No</td>
                <td className="p-3 text-emerald-400">Yes</td>
              </tr>
              <tr className="border-b border-slate-800/60 bg-slate-900/30">
                <td className="p-3 font-bold text-white border-r border-slate-800">STL</td>
                <td className="p-3 border-r border-slate-800">Mesh</td>
                <td className="p-3 border-r border-slate-800">3D Printing & Slicing</td>
                <td className="p-3 border-r border-slate-800 text-red-400">No</td>
                <td className="p-3 text-red-400">No</td>
              </tr>
              <tr className="border-b border-slate-800/60">
                <td className="p-3 font-bold text-white border-r border-slate-800">OBJ</td>
                <td className="p-3 border-r border-slate-800">Mesh</td>
                <td className="p-3 border-r border-slate-800">3D Graphics & Rendering</td>
                <td className="p-3 border-r border-slate-800 text-emerald-400">Yes</td>
                <td className="p-3 text-red-400">No</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white border-r border-slate-800">FBX</td>
                <td className="p-3 border-r border-slate-800">Complex Scene</td>
                <td className="p-3 border-r border-slate-800">Animation & Game Engines</td>
                <td className="p-3 border-r border-slate-800 text-emerald-400">Yes</td>
                <td className="p-3 text-red-400">No</td>
              </tr>
            </tbody>
          </table>
        </section>

      </article>

      {/* Bottom CTA */}
      <div className="mt-12 pt-8 border-t border-slate-800 text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
        >
          Explore More Engineering Guides & Tools &rarr;
        </Link>
      </div>
    </main>
  );
}