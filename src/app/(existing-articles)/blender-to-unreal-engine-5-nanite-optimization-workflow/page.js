import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unreal Engine 5 Nanite Optimization & FBX Export | serdarozden.com',
  description: 'Master exporting 3D assets from Blender to Unreal Engine 5. Optimize meshes for Nanite, configure FBX smoothing groups, tangents, and collision bounds.',
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
              Game Engine Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unreal Engine 5: Nanite Mesh Optimization & FBX Setup
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Streamline high-density mesh exports from Blender into Unreal Engine 5 while preserving hard surface shading, collision hulls, and real-time Nanite rendering performance.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Unreal Engine 5’s Nanite virtualized geometry system eliminates traditional LOD creation, but exporting meshes from Blender still requires precise unit matching and transform freezes to prevent shading seams and physics bugs.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. FBX Export Settings: Smoothing Groups and Tangent Space
            </h2>
            <p>
              When exporting FBX files from Blender, set Geometry Smoothing to <strong className="text-white">Face</strong> or <strong className="text-white">Normals Only</strong> to prevent split vertex normals. Ensure <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Apply Transform</code> is enabled to lock local rotation matrices to match Unreal Engine's coordinate system (+Z Up, +X Forward).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Nanite Fallback Meshes and Material Slot Discipline
            </h2>
            <p>
              Nanite handles millions of polygons seamlessly, but static meshes still require clean material IDs. Keep material slots under 4 per object to minimize draw calls, and configure Nanite Fallback Relative Error in Unreal Engine to generate accurate low-poly proxies for legacy platforms.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Generating Custom Collision Hulls in Blender
            </h2>
            <p>
              Auto-generated convex collisions in UE5 can cause player snagging. Create custom collision meshes inside Blender using the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">UCX_MeshName</code> naming convention; Unreal Engine will automatically parse these geometry boxes as physical collision hulls upon import.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}