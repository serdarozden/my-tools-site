import Link from 'next/link';

export const metadata = {
  title: 'Optimizing Three.js & glTF Assets for WebGL: Draw Calls & Draco Compression | serdarozden.com',
  description: 'Boost WebGL performance in Next.js apps. Learn Draco compression, WebGL draw call reduction, texture atlas packing, and Three.js memory management.',
};

export default function WebGLPerformanceOptimizationPage() {
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
              Web Development & Next.js
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing Three.js & glTF Assets for WebGL: Draw Calls & Draco Compression
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            A comprehensive developer guide on maximizing 3D performance in WebGL and Next.js through Draco mesh compression, texture atlas consolidation, and efficient Three.js memory management.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Delivering high-fidelity 3D experiences on the web requires a strict balance between visual quality and performance optimization. Without proper asset pipeline management, heavy 3D assets quickly degrade Core Web Vitals, causing high bounce rates and poor mobile responsiveness.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Reducing File Payloads with Draco and Meshopt Compression
            </h2>
            <p>
              Standard glTF and GLB models contain verbose geometry buffers that inflate network load. Implementing Google Draco geometry compression or Meshoptimizer reduces vertex buffer data sizes by up to 80%. When loaded into Three.js via `DRACOLoader`, these compressed binary streams significantly shorten network transfer times, ensuring fast initial page paint metrics.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Minimizing WebGL Draw Calls with Instancing and Texture Atlases
            </h2>
            <p>
              In WebGL, CPU-to-GPU context switches during draw calls are the primary performance bottleneck. Combining distinct geometries into single merged meshes, packing diffuse and roughness textures into unified texture atlases, and utilizing `InstancedMesh` for repeated structural or environmental objects drastically reduces GPU overhead and maintains a solid 60 FPS.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Three.js Memory Cleanup in Next.js App Router Pipelines
            </h2>
            <p>
              Single-page application state shifts in Next.js often leave orphaned WebGL textures and geometry buffers uncollected in GPU memory. Developers must systematically invoke `.dispose()` on geometries, materials, and textures within React `useEffect` cleanup phases to prevent severe GPU memory leaks across route navigation.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}