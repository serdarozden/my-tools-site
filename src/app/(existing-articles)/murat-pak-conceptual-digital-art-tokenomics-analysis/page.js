import Link from 'next/link';

export const metadata = {
  title: 'Murat Pak Conceptual Art & Dynamic Tokenomics Analysis | serdarozden.com',
  description: 'Deep dive into Murat Pak (Pak) conceptual digital art, contract mechanics, Ash ecosystem, gamified burn mechanisms, and the philosophy of digital scarcity.',
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
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Murat Pak & Conceptual Digital Art: Mechanics, Scarcity & Tokenomics
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Exploring how Pak redefines digital ownership through smart contract logic, gamified burn mechanisms, and minimal aesthetic philosophy.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Murat Pak (known pseudonymously as Pak) stands as one of the most prominent figures in digital art history, challenging traditional concepts of authorship, collector psychology, and token utility through programmatic smart contracts.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Smart Contract as the Artwork
            </h2>
            <p>
              In Pak’s creations, such as <em>Merge</em> and <em>The Fungible</em>, the visual asset is secondary to the underlying contract mechanics. Dynamic tokens merge into larger masses upon transfer, turning collector transactions into live participatory performance art.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Burn Mechanics and the ASH Ecosystem
            </h2>
            <p>
              Pak introduced the concept of burning digital assets to yield <strong className="text-white">$ASH</strong>, a cryptographic token that serves as an entry key for exclusive artistic drops. This burn-to-mint mechanism establishes a deflationary economic loop for digital media.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Minimalism, Value Perception, and Media Criticism
            </h2>
            <p>
              By utilizing monochrome geometries and simple text metadata, Pak strips away superficial visual noise. This forces collectors to evaluate value through mathematical rarity, community game theory, and conceptual narrative rather than traditional rendering techniques.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}