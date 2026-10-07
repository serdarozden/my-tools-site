import Link from 'next/link';

export const metadata = {
  title: 'OffscreenCanvas & Web Worker Headless Rendering | serdarozden.com',
  description: 'How to decouple WebGL and WebGPU rendering loops from the main DOM thread using OffscreenCanvas and Web Workers for zero-jank user interfaces.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Web Multithreading & Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Decoupling 3D Rendering Threads with OffscreenCanvas and Web Workers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Moving high-frequency WebGL and WebGPU draw calls off the main thread to ensure smooth UI responsiveness during complex geometry loads.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Heavy DOM operations, React state updates, or complex business logic on the main thread often cause micro-stutters in WebGL animation loops. OffscreenCanvas transfers control of HTML canvas elements directly to Web Workers for isolated rendering.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Transferring Canvas Ownership to Workers
            </h2>
            <p>
              Using `canvas.transferControlToOffscreen()` hands render target ownership to a Web Worker thread, allowing graphics contexts (WebGL2 or WebGPU) to execute independently of DOM layout passes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Asynchronous User Input & Pointer Event Forwarding
            </h2>
            <p>
              Main-thread DOM pointer events are serialized into lightweight ArrayBuffers or objects and posted to worker threads, driving camera controllers smoothly without blocking main UI interactions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Background Image Export & Thumbnail Generation
            </h2>
            <p>
              Executing headless offscreen render passes allows web applications to capture high-resolution CAD model screenshots and PDF thumbnails silently without flickering the active viewport UI.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}