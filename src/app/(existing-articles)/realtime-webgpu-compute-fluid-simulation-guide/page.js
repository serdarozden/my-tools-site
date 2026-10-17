import Link from 'next/link';

export const metadata = {
  title: 'Real-Time WebGPU Compute Fluid Simulation Guide | serdarozden.com',
  description: 'Architecting Eulerian grid-based 2D/3D fluid simulations and Navier-Stokes pressure solvers using WebGPU WGSL compute shaders.',
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
              WebGPU Physics & Fluids
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time Grid-Based Eulerian Fluid Simulation in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Solving incompressible Navier-Stokes equations and Jacobi pressure projections at 60 FPS using parallel WGSL compute workgroups.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating realistic fluid dynamics requires executing heavy partial differential equations across spatial grids. Transitioning from CPU solvers to WebGPU compute pipelines allows processing multi-million cell grids in real time inside web browsers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Eulerian Grid Discretization & Advection Passes
            </h2>
            <p>
              Eulerian fluid frameworks divide simulation volumes into static grid cells, evaluating velocity field advection via semi-Lagrangian back-tracing compute passes directly on GPU storage textures.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Divergence-Free Pressure Projection (Jacobi Solver)
            </h2>
            <p>
              Enforcing fluid incompressibility demands resolving Poisson pressure equations. Executing iterative Jacobi or Conjugate Gradient compute passes subtracts velocity field divergence across thousands of concurrent GPU threads.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Obstacle Boundary Conditions
            </h2>
            <p>
              Injecting solid CAD geometry boundary masks into grid compute passes enforces zero normal velocity conditions along immersed structural obstacles, simulating realistic aerodynamic drag and hydrodynamic flow.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}