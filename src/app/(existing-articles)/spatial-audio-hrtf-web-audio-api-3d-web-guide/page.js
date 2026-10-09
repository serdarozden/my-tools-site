import Link from 'next/link';

export const metadata = {
  title: '3D Spatial Audio & HRTF Integration with Web Audio API | serdarozden.com',
  description: 'How to implement realistic 3D spatial audio, Head-Related Transfer Functions (HRTF), distance attenuation, and acoustic occlusion in WebGL & WebXR apps.',
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
              Web Audio & Immersive Media
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Architecting 3D Spatial Audio & HRTF Pipelines with Web Audio API
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Synchronizing WebGL camera orientations with directional binaural audio nodes for immersive architectural tours and virtual environments.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Immersive web experiences require accurate acoustic positioning alongside high-framerate graphics. Combining the Web Audio API with 3D WebGL viewports routes audio sources through spatial panner nodes and Head-Related Transfer Functions (HRTF).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. PannerNode & Binaural HRTF Positioning
            </h2>
            <p>
              Attaching Web Audio `PannerNode` instances to 3D scene objects updates spatial positions and orientation vectors in real time, filtering sound through binaural HRTF models that simulate human ear acoustics.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Distance Attenuation & Roll-off Models
            </h2>
            <p>
              Configuring inverse distance roll-off models ensures ambient machinery, HVAC systems, or structural sound sources naturally fade as users navigate through large 3D building environments.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Raytraced Acoustic Occlusion & Reverb Convolvers
            </h2>
            <p>
              Performing CPU or GPU raycasts between the listener camera and audio sources dynamically applies low-pass occlusion filters when structural walls or obstacles block direct sound lines.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}