import Link from 'next/link';

export const metadata = {
  title: 'Parsing and Rendering AutoCAD DXF Files with JavaScript | serdarozden.com',
  description: 'Learn how to parse ASCII DXF group codes in JavaScript and render 2D/3D CAD vector geometry directly inside modern web browsers.',
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
              Web CAD
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Parsing and Rendering AutoCAD DXF Files in Web Browsers with JavaScript
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Building client-side CAD parsers to decode AutoCAD Drawing Exchange Format (DXF) group codes into interactively rendered WebGL and Canvas vector paths without server overhead.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              AutoCAD DXF is an open tagged data format representing vector CAD drawings. To render 2D architectural plans and mechanical layouts inside a web application, client-side engines must efficiently tokenize ASCII stream data into structured geometry arrays.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding DXF Group Codes & Tokenization
            </h2>
            <p>
              DXF files are structured as key-value pairs where integer group codes specify data types. Group code <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">0</code> defines entity boundaries (e.g., <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">LINE</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">LWPOLYLINE</code>), while codes <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">10</code>, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">20</code>, and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">30</code> contain spatial coordinates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Vectorization to Three.js BufferGeometry
            </h2>
            <p>
              Parsed entities like circles, arcs, and polylines are mapped to 3D line segments. Using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">THREE.LineSegments</code> combined with float32 typed arrays guarantees 60 FPS viewport zooming and panning on complex drawings with tens of thousands of vectors.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Managing Layers and Lineweights
            </h2>
            <p>
              The DXF <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">TABLES</code> section contains layer definitions, line types, and color tables (ACI). Storing these properties in client state allows users to toggle layer visibility and line thicknesses dynamically.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}