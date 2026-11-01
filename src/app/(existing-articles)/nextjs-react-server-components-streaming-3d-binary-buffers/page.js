import Link from 'next/link';

export const metadata = {
  title: 'Next.js React Server Components & 3D Binary Buffer Streaming | serdarozden.com',
  description: 'Optimize web 3D asset delivery by streaming large GLTF/GLB binary buffers and CAD geometry chunks using React Server Components (RSC).',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>←</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Next.js & Web 3D Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Nov 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Streaming Large 3D Binary Buffers with Next.js React Server Components
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Leveraging React Server Components (RSC) and Node.js streams to deliver heavy GLTF/GLB geometry chunks progressively without blocking the main client thread.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Loading multi-megabyte 3D models and BIM assets entirely on the client side causes severe main-thread pauses and poor Core Web Vitals scores. Streaming binary buffers progressively via Next.js RSC and Suspense boundaries provides immediate visual feedback.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Server-Side Binary Chunking and Compression
            </h2>
            <p>
              Reading large CAD and GLB files on the server, splitting them into indexed geometry chunks, and applying compression pipelines reduces initial payload bottlenecks.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Suspense Boundaries and Progressive WebGL Loading
            </h2>
            <p>
              Wrapping Three.js or WebGL canvas viewports inside React Suspense boundaries allows progressive mesh insertion as binary chunks arrive from server streams.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Memory Management and GC Optimization
            </h2>
            <p>
              Releasing ArrayBuffers correctly after GPU upload prevents memory leaks and ensures stable frame rates during heavy architectural model navigation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}