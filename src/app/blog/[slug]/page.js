import { articles } from '@/data/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} - TechTools`,
    description: article.description,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  // Eğer url'deki slug verilerimiz arasında yoksa 404 sayfasına gönder
  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
        >
          &larr; Back to all guides
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
          <span className="bg-blue-950 border border-blue-800/60 px-3 py-1 rounded-md uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-normal">{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed font-normal">
          {article.description}
        </p>
      </header>

      {/* Article Content (HTML Render Enabled) */}
      <article 
        className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4
                   [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-slate-800 [&_h2]:pb-2
                   [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4
                   [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-6
                   [&_li]:text-slate-300
                   [&_strong]:text-blue-400 [&_strong]:font-semibold
                   [&_code]:bg-slate-800 [&_code]:text-blue-300 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Call to Action Card */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl my-8">
        <h3 className="text-xl font-bold text-white mb-2">Need to run quick conversions?</h3>
        <p className="text-slate-400 text-sm mb-4">
          Use our free universal engineering unit converter to switch between metric, imperial, pressure, and CAD measurements instantly.
        </p>
        <Link 
          href="/tools/unit-converter"
          className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-blue-500 transition shadow-md shadow-blue-600/20"
        >
          Open Unit Converter &rarr;
        </Link>
      </div>
    </main>
  );
}