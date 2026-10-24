import Link from 'next/link';

export const metadata = {
  title: 'Volumetric Fog & Cloud Ray Marching in WebGL & WebGPU | serdarozden.com',
  description: 'Authoring physically-based volumetric fog, 3D Perlin-Simplex noise clouds, and atmospheric ray-marching shaders for WebGL and WebGPU viewports.',
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
              Atmospherics & Volumetrics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Implementing Volumetric Fog and Atmospheric Clouds in Web Graphics
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating heterogenous fog density fields, Beer-Lambert light extinction, and 3D noise ray marching for immersive architectural environments.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Distance-based height fog fails to capture dynamic atmospheric density. Ray marching volumetric fog shaders evaluates 3D noise textures along camera view rays, simulating realistic light absorption, scattering, and cloud shadows.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Beer-Lambert Absorption & In-Scattering Math
            </h2>
            <p>
              Evaluating the Beer-Lambert law inside fragment shader ray-marching loops calculates light attenuation through medium density fields, combining out-scattering absorption with directional light in-scattering.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Procedural 3D Noise Fields & Worley Turbulence
            </h2>
            <p>
              Sampling pre-computed 3D Perlin-Worley noise textures creates realistic heterogeneous fog formations and billowy cloud structures without storing heavy volumetric VDB grids in RAM.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Temporal Reprojection & Low-Resolution Ray Marching
            </h2>
            <p>
              Executing ray marching passes at quarter-resolution and upsampling results using temporal jitter reprojection reduces GPU instruction overhead significantly while maintaining smooth 60 FPS viewports.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}