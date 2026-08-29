import Link from 'next/link';

export const metadata = {
  title: 'Digital Twin & Web IoT Engineering Hub | serdarozden.com',
  description: 'Explore real-time IoT integration, geospatial CityGML 3D tiles, and industrial predictive maintenance in WebGL/WebGPU Digital Twins.',
};

const digitalTwinArticles = [
  {
    slug: 'mqtt-websocket-realtime-3d-twin-guide',
    title: 'Streaming Real-Time IoT Telemetry to 3D Digital Twins via MQTT & WebSockets',
    description: 'Learn how to bridge MQTT broker telemetry streams into WebGL and WebGPU viewports for live building monitoring and anomaly detection.',
    category: 'IoT & WebSockets',
    readTime: '9 min read',
    date: 'Aug 2026',
  },
  {
    slug: 'gis-citygml-spatial-digital-twin-guide',
    title: 'Building City-Scale Digital Twins: CityGML to OGC 3D Tiles Pipelines',
    description: 'Discover how municipal planners convert complex CityGML semantic data into lightweight 3D Tiles for seamless web browser visualization.',
    category: 'Geospatial & Urban Twins',
    readTime: '10 min read',
    date: 'Aug 2026',
  },
  {
    slug: 'industrial-predictive-maintenance-3d-web-guide',
    title: 'Interactive Industrial Twins: Visualizing Predictive Maintenance in WebGL',
    description: 'Learn how industrial facilities map ML-based failure predictions onto 3D assembly models for rapid maintenance intervention.',
    category: 'Industrial Digital Twins',
    readTime: '8 min read',
    date: 'Aug 2026',
  },
];

export default function DigitalTwinHubPage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
        
        {/* Navigasyon / Back to Home */}
        <nav className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        {/* Bölüm Başlığı & Hero Alanı */}
        <header className="mb-14 border-b border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Specialized Tech Series
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Digital Twin & Web IoT Hub
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed font-medium">
            Bridging 3D BIM models, geospatial CityGML data, and real-time IoT sensor streams into interactive WebGL/WebGPU browser applications.
          </p>
        </header>

        {/* Makale Listesi Grid Alanı */}
        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
            <span>Latest Digital Twin Guides</span>
            <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md">
              {digitalTwinArticles.length} Articles
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {digitalTwinArticles.map((article) => (
              <article 
                key={article.slug}
                className="group relative bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 hover:bg-zinc-900/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-zinc-400 mb-4">
                  <span className="bg-zinc-900 border border-zinc-700/60 text-blue-400 px-3 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-zinc-500">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                  <Link href={`/digital-twin/${article.slug}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-2">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Read full guide</span>
                  <span>&rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}