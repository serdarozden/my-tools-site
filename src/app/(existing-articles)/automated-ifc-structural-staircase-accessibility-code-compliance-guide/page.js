import Link from 'next/link';

export const metadata = {
  title: 'Automated IFC Staircase & Accessibility Code Compliance Guide | serdarozden.com',
  description: 'Automate building code compliance checks for staircase geometry, riser-tread ratios, and handicap accessibility ramps using IFC data models.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span>←</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              OpenBIM Code Compliance
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Nov 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Automated IFC Staircase Geometry and Accessibility Code Compliance
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Validating architectural stair risers, tread dimensions, handrail heights, and TS 9111 / ADA handicap ramp slopes programmatically from IFC building models.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Manual regulatory checks for vertical circulation elements like stairs and ramps are time-consuming and prone to oversight. Parsing semantic properties from IfcStair, IfcStairFlight, and IfcRamp entities enables automated rule verification against national building codes.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Analyzing Riser and Tread Proportions
            </h2>
            <p>
              Extracting vertical riser heights and horizontal goings from IfcStairFlight property sets allows algorithms to verify ergonomic formulas (e.g., 2 x Riser + Tread = Constant) instantly without manual scaling.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Handicap Ramp Slope and Landing Verification
            </h2>
            <p>
              Evaluating IfcRamp gradient vectors and intermediate landing lengths against accessibility regulations (such as TS 9111 and ADA standards) ensures barrier-free compliance across complex public facility layouts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Generating Automated BCF Compliance Reports
            </h2>
            <p>
              Exporting failing spatial elements directly into BIM Collaboration Format (BCF) issues streamlines communication between architects, structural engineers, and code consultants.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}