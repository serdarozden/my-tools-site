import Link from 'next/link';

export const metadata = {
  title: 'OPC UA to Three.js Telemetry Pipeline for Digital Twins | serdarozden.com',
  description: 'Learn how to stream real-time industrial PLC telemetry data from OPC UA servers to WebGL 3D digital twin dashboards using WebSockets.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 flex items-center gap-4">
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
              Digital Twin
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">15 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time Industrial Digital Twins: OPC UA to Three.js Telemetry Pipeline
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Connecting industrial factory PLCs to 3D web applications by converting binary OPC UA telemetry into WebSocket streams for real-time 3D SCADA visualization.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Industrial digital twins bridge physical manufacturing machinery with digital state models. Converting hardware sensor tags (temperature, motor RPM, pressure) into real-time 3D spatial representations requires robust bi-directional telemetry architecture.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. OPC UA Server Integration
            </h2>
            <p>
              OPC Unified Architecture (OPC UA) is the industry standard for industrial machine communication. Using Node.js middleware (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">node-opcua</code>), servers subscribe to PLC tag updates and broadcast JSON packets across WebSocket channels.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Dynamic Material Color & Mesh Animation
            </h2>
            <p>
              Incoming motor speed data dynamically updates rotation matrices on <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">THREE.Mesh</code> nodes. Overheating sensors automatically transition material shader uniforms from neutral metallic textures to glowing thermal warning gradients.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Spatial Context & Alarm Raycasting
            </h2>
            <p>
              When a PLC triggers a fault code, web viewports automatically interpolate camera positions to point directly at the faulty sub-assembly, rendering 3D callout badges with real-time diagnostic parameters.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}