import Link from 'next/link';

export const metadata = {
  title: 'Conceptual Digital Art Curation & Smart Contract Logic | serdarozden.com',
  description: 'How Web3 collectors evaluate conceptual digital art, dynamic smart contract mechanisms, burn tokenomics, and minimalism in digital collections.',
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
              Web3 & Conceptual Art
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Conceptual Digital Art: Evaluating Smart Contract Logic & Tokenomics
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Analyzing how pioneering Web3 conceptual artists utilize smart contract mechanics, dynamic token state transitions, and scarcity as part of the artistic medium.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Conceptual digital art shifts value from pure visual aesthetic to the underlying execution logic. In the Web3 ecosystem, smart contracts themselves become canvas and sculpture, driving interactive mechanics like token burning, dynamic metadata shifts, and programmatic scarcity.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Smart Contracts as the Primary Conceptual Medium
            </h2>
            <p>
              Artworks created by conceptual pioneers rely on custom EVM smart contracts. The code dictates how tokens evolve, divide, or merge over time, turning blockchain transaction logs into permanent components of the artistic narrative.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Dynamic Metadata and On-Chain State Machine
            </h2>
            <p>
              Unlike static JPEGs, dynamic conceptual NFTs change state based on block timestamps, wallet interactions, or burn mechanisms. Storing state parameters directly on-chain ensures the artwork remains interactive without reliance on central servers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Value Metrics in Minimalist Conceptual Art Collections
            </h2>
            <p>
              Fine art collectors evaluate conceptual pieces based on code elegance, historical provenance, and philosophical rigor. Minimalist smart contracts that execute complex gamified economics with minimal gas overhead represent the gold standard in Web3 digital curation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}