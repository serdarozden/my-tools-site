import Link from 'next/link';

export const metadata = {
  title: 'Compiling Open CASCADE to WebAssembly: Web CAD Kernels | serdarozden.com',
  description: 'A technical guide on compiling Open CASCADE C++ kernel into WebAssembly to execute precise B-Rep CAD operations directly inside web browsers.',
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
              3D & Web Graphics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Compiling Open CASCADE to WebAssembly: Building Custom Web-Based CAD Kernels
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Bridging native C++ geometric modeling engines with modern web browsers to perform high-precision B-Rep operations, STEP parsing, and mesh generation via Emscripten.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              While WebGL and WebGPU handle visual rendering, true parametric CAD applications require robust geometry modeling kernels (B-Rep) to compute exact NURBS surfaces, boolean operations, and STEP file parsing directly in client-side memory.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Why WebAssembly for CAD Kernels?
            </h2>
            <p>
              JavaScript engines excel at DOM manipulation and reactive state management, but struggle with complex linear algebra, ray-triangle intersection, and topology stitching. Cross-compiling Open CASCADE Technology (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">OCCT</code>) using Emscripten provides near-native C++ performance inside modern browsers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Memory Management & WebWorker Threads
            </h2>
            <p>
              Heavy CAD operations can easily freeze the main UI thread. Executing WebAssembly <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">OCCT</code> instances inside dedicated WebWorkers ensures smooth 60 FPS viewport navigation while background threads calculate complex chamfers and fillets.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Converting B-Rep Geometry to Triangulated Meshes
            </h2>
            <p>
              Parametric geometry represented as NURBS faces must be triangulated before sending to GPU buffers. Utilizing Open CASCADE’s <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">BRepMesh_IncrementalMesh</code> allows developers to set adaptive deflection tolerances based on camera distance.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}