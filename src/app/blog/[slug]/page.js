import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{article.category}</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-3">{article.title}</h1>
        <div className="text-sm text-gray-500">{article.date} • {article.readTime}</div>
      </header>

      <div className="w-full h-28 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-xs my-6">
        [Ad Space - Top Banner]
      </div>

      <div 
        className="prose max-w-none text-gray-800 space-y-4"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}