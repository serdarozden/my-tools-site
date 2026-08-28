import Link from 'next/link';

export const metadata = {
  title: 'Blender to Unity Optimization: Draw Calls, LODs & Texture Packing | serdarozden.com',
  description: 'Optimize Blender 3D models for Unity game engine. Reduce draw calls, create LOD chains, combine mesh materials, and optimize textures.',
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
              3D Optimization & Unity
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender to Unity Optimization: Reducing Draw Calls & Mesh Polycounts
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Essential optimization techniques for exporting 3D assets from Blender to Unity without crashing real-time frame rates or inflating memory budgets.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              High polycounts and unoptimized material assignments can severely impact real-time rendering performance in Unity. Applying proper mesh reduction, texture atlasing, and LOD (Level of Detail) setups in Blender guarantees smooth frame rates across desktop, mobile, and Web3 interactive environments.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Combining Material Slots to Minimize Draw Calls
            </h2>
            <p>
              Every unique material assigned to a mesh generates an additional draw call on the GPU. Instead of using multiple individual shader slots, combine your textures into a single texture atlas in Blender, allowing Unity to render complex props in a single draw call pass.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Setting Up LOD (Level of Detail) Groups
            </h2>
            <p>
              Name your meshes in Blender using Unity’s automated LOD naming convention: <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ModelName_LOD0</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ModelName_LOD1</code>, and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ModelName_LOD2</code>. Upon FBX import, Unity automatically groups these meshes into a responsive LOD Group component.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Cleaning Vertex Normals and Tangents
            </h2>
            <p>
              Unnecessary vertex attributes inflate asset file sizes. When exporting FBX files from Blender, uncheck custom normals and tangents if your Unity shaders utilize standard procedural bump calculations, keeping asset bundles lightweight and fast-loading.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}