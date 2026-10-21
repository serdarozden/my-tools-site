import Link from 'next/link';

export const metadata = {
  title: 'WebGPU Compute-Driven Dynamic NURBS Tessellation | serdarozden.com',
  description: 'Architecting adaptive GPU tessellation engines for parametric Bezier and NURBS surfaces using WebGPU WGSL compute shaders and view-dependent evaluation.',
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
              WebGPU & Parametric CAD
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Hardware-Accelerated NURBS Surface Tessellation via WebGPU Compute Shaders
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Evaluating non-uniform rational B-spline control meshes dynamically on client GPUs to render smooth curvature without pre-baked static meshes.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Converting complex CAD surfaces into static triangle meshes on servers increases file transfer sizes dramatically. Offloading mathematical NURBS surface evaluation directly to WebGPU compute shaders allows streaming lightweight mathematical control points and generating adaptive meshes on demand.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. B-Spline Basis Function Evaluation in WGSL
            </h2>
            <p>
              Evaluating Cox-de Boor recursive basis functions inside WebGPU compute workgroups computes precise surface point positions and tangent vectors across 2D parametric $(u,v)$ domains in parallel.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Screen-Space Adaptive Tessellation Factors
            </h2>
            <p>
              Dynamic compute passes evaluate camera proximity and local surface curvature, automatically subdividing high-curvature or near-field patch regions into denser vertex grids while keeping flat areas lightweight.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Direct GPU Mesh Buffer Allocation & Drawing
            </h2>
            <p>
              Writing evaluated vertex coordinates, normals, and index buffers directly into GPU storage buffers enables immediate rendering via `drawIndirect()` without transferring geometry back to JavaScript RAM.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}