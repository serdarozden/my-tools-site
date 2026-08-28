import Link from 'next/link';

export const metadata = {
  title: 'OpenVDB Volumetric Baking Guide: Exporting 3D Smoke & Fire for Real-Time | serdarozden.com',
  description: 'Convert heavy OpenVDB volumetric simulations into optimized 3D Texture Atlases for WebGL, Unreal Engine 5, and Unity realtime rendering pipelines.',
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
              3D Rendering & VFX
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            OpenVDB to Realtime Pipeline: Baking Volumetric Data into 3D Texture Atlases
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Bridge the gap between dense offline fluid simulations and high-frame-rate web/game engines using volumetric texture slicing and raymarching shaders.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Offline VDB smoke and fire caches frequently exceed gigabytes per animation frame. To render these effects in real-time browsers or mobile runtimes, dense voxel grids must be baked into 2D tile arrays or 3D volume textures.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Density and Temperature Grid Extraction
            </h2>
            <p>
              Inside Blender or Houdini, isolate the raw <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">density</code> and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">temperature</code> channels from your VDB cache. Normalizing scalar values into a 0.0 to 1.0 range ensures lossless compression during texture channel packing (e.g., Red = Density, Green = Fire/Temperature).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Generating 2D Flipbook Spritesheets vs. 3D Volume Textures
            </h2>
            <p>
              For WebGL applications, slice the 3D voxel grid into a 2D tile matrix (e.g., an 8x8 grid of 64x64 pixel slices forming a 512x512 PNG). A custom GLSL fragment shader can then reconstruct the volumetric bounding box via single-pass raymarching.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Shader Integration in Real-Time Viewports
            </h2>
            <p>
              Assign the packed volume texture to a simple unit cube in your real-time scene. Sample step sizes along the ray direction to balance visual fidelity against GPU fragment shading overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}