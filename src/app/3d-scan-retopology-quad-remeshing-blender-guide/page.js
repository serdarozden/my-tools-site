import Link from 'next/link';

export const metadata = {
  title: '3D Scan Retopology & Quad Remeshing in Blender | serdarozden.com',
  description: 'Learn how to convert raw photogrammetry and 3D scan triangle meshes into clean quad topology using Blender, Shrinkwrap modifiers, and automated remeshers.',
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
              3D Scan & Asset Cleanup
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Scan Retopology: Converting Dense Photogrammetry to Production Quads
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Transform heavy, unstructured 3D scan meshes into clean quad models ready for rigging, UV unwrapping, and real-time engine deployment.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Photogrammetry and laser 3D scans deliver photorealistic real-world detail, but their raw outputs consist of millions of non-manifold triangles. Converting these raw scans into quad topology is essential for clean UV unwrapping and animation deformation.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Preparing Mesh Geometry and Decimation Pre-Passes
            </h2>
            <p>
              Before retopologizing, clean the scan data using Blender’s Sculpt Mode <strong className="text-white">Smooth</strong> and <strong className="text-white">Voxel Remesh</strong> tools to close surface holes. Apply a light Decimate modifier to reduce polygon density without losing key anatomical or hard-surface silhouette details.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Manual Retopology with Snap-to-Face and Shrinkwrap
            </h2>
            <p>
              Enable <strong className="text-white">Face Project Snapping</strong> with <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Align Rotation to Target</code> enabled. Lay quad poly-strips over key deformation zones, then apply a <strong className="text-white">Shrinkwrap Modifier</strong> targeted to the original high-poly scan mesh to project surface contours perfectly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Baking High-Poly Color and Surface Details to Normal Maps
            </h2>
            <p>
              Unwrap the clean quad mesh and use Cycles <strong className="text-white">Selected to Active</strong> texture baking to transfer vertex colors and high-frequency surface noise from the raw scan onto low-poly Normal and Albedo texture maps.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}