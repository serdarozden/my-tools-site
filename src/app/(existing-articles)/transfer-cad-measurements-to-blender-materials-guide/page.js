import Link from 'next/link';

export const metadata = {
  title: 'Transferring CAD Measurements to Blender Material Scaling | serdarozden.com',
  description: 'Guide to mapping exact CAD dimensions to PBR material UV scales in Blender. Convert millimeter and meter units from AutoCAD to Shader Editor setups.',
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
              CAD & Architectural 3D
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            How to Transfer CAD Measurements to Accurate Material Scales in Blender
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to translate precise architectural dimensions from AutoCAD DWG files into real-world texture mapping scales inside Blender's Shader Editor.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              In architectural visualization (ArchViz), maintaining real-world material scale—such as ensuring a 60x60cm floor tile retains its exact proportions—is critical when importing geometry from CAD drafting software into Blender.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Standardizing Scene Units and Scale Metrics
            </h2>
            <p>
              Before importing CAD geometry, navigate to Blender’s <strong className="text-white">Scene Properties &gt; Units</strong>. Set the unit system to Metric and length to Meters or Millimeters matching your original AutoCAD draw settings. Always apply object scale (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">Ctrl + A &gt; Apply Scale</code>).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Real-World Map Scaling in Node Editor
            </h2>
            <p>
              In Blender's Shader Editor, add a <strong className="text-white">Value Node</strong> connected to the Scale input of a <strong className="text-white">Mapping Node</strong> set to Object texture coordinates. This allows you to define numerical tile dimensions directly (e.g., inputting <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">1 / 0.60</code> for a 60cm repeat pattern).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Triplanar UV Box Mapping for Unwrapped Architectural Walls
            </h2>
            <p>
              For complex wall layouts imported without clean UV coordinates, switch Image Texture nodes from <strong className="text-white">Flat</strong> to <strong className="text-white">Box</strong> mapping with a Blend factor of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">0.1</code> to project seamless textures without manual UV unwrapping.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}