import Link from 'next/link';

export const metadata = {
  title: 'Metaverse Spatial Architecture & 3D Web Environments | serdarozden.com',
  description: 'Design principles for metaverse spatial architecture and WebGL 3D environments. Master spatial ergonomics, WebXR lighting, and real-time optimization.',
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
              Spatial Design & Web3
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Metaverse Spatial Architecture: Designing Real-Time 3D Web Environments
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Explore how architectural principles apply to virtual spatial environments, WebGL galleries, and immersive WebXR digital spaces.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Designing virtual spatial architecture frees architects from physical gravity and material structural costs, but introduces new challenges regarding WebGL rendering performance, avatar navigation ergonomics, and spatial audio design.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Spatial Ergonomics and Camera Field of View (FOV)
            </h2>
            <p>
              Virtual spaces designed for avatars require wider corridors, higher ceilings, and broader doorway thresholds compared to physical architecture to account for third-person camera FOV collision bounds and motion sickness prevention in VR headsets.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Lightmap Baking for WebGL Real-Time Environments
            </h2>
            <p>
              Real-time WebGL engines (such as Three.js or Babylon.js) cannot process heavy dynamic lighting. Pre-bake high-quality global illumination (GI) and ambient occlusion lightmaps inside Blender or Maya into secondary UV channels to achieve photorealistic virtual spaces at 60 FPS.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive Spatial Art Galleries & Web3 Streaming
            </h2>
            <p>
              By combining glTF asset loading with decentralized media streaming protocols, virtual exhibition galleries can dynamically render digital art installations while maintaining smooth framerates across browser sessions.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}