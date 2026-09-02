import Link from 'next/link';

export const metadata = {
  title: 'Custom PBR Shaders in WebGL: BRDF & GLSL Math | serdarozden.com',
  description: 'Deep dive into implementing custom Physically Based Rendering (PBR) lighting equations, Fresnel terms, and GGX microfacet distribution in WebGL fragment shaders.',
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
              Graphics Programming
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Writing Custom PBR Shaders in WebGL: Cook-Torrance BRDF Math
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Implementing Physically Based Rendering (PBR) equations directly in GLSL fragment shaders to simulate real-world material responses to metallic and dielectric lighting.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard Phong and Blinn-Phong shading models fail to represent real-world physical material behavior. Physically Based Rendering (PBR) uses the Cook-Torrance specular BRDF model to preserve energy conservation across varying surface roughness and metallic parameters.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Microfacet Specular BRDF Equations
            </h2>
            <p>
              The Cook-Torrance specular reflectance depends on three key terms: Normal Distribution Function (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">D</code>), Geometry Function (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">G</code>), and Fresnel Equation (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">F</code>).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Trowbridge-Reitz GGX and Fresnel-Schlick in GLSL
            </h2>
            <p>
              In GLSL fragment code, the GGX microfacet distribution models surface roughness variations, while the Fresnel-Schlick approximation calculates the ratio of light reflected versus light refracted across view angles.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Image-Based Lighting (IBL) & Environment Maps
            </h2>
            <p>
              Specular reflection for environmental lighting requires pre-filtered cubemaps. Integrating diffuse irradiance convolutions with specular BRDF lookup textures (LUT) enables real-time physical lighting without heavy ray-tracing overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}