import Link from 'next/link';

export const metadata = {
  title: 'Procedural Shader Math for Web3 Digital Art Collections | serdarozden.com',
  description: 'How digital art collectors and Web3 curators analyze procedural shader algorithms, mathematical aesthetics, and WebGL code execution in generative NFT art.',
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
              Generative Art & Web3
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Procedural Shader Math: Evaluating Code Aesthetics in Web3 Generative Art
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understanding mathematical noise functions, raymarching signed distance fields (SDF), and pure fragment shader logic in high-tier generative art collections.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In generative digital art, code is the primary medium. Discerning Web3 collectors evaluate dynamic artworks not merely by static visual outputs, but by the mathematical elegance and computational efficiency of the underlying GLSL shader scripts.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Signed Distance Fields (SDF) and Raymarching Geometry
            </h2>
            <p>
              Unlike conventional polygon meshes, raymarched shaders construct complex 3D forms using mathematical equations. Signed Distance Fields define geometry purely through mathematical distance functions, enabling infinite resolution and smooth volumetric blending.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Coherent Noise Algorithms: Perlin, Simplex, and FBM
            </h2>
            <p>
              Procedural organic textures rely on Fractional Brownian Motion (FBM) layered over Simplex or Worley noise matrices. Collectors look for subtle mathematical variations in seed generation to ensure each token output remains distinct and visually compelling.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. On-Chain Execution and Minimalist Code Footprints
            </h2>
            <p>
              The technical valuation of a Web3 art piece correlates strongly with on-chain permanence. Storing self-contained GLSL fragment shaders directly on smart contracts guarantees that the artwork renders indefinitely without external server dependencies.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}