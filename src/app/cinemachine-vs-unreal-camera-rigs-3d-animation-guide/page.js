import Link from 'next/link';

export const metadata = {
  title: 'Unity Cinemachine vs Unreal Camera Rigs: 3D Cinematics | serdarozden.com',
  description: 'Technical breakdown of Unity Cinemachine versus Unreal Engine Cine Camera Rigs. Learn virtual camera tracking, damping, dolly track setups, and procedural noise.',
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
              Real-Time Cinematics & Game Dev
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Unity Cinemachine vs Unreal Cine Camera Rigs: Procedural 3D Camera Systems
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Compare dynamic camera architectures for games, cutscenes, and virtual production. Master procedural composition, target tracking, and lens focal emulation.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Camera motion defines player immersion and visual storytelling. Modern engines replace hardcoded transformation keyframes with smart procedural camera controllers that react dynamically to environment changes.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Unity Cinemachine: Constraint-Driven Virtual Cameras
            </h2>
            <p>
              Cinemachine uses Virtual Cameras (vCams) to drive the main render camera. By configuring parameters like LookAt, Follow, and Body Damping, developers create smooth dynamic tracking without manual math scripts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Unreal Engine Cine Camera: Optical Rig Emulation
            </h2>
            <p>
              Unreal Engine’s Cine Camera Actor replicates physical cinematic gear, complete with sensor dimensions, aperture controls, depth-of-field focus tracking, and mechanical rail/crane attachment nodes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Blending and Priority Logic in Dynamic Scenes
            </h2>
            <p>
              Seamlessly transition between gameplay viewports and cinematic cutscenes using priority stacks or Sequencer tracks, avoiding hard camera cuts while maintaining smooth character alignment.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}