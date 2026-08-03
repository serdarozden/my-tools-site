import Link from 'next/link';

export const metadata = {
  title: 'Generative Art Curation: How Collectors Value Code-Based 3D Art | serdarozden.com',
  description: 'Guide for fine art collectors on evaluating generative, code-based 3D digital art. Understand mathematical aesthetics, smart contract algorithms, and rarity.',
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
              Digital Art Curation
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Generative Art Curation: Evaluating Code-Based & Algorithmic 3D Art
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            How art galleries, institutional collectors, and Web3 patrons evaluate valuation, algorithmic randomness, and execution quality in generative 3D visual art.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Generative art replaces the traditional brush with mathematical instructions. Whether produced via WebGL shaders, Processing scripts, or Blender node graphs, algorithmic art demands a unique framework for valuation and aesthetic curation.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Controlled Randomness vs. Algorithmic Intent
            </h2>
            <p>
              The hallmark of exceptional generative art lies in how the creator balances unpredictable randomness with rigorous structural constraints. Collectors analyze whether seed variations maintain aesthetic harmony or produce unintended visual glitches across an entire edition series.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Technical Execution of Dynamic Shaders
            </h2>
            <p>
              In 3D generative art, lighting and ray-marching algorithms dictate the depth of the artwork. High-tier collectors favor pieces that incorporate custom GLSL shaders, procedural volumetric fog, or realtime physics simulations over basic geometry displacement.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Long-Term Historical Significance & Provenance
            </h2>
            <p>
              As digital art integrates into major museum archives, collectors prioritize artists who innovate structural mechanics—such as dynamic token minting, burn mechanics, or interactive real-time canvas rendering on public blockchains.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}