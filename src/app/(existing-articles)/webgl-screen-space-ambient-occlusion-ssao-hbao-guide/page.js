import Link from 'next/link';

export const metadata = {
  title: 'High-Performance SSAO & HBAO+ in WebGL & WebGPU | serdarozden.com',
  description: 'Master Screen-Space Ambient Occlusion (SSAO) and Horizon-Based Ambient Occlusion (HBAO+) shader techniques for photorealistic contact shadows in web viewports.',
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
              Post-Processing & Lighting
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Implementing Real-Time SSAO and HBAO+ Pipelines in WebGL Viewports
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Enhancing geometric depth perception and contact shadowing in CAD and architectural WebGL scenes using G-Buffer depth and normal passes.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Without ambient occlusion, complex CAD assemblies look flat and lack spatial depth. Screen-Space Ambient Occlusion (SSAO) approximates diffuse crevice shadows in real time by sampling depth and normal textures surrounding each pixel.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. G-Buffer Rendering & Hemisphere Sampling
            </h2>
            <p>
              Extracting linear depth values and world-space normals into dynamic G-Buffer render targets enables post-processing fragment shaders to sample hemispherical kernel directions around target surfaces.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Horizon-Based Ambient Occlusion (HBAO+)
            </h2>
            <p>
              HBAO+ improves upon basic SSAO by evaluating physical horizon elevation angles across surrounding depth fields. This eliminates over-occlusion noise and produces realistic contact shadows under complex geometric seams.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Bilateral Depth-Aware Blur Filtering
            </h2>
            <p>
              Raw occlusion passes contain noise from low sample counts. Applying depth-aware bilateral Gaussian blur filters smooths ambient occlusion maps while preserving crisp geometric edges across adjacent objects.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}