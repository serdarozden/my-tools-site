import Link from 'next/link';

export const metadata = {
  title: 'Substance 3D Painter to Unreal Engine 5 PBR Export | serdarozden.com',
  description: 'Export PBR textures from Substance 3D Painter to Unreal Engine 5. Master packed ORM maps, ACES color spaces, and master material setup in UE5.',
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
              PBR Texturing Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Substance 3D Painter to Unreal Engine 5: PBR Texture Packing Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Optimize VRAM usage and material draw calls in Unreal Engine 5 using packed Occlusion-Roughness-Metallic (ORM) texture maps exported from Substance Painter.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Importing individual 4K resolution image files for Roughness, Metallic, and Ambient Occlusion consumes unnecessary texture memory in real-time game builds. Channel packing solves this by combining three grayscale maps into a single RGB image.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Configuring Output Templates in Substance Painter
            </h2>
            <p>
              In Substance 3D Painter’s Export Options, select the <strong className="text-white">Unreal Engine 5 (Packed)</strong> preset. This template packs <strong className="text-white">Ambient Occlusion into the Red channel</strong>, <strong className="text-white">Roughness into Green</strong>, and <strong className="text-white">Metallic into Blue</strong>, creating a single ORM texture map.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Color Space Settings: sRGB vs Linear Raw Data
            </h2>
            <p>
              Base Color (Albedo) textures require the <strong className="text-white">sRGB</strong> color space. However, packed ORM maps contain non-color data; uncheck <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">sRGB</code> in UE5 Texture Properties to ensure linear math calculations inside your material shader.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Constructing an UE5 Master Material with Material Instances
            </h2>
            <p>
              Inside Unreal Engine 5, plug the ORM map's R, G, and B pins directly into the <strong className="text-white">Ambient Occlusion</strong>, <strong className="text-white">Roughness</strong>, and <strong className="text-white">Metallic</strong> material inputs. Expose texture parameters to create child Material Instances for instant live tweaking without triggering shader recompilations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}