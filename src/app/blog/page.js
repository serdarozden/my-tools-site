// src/app/blog/[slug]/page.js
import Link from 'next/link';

export default async function DynamicBlogPage({ params }) {
  const { slug } = await params;

  // Slug başlığını okunabilir hale getiren basit dönüştürücü
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-white">
      <Link href="/" className="text-blue-400 hover:underline text-sm font-bold mb-6 inline-block">
        &larr; Back to Home
      </Link>
      
      <div className="p-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-950 border border-blue-800 px-3 py-1 rounded-md">
          Technical Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-6 leading-tight">{title}</h1>
        <p className="text-slate-300 leading-relaxed text-lg mb-6">
          This is the static content placeholder for <code className="text-blue-300">{slug}</code>. You can customize the detailed guide and technical specifications here.
        </p>
        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-sm text-slate-400">
          ⚙️ Rota başarıyla yüklendi! Artık 404 almıyorsun.
        </div>
      </div>
    </main>
  );
}