import Link from 'next/link';

export const metadata = {
  title: 'Speckle Protocol: Real-Time OpenBIM Data Streaming Guide | serdarozden.com',
  description: 'Learn how Speckle Protocol replaces traditional file-based IFC exchanges. Stream granular CAD/BIM objects directly between Blender, Revit, AutoCAD, and WebGL.',
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
              OpenBIM & Real-Time Data
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Speckle Protocol: Granular Data Streaming for Next-Gen BIM Workflows
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Bypass monolithic file exports. Move beyond rigid IFC/DWG transfers by using Speckle’s open-source data platform to stream sub-element geometries and parameters across design tools.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              File-based interop creates data silos, version drift, and loss of parametric intent when passing assets between platforms like Revit, AutoCAD, Rhino, and Blender. Speckle treats design models as atomic object streams instead of static files.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Object-Level Versioning vs Traditional File Transfers
            </h2>
            <p>
              Instead of uploading 500MB IFC files on every revision, Speckle sends content-addressed delta updates. Only modified elements (e.g., modified wall geometries or structural column parameter updates) are pushed to the server.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Querying Live Design Streams with GraphQL & WebSockets
            </h2>
            <p>
              Extract parametric properties directly into web applications via Speckle’s GraphQL API. Subscribe to WebSocket events to trigger automatic UI re-renders whenever an architect commits updates from their native CAD environment.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Custom Web Viewers & Next.js Server Integration
            </h2>
            <p>
              Integrate Speckle’s open-source TypeScript viewer into Next.js App Router applications. Process stream payload metadata server-side to generate dynamic reports, carbon footprint metrics, and automated structural checks.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}