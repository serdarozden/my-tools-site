import Link from 'next/link';

export const metadata = {
  title: 'Predictive Maintenance Dashboards in Web3D Digital Twins | serdarozden.com',
  description: 'Design industrial 3D digital twins for predictive maintenance. Combine machine learning anomaly scores with interactive 3D WebGL assets.',
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
              Industrial Digital Twins
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Interactive Industrial Twins: Visualizing Predictive Maintenance in WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how industrial facilities map ML-based failure predictions onto 3D assembly models for rapid maintenance intervention.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Static 2D SCADA dashboards are often difficult to interpret during critical component failures. Interactive 3D Web applications allow operators to isolate failing sub-assemblies instantaneously.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Exploded View Animations for Sub-Assembly Analysis
            </h2>
            <p>
              Programmatically triggering exploded view transforms on complex CAD assemblies isolates worn bearings, motor shafts, or valves based on predictive telemetry alerts.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Overlaying ML Anomaly Scores via HTML Overlays
            </h2>
            <p>
              Using screen-space projection algorithms, attach dynamic 2D React DOM tooltips directly onto moving 3D components to display remaining useful life (RUL) metrics in real time.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Historical Time-Travel Playback
            </h2>
            <p>
              Store historical time-series sensor data to allow technicians to scrub backward through operational history, playing back physical state changes frame-by-frame inside the 3D viewer.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}