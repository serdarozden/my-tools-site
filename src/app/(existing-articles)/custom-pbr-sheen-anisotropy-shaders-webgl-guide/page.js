import Link from 'next/link';

export const metadata = {
  title: 'Custom PBR Sheen & Anisotropy Shaders for WebGL | serdarozden.com',
  description: 'Authoring advanced GLSL PBR shaders for fabric, velvet, and brushed metal using sheen microfacet distribution and anisotropic highlights in WebGL.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Shaders & Materials
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Authoring PBR Sheen and Anisotropy Shaders for Textile & Industrial WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating complex microfacet light scattering for cloth, satin, and brushed metallic surfaces in modern web viewports.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard Cook-Torrance GGX microfacet models fail when rendering textiles or anisotropic surfaces like brushed steel. Implementing custom GLSL BRDF extensions enables hyper-realistic cloth and material rendering in web configuration tools.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Micro-Thread Sheen Distribution (Charlie BRDF)
            </h2>
            <p>
              Fabric edges glow under grazing angles due to micro-fiber scattering. Incorporating the Charlie sheen distribution model into fragment shaders reproduces natural velvet grazing light scattering without heavy performance cost.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Anisotropic Specular Highlights
            </h2>
            <p>
              Brushed metal and woven fabrics stretch specular reflections along surface tangent vectors. Utilizing anisotropic roughness parameters along tangent and bitangent axes creates realistic elongated highlight shapes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. KHR_materials_sheen & KHR_materials_anisotropy glTF Extensions
            </h2>
            <p>
              Parsing standardized glTF extension material nodes directly inside custom Three.js shader materials ensures seamless asset pipelines between digital content creation tools (Blender, Substance) and web viewports.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}