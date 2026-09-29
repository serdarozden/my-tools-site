import Link from 'next/link';

export const metadata = {
  title: 'Serverless IFC Metadata Extraction with Node.js & WebAssembly | serdarozden.com',
  description: 'Guide to building lightweight, serverless IFC metadata extraction pipelines using Node.js, WebAssembly binaries, and cloud functions.',
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
              Serverless & BIM Data
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sep 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            High-Speed Serverless IFC Data Extraction using C++ Compiled WebAssembly
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Extracting spatial hierarchy, material quantities, and custom Property Sets (Psets) from IFC models inside headless AWS Lambda and Vercel functions.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Parsing raw EXPRESS-based STEP files on serverless platforms often hits memory and runtime constraints. Utilizing lightweight C++ WASM binaries allows serverless handlers to extract BIM metadata in milliseconds without launching heavy desktop software.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Geometry-Skipping Express File Parsing
            </h2>
            <p>
              Bypassing heavy 3D mesh tessellation loops during serverless execution lets extraction routines target pure semantic data (IfcBuildingElement, IfcPropertySet), drastically reducing function execution time.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Streaming JSON Property Tree Export
            </h2>
            <p>
              Converting nested IFC relational trees into flat indexed JSON stores allows immediate indexing into search engines and relational databases like PostgreSQL.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated Quantity Takeoff (QTO) Pipelines
            </h2>
            <p>
              Automating structural volume, surface area, and length extractions from IFC metadata streams enables real-time cost estimation microservices triggered by simple file uploads.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}