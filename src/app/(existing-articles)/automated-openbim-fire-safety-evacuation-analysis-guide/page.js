import Link from 'next/link';

export const metadata = {
  title: 'Automated OpenBIM Fire Safety & Evacuation Path Analysis | serdarozden.com',
  description: 'How to build web-based egress pathfinding, fire compartmentation testing, and evacuation timing engines directly on architectural IFC building models.',
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
              BIM Safety & Regulations
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated Fire Safety and Life Safety Evacuation Analysis in OpenBIM IFC
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Evaluating egress walking distances, exit capacity bottlenecks, and fire resistance rating property sets directly inside browser-based BIM tools.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Ensuring life safety compliance requires auditing egress travel limits, fire-rated doors, and compartmentation barriers. Extracting spatial topology from IFC building models automates life-safety compliance checks before construction begins.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Dynamic Navigation Mesh Generation from IFC Spaces
            </h2>
            <p>
              Extracting floor plate geometries from `IfcSpace` boundaries constructs 2D navigation meshes, enabling Dijkstra or A* pathfinding algorithms to measure actual unimpeded egress travel distances to designated emergency exits.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Fire Compartmentation & Rating Property Audits
            </h2>
            <p>
              Inspecting `FireRating` property sets across wall (`IfcWall`) and door (`IfcDoor`) assemblies ensures continuous fire containment barriers exist around stairwell shafts and horizontal exit corridors.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Crowd Flow Bottleneck Simulation & BCF Reporting
            </h2>
            <p>
              Simulating egress agent flow rates through exit door clear widths calculates Required Safe Egress Time (RSET), automatically flagging capacity bottlenecks and issuing BCF compliance issues.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}