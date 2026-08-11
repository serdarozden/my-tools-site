import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unreal Engine 5 Animation Rigging Export | serdarozden.com',
  description: 'Export skeletal meshes, armatures, and complex character animations from Blender to Unreal Engine 5. Fix bone scale issues, root motion, and Control Rig setups.',
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
              Character & Animation Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unreal Engine 5: Character Rigging & Animation Export Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to export skeletal rigs and NLA animation tracks from Blender into Unreal Engine 5 without scale anomalies or broken bone hierarchies.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Transferring character rigs and skeletal animations from Blender to Unreal Engine 5 can trigger bone axis misalignment or leaf bone clutter if unit scales and export flags are misconfigured.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Armature Hierarchy and Root Bone Setup
            </h2>
            <p>
              Unreal Engine requires a clean single Root bone at position 0,0,0. Ensure your Blender armature has its root bone unparented from non-deforming control shapes. Set scene units to Metric with a Unit Scale of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">0.01</code> to match UE5's centimeter scale seamlessly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Disabling Leaf Bones in FBX Exporter
            </h2>
            <p>
              In Blender's FBX export menu, under the Armature tab, uncheck <strong className="text-white">Add Leaf Bones</strong>. Leaving this enabled appends extra dummy bones to the end of every bone chain, which bloats VRAM and interferes with UE5 Control Rig IK solvers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Exporting NLA Action Strips & Root Motion
            </h2>
            <p>
              Push animation clips to Blender’s Non-Linear Animation (NLA) editor as distinct Action tracks. During FBX export, check <strong className="text-white">Bake Animation</strong> and <strong className="text-white">NLA Strips</strong> to import multiple character animations (Walk, Run, Idle) into Unreal Engine 5 in a single FBX file.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}