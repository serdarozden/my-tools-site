import Link from 'next/link';

export const metadata = {
  title: 'Generating Dynamic OG Images for 3D Web Apps in Next.js | serdarozden.com',
  description: 'Learn how to generate dynamic Open Graph (OG) social card images for 3D canvas models using Next.js ImageResponse and WebGL headless rendering.',
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
              Next.js & Frontend Tooling
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Dynamic Open Graph Image Generation for Interactive 3D Web Models
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Boost social engagement by generating real-time preview images for dynamic 3D scenes using Next.js @vercel/og and headless canvas snapshots.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              When users share links to specific 3D model configurations or CAD viewports on social media, static fallback images lower click-through rates. Generating dynamic Open Graph cards solves this gap.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Leveraging Next.js ImageResponse Satori Engine
            </h2>
            <p>
              The <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">ImageResponse</code> API allows constructing JSX-based dynamic layouts generated directly at Edge runtimes with low latencies.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Capturing Headless Canvas State and Server Rendering
            </h2>
            <p>
              Pass scene parameter hashes through URL query strings to re-render lightweight WebGL camera states server-side, or cache client-generated data URLs directly to Vercel KV for instant social previews.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. SEO Edge Cases & Meta Tag Integration
            </h2>
            <p>
              Configure dynamic <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">og:image</code> endpoints inside Next.js <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">opengraph-image.jsx</code> conventions to ensure seamless Twitter and Discord embeds.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}