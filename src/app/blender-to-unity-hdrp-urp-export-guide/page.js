import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unity Export Guide: URP & HDRP Workflow | serdarozden.com',
  description: 'Learn how to export 3D models from Blender to Unity using FBX and GLTF formats. Optimize materials, UV sets, and rig scaling for URP and HDRP pipelines.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Unity Engine Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unity Export Guide: Optimizing Assets for URP and HDRP
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Master the pipeline of moving 3D static assets and rigged meshes from Blender into Unity without axis flipping, scale mismatch, or broken PBR textures.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Moving assets between Blender (Right-Handed, Z-Up) and Unity (Left-Handed, Y-Up) often introduces inverted scale transforms or flipped normals if the FBX export settings are improperly configured.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Fixing Coordinate Axes and Scale Multipliers
            </h2>
            <p>
              When exporting an FBX file from Blender, check <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Apply Transform</code> under the Main tab, and set <strong className="text-white">Forward to -Z Forward</strong> and <strong className="text-white">Up to Y Up</strong>. This guarantees that your model transforms inside Unity read 0,0,0 rotation angles instead of -90 degree offsets on the X-axis.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Material Channel Packing for URP and HDRP
            </h2>
            <p>
              Unity’s Universal Render Pipeline (URP) uses Metallic Glossiness channel packing, whereas the High Definition Render Pipeline (HDRP) expects Mask Maps (Red: Metallic, Green: Ambient Occlusion, Blue: Detail Mask, Alpha: Smoothness). Bake your Blender node setups into standardized RGB texture channels before assigning them to Unity PBR shaders.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Rigging and BlendShape Preservation
            </h2>
            <p>
              Ensure all skeletal armatures have their transforms applied (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Ctrl + A</code> in Blender) prior to export. Under the Animation tab in the FBX exporter, enable <strong className="text-white">Export Deform Bones Only</strong> to eliminate redundant control rig helper bones inside Unity’s Mecanim animator.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}