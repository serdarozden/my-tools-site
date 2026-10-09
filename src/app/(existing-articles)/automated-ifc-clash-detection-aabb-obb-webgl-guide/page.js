import Link from 'next/link';

export const metadata = {
  title: 'Automated IFC Clash Detection via AABB & OBB Algorithms | serdarozden.com',
  description: 'Learn how to build high-speed automated OpenBIM clash detection engines using Axis-Aligned Bounding Boxes (AABB) and Oriented Bounding Boxes (OBB) in web applications.',
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
              BIM Geometry & Bounding Algorithms
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            High-Speed OpenBIM Clash Detection Architecture: AABB, OBB, and BVH Trees
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Building client-side and serverless spatial clash analysis tools to identify structural and MEP discipline intersections in IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Detecting physical collisions between structural columns, pipe networks, and ductwork before construction prevents costly site revisions. Executing hierarchical bounding box intersection tests allows web platforms to evaluate thousands of IFC elements in seconds.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Broad-Phase Collision Testing with AABB
            </h2>
            <p>
              The broad-phase filter computes lightweight Axis-Aligned Bounding Box (AABB) overlaps across spatial Bounding Volume Hierarchies (BVH), immediately discarding distant elements that cannot collide.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Narrow-Phase Testing via Oriented Bounding Boxes (OBB)
            </h2>
            <p>
              When AABBs intersect, narrow-phase algorithms evaluate Oriented Bounding Boxes (OBB) using the Separating Axis Theorem (SAT), accurately detecting collisions for rotated or angled structural members.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Triangle-Level Mesh Intersection & BCF Ticket Generation
            </h2>
            <p>
              For overlapping OBB pairs, exact triangle-triangle mesh intersection routines isolate physical collision points, automatically generating BCF (Building Collaboration Format) issue tickets for coordination teams.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}