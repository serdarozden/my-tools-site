import Link from 'next/link';

export const metadata = {
  title: 'CityJSON vs CityGML: Lightweight 3D GIS for Web Rendering | serdarozden.com',
  description: 'Technical comparison between CityJSON and CityGML. Learn how to stream 3D urban models, LOD building data, and GIS datasets directly to Three.js and WebGL.',
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
              Web GIS & 3D Urban Data
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            CityJSON vs CityGML: Optimizing 3D Urban GIS Data for Web Browsers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Analyze the architectural shift from heavy GML XML schemas to CityJSON. Stream 3D city models, building footprints, and semantic terrain data with minimal memory footprints.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Open Geospatial Consortium (OGC) standards like CityGML provide deep semantic structures for urban scale models. However, parsing massive XML files inside browser threads limits real-time web rendering performance.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Structural Overhead of CityGML XML
            </h2>
            <p>
              CityGML models store 3D city objects using GML schemas. While ideal for desktop GIS databases, verbose XML tags cause high network payload sizes and slow client-side DOM parsing during browser initialization.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. CityJSON: Compressed Vertex Topologies for WebGL
            </h2>
            <p>
              CityJSON solves transmission bottlenecks by indexing shared vertices in a single array. By avoiding repeated coordinate definitions, CityJSON reduces file sizes by up to 80% while remaining 100% compatible with CityGML 2.0 and 3.0 semantic classes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Rendering Level of Detail (LOD0 - LOD4) in Three.js
            </h2>
            <p>
              Parse CityJSON objects dynamically on client-side threads using web workers. Convert semantic geometries directly into instanced meshes to stream entire smart-city districts with customized LOD rendering routines.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}