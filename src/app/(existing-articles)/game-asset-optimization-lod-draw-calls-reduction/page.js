import Link from 'next/link';

export const metadata = {
  title: 'Game Asset Optimization: Triangles, Texel Density & LODs | serdarozden.com',
  description: 'Essential optimization techniques for 3D real-time game assets. Master texel density, draw call reduction, texture atlas packing, and LOD chains.',
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
              Real-Time Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Game Asset Optimization: Texel Density, Draw Calls & LOD Chains
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to maintain high visual fidelity in real-time game engines while keeping polygon budgets, draw calls, and VRAM footprints within strict engine limits.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Creating high-performing real-time games requires balancing polygon counts, texture memory, and CPU/GPU instructions. Proper asset optimization ensures smooth framerates on lower-spec hardware.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Standardizing Texel Density Across Scene Assets
            </h2>
            <p>
              Texel density measures the amount of texture resolution allocated per unit of 3D surface area (e.g., 10.24 px/cm). Maintaining consistent texel density prevents background props from looking blurrier or sharper than nearby hero characters.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Minimizing Draw Calls via Texture Atlasing & Modular Kit Design
            </h2>
            <p>
              Every material slot assigned to a mesh generates a separate draw call for the GPU. Group small environmental props into a single texture atlas map and share master materials across modular kit pieces to reduce rendering bottlenecks.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automatic LOD Generation vs Custom Quad Reduction
            </h2>
            <p>
              For non-Nanite geometry, configure Level of Detail (LOD) chains that progressively reduce polygon count by 50% at increasing camera distances. Ensure silhouette-defining edges are preserved on key mesh boundaries during decimation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}