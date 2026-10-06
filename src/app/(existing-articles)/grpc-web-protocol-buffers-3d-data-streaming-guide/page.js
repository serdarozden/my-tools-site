import Link from 'next/link';

export const metadata = {
  title: 'gRPC-Web & Protocol Buffers for High-Speed 3D Streaming | serdarozden.com',
  description: 'Optimize web 3D model streaming pipelines using gRPC-Web, HTTP/2 multiplexing, and binary Protocol Buffers instead of traditional REST and JSON.',
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
              Network Protocols & Web3D
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            High-Performance 3D Streaming using gRPC-Web and Binary Protobufs
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Replacing verbose JSON payloads with strictly typed binary Protocol Buffers to accelerate network streaming of large CAD and BIM datasets.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Parsing large JSON files containing array coordinates and metadata introduces significant CPU serialization overhead. Utilizing gRPC-Web over HTTP/2 with binary Protocol Buffers reduces network payload size and speeds up client-side deserialization.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Binary Serialization vs. JSON Stringification
            </h2>
            <p>
              Protocol Buffers pack numeric vertex positions, normal vectors, and structural metadata into compact binary structures, reducing network transfer sizes by up to 60% compared to equivalent JSON structures.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Server-Streaming RPC for Chunked CAD Assemblies
            </h2>
            <p>
              Leveraging gRPC-Web server streaming allows backend services to stream geometry sub-assemblies continuously over a single HTTP/2 connection, enabling WebGL viewports to render initial scene elements progressively.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Zero-Copy TypedArray Allocation in JavaScript
            </h2>
            <p>
              Deserializing binary Protobuf buffers directly into ArrayBuffers allows uploading vertex attributes straight to GPU memory without intermediate string parsing or temporary array allocations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}