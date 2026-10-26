import Link from 'net/link'; // wait, use Link from 'next/link'

import Link from 'next/link';

export const metadata = {
  title: 'Clustered Forward Shading & Multi-Light Atlasing in WebGPU | serdarozden.com',
  description: 'Learn how to implement clustered forward shading, 3D frustum light grids, and multi-light shadow atlases for rendering hundreds of lights in WebGPU.',
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
              WebGPU Lighting Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Clustered Forward Shading and Multi-Light Atlasing in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Overcoming traditional forward rendering limits to illuminate complex architectural interiors with hundreds of dynamic point and spot lights simultaneously.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard forward rendering struggles when scaling beyond a handful of dynamic light sources due to combinatorial fragment shader loops. Clustered forward shading subdivides camera frustums into a 3D grid, assigning intersecting lights efficiently via compute shaders.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. 3D Frustum Grid Discretization
            </h2>
            <p>
              Subdividing camera view frustums into logarithmic slices along depth axes creates a 3D grid of spatial clusters that store light indices affecting specific volumetric regions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Light Culling via Compute Workgroups
            </h2>
            <p>
              WGSL compute shaders test bounding spheres of hundreds of dynamic lights against frustum cluster bounds in parallel, populating global light index lists per cluster.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Multi-Light Shadow Atlasing
            </h2>
            <p>
              Packing shadow map textures from multiple active light sources into a single large 2D texture atlas enables real-time shadow casting across hundreds of interior lamps without context switching overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}