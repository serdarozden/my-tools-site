import Link from 'next/link';

export const metadata = {
  title: 'Civil 3D Pipe Networks to Blender Workflow Guide | serdarozden.com',
  description: 'Export Civil 3D underground utility networks and pipe systems into Blender for photorealistic rendering, animation, and infrastructure BIM presentation.',
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
              Civil Engineering & 3D Viz
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Exporting Civil 3D Pipe Networks to Blender for Infrastructure Visualization
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Transform complex Civil 3D underground utility systems, manholes, and pipe runs into lightweight, material-ready 3D assets for Blender Cycles rendering.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Underground utility models created in Autodesk Civil 3D carry rich metadata but often suffer from heavy geometry and fragmented surface normals when exported directly to visualization packages.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Preparing Pipe Network Solvers for IFC / LandXML Export
            </h2>
            <p>
              Before transferring utility networks, explode parametric Civil 3D pipe objects into solids or convert pipe structures via the <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IFCEXPORT</code> utility. This preserves exact invert elevations, pipe diameters, and wall thickness ratios across coordinate origin shifts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Retaining Real-World Georeferenced Coordinates in Blender
            </h2>
            <p>
              Civil engineering models utilize large UTM coordinate values. To prevent floating point precision jitter in Blender, set a local project origin offset point in Civil 3D before exporting to FBX or OBJ.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Procedural Shader Application with Geometry Nodes
            </h2>
            <p>
              Once inside Blender, use Geometry Nodes to automatically separate storm, sewer, and water lines by mesh attributes, assigning procedural concrete, PVC, and metallic shaders based on original pipe material designations.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}