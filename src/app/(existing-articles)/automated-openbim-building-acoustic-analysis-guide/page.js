import Link from 'next/link';

export const metadata = {
  title: 'Automated Building Acoustic Performance Analysis in OpenBIM | serdarozden.com',
  description: 'How to build automated reverberation time (RT60) solvers and sound transmission class (STC) validation engines directly on architectural IFC models.',
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
              BIM Acoustics & Simulations
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Room Acoustics and Reverberation Time (RT60) Analysis in OpenBIM
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting room enclosure surface areas, material sound absorption coefficients, and airborne noise isolation metrics directly from IFC spatial entities.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Auditing room acoustic performance requires mapping boundary surface areas to material absorption ratings. Extracting room geometry and material attributes from IFC models allows web tools to calculate Sabine and Eyring Reverberation Times (RT60) automatically.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Sabine & Eyring RT60 Formula Automation
            </h2>
            <p>
              Traversing `IfcRelSpaceBoundary` relations extracts internal surface areas per room, pairing material layers with acoustic absorption tables to calculate RT60 values across octave frequency bands instantly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Sound Transmission Class (STC) & Wall Insulation Audits
            </h2>
            <p>
              Inspecting material property sets across partition walls (`IfcWall`) and floor assemblies ensures Sound Transmission Class (STC) ratings satisfy building code privacy standards between adjacent room spaces.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive Acoustic Heatmap Rendering in WebGL
            </h2>
            <p>
              Color-coding 3D floor plan spaces based on reverberation compliance or noise pollution levels provides interactive visual feedback for acoustic consultants and architects.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}