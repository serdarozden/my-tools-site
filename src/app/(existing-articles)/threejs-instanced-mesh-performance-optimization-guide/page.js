import Link from 'next/link';

export const metadata = {
  title: 'Mastering InstancedMesh in Three.js for Large Scale Scenes | serdarozden.com',
  description: 'Reduce WebGL draw calls from thousands to one. Technical guide for implementing InstancedMesh, dynamic instance matrices, and frustum culling in Three.js.',
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
              WebGL & Web3D Optimization
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing Massive WebGL Scenes with Three.js InstancedMesh
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Render tens of thousands of individual 3D objects in a single draw call using GPU hardware instancing techniques in browser viewports.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Instantiating repetitive scene objects—such as BIM structural rebar, forest vegetation, or city architectural buildings—as unique <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">THREE.Mesh</code> objects destroys frame rates due to WebGL draw call CPU overhead.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Understanding GPU Instancing vs. Individual Mesh Calls
            </h2>
            <p>
              <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">InstancedMesh</code> transmits geometry buffer and material definitions once to GPU VRAM, updating only a 4x4 transform matrix array (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">instanceMatrix</code>) per instance.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Dynamic Matrix Updates and Per-Instance Color Buffers
            </h2>
            <p>
              Set <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">instanceMatrix.needsUpdate = true</code> only when object position or rotation changes occur. Customize individual instance appearances using <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">setMatrixAt()</code> and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">setColorAt()</code> methods.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Implementing BVH Spatial Indexing and Raycasting
            </h2>
            <p>
              Standard raycasting against 50,000 instanced items stalls the main thread. Integrate <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">three-mesh-bvh</code> spatial trees to achieve instant mouse hover selection on instanced objects.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}