import Link from 'next/link';

export const metadata = {
  title: 'Custom WebGL GLSL Shaders for CAD & Technical Visualization | serdarozden.com',
  description: 'Learn to write custom GLSL vertex and fragment shaders for cross-section clipping, technical wireframe outlines, and engineering visual styles in WebGL.',
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
              Shader Programming & GLSL
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Authoring Custom GLSL Shaders for CAD and Technical WebGL Applications
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Techniques for dynamic plane clipping, screen-space antialiased wireframes, and false-color stress analysis visualization in web browsers.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Standard PBR materials are insufficient for engineering interfaces. Custom GLSL shaders allow developers to implement section views, measurement overlays, and structural stress gradients directly on the GPU.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Dynamic Section Clipping Planes in Fragment Shaders
            </h2>
            <p>
              By passing arbitrary plane equations to fragment shaders, custom discard logic clips geometry in real time without mutating underlying vertex attributes or mesh buffers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Screen-Space Antialiased Wireframe Rendering
            </h2>
            <p>
              Using barycentric coordinates calculated during vertex shading, fragment shaders can draw resolution-independent outline strokes over 3D surfaces without requiring separate line geometry.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. FEA Stress & Deferment Color Mapping
            </h2>
            <p>
              Mapping scalar engineering data arrays to custom color ramp textures enables real-time visualization of structural Finite Element Analysis (FEA) results directly on target 3D meshes.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}