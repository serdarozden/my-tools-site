import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Rigid Body Physics Simulation in WebGPU | serdarozden.com',
  description: 'Learn how to build parallel rigid body dynamics, impulse resolution, and bounding volume collision engines using WebGPU WGSL compute shaders.',
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
              WebGPU Physics & Collisions
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            GPU-Accelerated Rigid Body Physics Simulation via WebGPU Compute
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Solving impulse-based collision responses and rotational momentum equations for thousands of active rigid bodies in parallel WGSL compute workgroups.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating hundreds of interacting mechanical parts or falling debris on the CPU quickly saturates main-thread processing limits. Transitioning rigid body dynamics and impulse solvers to WebGPU compute pipelines allows processing multi-thousand active object assemblies at fluid frame rates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Broad-Phase Spatial Hashing on GPU Storage Buffers
            </h2>
            <p>
              Assigning moving rigid bodies to uniform 3D grid hash cells inside compute passes avoids exhaustive $O(N^2)$ collision checks, identifying potential overlapping pairs efficiently.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Narrow-Phase GJK / EPA Collision Detection
            </h2>
            <p>
              Executing Gilbert-Johnson-Keerthi (GJK) distance algorithms and Expanding Polytope Algorithm (EPA) contact manifold generation in parallel computes precise penetration depths and collision normal vectors.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Sequential Impulse Resolution & Friction
            </h2>
            <p>
              Resolving linear and angular velocity changes through sequential impulse iterations updates position matrices stored in GPU buffers directly without CPU readback bottlenecks.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}