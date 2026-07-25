import Link from 'next/link';
import { articles } from '@/data/articles';

export default function BlogListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-slate-800">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">All Articles & Guides</h1>
        <p className="text-sm font-medium text-slate-600">Browse all technical articles and tutorials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div 
            key={article.slug} 
            className="p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-3">
                <span className="bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-md uppercase tracking-wider">{article.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-semibold">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">{article.description}</p>
            </div>
            <Link 
              href={`/blog/${article.slug}`} 
              className="text-blue-600 text-sm font-bold hover:text-blue-800 inline-flex items-center gap-1"
            >
              Read Full Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}