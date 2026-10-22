import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Cloth Simulation & Garment Dynamics in WebGPU | serdarozden.com',
  description: 'Learn how to build real-time cloth simulation engines using mass-spring systems, bending constraints, and WebGPU compute shaders.',
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
              WebGPU Physics & Simulation
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            GPU-Accelerated Cloth Simulation & Garment Dynamics via WebGPU Compute
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating textile drape, structural shear, and wind forces for millions of active cloth particles using parallel WGSL compute workgroups.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating interactive clothing or fabric banners on the CPU limits mesh density to a few thousand vertices. Moving mass-spring and position-based dynamics (PBD) solvers to WebGPU compute pipelines allows simulating high-resolution garments at interactive frame rates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Mass-Spring & Position-Based Dynamics (PBD)
            </h2>
            <p>
              Modeling structural, shear, and bending springs connects neighboring vertex particles. Position-based projection constraints correct distance violations iteratively without unstable velocity explosions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Parallel Constraint Solving in WGSL Compute
            </h2>
            <p>
              Executing parallel constraint iterations across storage buffers requires ping-pong buffer writing and atomic synchronization to prevent race conditions during simultaneous edge updates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Collision Response with 3D CAD Mannequins
            </h2>
            <p>
              Evaluating signed distance fields (SDF) or ray-mesh intersections against static body assets prevents cloth vertices from penetrating rigid CAD characters and furniture models.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}