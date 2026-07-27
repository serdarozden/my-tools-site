import Link from 'next/link';
import { articles } from '@/data/articles';

export default function BlogIndexPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-100 min-h-screen">
      {/* Geri Dönüş */}
      <nav className="mb-8">
        <Link 
          href="/" 
          className="text-blue-400 text-sm font-bold hover:underline inline-block"
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* Başlık */}
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Articles & Guides
        </h1>
        <p className="text-lg text-slate-300">
          Technical insights, CAD workflows, engineering guides, and digital architecture notes.
        </p>
      </header>

      {/* Yazıların Listesi */}
      <div className="space-y-6">
        {articles.map((article) => (
          <article 
            key={article.slug}
            className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-3">
              <span className="bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-slate-400">{article.readTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              <Link href={article.path} className="hover:text-blue-400 transition-colors">
                {article.title}
              </Link>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {article.description}
            </p>

            <Link 
              href={article.path}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read Article <span>&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}