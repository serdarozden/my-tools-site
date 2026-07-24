import Link from 'next/link';
import { articles } from '@/data/articles';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Dynamic Digital Portal Hero */}
      <section className="relative overflow-hidden text-center py-20 px-6 bg-slate-900 border border-slate-700 rounded-3xl mb-16 shadow-2xl">
        {/* Glow Effects & Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950 border border-blue-700 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Tech, Engineering & Digital Insights
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Insights, Guides & Technical Resources
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Exploring modern technology, architectural drafting, digital workflows, and practical engineering tools for creators and professionals.
          </p>

          {/* Portal Categories Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white max-w-xl mx-auto">
            <span className="bg-slate-800 border border-slate-600 px-3.5 py-1.5 rounded-xl shadow">📚 Technical Articles</span>
            <span className="bg-slate-800 border border-slate-600 px-3.5 py-1.5 rounded-xl shadow">🏗️ CAD & Architecture</span>
            <span className="bg-slate-800 border border-slate-600 px-3.5 py-1.5 rounded-xl shadow">⚙️ Engineering Tools</span>
            <span className="bg-slate-800 border border-slate-600 px-3.5 py-1.5 rounded-xl shadow">🖼️ Web3 & Digital Art</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout: Featured Standalone Guides & Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Latest Articles & Technical Guides</h2>
            <p className="text-sm font-medium text-slate-200">In-depth reads, industry standards, and step-by-step tutorials.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Standalone CAD Formats Guide Card */}
          <div className="p-6 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-3">
                <span className="bg-blue-950 border border-blue-700 px-2.5 py-1 rounded-md uppercase tracking-wider">CAD & Architecture</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-200 font-semibold">7 min read</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                <Link href="/cad-3d-file-formats-guide">
                  Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX
                </Link>
              </h3>
              <p className="text-slate-200 text-sm mb-6 leading-relaxed line-clamp-3">
                Learn the differences between mesh and parametric CAD files. Choose the right format for 3D printing, rendering, and engineering software interoperability.
              </p>
            </div>
            <Link 
              href="/cad-3d-file-formats-guide" 
              className="text-blue-300 text-sm font-bold hover:text-blue-200 inline-flex items-center gap-1"
            >
              Read Full Guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Featured Standalone SEO Pressure Guide Card */}
          <div className="p-6 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-3">
                <span className="bg-blue-950 border border-blue-700 px-2.5 py-1 rounded-md uppercase tracking-wider">Engineering</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-200 font-semibold">6 min read</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                <Link href="/pressure-converter-guide">
                  Complete Pressure Unit Conversion Guide: Bar, PSI, MPa, and kPa
                </Link>
              </h3>
              <p className="text-slate-200 text-sm mb-6 leading-relaxed line-clamp-3">
                Master pressure conversions with our ultimate engineering guide. Learn exact formulas and quick reference charts to convert between Bar, PSI, MPa, and kPa instantly.
              </p>
            </div>
            <Link 
              href="/pressure-converter-guide" 
              className="text-blue-300 text-sm font-bold hover:text-blue-200 inline-flex items-center gap-1"
            >
              Read Full Guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Featured Standalone SEO Web3 & NFT Guide Card */}
          <div className="p-6 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-3">
                <span className="bg-blue-950 border border-blue-700 px-2.5 py-1 rounded-md uppercase tracking-wider">Web3 & Art</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-200 font-semibold">5 min read</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                <Link href="/nft-digital-art-guide">
                  What is Web3 Digital Art? A Complete Guide to Collecting NFTs
                </Link>
              </h3>
              <p className="text-slate-200 text-sm mb-6 leading-relaxed line-clamp-3">
                Discover how blockchain technology transforms digital creativity, how on-chain provenance works, and what to look for when collecting NFTs on OpenSea.
              </p>
            </div>
            <Link 
              href="/nft-digital-art-guide" 
              className="text-blue-300 text-sm font-bold hover:text-blue-200 inline-flex items-center gap-1"
            >
              Read Full Guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Dynamic Articles Mapping */}
          {articles.map((article) => (
            <div 
              key={article.slug} 
              className="p-6 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 mb-3">
                  <span className="bg-blue-950 border border-blue-700 px-2.5 py-1 rounded-md uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-200 font-semibold">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-slate-200 text-sm mb-6 leading-relaxed line-clamp-3">{article.description}</p>
              </div>
              <Link 
                href={`/blog/${article.slug}`} 
                className="text-blue-300 text-sm font-bold hover:text-blue-200 inline-flex items-center gap-1"
              >
                Read Full Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Utilities & Web3 Showcase Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Interactive Web Tools & Projects</h2>
            <p className="text-sm font-medium text-slate-200">Free online converters and digital asset showcases.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tool Card */}
          <div className="p-8 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-950 text-blue-300 border border-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                📐
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Universal Engineering Unit Converter
              </h3>
              <p className="text-slate-200 text-sm mb-6 leading-relaxed">
                Convert length, pressure, volume, area, and weight measurements with high precision.
              </p>
            </div>
            <div>
              <Link 
                href="/tools/unit-converter" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/30"
              >
                Open Tool &rarr;
              </Link>
            </div>
          </div>

          {/* NFT Showcase Card */}
          <div className="p-8 border border-slate-700 rounded-2xl bg-slate-900 hover:border-blue-400 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-950 text-blue-300 border border-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                🎨
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Digital Art & NFT Collections
              </h3>
              <p className="text-slate-200 text-sm mb-6 leading-relaxed">
                Explore curated Web3 digital artworks and concept collections minted on Ethereum.
              </p>
            </div>
            <div>
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 bg-slate-800 border border-slate-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-slate-700 transition-colors duration-200"
              >
                Explore Gallery &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}