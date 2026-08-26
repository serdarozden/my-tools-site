import Link from 'next/link';

export const metadata = {
  title: 'MaterialX Standard for WebGPU & PBR Graphics | serdarozden.com',
  description: 'Implement Academy Software Foundation MaterialX in web renderers. Learn shader graph compilation, cross-platform PBR fidelity, and WebGPU node translation.',
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
              Graphics Standards & WebGPU
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            MaterialX in WebGPU: Bringing Open Shading Standards to the Browser
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Explore MaterialX (Open material standard created by Lucasfilm). Learn how node-based XML shader graphs are compiled directly into WGSL for real-time WebGPU canvas execution.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Transferring complex material definitions between digital content creation tools (Maya, Houdini, Substance) and web engines often degrades visual parity due to conflicting custom GLSL shader logic.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. What is MaterialX and Why Does Web3D Need It?
            </h2>
            <p>
              Developed by Industrial Light & Magic, MaterialX defines open node-based material networks using standard XML schemas. It replaces proprietary shader code with platform-independent visual descriptions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Translating MaterialX XML Graphs to WGSL
            </h2>
            <p>
              By leveraging MaterialX GenShader code generators, complex material graphs are compiled directly into WebGPU Shading Language (WGSL) or GLSL ES 3.0, ensuring 100% visual fidelity across desktop dGPUs and mobile browsers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. OpenUSD & MaterialX Integration in Web Viewers
            </h2>
            <p>
              Combining OpenUSD scene structures with MaterialX lookdev definitions allows web applications to render film-quality procedural surfaces, sub-surface scattering, and complex layering without client-side visual loss.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}