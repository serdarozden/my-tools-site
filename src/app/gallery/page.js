import Link from 'next/link';

export const metadata = {
  title: 'NFT & Digital Art Showcase - TechTools',
  description: 'Explore unique Web3 digital art collections created by Serdar Özden on OpenSea.',
};

export default function GalleryPage() {
  const collections = [
    {
      id: 'echoes-of-self',
      title: 'Echoes of Self',
      badge: 'Conceptual Art',
      emoji: '🎭',
      tagline: 'A Multi-Dimensional Journey Through Digital Identity',
      description: (
        <>
          <p className="mb-3">
            What if a single human identity held dozens of distinct, undiscovered personalities beneath its surface? <strong>Echoes of Self</strong> is a conceptual exploration of transformation, identity, and duality on the Ethereum blockchain. Starting from a single, core portrait, each artwork transforms into a unique digital echo—a distinct incarnation that carries its own mood, visual language, and artistic aura.
          </p>
          <p className="mb-3">
            A single work of art begins to exist in dozens of different forms, raising questions about perception and self-expression in the digital age. Some echoes possess deep emotional weight, while others simply exist in their raw, aesthetic beauty.
          </p>
          <p>
            We don't force artificial meaning onto every piece; they are pure reflections of the same evolving self, offering collectors a personal connection to a multi-layered identity.
          </p>
        </>
      ),
      url: 'https://opensea.io/collection/echoesofself',
    },
    {
      id: 'chubby-capybaras',
      title: 'Chubby Capybaras',
      badge: 'PFP Collection',
      emoji: '🦫✨',
      tagline: 'Simple. Cute. Chonky. Maximum Good Vibes.',
      description: (
        <>
          <p className="mb-3">
            Welcome to the most wholesome and chill corner of the NFT ecosystem! <strong>Chubby Capybaras</strong> is a limited-edition PFP (Profile Picture) collection featuring adorable, chonky capybaras designed to bring pure joy, comfort, and positive energy to your Web3 identity.
          </p>
          <p className="mb-3">
            Every capybara in this collection maintains the iconic signature look: a relaxed posture, big sparkling eyes, and a warm, gentle smile. They are paired with hand-crafted accessories, rare hats, quirky outfits, and fun traits that celebrate individuality.
          </p>
          <p>
            Inspired by the famously peaceful and friendly nature of real-life capybaras, this collection is designed to bring maximum cuteness, humor, and wholesome vibes to collectors across the digital space. Join the family and embrace the ultimate chill lifestyle!
          </p>
        </>
      ),
      url: 'https://opensea.io/collection/chubbycapybaras',
    },
    {
      id: 'fancy-orbit',
      title: 'Fancy Orbit',
      badge: 'Sci-Fi / Space',
      emoji: '🪐',
      tagline: 'Cosmic Wonders Beyond the Boundless Universe',
      description: (
        <>
          <p className="mb-3">
            Humanity has barely scratched the surface of the infinite universe. In the uncharted, far-flung reaches of space, physical laws blur and otherworldly wonders emerge that surpass our wildest imaginations. Anything can happen at any moment in these vast, unexplored dimensions.
          </p>
          <p className="mb-3">
            <strong>Fancy Orbit</strong> is a surreal sci-fi digital art collection that invites viewers on a visual voyage to distant planets, glowing nebulae, and alien landscapes situated far, far away from our galaxy.
          </p>
          <p>
            Each piece captures a frozen moment in an celestial orbit—a rare glimpse into breathtaking cosmic phenomena and strange planetary ecosystems. Step into the orbit, expand your horizons, and discover uncharted cosmic realms on the blockchain.
          </p>
        </>
      ),
      url: 'https://opensea.io/collection/fancy-in-space',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-slate-400">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500/80 hover:text-blue-400 transition"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Page Header */}
      <header className="mb-12 pb-8 border-b border-slate-800/60 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-blue-500/80 uppercase tracking-wider block mb-2">Web3 & Digital Assets</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-200 tracking-tight mb-4">
            Digital Art & NFT Collections
          </h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            A curated showcase of original digital artworks and concept collections created by Serdar Özden and minted on the Ethereum blockchain.
          </p>
        </div>

        <div>
          <a 
            href="https://opensea.io/serdarozden/created" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
          >
            <span>View All on OpenSea</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </header>

      {/* Featured Collections Grid */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item) => (
          <div 
            key={item.id}
            className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-950 border border-blue-800/60 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition mb-1">
                {item.title}
              </h2>
              
              <p className="text-xs font-semibold text-blue-500/80 mb-4">
                {item.tagline}
              </p>

              <div className="text-xs text-slate-400 leading-relaxed mb-6">
                {item.description}
              </div>
            </div>

            <a 
              href={item.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 rounded-xl transition"
            >
              <span>Explore Collection</span>
              <span>&rarr;</span>
            </a>
          </div>
        ))}
      </section>

      {/* Featured OpenSea Callout */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 text-center md:text-left md:flex items-center justify-between gap-8">
        <div className="space-y-2 mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-slate-200">Explore the Full OpenSea Profile</h3>
          <p className="text-sm text-slate-500">
            Check live floor prices, minted items, and ownership details directly on OpenSea.
          </p>
        </div>
        <a 
          href="https://opensea.io/serdarozden/created" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow-md shadow-blue-600/10"
        >
          open opensea.io/serdarozden &rarr;
        </a>
      </div>
    </main>
  );
}