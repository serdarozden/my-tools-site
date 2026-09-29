import Link from 'next/link';

export const metadata = {
  title: 'Next.js Core Web Vitals & INP Optimization Architecture Guide | serdarozden.com',
  description: 'Optimize Next.js App Router applications for 100/100 Lighthouse scores by mastering Interaction to Next Paint (INP), LCP image preloading, and CLS layout stability.',
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
              Web Vitals & Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing Core Web Vitals in Next.js: Tackling INP, LCP, and Layout Shifts
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Systematic strategies for minimizing long main-thread tasks, eliminating Cumulative Layout Shift (CLS), and optimizing Interaction to Next Paint (INP) latency.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Google's search ranking algorithms heavily weight real-user performance metrics. Achieving top-tier Interaction to Next Paint (INP) scores requires isolating heavy main-thread JavaScript execution during user interactions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Reducing Interaction Latency (INP Optimization)
            </h2>
            <p>
              Breaking long tasks using requestIdleCallback or web workers ensures user input handlers respond under 200 milliseconds, preventing interface lag during complex state updates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Eliminating Cumulative Layout Shift (CLS)
            </h2>
            <p>
              Utilizing Next.js next/font with CSS size-adjust fallback declarations prevents layout jumps during custom font loading, while reserving aspect-ratio boxes eliminates image reflows.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Optimizing Largest Contentful Paint (LCP)
            </h2>
            <p>
              Combining critical CSS inline extraction with next/image fetchPriority="high" ensures hero visual elements render in the initial viewport frame without blocking render pipelines.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}