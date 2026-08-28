import Link from 'next/link';

export const metadata = {
  title: 'Substance 3D Painter to Real-Time Engines UDIM Workflow | serdarozden.com',
  description: 'Master UDIM multi-tile texture workflows in Substance 3D Painter. Export high-resolution texel density maps to Blender and Unreal Engine 5 efficiently.',
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
              AAA Texture Pipelines
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Substance 3D Painter UDIM Workflow: High-Resolution Texturing for Unreal Engine
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Maintain uniform texel density across large Hero assets using multi-tile UDIM arrays from Substance 3D Painter into Blender and Unreal Engine 5.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Complex game hero assets and architectural props often require higher texture resolution than a single 4K map can provide. The UDIM (UV Dimension) tiling standard allows artists to distribute UV islands across multiple texture tiles for extreme close-up detail.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Laying Out UDIM UV Tiles Across 1001-1004 Indices
            </h2>
            <p>
              In Blender or Maya, organize UV islands logically across sequential grid tiles starting at tile 1001. Ensure consistent texel density across all tiles so that detailed micro-surface pores and edge wear render uniformly in Substance Painter.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Exporting Tile Sequences with Custom Naming Presets
            </h2>
            <p>
              When exporting PBR map sets from Substance 3D Painter, configure export templates using the{' '}
              <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">
                $mesh_$textureSet_&lt;udim&gt;
              </code>{' '}
              tag format. This generates standardized image sequences that real-time engines parse automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Importing UDIM Arrays into Unreal Engine 5 Virtual Textures
            </h2>
            <p>
              Enable <strong className="text-white">Virtual Texturing (VT)</strong> in Unreal Engine 5 project settings. When importing UDIM texture sets, UE5 collapses the image array into a single Virtual Texture asset, optimizing VRAM consumption during rendering.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}