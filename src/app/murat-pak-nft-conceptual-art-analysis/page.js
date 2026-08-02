import Link from 'next/link';

export const metadata = {
  title: 'Murat Pak & Conceptual NFT Art: Merge, Scarcity & Smart Contract Design | serdarozden.com',
  description: 'An in-depth analysis of Murat Pak (PAK) digital art. Explore how Merge, Ash, and dynamic smart contract mechanics redefined Web3 ownership and fine art.',
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
              Conceptual Art & Web3
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Murat Pak & Conceptual NFT Art: Redefining Digital Scarcity Through Smart Contracts
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            How anonymous creator Pak leverages mathematical algorithms, game theory, and dynamic smart contract mechanics to challenge traditional art ownership.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In the realm of digital fine art, few creators have influenced Web3 art history as profoundly as Pak. By treating the smart contract itself as the primary artistic medium, Pak transcends static image rendering to create living, dynamic tokenomics that engage collectors worldwide.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Smart Contracts as the Canvas: The Genius of 'Merge'
            </h2>
            <p>
              Pak's landmark project <strong className="text-white">'Merge'</strong> fundamentally changed how digital scarcity is structured. Rather than selling fixed-edition JPEG assets, Merge utilized a dynamic mass-accumulation mechanism. When two tokens coexisted in the same wallet, they automatically combined into a single, visually larger sphere—turning token consolidation into a game-theoretic artwork.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Deflationary Art and Burn Mechanics (Ash Token)
            </h2>
            <p>
              With projects like <strong className="text-white">Burn.art</strong> and the $ASH token ecosystem, Pak explored the concept of destruction as creation. Collectors were incentivized to burn existing NFTs to mint new digital assets, introducing cryptographic deflationary economics directly to fine art valuation.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Minimalism, Identity, and Collective Curation
            </h2>
            <p>
              By remaining pseudonymous and focusing on monochromatic geometry, Pak forces collectors to evaluate the artwork based on system logic, community interaction, and conceptual intent rather than personal artistic identity. This approach continues to inspire contemporary generative and conceptual 3D creators.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}