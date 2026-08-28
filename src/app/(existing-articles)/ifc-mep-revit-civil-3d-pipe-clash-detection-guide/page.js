import Link from 'next/link';

export const metadata = {
  title: 'IFC MEP & Pipe Networks Clash Detection Guide | serdarozden.com',
  description: 'Master 3D pipe network clash detection. Coordinate Mechanical, Electrical, and Plumbing (MEP) systems between Civil 3D, Revit, and OpenBIM tools.',
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
              OpenBIM & MEP Systems
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automating MEP Pipe Network Clash Detection in OpenBIM Pipelines
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to coordinate mechanical, electrical, and plumbing (MEP) models across Civil 3D and Revit using automated spatial clash matrices.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Underground utilities and interior building MEP runs frequently suffer from clearance spatial conflicts during constructability reviews. Coordinating geometry via open standards eliminates costly site redesigns.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Mapping Pipe Entities: IfcPipeSegment vs Civil 3D Networks
            </h2>
            <p>
              Translating gravity-fed pipes and pressure networks into OpenBIM requires explicit mapping of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcPipeSegment</code> and <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcPipeFitting</code> attributes to maintain elevation, slope, and diameter definitions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Hard vs Soft Clash Matrix Verification
            </h2>
            <p>
              Differentiate physical geometric intersections (hard clashes) from thermal insulation clearance and maintenance access buffer violations (soft clashes) using BCF (BIM Collaboration Format) automated issue trackers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Web-Based Automated Collision Testing
            </h2>
            <p>
              Streamline coordination by building browser-based bounding box intersection algorithms using WebGL raycasting, enabling real-time clash reporting directly inside custom Next.js web applications.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}