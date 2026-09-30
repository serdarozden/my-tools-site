import Link from 'next/link';

export const metadata = {
  title: 'Building Browser-Based FEA Solvers with WebGPU & WASM | serdarozden.com',
  description: 'How to build real-time structural Finite Element Analysis (FEA) solvers in the browser using Rust WebAssembly and WebGPU parallel matrix math.',
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
              Engineering Simulations & WebGPU
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time Structural FEA Simulation Engine in Web Browsers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Solving large stiffness matrix systems ($K \cdot u = F$) using Rust compiled to WebAssembly combined with WebGPU matrix operations.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Engineering analysis tools are transitioning from desktop software to cloud-native browser environments. Executing structural matrix decomposition directly on client hardware eliminates server compute costs and enables interactive parameter tuning.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Sparse Stiffness Matrix Assembly in WASM
            </h2>
            <p>
              Constructing global element stiffness matrices from 3D truss and beam elements inside Rust WebAssembly binaries yields native computation speeds while isolating memory allocation safely.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Conjugate Gradient Solvers on WebGPU Compute
            </h2>
            <p>
              Executing iterative matrix solvers (such as Preconditioned Conjugate Gradient) across thousands of WebGPU threads resolves large structural displacement vectors in fractions of a second.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive Stress Visualization & Deformed Shapes
            </h2>
            <p>
              Passing calculated nodal displacement buffers directly to vertex shaders enables instant visual rendering of exaggerated structural deflections and von Mises stress contours.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}