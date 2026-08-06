import Link from 'next/link';

export const metadata = {
  title: 'Blender PBR Texture Baking for Real-Time Engines | serdarozden.com',
  description: 'Master texture baking in Blender. Bake high-poly procedural materials into Diffuse, Roughness, Normal, and Metallic PBR maps for web and game engine pipelines.',
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
              Blender Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Blender PBR Texture Baking: High-Poly to Real-Time Asset Pipeline
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Transfer complex procedural material networks into optimized texture maps for game engines, WebGL viewers, and interactive 3D web applications.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Procedural materials in Blender offer infinite resolution, but real-time engines demand baked image maps. Baking collapses complex mathematical shader networks into lightweight PNG/EXR texture files ready for instant rendering.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Cage Setup & UV Unwrapping Best Practices
            </h2>
            <p>
              Ensure low-poly target meshes feature non-overlapping UV maps with a minimum 16-pixel margin buffer to avoid seam bleed. When baking high-to-low poly details, utilize an expanded cage mesh object to control ray distance accurately across steep bevels.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Baking Normal, Roughness, and Metallic Channels in Cycles
            </h2>
            <p>
              Switch the render engine to <strong className="text-white">Cycles</strong>, as EEVEE does not support native texture baking. Select your target image texture node inside each shader material, configure target Bake Types (Normal, Roughness, Emit), and process channels individually.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Packing Channel Maps (ORM Workflow)
            </h2>
            <p>
              Combine Occlusion, Roughness, and Metallic maps into a single <strong className="text-white">ORM texture</strong> using RGB channel packing. This cuts draw calls in half and optimizes memory bandwidth for web-based 3D applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}