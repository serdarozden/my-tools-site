import Link from 'next/link';
import { articles } from '@/data/articles';

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Web Tools & Technical Guides</h1>
        <p className="text-lg text-gray-600">Fast online converters and technical guides.</p>
      </section>

      <section className="py-12 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Online Tools</h2>
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-bold mb-2">Unit Converter</h3>
          <p className="text-gray-600 text-sm mb-4">Convert length and area measurements instantly.</p>
          <Link href="/tools/unit-converter" className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Open Tool &rarr;
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Guides</h2>
        {articles.map((article) => (
          <div key={article.slug} className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.description}</p>
            <Link href={`/blog/${article.slug}`} className="text-blue-600 text-sm font-semibold hover:underline">
              Read Guide &rarr;
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}