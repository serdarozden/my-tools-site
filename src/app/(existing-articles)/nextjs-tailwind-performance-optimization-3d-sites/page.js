import Link from 'next/link';

export const metadata = {
  title: 'Next.js & Tailwind CSS Performance Optimization for 3D Websites | serdarozden.com',
  description: 'Learn performance tuning techniques for Next.js App Router and Tailwind CSS sites featuring dynamic 3D viewports, SSG rendering, and asset caching.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Web Development & Next.js
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Next.js & Tailwind CSS: Optimizing Performance for Asset-Heavy Sites
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Maintain sub-second page loads and 100/100 Lighthouse scores while serving heavy 3D assets, technical guides, and interactive portfolios.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Building a modern technical portfolio requires serving rich UI styles and heavy 3D files without compromising core web vitals. Next.js App Router combined with Tailwind CSS provides the architectural foundation for maximum performance.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Dynamic Imports & Lazy Loading Heavy 3D Canvas Modules
            </h2>
            <p>
              Prevent large WebGL canvas libraries from bloating initial JavaScript bundles. Wrap 3D viewports with Next.js dynamic imports using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">dynamic(() =&gt; import('./Canvas'), &#123; ssr: false &#125;)</code> to load engine code only when visible in the viewport.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Tailwind CSS JIT Compilation & Class Pruning
            </h2>
            <p>
              Tailwind’s Just-In-Time (JIT) engine generates utility CSS on demand. Ensure content paths inside <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">tailwind.config.js</code> target only active directories to produce a lean production CSS footprint under 15 KB.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. SSG Static Caching and Asset CDNs on Vercel
            </h2>
            <p>
              Leverage Static Site Generation (SSG) for technical documentation pages. Static HTML pages are cached globally at edge nodes, ensuring instant response times regardless of client geographical location.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}