import Link from 'next/link';

export default function NftDigitalArtGuidePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Geri Dön Butonu */}
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Blog
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              Web3 & Digital Art
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            What is Web3 Digital Art? A Complete Guide to Collecting NFTs
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Discover how blockchain technology transforms digital creativity, how on-chain provenance works, and what to look for when collecting NFTs on OpenSea.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Evrim Bölümü */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              The Evolution of Digital Art in Web3
            </h2>
            <p className="text-slate-100">
              The world of digital creation is undergoing a massive paradigm shift. With the integration of blockchain technology, digital artists are no longer constrained by centralized platforms or traditional gallery barriers. Web3 digital art and NFT collections have unlocked unprecedented avenues for artists and collectors to connect, own, and exchange verifiable digital assets.
            </p>
            <p className="text-slate-100">
              Whether you are drawn to conceptual portrait series, expressive profile picture (PFP) communities, or surreal sci-fi visual experiences, grasping the mechanics of Web3 digital collectibles is key to navigating this dynamic landscape.
            </p>
          </section>

          {/* Benzersiz Kılan Özellikler */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              What Makes NFT Digital Art Unique?
            </h2>
            <p className="text-slate-100">
              Unlike standard image files that can be copied without distinction, Non-Fungible Tokens (NFTs) introduce true digital scarcity and cryptographically verified ownership to digital art.
            </p>
            
            <ul className="space-y-4 my-4 pl-4 border-l-2 border-blue-500">
              <li>
                <strong className="text-white font-bold block mb-1">On-Chain Provenance</strong>
                <span className="text-slate-200">
                  Every transaction, minting event, and wallet transfer is permanently logged on public blockchains like Ethereum, allowing collectors to trace an artwork directly back to its original creator.
                </span>
              </li>
              <li>
                <strong className="text-white font-bold block mb-1">True Ownership</strong>
                <span className="text-slate-200">
                  Owning an NFT means possessing a unique, non-duplicable token in your private Web3 wallet that represents authentic ownership of that specific artwork.
                </span>
              </li>
              <li>
                <strong className="text-white font-bold block mb-1">Direct Creator Support</strong>
                <span className="text-slate-200">
                  Web3 connects collectors directly with independent digital creators, removing unnecessary intermediaries and empowering artists.
                </span>
              </li>
            </ul>
          </section>

          {/* Koleksiyon Türleri */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              Exploring Diverse NFT Collection Types
            </h2>
            <p className="text-slate-100">
              The Web3 art space encompasses a wide spectrum of creative formats:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Conceptual & Generative</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Projects like <span className="text-blue-400 font-semibold">Echoes of Self</span> focus on identity and duality, taking a single core visual concept and evolving it into multiple distinct digital "echoes."
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">PFP Collections</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Collections like <span className="text-blue-400 font-semibold">Chubby Capybaras</span> combine charming character traits with community identity, giving holders a distinct, wholesome avatar for social platforms.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Sci-Fi & Cosmic Landscapes</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Series like <span className="text-blue-400 font-semibold">Fancy Orbit</span> explore cosmic phenomena and far-away worlds beyond the physical realm, creating surreal atmospheric visual experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Adımlar / Nasıl Toplanır */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              How to Collect Digital Art on OpenSea
            </h2>
            <p className="text-slate-100">
              Getting started with Web3 collectibles requires just a few basic steps:
            </p>

            <ol className="space-y-3 my-4 list-decimal list-inside text-slate-100 font-medium">
              <li className="pl-2"><span className="text-slate-200">Set up a Web3 wallet such as MetaMask or Coinbase Wallet.</span></li>
              <li className="pl-2"><span className="text-slate-200">Acquire Ethereum (ETH) to cover artwork purchases and network fees.</span></li>
              <li className="pl-2"><span className="text-slate-200">Explore verified collections and creator profiles on marketplaces like OpenSea.</span></li>
              <li className="pl-2"><span className="text-slate-200">Mint or purchase original artworks directly into your digital collection.</span></li>
            </ol>
          </section>

          {/* NFT Galeriye Yönlendirme Kartı */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 my-10 shadow-2xl">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Explore Our Curated NFT Collections</h4>
              <p className="text-sm text-slate-200">
                Discover concept art, digital avatars, and atmospheric Web3 art pieces minted on Ethereum.
              </p>
            </div>
            <Link 
              href="/gallery" 
              className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-600/30"
            >
              Explore Gallery &rarr;
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}