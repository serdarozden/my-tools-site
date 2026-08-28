import Link from 'next/link';

export const metadata = {
  title: 'Hammer Units to Centimeters Conversion Guide: Source Engine to Blender | serdarozden.com',
  description: 'Convert Source Engine Hammer Units to meters, centimeters, and feet in Blender and Unreal Engine. Precise architectural grid setup for game level design.',
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
              Game Engine Grid Units
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Hammer Units to Centimeters: Converting Source Engine Scales to Metric
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand the exact mathematical conversion between Valve’s Hammer Units (HU) and standard metric centimeters across Blender, Unreal Engine, and Maya.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              When designing level environments in modern 3D software for Source Engine or converting legacy maps to Unreal Engine, scale mismatches frequently cause character movement and doorway clearance issues.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Standard Scale Standard: 1 Hammer Unit in Centimeters
            </h2>
            <p>
              By default in Valve’s Source Engine, <strong className="text-white">1 Hammer Unit equals 0.75 inches (1.905 cm)</strong>. Standard player characters stand 72 Hammer Units tall (approx. 137 cm or 180 cm depending on collision bounds), making door heights standard at 128 units (243.8 cm).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Configuring Blender Grid snapping to Hammer Units
            </h2>
            <p>
              To model assets in Blender for Source Engine, set <strong className="text-white">Unit Scale to 0.01905</strong> in Scene Properties. This aligns Blender’s grid snapping directly with 16, 32, and 64 Hammer Unit increments.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Converting Source Engine Maps to Unreal Engine Metric Units
            </h2>
            <p>
              Unreal Engine operates natively on a strict 1 Unit = 1 Centimeter metric standard. When re-creating Source maps in UE5, multiply Hammer Unit measurements by <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">1.905</code> to achieve accurate real-world scale proportions.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}