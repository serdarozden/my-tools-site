import Link from 'next/link';

export const metadata = {
  title: 'Screen-Space Reflections (SSR) in WebGL & WebGPU | serdarozden.com',
  description: 'Master Screen-Space Reflections (SSR), Ray Marching, Hi-Z depth tracing, and specular contact shading in real-time WebGL and WebGPU pipelines.',
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
            Implementing Screen-Space Reflections (SSR) in Web Rendering Engines
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Generating dynamic Glossy and Mirror reflections on metallic and wet surfaces using screen-space ray marching over G-Buffer depth channels.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Cube maps produce static reflections that fail to react to dynamic scene objects. Screen-Space Reflections (SSR) evaluate ray-marching intersections directly against viewport depth buffers, yielding accurate local reflections.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. View-Space Ray Marching over Depth Buffers
            </h2>
            <p>
              Fragment shaders reflect view-vectors across surface normals, stepping ray positions incrementally through screen-space camera depth textures to detect surface intersection points.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Hi-Z (Hierarchical Z-Buffer) Ray Acceleration
            </h2>
            <p>
              Standard linear ray marching suffers from performance drops at steep angles. Utilizing Hierarchical Z-Buffer (Hi-Z) depth pyramids allows reflection rays to skip empty screen space, dramatically accelerating intersection searches.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Roughness Fading & Screen Edge Falloff
            </h2>
            <p>
              Blending reflections toward screen edges and attenuating intensity based on surface roughness maps eliminates abrupt edge clipping artifacts, producing convincing physically-based specular materials.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}