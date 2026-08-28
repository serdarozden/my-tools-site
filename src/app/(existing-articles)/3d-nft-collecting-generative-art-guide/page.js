import Link from 'next/link';

export const metadata = {
  title: 'Collecting 3D & Generative NFT Art: Valuation, Rarity & Curation | serdarozden.com',
  description: 'Guide for digital art collectors on evaluating 3D NFTs, procedural generative art, rendering quality, and long-term fine art curation.',
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
              Art Curation & NFTs
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Collecting 3D & Generative Art: What Serious Collectors Look For
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            A collector’s framework for analyzing technical mastery, shader complexity, lighting design, and conceptual depth in fine digital 3D art collections.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              As the digital art market matures, collectors are moving past short-term speculative trends toward fine art curation. Understanding the craftsmanship behind procedural 3D art, shader development, and geometric complexity is essential for identifying high-value digital assets.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Evaluating Technical Complexity in 3D Art
            </h2>
            <p>
              Fine 3D art combines advanced ray-tracing lighting, custom surface shaders, and complex geometric topology. Collectors assess whether an asset relies on basic templates or exhibits bespoke mathematical procedural generation, custom physics simulations, or fine sculpting details.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Conceptual Depth and Narrative Cohesion
            </h2>
            <p>
              Beyond technical execution, a successful digital series tells a distinct story. Collectors look for cohesive themes—such as exploring identity, surreal architecture, or algorithmic geometry—that span across an artist’s body of work.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Displaying and Experiencing 3D Collectibles
            </h2>
            <p>
              High-tier 3D collectibles extend beyond 2D screen previews. Modern collectors display assets using high-resolution digital canvas frames, spatial AR/VR environments, or real-time WebGL interactive viewports that reveal full 360-degree model detail.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}