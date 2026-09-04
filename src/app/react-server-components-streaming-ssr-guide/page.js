import Link from 'next/link';

export const metadata = {
  title: 'React Server Components & Streaming SSR Performance Guide | serdarozden.com',
  description: 'Learn how to optimize Next.js App Router applications using React Server Components, Suspense streaming, and selective hydration for instant Time to First Byte (TTFB).',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              React & Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Mastering React Server Components & Suspense Streaming in Next.js
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Deconstructing zero-bundle-size server components, progressive HTML streaming, and selective client hydration for maximum rendering throughput.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional SSR blocks the entire document response until every data query resolves. React Server Components combined with HTTP streaming break this bottleneck by flushing layout shell HTML to the browser instantly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Zero-Bundle-Size Server Execution
            </h2>
            <p>
              Server Components execute exclusively on the server tier, keeping heavy dependencies like database drivers or markdown parsers out of the client JavaScript bundle.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Progressive HTML Streaming via React Suspense
            </h2>
            <p>
              Wrapping asynchronous component subtrees in Suspense boundaries enables Next.js to stream fallback UI states immediately while background data fetching finishes on the server.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interlocking Server and Client Component Boundaries
            </h2>
            <p>
              Structuring the component tree to pass Server Components as children into Client Component wrappers preserves server-side data fetching advantages without triggering unnecessary client hydration overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}