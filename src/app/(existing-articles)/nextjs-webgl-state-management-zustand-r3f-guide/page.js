import Link from 'next/link';

export const metadata = {
  title: 'Next.js & WebGL State Management: Zustand + React Three Fiber | serdarozden.com',
  description: 'How to manage complex 3D application state, camera transitions, and selected object metadata in Next.js App Router using Zustand and R3F.',
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
              React & WebGL State
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Managing Interactive 3D State in Next.js with Zustand and React Three Fiber
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Preventing unneeded React re-renders while syncing DOM UI controls with high-frequency 60 FPS WebGL canvas animations.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Connecting DOM UI elements with 3D WebGL viewports often introduces performance lag if state updates trigger React re-renders across the canvas tree. Zustand provides atomic transient subscriptions ideal for WebGL contexts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Transient Subscriptions for 60 FPS Loop Execution
            </h2>
            <p>
              Subscribing directly to Zustand store changes inside `useFrame` render loops allows updating mesh transform matrices without re-rendering parent React components.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Synchronizing DOM Overlays with 3D Raycasting
            </h2>
            <p>
              Storing selected mesh metadata and camera target coordinates in centralized stores streamlines displaying HTML tooltips over projected 3D world space positions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. URL State Persistence for Shared 3D Viewports
            </h2>
            <p>
              Integrating Zustand with Next.js URL query parameters enables instant sharing of specific camera angles, object highlights, and layer visibility states via simple link copying.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}