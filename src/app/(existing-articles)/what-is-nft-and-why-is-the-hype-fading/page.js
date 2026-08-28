import Link from 'next/link';

export default function NftHypeFadingPage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Ana Sayfaya Dön */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              Web3 & Digital Art
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            What is an NFT? Why is the Hype Fading and the Legacy of Murat Pak
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            An analysis of Non-Fungible Tokens, their underlying blockchain technology, the reasons behind their market cooling, and the innovative mechanics of digital artist Pak.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              What is an NFT (Non-Fungible Token)?
            </h2>
            <p className="text-slate-100">
              A Non-Fungible Token (NFT) is a unique digital asset verified using blockchain technology. Unlike fungible cryptocurrencies like Bitcoin or Ethereum—where each token is identical and interchangeable—NFTs represent ownership of a unique item, whether it&apos;s digital art, real estate blueprints, 3D assets, or domain names.
            </p>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              The Rise and Innovation of Murat Pak (Pak)
            </h2>
            <p className="text-slate-100">
              When discussing the pinnacle of NFT art and mechanism design, the prominent figure Pak (formerly known as Murat Pak) stands out. Pak redefined digital ownership not just through visual aesthetics, but by treating code and smart contract mechanics as the primary medium of art.
            </p>
            
            <div className="space-y-4 my-6">
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">The Merge Project</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Pak&apos;s iconic &quot;Merge&quot; sale generated over $91.8 million, making it one of the most valuable public art sales by a living creator. It introduced dynamic tokenomics where buying more &quot;mASS&quot; tokens merged them into a single larger NFT.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Fungible Open Editions</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Through Sotheby&apos;s and Nifty Gateway, Pak challenged the concept of digital scarcity by allowing open-edition minting within set time windows.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Conceptual Gamification</h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Works like The Ash project introduced burn mechanisms, encouraging collectors to destroy NFTs to claim new tokens, pioneering interactive game mechanics in web3.
                </p>
              </div>
            </div>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Why are NFTs Losing Hype and Declining in Volume?
            </h2>
            <p className="text-slate-100">
              Following the massive boom of 2021–2022, the NFT market experienced a severe correction. Several key factors contributed to this cooling phase:
            </p>

            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">Speculative Bubble Burst:</strong> Much of the initial volume was driven by quick-profit speculation rather than long-term utility or artistic appreciation.
              </li>
              <li>
                <strong className="text-white">Over-Saturation and PFP Clone Projects:</strong> Thousands of low-effort Profile Picture (PFP) collections flooded the market, diluting value and causing collector fatigue.
              </li>
              <li>
                <strong className="text-white">Lack of Real-World Utility:</strong> Many projects promised ambitious metaverses or roadmap perks that were never delivered, damaging consumer trust.
              </li>
            </ul>
          </section>

          {/* Bölüm 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              The Future: From Hype to Practical Integration
            </h2>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-4">
              <p className="text-slate-100 font-medium leading-relaxed">
                While speculative profile picture trends have cooled down, the underlying NFT technology is maturing. The future of NFTs lies in practical applications such as digital identity, architectural intellectual property rights, real-world asset tokenization (RWA), and digital ticketing.
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}