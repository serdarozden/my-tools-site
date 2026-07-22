import Link from 'next/link';
import { articles } from '@/data/articles';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Dynamic Hero Section */}
      <section className="relative overflow-hidden text-center py-20 px-6 bg-slate-900 rounded-3xl mb-16 shadow-2xl text-white border border-slate-800">
        {/* Glow Effects & Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/50 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Professional Online Engineering Toolkit
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Precision Tools for CAD & Construction
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Instant unit conversions, scale calculators, and technical drafting references built specifically for architects, engineers, and creators.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400 pt-4 border-t border-slate-800/80 max-w-xl mx-auto">
            <span className="flex items-center gap-2">⚡ 100% Free & Fast</span>
            <span className="flex items-center gap-2">🎯 High Decimal Accuracy</span>
            <span className="flex items-center gap-2">📱 Mobile & CAD Friendly</span>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Featured Engineering Tools</h2>
            <p className="text-sm text-slate-500">Fast and accurate calculators for everyday technical tasks.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tool Card 1 */}
          <div className="p-8 border border-slate-200/80 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Technical Unit Converter
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Convert length, area, and specialized engineering units with exact precision. Designed for drafting and CAD blueprints.
              </p>
            </div>
            <div>
              <Link 
                href="/tools/unit-converter" 
                className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-200 shadow-sm"
              >
                Launch Converter &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Guides Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Technical Guides & Reference</h2>
            <p className="text-sm text-slate-500">In-depth articles on engineering, CAD standards, and measurement conversions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div 
              key={article.slug} 
              className="p-6 border border-slate-200/80 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-3">
                  <span className="bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 font-normal">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-2">{article.description}</p>
              </div>
              <Link 
                href={`/blog/${article.slug}`} 
                className="text-blue-600 text-sm font-bold hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                Read Full Guide <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}