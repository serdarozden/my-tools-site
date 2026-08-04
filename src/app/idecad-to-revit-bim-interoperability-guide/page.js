import Link from 'next/link';

export const metadata = {
  title: 'iDECAD to Revit BIM Interoperability Guide: IFC & Structural Export | serdarozden.com',
  description: 'Learn how to export structural models from iDECAD into Autodesk Revit via IFC. Fix geometry misalignment, section mapping, and grid alignment bugs.',
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
              BIM & Structural Engineering
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            iDECAD to Revit BIM Interoperability: IFC Export & Structural Coordination
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Seamlessly bridge structural design models from iDECAD into Autodesk Revit. A step-by-step guide on IFC schema parameters, grid alignment, and material mapping.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Interoperability between analytical structural software and BIM coordination tools is essential for modern AEC (Architecture, Engineering, Construction) workflows. Transporting reinforced concrete and steel models from iDECAD into Autodesk Revit requires specific IFC export configurations to prevent geometric displacement and missing parameters.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Configuring IFC Export Parameters in iDECAD
            </h2>
            <p>
              Before running the export, ensure all structural elements (columns, shear walls, beams, slabs) are correctly assigned to their respective building levels. Export using the <strong className="text-white">IFC 2x3 Coordination View 2.0</strong> or <strong className="text-white">IFC4</strong> schema to retain structural family metadata and spatial coordinates.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Section Mapping & Family Matching in Revit
            </h2>
            <p>
              When importing the IFC file into Revit, custom structural sections may be flagged as generic models. Utilize Revit's <em className="text-white">IFC Options Mapping File</em> to bind iDECAD structural profiles directly to native Revit Structural Column and Structural Framing families.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Grid Origin & Elevation Alignment
            </h2>
            <p>
              Coordinate offsets often cause imported elements to floating off-axis. Always lock the global origin point (Project Base Point / Survey Point) in iDECAD prior to export to ensure zero-point alignment with architectural Revit link files.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}