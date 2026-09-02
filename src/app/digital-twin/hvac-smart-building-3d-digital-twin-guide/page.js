import Link from 'next/link';

export const metadata = {
  title: 'Smart Building Digital Twins & HVAC Visualization | serdarozden.com',
  description: 'Integrate real-time BMS telemetry with WebGL 3D building models for spatial thermal mapping and HVAC energy optimization.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Navigasyon / Back Links */}
        <nav className="mb-8 flex items-center gap-4 text-sm font-bold">
          <Link 
            href="/digital-twin" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Digital Twin Hub
          </Link>
          <span className="text-zinc-700">•</span>
          <Link 
            href="/" 
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Smart Buildings
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">11 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Smart Building Digital Twins: Real-Time HVAC & Energy Spatial Visualization in WebGL
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Integrating Building Management System (BMS) telemetry with 3D WebGL building models for real-time thermal mapping and energy optimization.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Facility managers often struggle to diagnose HVAC inefficiency using tabular sensor outputs. Spatial 3D digital twins map ambient temperature, CO2 concentration, and airflow velocity directly onto structural BIM geometry.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. BACnet & Modbus to WebSocket Middleware
            </h2>
            <p>
              Building Management Systems communicate via protocols like BACnet/IP or Modbus TCP. Translating these fieldbus signals into JSON WebSocket events allows web applications to track zone climate changes with sub-second latency.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Volumetric Heatmap Shaders in GLSL
            </h2>
            <p>
              By passing sensor coordinates and dynamic temperature arrays to custom fragment shaders, 3D viewports can render volumetric thermal heatmaps that display temperature distribution across entire floor plans.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Automated Energy Anomaly Alerts
            </h2>
            <p>
              When room conditions deviate from thermal comfort baselines, interactive spatial badges highlight affected zones and automatically display damper positions and VAV box telemetry.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}