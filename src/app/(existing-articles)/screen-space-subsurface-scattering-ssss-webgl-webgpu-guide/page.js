import Link from 'next/link';

export const metadata = {
  title: 'Screen-Space Subsurface Scattering (SSSS) in WebGL & WebGPU | serdarozden.com',
  description: 'Learn how to author real-time Screen-Space Subsurface Scattering (SSSS) shaders for translucent materials like skin, marble, and wax in WebGL and WebGPU.',
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
              Real-Time Rendering & Optics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time Screen-Space Subsurface Scattering (SSSS) in Web Graphics
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating light transport inside translucent media like skin, marble, jade, and wax using screen-space blur profiles and depth-aware separable kernels.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard BRDF models assume light reflects off the exact surface point it hits. Translucent materials absorb and scatter light internally before re-emitting it. Screen-Space Subsurface Scattering (SSSS) approximates this internal light diffusion efficiently across rendered framebuffers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Sum-of-Gaussians Diffusion Profiles
            </h2>
            <p>
              Approximating physical light scattering profiles requires decomposing translucent light transport into a linear combination of separable 1D Gaussian blurs with custom RGB variance weights representing wavelength attenuation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Depth-Aware Separable Screen-Space Blurring
            </h2>
            <p>
              Applying horizontal and vertical blur passes in image space evaluates pixel depth differences from G-Buffers, preventing light from scattering across non-adjacent foreground or background boundaries.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Translucency & Back-Lighting Transmission
            </h2>
            <p>
              Combining screen-space front scattering with thickness-map back transmission simulates directional light penetrating thin features like ears, leaves, or thin wax structures in real-time viewports.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}