import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Cloth Tearing & Fracture Simulation in WebGPU | serdarozden.com',
  description: 'Learn how to build dynamic cloth tearing, mesh splitting, and structural strain fracture algorithms using WebGPU WGSL compute shaders.',
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
              WebGPU Physics & Destruction
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            GPU-Accelerated Cloth Tearing and Dynamic Mesh Fracture in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Simulating structural strain limits, dynamic edge removal, and runtime index buffer modification using parallel WGSL compute passes.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating interactive material tearing requires breaking mesh connectivity dynamically when mechanical stress thresholds are exceeded. Executing mass-spring strain evaluation inside WebGPU compute workgroups allows tearing high-resolution garments at interactive frame rates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Structural Strain Limit Evaluation in WGSL
            </h2>
            <p>
              Compute shaders measure spring stretch ratios across adjacent mesh vertices every frame. When local strain exceeds material yield strength limits, the algorithm flags spring constraints for immediate rupture.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Dynamic Vertex Splitting & Topology Modification
            </h2>
            <p>
              Edge rupture requires duplicating shared vertices to create distinct mesh boundaries. Executing atomic vertex allocation routines inside GPU storage buffers modifies index buffers dynamically without round-trip data transfers to JavaScript.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Self-Collision Handling for Torn Garment Strips
            </h2>
            <p>
              Evaluating spatial hash grids inside WebGPU compute passes prevents torn fabric strips from intersecting with themselves or surrounding rigid CAD colliders.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}