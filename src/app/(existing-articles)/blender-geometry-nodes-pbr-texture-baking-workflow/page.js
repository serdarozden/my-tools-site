import Link from 'next/link';

export const metadata = {
  title: 'Baking Geometry Nodes & Procedural Materials in Blender | serdarozden.com',
  description: 'Convert procedural Geometry Nodes setups and complex shader trees into lightweight PBR texture maps (Diffuse, Normal, Roughness) for WebGL and real-time engines.',
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
              3D Pipeline & Texturing
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Baking Procedural Geometry Nodes to WebGL-Ready PBR Materials
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Step-by-step workflow for converting non-destructive Geometry Nodes setups and procedural Cycles shaders into compact, real-time PBR texture sets.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Procedural shaders and Geometry Nodes systems offer infinite flexibility inside Blender, but real-time engines like Three.js or Unreal Engine cannot evaluate procedural math nodes on the fly. Baking attributes to UV maps bridges this gap.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Transferring Node Attributes to UV Coordinates
            </h2>
            <p>
              Store custom vertex colors, curvature, and edge wearing attributes calculated inside Geometry Nodes as explicit named attributes before applying a seamless Smart UV Project layout.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Automated PBR Map Baking in Cycles
            </h2>
            <p>
              Bake Base Color, Roughness, Metallic, and OpenGL/DirectX Normal maps simultaneously using high-to-low cage projection to capture detailed procedural displacement without inflating polygon counts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Exporting Lightweight GLTF Maps for WebGL
            </h2>
            <p>
              Combine AO, Roughness, and Metallic textures into a single packed ORM map (Red: AO, Green: Roughness, Blue: Metallic) to drastically minimize network requests in web applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}