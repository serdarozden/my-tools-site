import Link from 'next/link';
import { articles } from '@/data/articles';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-blue-50 to-transparent rounded-3xl mb-12 border border-blue-100/50">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full mb-4 inline-block">
          Free Engineering & Design Tools
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Precision Tools for Professionals
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Fast online unit converters, architectural reference guides, and technical tools built for drafting, CAD, and planning.
        </p>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
              📏
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Unit Converter</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Convert length, area, and specialized CAD units instantly with high decimal precision.
            </p>
            <Link 
              href="/tools/unit-converter" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Open Tool &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Guides & Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.slug} className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3">
                  <span className="bg-blue-50 px-2.5 py-1 rounded-md">{article.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">{article.description}</p>
              </div>
              <Link 
                href={`/blog/${article.slug}`} 
                className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                Read Article &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}