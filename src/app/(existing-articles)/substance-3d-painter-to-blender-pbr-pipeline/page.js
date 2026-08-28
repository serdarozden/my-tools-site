import Link from 'next/link';

export const metadata = {
  title: 'Substance 3D Painter to Blender PBR Workflow | serdarozden.com',
  description: 'Export PBR texture sets from Substance 3D Painter to Blender Cycles and Eevee. Map Principled BSDF inputs, normal maps, and displacement shaders.',
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
              PBR Texturing & Shader Setup
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Substance 3D Painter to Blender: Seamless PBR Texture Export Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Export metalness/roughness texture sets from Substance Painter and configure Blender’s Principled BSDF shader for pixel-perfect rendering in Cycles.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Bridging Substance 3D Painter with Blender requires correct texture channel connections and non-color data space settings to ensure lighting and reflections match between both viewports.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Exporting Texture Sets with the Blender Preset
            </h2>
            <p>
              In Substance Painter, open the <strong className="text-white">Export Textures</strong> window (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Ctrl + Shift + E</code>) and select the <strong className="text-white">Blender (Principled BSDF)</strong> output preset. This generates Base Color, Roughness, Metallic, Normal (OpenGL), and Height maps.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Color Space Settings: Non-Color Data Management
            </h2>
            <p>
              Inside Blender’s Shader Editor, keep <strong className="text-white">Base Color</strong> set to <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">sRGB</code>. For Roughness, Metallic, Normal, and Height maps, change the Color Space setting to <strong className="text-white">Non-Color</strong> to prevent gamma curve distortion.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Connecting Normal and Height Maps to Principled BSDF
            </h2>
            <p>
              Pass your Normal map through a <strong className="text-white">Normal Map Node</strong> set to Tangent Space before plugging into the Principled BSDF Normal socket. Connect the Height map through a <strong className="text-white">Displacement Node</strong> to enable physical mesh displacement in Cycles rendering.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}