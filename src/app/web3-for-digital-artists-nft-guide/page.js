import Link from 'next/link';

export const metadata = {
  title: 'Web3 for Artists: Navigating Digital Ownership, Smart Contracts & Fine Art | serdarozden.com',
  description: 'A comprehensive guide to Web3 for digital artists and collectors. Understand smart contract royalties, digital scarcity, provenance, and decentralized storage.',
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
              Web3 & Digital Art
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Web3 for Artists: Empowering Creators Through On-Chain Authenticity
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Discover how Web3 infrastructure provides digital creators and art collectors with verifiable provenance, immutable smart contract logic, and decentralized asset integrity.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              The digital art landscape has undergone a paradigm shift. Web3 technology offers digital artists and fine art collectors a transparent mechanism for establishing true ownership, original attribution, and long-term scarcity without traditional intermediaries.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Why Serious Collectors Value On-Chain Provenance
            </h2>
            <p>
              Unlike physical paintings with paper certificates of authenticity, Web3 artworks feature cryptographic signatures embedded directly onto public blockchains. Collectors can independently verify the artist’s wallet address, deployment timestamps, and the complete transaction history of a piece.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Smart Contracts & Creator Royalty Models
            </h2>
            <p>
              Smart contracts serve as self-executing agreements stored on the blockchain. For 3D sculptors and generative artists, custom contract logic can automatically enforce creator royalties on secondary market transfers, building a sustainable economic model for digital art ecosystems.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Decentralized Storage: IPFS and Arweave
            </h2>
            <p>
              Preserving high-resolution 3D renders and animation files requires decentralized, immutable storage. Utilizing IPFS (InterPlanetary File System) or Arweave guarantees that artwork metadata remains permanently accessible to collectors without relying on centralized web servers.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}