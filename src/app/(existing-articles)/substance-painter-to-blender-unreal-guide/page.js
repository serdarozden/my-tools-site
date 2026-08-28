import Link from 'next/link';

export const metadata = {
  title: 'Substance Painter to Blender & Unreal Engine Export Guide | serdarozden.com',
  description: 'Master PBR texture exports from Substance Painter into Blender and Unreal Engine 5. Fix metallic/roughness packing, normal map inverted Y channels, and UV setups.',
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
              Texturing & PBR Workflows
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Substance Painter to Blender & Unreal Engine 5: PBR Texture Setup Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Step-by-step workflow for exporting metallic/roughness packed textures from Adobe Substance 3D Painter and hooking them up correctly in Blender Cycles and Unreal Engine.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Achieving photorealistic materials across different real-time and offline render engines requires a strict Physically Based Rendering (PBR) texture pipeline. Misconfigured export presets often lead to inverted normal maps or incorrect roughness reflections.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. DirectX vs. OpenGL Normal Maps
            </h2>
            <p>
              One of the most common texturing bugs is flipped green channel normals. <strong className="text-white">Unreal Engine 5 uses DirectX</strong> (Y-), while <strong className="text-white">Blender uses OpenGL</strong> (Y+). Always match your export preset output in Substance Painter to avoid seam artifacts and inverted lighting shadows.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Channel Packing (ORM Maps for Real-Time)
            </h2>
            <p>
              To optimize memory in game engines, pack <strong className="text-white">Occlusion (Red), Roughness (Green), and Metallic (Blue)</strong> into a single RGB texture map (ORM). In Unreal Engine, set the texture compression to <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Masks</code> and uncheck SRGB.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Connecting Textures in Blender Principled BSDF
            </h2>
            <p>
              In Blender's Shader Editor, ensure non-color texture maps (Roughness, Metallic, Normal, Displacement) are set to <em className="text-white">Non-Color Data</em> in the image texture node. Only the Base Color (Albedo) map should remain in SRGB color space.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}