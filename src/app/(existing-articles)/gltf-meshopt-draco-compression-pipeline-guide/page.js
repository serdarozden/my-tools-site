import Link from 'next/link';

export const metadata = {
  title: 'Draco vs Meshoptimizer Compression for Web 3D | serdarozden.com',
  description: 'Technical comparison of Draco compression and Meshoptimizer (meshopt) for shrinking glTF 3D model payload sizes and reducing GPU decode latency in web applications.',
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
              Web Performance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing 3D Web Assets: Draco vs Meshoptimizer (meshopt) Pipeline
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Comparing geometry compression standards to dramatically compress glTF/GLB asset file sizes while minimizing CPU/GPU decoding bottlenecks in WebGL engines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Dense 3D assets can easily exceed 50-100 MBs, causing long loading screens for web applications. Applying geometry compression algorithms reduces network transport sizes by up to 80-90% without losing visual fidelity.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Google Draco Compression
            </h2>
            <p>
              Draco quantizes vertex positions, normals, and UV coordinates into compact bitstream packages. While Draco yields extremely small file sizes, its WebAssembly decoding process can create CPU execution spikes on lower-end mobile hardware.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Meshoptimizer (meshopt) Architecture
            </h2>
            <p>
              Meshoptimizer focuses on GPU cache efficiency and super-fast decoding times. By reordering vertex indices for optimal vertex cache reuse, <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">meshopt</code> enables near-instantaneous decoding directly into WebGL vertex buffers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated CLI Pipelines using glTF-Transform
            </h2>
            <p>
              Integrating Node.js optimization scripts via <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">@gltf-transform/cli</code> into continuous deployment pipelines automatically compresses raw FBX/OBJ exports into production-ready web assets.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}