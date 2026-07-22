import Link from 'next/link';

export const metadata = {
  title: 'NFT & Digital Art Showcase - TechTools',
  description: 'Explore unique Web3 digital art collections created by Serdar Özden on OpenSea.',
};

export default function GalleryPage() {
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
            A curated showcase of original digital artworks and concept collections minted on the Ethereum blockchain.
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

      {/* Featured Collection Callout */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 mb-12 text-center md:text-left md:flex items-center justify-between gap-8">
        <div className="space-y-2 mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-slate-200">Explore the Full OpenSea Profile</h2>
          <p className="text-sm text-slate-500">
            Check live floor prices, minted items, and ownership details directly on OpenSea.
          </p>
        </div>
        <a 
          href="https://opensea.io/serdarozden/created" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-slate-800 border border-slate-700 hover:border-blue-500 text-slate-200 text-xs font-bold px-6 py-3 rounded-xl transition"
        >
          open opensea.io/serdarozden &rarr;
        </a>
      </div>
    </main>
  );
}