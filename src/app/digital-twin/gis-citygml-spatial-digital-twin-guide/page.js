import Link from 'next/link';

export const metadata = {
  title: 'CityGML & 3D Tiles for Urban Digital Twins | serdarozden.com',
  description: 'Architecting large-scale urban digital twins using CityGML and OGC 3D Tiles. Streaming geospatial datasets into browser engines.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link 
            href="/digital-twin" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Digital Twin Hub
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Geospatial & Urban Twins
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Building City-Scale Digital Twins: CityGML to OGC 3D Tiles Pipelines
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Discover how municipal planners convert complex CityGML semantic data into lightweight 3D Tiles for seamless web browser visualization.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Urban-scale Digital Twins require combining regional GIS terrain layers with detailed architectural models across vast geographical coordinates.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Levels of Detail (LoD 0 to LoD 4) in CityGML
            </h2>
            <p>
              Managing performance across entire municipalities relies on multi-resolution models. Transitioning from simple block footprints (LoD1) to detailed roof shapes (LoD2) and interior rooms (LoD4) keeps memory footprints optimal.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Streaming Geospatial Mesh via OGC 3D Tiles
            </h2>
            <p>
              Converting massive municipal datasets into OGC 3D Tiles specification (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.b3dm</code> / <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.i3dm</code>) enables hierarchical Level-of-Detail (HLOD) spatial streaming in web viewports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Spatial Querying and Attribute Inspection
            </h2>
            <p>
              Combine 3D tile rendering engines with spatial databases to query building heights, zoning codes, and solar potential directly by clicking on city elements in the web browser.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}