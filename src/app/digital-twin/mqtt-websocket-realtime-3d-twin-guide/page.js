import Link from 'next/link';

export const metadata = {
  title: 'Real-Time IoT Sensor Integration in 3D Digital Twins | serdarozden.com',
  description: 'Connect MQTT telemetry and WebSockets to 3D BIM models in Next.js. Master real-time data streaming to WebGL/WebGPU viewports.',
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
              IoT & WebSockets
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Streaming Real-Time IoT Telemetry to 3D Digital Twins via MQTT & WebSockets
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Learn how to bridge MQTT broker telemetry streams into WebGL and WebGPU viewports for live building monitoring and anomaly detection.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Traditional static 3D BIM models lack operational context. Integrating low-latency MQTT message queues transforms static geometry into dynamic Digital Twins reacting to real-time physical conditions.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. MQTT-over-WebSockets Architecture
            </h2>
            <p>
              To ingest sensor data directly in modern browser clients, edge gateways translate raw MQTT payloads into WebSockets, enabling sub-100ms updates to node properties inside 3D web viewports.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Binding Live Data Points to IFC Object GUIDs
            </h2>
            <p>
              Map incoming JSON streams containing temperature, vibration, or occupancy data to individual structural elements via their persistent Global Unique Identifiers (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">IfcGloballyUniqueId</code>).
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Shader Colorization and Heatmaps
            </h2>
            <p>
              Update custom GLSL/WGSL fragment shaders on the fly to highlight overheating equipment, HVAC airflow pressure shifts, or room usage intensity without re-rendering geometry buffers.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}