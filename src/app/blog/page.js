import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'Guides & Articles - TechTools',
  description: 'In-depth engineering guides, CAD tutorials, unit conversion standards, and technical insights.',
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800/60 px-3.5 py-1.5 rounded-full mb-4 inline-block">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Guides & Technical Articles
        </h1>
        <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
          Explore our collection of tutorials, architectural standards, CAD unit best practices, and engineering guides.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article 
            key={article.slug} 
            className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-3">
                <span className="bg-blue-950 border border-blue-800/60 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-normal">{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {article.description}
              </p>
            </div>

            <Link 
              href={`/blog/${article.slug}`} 
              className="text-blue-400 text-sm font-bold hover:text-blue-300 inline-flex items-center gap-1.5 pt-4 border-t border-slate-800/80"
            >
              Read Full Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}