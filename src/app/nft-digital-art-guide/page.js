import Link from 'next/link';

export const metadata = {
  title: 'What is Web3 Digital Art? Complete Guide to Collecting NFTs (2026)',
  description: 'Learn what Web3 digital art is, how NFT collections work on Ethereum, and how to start collecting unique digital assets on OpenSea.',
};

export default function NftGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/gallery" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500/80 hover:text-blue-400 transition"
        >
          &larr; Back to NFT Gallery
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-slate-800/60">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-500/80 mb-4">
          <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400/80">
            Web3 & Digital Assets
          </span>
          <span className="text-slate-800">•</span>
          <span className="text-slate-600 font-normal">5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-300 tracking-tight mb-6 leading-tight">
          What is Web3 Digital Art? A Complete Guide to Collecting NFTs
        </h1>

        <p className="text-lg text-slate-500 leading-relaxed font-normal">
          Discover how blockchain technology transforms digital creativity, how on-chain provenance works, and what to look for when collecting NFTs on OpenSea.
        </p>
      </header>

      {/* Article Body */}
      <article className="text-slate-500 leading-relaxed space-y-6 text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            The Evolution of Digital Art in Web3
          </h2>
          <p className="mb-4">
            The world of digital creation is undergoing a massive paradigm shift. With the integration of blockchain technology, digital artists are no longer constrained by centralized platforms or traditional gallery barriers. <strong className="text-slate-400">Web3 digital art</strong> and <strong className="text-slate-400">NFT collections</strong> have unlocked unprecedented avenues for artists and collectors to connect, own, and exchange verifiable digital assets.
          </p>
          <p>
            Whether you are drawn to conceptual portrait series, expressive profile picture (PFP) communities, or surreal sci-fi visual experiences, grasping the mechanics of Web3 digital collectibles is key to navigating this dynamic landscape.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            What Makes NFT Digital Art Unique?
          </h2>
          <p className="mb-4">
            Unlike standard image files that can be copied without distinction, Non-Fungible Tokens (NFTs) introduce true digital scarcity and cryptographically verified ownership to digital art.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-slate-400">On-Chain Provenance:</strong> Every transaction, minting event, and wallet transfer is permanently logged on public blockchains like Ethereum, allowing collectors to trace an artwork directly back to its original creator.
            </li>
            <li>
              <strong className="text-slate-400">True Ownership:</strong> Owning an NFT means possessing a unique, non-duplicable token in your private Web3 wallet that represents authentic ownership of that specific artwork.
            </li>
            <li>
              <strong className="text-slate-400">Direct Creator Support:</strong> Web3 connects collectors directly with independent digital creators, removing unnecessary intermediaries and empowering artists.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            Exploring Diverse NFT Collection Types
          </h2>
          <p className="mb-4">
            The Web3 art space encompasses a wide spectrum of creative formats:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-slate-400">Conceptual & Generative Art:</strong> Projects like <em>Echoes of Self</em> focus on identity and duality, taking a single core visual concept and evolving it into multiple distinct digital "echoes."
            </li>
            <li>
              <strong className="text-slate-400">PFP (Profile Picture) Collections:</strong> Collections like <em>Chubby Capybaras</em> combine charming character traits with community identity, giving holders a distinct, wholesome avatar for social platforms.
            </li>
            <li>
              <strong className="text-slate-400">Sci-Fi & Cosmic Landscapes:</strong> Series like <em>Fancy Orbit</em> explore cosmic phenomena and far-away worlds beyond the physical realm, creating surreal atmospheric visual experiences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-400 mb-3 border-b border-slate-800/60 pb-2">
            How to Collect Digital Art on OpenSea
          </h2>
          <p className="mb-3">Getting started with Web3 collectibles requires just a few basic steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Set up a Web3 wallet such as MetaMask or Coinbase Wallet.</li>
            <li>Acquire Ethereum (ETH) to cover artwork purchases and network fees.</li>
            <li>Explore verified collections and creator profiles on marketplaces like OpenSea.</li>
            <li>Mint or purchase original artworks directly into your digital collection.</li>
          </ol>
        </section>
      </article>

      {/* Call to Action Card */}
      <div className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl my-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-300 mb-2">Explore Active NFT Collections</h3>
          <p className="text-slate-500 text-sm">
            Check out original conceptual series, PFP capybaras, and cosmic digital artworks directly on OpenSea.
          </p>
        </div>
        <a 
          href="https://opensea.io/serdarozden/created"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600/90 text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-blue-500 transition shadow-md shadow-blue-600/10 whitespace-nowrap"
        >
          View Collections &rarr;
        </a>
      </div>
    </main>
  );
}