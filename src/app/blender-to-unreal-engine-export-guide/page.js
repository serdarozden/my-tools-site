import Link from 'next/link';

export const metadata = {
  title: 'How to Export 3D Models from Blender to Unreal Engine 5 (FBX & GLTF Best Practices)',
  description: 'Master the asset pipeline between Blender and Unreal Engine 5. Learn how to fix scale issues, axis orientation, UV mapping, and material export bugs.',
};

export default function BlenderToUnrealGuide() {
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
            3D & Game Dev Workflow
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium">6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          How to Properly Export 3D Models from Blender to Unreal Engine 5
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          Transferring 3D assets from Blender to Unreal Engine 5 (UE5) often leads to common pipeline headaches: incorrect model scale, flipped bone axes, missing textures, or broken collisions. This guide covers the industry-standard FBX settings and best practices to ensure seamless asset integration into UE5.
        </p>
      </header>

      {/* Article Body */}
      <article className="text-slate-700 leading-relaxed space-y-8 text-base">
        
        {/* Step 1: Scale & Units */}
        <section className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Scene Unit & Scale Calibration</h2>
          <p className="mb-4 text-slate-700">
            Unreal Engine uses <strong className="text-slate-900 font-bold bg-slate-200/70 px-1.5 py-0.5 rounded border border-slate-300">Centimeters</strong> as its default length unit, whereas Blender defaults to <strong className="text-slate-900 font-bold bg-slate-200/70 px-1.5 py-0.5 rounded border border-slate-300">Meters</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Go to Blender&apos;s <strong className="text-slate-900 font-bold">Scene Properties &gt; Units</strong>.
            </li>
            <li>
              Set <strong className="text-slate-900 font-bold">Unit Scale to 0.01</strong> if working strictly in UE centimeters, OR keep Unit Scale at 1.0 and apply <strong className="text-slate-900 font-bold">Transform Scaling (Ctrl + A &gt; Apply All Transforms)</strong> prior to exporting.
            </li>
            <li>
              <span className="text-red-600 font-bold">Crucial:</span> Always make sure your mesh origin is set to <code className="text-blue-700 bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded font-mono font-bold">(0, 0, 0)</code> world space before export.
            </li>
          </ul>
        </section>

        {/* Step 2: Axis Orientation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            2. Fixing Forward & Up Axis Discrepancies
          </h2>
          <p className="mb-4">
            Blender operates on a <strong className="text-slate-900 font-bold">Z-Up, Right-Handed</strong> coordinate system, while Unreal Engine uses a <strong className="text-slate-900 font-bold">Z-Up, Left-Handed</strong> coordinate system.
          </p>
          <p className="mb-4">
            When exporting an FBX file from Blender, configure the transform settings as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-900 font-bold">Forward Axis:</strong> -Z Forward (or Y Forward depending on your asset direction)</li>
            <li><strong className="text-slate-900 font-bold">Up Axis:</strong> Z Up</li>
            <li>Check the option <strong className="text-slate-900 font-bold">&quot;Apply Transform&quot;</strong> in the FBX Export dialogue to prevent unexpected rotation offsets upon importing to UE5.</li>
          </ul>
        </section>

        {/* Step 3: Geometry & Smoothing */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            3. Geometry Smoothing & Custom Normals
          </h2>
          <p className="mb-4">
            Unreal Engine will display &quot;No Smoothing Group Information&quot; warnings if geometry export settings are misconfigured.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              In Blender&apos;s FBX Export panel, expand the <strong className="text-slate-900 font-bold">Geometry</strong> tab.
            </li>
            <li>
              Change <strong className="text-slate-900 font-bold">Smoothing</strong> from <em>Normals Only</em> to <strong className="text-slate-900 font-bold">Face</strong> or <strong className="text-slate-900 font-bold">Edge</strong>.
            </li>
            <li>
              Ensure <strong className="text-slate-900 font-bold">&quot;Apply Modifiers&quot;</strong> is checked so Subdivision Surface or Bevel modifiers bake directly into the static mesh.
            </li>
          </ul>
        </section>

        {/* Step 4: Materials & Textures */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
            4. Material Maps & PBR Texture Export
          </h2>
          <p className="mb-4">
            Blender&apos;s complex procedural shader nodes (like ColorRamp or Noise Texture) do <strong className="text-slate-900 font-bold">not</strong> translate directly into FBX format.
          </p>
          <p>
            To ensure materials import correctly into Unreal Engine 5, use simple <strong className="text-slate-900 font-bold">Principled BSDF</strong> nodes connected directly to image texture files (Base Color, Normal, Roughness), or bake procedural nodes into image maps before exporting.
          </p>
        </section>

        {/* Recommended Export Settings Table */}
        <section className="my-10 overflow-x-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
            FBX Export Preset Summary for UE5
          </h2>
          <table className="w-full text-left text-sm text-slate-800 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200 font-bold">Setting Option</th>
                <th className="p-3 border-r border-slate-200 font-bold">Recommended Value</th>
                <th className="p-3 font-bold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Selected Objects</td>
                <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">Checked</td>
                <td className="p-3">Prevents exporting cameras, lights, and unwanted meshes.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Object Types</td>
                <td className="p-3 border-r border-slate-200 font-semibold">Mesh (Armature if rigged)</td>
                <td className="p-3">Isolates 3D geometric data.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Scale</td>
                <td className="p-3 border-r border-slate-200 font-semibold">1.0 / All Local</td>
                <td className="p-3">Maintains 1:1 scale matching UE centimeters.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Smoothing</td>
                <td className="p-3 border-r border-slate-200 font-semibold text-blue-700">Face / Edge</td>
                <td className="p-3">Eliminates normal import warnings in UE5.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Add Leaf Bones</td>
                <td className="p-3 border-r border-slate-200 font-bold text-red-600">Unchecked</td>
                <td className="p-3">Prevents extra unnecessary bone tips in rigged skeletons.</td>
              </tr>
            </tbody>
          </table>
        </section>

      </article>

      {/* Call to Action Card */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl my-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Explore CAD & 3D Formats</h3>
          <p className="text-slate-600 text-sm font-medium">
            Learn more about the technical differences between STEP, IGES, STL, and FBX file extensions.
          </p>
        </div>
        <Link 
          href="/cad-3d-file-formats-guide"
          className="bg-blue-600 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-blue-700 transition shadow-md whitespace-nowrap"
        >
          View CAD Formats Guide &rarr;
        </Link>
      </div>
    </main>
  );
}