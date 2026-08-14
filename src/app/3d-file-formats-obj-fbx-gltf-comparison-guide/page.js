import Link from 'next/link';

export const metadata = {
  title: '3D File Formats Compared: OBJ vs FBX vs glTF Guide | serdarozden.com',
  description: 'Comprehensive comparison of OBJ, FBX, and glTF 3D model formats. Learn which format to choose for game engines, web 3D, and architectural visualization.',
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
              3D File Standards
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D Model File Formats: OBJ vs FBX vs glTF Technical Breakdown
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand the architectural differences between Wavefront OBJ, Autodesk FBX, and Khronos glTF/GLB to optimize asset pipelines across WebGL, Unreal, and Unity.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Selecting the appropriate 3D interchange format directly impacts memory usage, material fidelity, and animation support across graphics pipelines. Each file format serves distinct operational requirements.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. OBJ (Wavefront): Static Geometry &amp; Universal Compatibility
            </h2>
            <p>
              As a legacy ASCII/Binary text format, <strong className="text-white">OBJ</strong> stores vertex coordinates, UV coordinates, and face topology alongside external <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.MTL</code> material definitions. It lacks support for skeletal animation, scene hierarchies, or modern PBR texture maps.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. FBX (Autodesk Filmbox): Industry Standard for Rigging and Animation
            </h2>
            <p>
              <strong className="text-white">FBX</strong> remains the proprietary backbone for complex DCC workflows (Blender to Maya, 3ds Max, and Unreal Engine). It robustly packages geometry, armature skeletal hierarchies, animation curves, skinning weights, and basic material channels into a unified binary container.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. glTF / GLB: The Transmission Format for WebGL and Real-Time Engine Loading
            </h2>
            <p>
              Developed by the Khronos Group, <strong className="text-white">glTF 2.0</strong> is optimized for rapid runtime decoding. Storing geometry as raw binary buffers alongside JSON metadata, glTF natively supports metallic-roughness PBR materials, skeletal animations, and Draco compression for low-bandwidth WebGL applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}