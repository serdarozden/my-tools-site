import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unity FBX Export Settings & Workflow Guide | serdarozden.com',
  description: 'Optimal FBX export configuration from Blender to Unity. Fix axis rotation mismatches, scale issues, material assignments, and animation bone orientation.',
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
              Pipeline Integration
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unity Export Settings: Seamless FBX Integration
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Configure Blender&apos;s FBX exporter to prevent -90 degree X-axis rotations, scale discrepancies, and broken armature rig hierarchies when importing assets into Unity.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Exporting 3D assets from Blender (Z-up, Right-Handed coordinate system) into Unity (Y-up, Left-Handed coordinate system) frequently results in unwanted object rotations and scaling errors if default settings are used.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Fixing the -90 Degree Rotation Mismatch
            </h2>
            <p>
              In Blender&apos;s FBX export dialog under the Transform tab, enable <strong className="text-white">Apply Transform</strong> (experimental) or set Forward to <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">-Z Forward</code> and Up to <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Y Up</code>. This ensures objects land in Unity with native <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">(0, 0, 0)</code> rotation transforms.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Unit Scale Matching (Metric Centimeters)
            </h2>
            <p>
              Unity&apos;s physics system treats 1 unit as 1 meter. Ensure Blender scene units are set to Metric with Scale 1.0. Check <strong className="text-white">Apply Unit</strong> in the FBX export settings to avoid 100x scale factor glitches in Unity&apos;s Inspector window.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Armature Rig &amp; Leaf Bone Options for Character Animation
            </h2>
            <p>
              When exporting rigged meshes with armatures, uncheck <strong className="text-white">Add Leaf Bones</strong> in the Armature tab. This prevents Blender from creating extra dummy tip bones that clutter Unity&apos;s Humanoid avatar bone mapping.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}