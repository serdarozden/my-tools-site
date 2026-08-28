import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unity Export Optimization Guide: Scale, FBX & Prefabs | serdarozden.com',
  description: 'Master exporting 3D assets from Blender to Unity without scaling errors, broken materials, or flipped normals. Complete pipeline for game developers.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Geri Dönüş Linki */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Kategori ve Okuma Süresi */}
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              3D & Game Dev
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          {/* SEO Dostu Ana Başlık (H1) */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unity Export Optimization: Scale, FBX Settings & Pipeline Fixes
          </h1>

          {/* Özet / Açıklama */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to seamlessly transfer 3D models, UV maps, materials, and animations from Blender into Unity while avoiding common scale factor glitches and rotation misalignments.
          </p>

          {/* İçerik Gövdesi */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Transferring 3D assets between Blender and game engines like Unity can quickly become a headache if export configurations are mismanaged. Common issues such as 90-degree axis rotations, incorrect scale multipliers, lost texture assignments, and inverted face normals frequently disrupt development pipelines.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Fixing the Scale and Rotation Mismatch
            </h2>
            <p>
              Unity utilizes a Y-up coordinate system, whereas Blender operates natively on Z-up. When exporting via standard FBX defaults, Unity often applies a 90-degree rotation on the X-axis to compensate. To ensure your models load cleanly with <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">(0,0,0)</code> transform rotations, always apply all transforms in Blender (<kbd className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded text-xs font-mono">Ctrl + A</kbd> &rarr; <em className="text-white">All Transforms</em>) and enable <strong className="text-white">Apply Transform</strong> in your FBX export settings.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Optimizing FBX Export Presets
            </h2>
            <p>
              For clean asset pipeline management, create an explicit FBX Export Preset inside Blender with the following core configurations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-200">
              <li><strong className="text-white">Forward Axis:</strong> -Z Forward</li>
              <li><strong className="text-white">Up Axis:</strong> Y Up</li>
              <li><strong className="text-white">Apply Unit:</strong> Enabled (prevents 0.01 scale issues)</li>
              <li><strong className="text-white">Geometry:</strong> Set Smoothing to <em>Face</em> or <em>Normals Only</em></li>
            </ul>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Handling Materials and UV Maps
            </h2>
            <p>
              Blender’s complex procedural shader nodes will not automatically convert into Unity’s Universal Render Pipeline (URP) or High Definition Render Pipeline (HDRP). Always bake your procedural textures into standard PBR maps (Albedo, Normal, Roughness, Metallic) before exporting. Ensure your mesh has a clean UV layout with no overlapping faces unless intentionally mirrored.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              Best Practices for Production Prefabs
            </h2>
            <p>
              Once your optimized FBX files land in Unity’s <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Assets/</code> folder, immediately convert them into native Unity Prefabs. This decouples scene instances from raw 3D files, ensuring future geometry updates in Blender seamlessly propagate across your entire game project without losing component references.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}