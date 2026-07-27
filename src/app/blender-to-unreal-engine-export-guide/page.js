import Link from 'next/link';

export default function BlenderToUe5ExportGuidePage() {
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
              3D & Game Dev
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            How to Properly Export 3D Models from Blender to Unreal Engine 5
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Transferring 3D assets from Blender to Unreal Engine 5 (UE5) often leads to common pipeline headaches: incorrect model scale, flipped bone axes, missing textures, or broken collisions. This guide covers the industry-standard FBX settings and best practices to ensure seamless asset integration into UE5.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* 1. Scene Unit & Scale Calibration */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. Scene Unit & Scale Calibration
            </h2>
            <p className="text-slate-100">
              Unreal Engine uses Centimeters as its default length unit, whereas Blender defaults to Meters.
            </p>
            
            <ul className="space-y-3 my-4 pl-4 border-l-2 border-blue-500">
              <li className="text-slate-100">
                Go to Blender's <strong className="text-white font-bold">Scene Properties &gt; Units</strong>.
              </li>
              <li className="text-slate-100">
                Set Unit Scale to <strong className="text-white font-bold">0.01</strong> if working strictly in UE centimeters, OR keep Unit Scale at <strong className="text-white font-bold">1.0</strong> and apply Transform Scaling (<code className="bg-zinc-900 text-blue-400 border border-zinc-700 px-2 py-0.5 rounded text-sm font-mono">Ctrl + A &gt; Apply All Transforms</code>) prior to exporting.
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 my-4">
              <p className="text-sm font-medium text-slate-100">
                <strong className="text-blue-400 font-bold uppercase tracking-wide mr-2">Crucial:</strong> 
                Always make sure your mesh origin is set to <code className="text-blue-400 font-mono">(0, 0, 0)</code> world space before export.
              </p>
            </div>
          </section>

          {/* 2. Fixing Forward & Up Axis Discrepancies */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. Fixing Forward & Up Axis Discrepancies
            </h2>
            <p className="text-slate-100">
              Blender operates on a Z-Up, Right-Handed coordinate system, while Unreal Engine uses a Z-Up, Left-Handed coordinate system.
            </p>
            <p className="text-slate-100">
              When exporting an FBX file from Blender, configure the transform settings as follows:
            </p>

            <ul className="space-y-2 my-4 pl-4 border-l-2 border-blue-500 font-mono text-sm sm:text-base text-slate-100">
              <li><strong className="text-white font-bold font-sans">Forward Axis:</strong> -Z Forward (or Y Forward depending on your asset direction)</li>
              <li><strong className="text-white font-bold font-sans">Up Axis:</strong> Z Up</li>
            </ul>

            <p className="text-slate-100">
              Check the option <strong className="text-white font-bold">"Apply Transform"</strong> in the FBX Export dialogue to prevent unexpected rotation offsets upon importing to UE5.
            </p>
          </section>

          {/* 3. Geometry Smoothing & Custom Normals */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              3. Geometry Smoothing & Custom Normals
            </h2>
            <p className="text-slate-100">
              Unreal Engine will display "No Smoothing Group Information" warnings if geometry export settings are misconfigured.
            </p>

            <ul className="space-y-3 my-4 pl-4 border-l-2 border-blue-500">
              <li className="text-slate-100">
                In Blender's FBX Export panel, expand the <strong className="text-white font-bold">Geometry</strong> tab.
              </li>
              <li className="text-slate-100">
                Change Smoothing from <strong className="text-white font-bold">Normals Only</strong> to <strong className="text-white font-bold">Face</strong> or <strong className="text-white font-bold">Edge</strong>.
              </li>
              <li className="text-slate-100">
                Ensure <strong className="text-white font-bold">"Apply Modifiers"</strong> is checked so Subdivision Surface or Bevel modifiers bake directly into the static mesh.
              </li>
            </ul>
          </section>

          {/* 4. Material Maps & PBR Texture Export */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              4. Material Maps & PBR Texture Export
            </h2>
            <p className="text-slate-100">
              Blender's complex procedural shader nodes (like ColorRamp or Noise Texture) do not translate directly into FBX format.
            </p>
            <p className="text-slate-100">
              To ensure materials import correctly into Unreal Engine 5, use simple <strong className="text-white font-bold">Principled BSDF</strong> nodes connected directly to image texture files (Base Color, Normal, Roughness), or bake procedural nodes into image maps before exporting.
            </p>
          </section>

          {/* FBX Export Preset Summary Tablosu */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              FBX Export Preset Summary for UE5
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 my-6">
              <table className="w-full text-left text-sm text-slate-200">
                <thead className="bg-zinc-900 text-white font-bold border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Setting Option</th>
                    <th className="p-4">Recommended Value</th>
                    <th className="p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">Selected Objects</td>
                    <td className="p-4 text-blue-400 font-semibold">Checked</td>
                    <td className="p-4 text-slate-200">Prevents exporting cameras, lights, and unwanted meshes.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">Object Types</td>
                    <td className="p-4 text-blue-400 font-semibold">Mesh (Armature if rigged)</td>
                    <td className="p-4 text-slate-200">Isolates 3D geometric data.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">Scale</td>
                    <td className="p-4 text-blue-400 font-semibold">1.0 / All Local</td>
                    <td className="p-4 text-slate-200">Maintains 1:1 scale matching UE centimeters.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">Smoothing</td>
                    <td className="p-4 text-blue-400 font-semibold">Face / Edge</td>
                    <td className="p-4 text-slate-200">Eliminates normal import warnings in UE5.</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/50 transition-colors">
                    <td className="p-4 font-bold text-white">Add Leaf Bones</td>
                    <td className="p-4 text-blue-400 font-semibold">Unchecked</td>
                    <td className="p-4 text-slate-200">Prevents extra unnecessary bone tips in rigged skeletons.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Diğer Makalelere Yönlendirme Kartı */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10 shadow-2xl">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Exploring CAD & 3D Formats?</h4>
              <p className="text-sm text-slate-200">
                Check out our comprehensive guide on STL, OBJ, STEP, IGES, and FBX file formats.
              </p>
            </div>
            <Link 
              href="/blog/cad-and-3d-file-formats-guide" 
              className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-600/30"
            >
              Read Guide &rarr;
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}