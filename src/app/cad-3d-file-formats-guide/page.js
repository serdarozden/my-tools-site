import Link from 'next/link';

export const metadata = {
  title: 'Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX | Technical Guide',
  description: 'A comprehensive engineering guide to 3D file formats. Learn the differences between mesh and parametric CAD files, and choose the right format for 3D printing, rendering, and CAD.',
};

export default function CadFileFormatsGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-600 mb-4">
          <span className="bg-blue-50 border border-blue-200 px-3 py-1 rounded-md uppercase tracking-wider text-blue-700">
            CAD & Architecture
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium">7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          Navigating the world of 3D modeling and Computer-Aided Design (CAD) often comes with a common headache: choosing the right file format. Whether you are exporting a model for 3D printing, transferring architectural assets between software, or preparing a high-poly render, the format you choose determines geometry precision, scale accuracy, and material data retention.
        </p>
      </header>

      {/* Article Body */}
      <article className="text-slate-700 leading-relaxed space-y-8 text-base">
        
        {/* Intro Section */}
        <section className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Mesh vs. Parametric (CAD) Geometry: The Fundamental Difference</h2>
          <p className="mb-4 text-slate-700">
            Before diving into specific formats, it is crucial to understand the two main categories of 3D data representation:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-slate-900 font-bold bg-slate-200/60 px-1.5 py-0.5 rounded border border-slate-300">Mesh Geometry (Polygonal / Tessellated):</strong> <span className="text-slate-800">Uses flat triangles or polygons to approximate curved surfaces. Best for 3D printing, CGI, game development, and organic modeling.</span> <em className="text-slate-500">(Examples: STL, OBJ, FBX)</em>
            </li>
            <li>
              <strong className="text-slate-900 font-bold bg-slate-200/60 px-1.5 py-0.5 rounded border border-slate-300">Parametric CAD Geometry (NURBS / Solid Modeling):</strong> <span className="text-slate-800">Uses mathematical equations to define exact curves, circles, and boundary surfaces. Essential for mechanical engineering, manufacturing, CNC machining, and architectural drafting.</span> <em className="text-slate-500">(Examples: STEP, IGES)</em>
            </li>
          </ul>
        </section>

        {/* STEP Format */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            1. STEP (.stp / .step) — The Universal CAD Standard
          </h2>
          <p className="mb-4">
            STEP (Standard for the Exchange of Product Model Data) is the gold standard for transferring 3D CAD data across different engineering software like AutoCAD, iDECAD, SolidWorks, and Fusion 360.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-slate-900 font-bold">True Mathematical Precision:</strong> Retains exact curves and cylindrical geometry without converting them into flat triangles.
            </li>
            <li>
              <strong className="text-slate-900 font-bold">Feature & Assembly Data:</strong> Can store complex assembly structures, individual part layers, and metadata.
            </li>
            <li>
              <strong className="text-slate-900 font-bold">Software Interoperability:</strong> Supported by virtually every professional CAD and BIM application.
            </li>
          </ul>
        </section>

        {/* IGES Format */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            2. IGES (.igs / .iges) — The Legacy Engineering Format
          </h2>
          <p className="mb-4">
            Initial Graphics Exchange Specification (IGES) is one of the oldest vendor-neutral formats in computer graphics, dating back to the late 1970s.
          </p>
          <p>
            While it transfers 3D wireframes and surface geometry reliably, it lacks modern solid data models. IGES often transfers models as &quot;hollow surface shells&quot; rather than solid bodies, requiring manual surface stitching in modern CAD tools.
          </p>
        </section>

        {/* STL Format */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            3. STL (.stl) — The 3D Printing Workhorse
          </h2>
          <p className="mb-4">
            STL (Stereolithography) is the undisputed standard for 3D printing slicers (e.g., Cura, PrusaSlicer). It represents 3D surfaces as a continuous mesh of interconnected triangles.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-slate-900 font-bold">Universal Slicer Compatibility:</strong> Every 3D printer software natively supports STL files.
            </li>
            <li>
              <strong className="text-slate-900 font-bold">No Color or Scale:</strong> Cannot store materials, colors, or unit scales (relies on slicer default units).
            </li>
          </ul>
        </section>

        {/* OBJ Format */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            4. OBJ (.obj) — Flexible Graphics & Textures
          </h2>
          <p className="mb-4">
            Developed by Wavefront Technologies, OBJ is an open-source mesh format widely used in digital visualization, Blender, and 3D graphics applications.
          </p>
          <p>
            Unlike STL, OBJ pairs with an external <code className="text-blue-700 bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded font-mono font-bold">.MTL</code> (Material Template Library) file to map colors and image textures, making it ideal for rendering pipelines.
          </p>
        </section>

        {/* FBX Format */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            5. FBX (.fbx) — Animation & Game Engines
          </h2>
          <p>
            Owned by Autodesk, FBX (Filmbox) is the industry standard for interchange between 3D animation tools and real-time rendering engines like Unreal Engine and Unity. It stores geometry, UV maps, materials, lighting, skeletal rigs, and animation keyframes in a single file.
          </p>
        </section>

        {/* Comparison Matrix Table */}
        <section className="my-10 overflow-x-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
            Quick Reference Comparison Matrix
          </h2>
          <table className="w-full text-left text-sm text-slate-800 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200 font-bold">Format</th>
                <th className="p-3 border-r border-slate-200 font-bold">Type</th>
                <th className="p-3 border-r border-slate-200 font-bold">Primary Use Case</th>
                <th className="p-3 border-r border-slate-200 font-bold">Textures?</th>
                <th className="p-3 font-bold">Exact Curves?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">STEP</td>
                <td className="p-3 border-r border-slate-200">Parametric CAD</td>
                <td className="p-3 border-r border-slate-200">Mechanical Design & CNC</td>
                <td className="p-3 border-r border-slate-200 text-red-600 font-bold">No</td>
                <td className="p-3 text-emerald-600 font-bold">Yes</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">IGES</td>
                <td className="p-3 border-r border-slate-200">Surface CAD</td>
                <td className="p-3 border-r border-slate-200">Legacy CAD Interchange</td>
                <td className="p-3 border-r border-slate-200 text-red-600 font-bold">No</td>
                <td className="p-3 text-emerald-600 font-bold">Yes</td>
              </tr>
              <tr className="border-b border-slate-200 bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">STL</td>
                <td className="p-3 border-r border-slate-200">Mesh</td>
                <td className="p-3 border-r border-slate-200">3D Printing & Slicing</td>
                <td className="p-3 border-r border-slate-200 text-red-600 font-bold">No</td>
                <td className="p-3 text-red-600 font-bold">No</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">OBJ</td>
                <td className="p-3 border-r border-slate-200">Mesh</td>
                <td className="p-3 border-r border-slate-200">3D Graphics & Rendering</td>
                <td className="p-3 border-r border-slate-200 text-emerald-600 font-bold">Yes</td>
                <td className="p-3 text-red-600 font-bold">No</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">FBX</td>
                <td className="p-3 border-r border-slate-200">Complex Scene</td>
                <td className="p-3 border-r border-slate-200">Animation & Game Engines</td>
                <td className="p-3 border-r border-slate-200 text-emerald-600 font-bold">Yes</td>
                <td className="p-3 text-red-600 font-bold">No</td>
              </tr>
            </tbody>
          </table>
        </section>

      </article>

      {/* Call to Action Card */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl my-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Explore Engineering Tools</h3>
          <p className="text-slate-600 text-sm font-medium">
            Convert pressure, length, and technical units instantly with our free online calculator.
          </p>
        </div>
        <Link 
          href="/tools/unit-converter"
          className="bg-blue-600 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-blue-700 transition shadow-md whitespace-nowrap"
        >
          Open Unit Converter &rarr;
        </Link>
      </div>
    </main>
  );
}