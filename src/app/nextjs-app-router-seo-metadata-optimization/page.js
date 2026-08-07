import Link from 'next/link';

export const metadata = {
  title: 'Next.js App Router SEO & Dynamic Metadata Optimization | serdarozden.com',
  description: 'Master technical SEO in Next.js App Router. Implement dynamic Metadata API, Open Graph cards, canonical tags, and structured JSON-LD schema for maximum search visibility.',
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
            Next.js App Router Technical SEO: Dynamic Metadata & JSON-LD Guide
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Maximize indexation speed and search snippet CTR with automated Open Graph image generation, canonical URL management, and structured data architecture.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Modern web search engines prioritize technical completeness alongside content quality. The Next.js App Router provides built-in Metadata primitives that replace legacy head management packages with server-evaluated type-safe configurations.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Implementing Dynamic generateMetadata Exports
            </h2>
            <p>
              For dynamic routes, utilize the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">generateMetadata</code> function. This pattern fetches route parameters server-side and injects tailored meta titles, descriptions, and canonical links prior to HTML stream delivery.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Injecting Structured JSON-LD Schema for Rich Snippets
            </h2>
            <p>
              Incorporate structured <strong className="text-white">schema.org</strong> JSON-LD scripts inside your layout files. Rich snippets inform Google search bots of author credentials, publishing timestamps, and article categorization, improving organic ranking positions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated Open Graph Image Generation with `@vercel/og`
            </h2>
            <p>
              Enhance social media link previews using Next.js <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ImageResponse</code> APIs. Dynamically render social preview cards with custom typography and brand colors on edge runtime without static image asset overhead.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}