import Link from 'next/link';

export const metadata = {
  title: 'OpenBIM BCF API & Issue Tracking Web Integration | serdarozden.com',
  description: 'How to build web-based BIM issue tracking applications using OpenBIM BCF API, RESTful services, camera viewpoint captures, and WebGL IFC annotations.',
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
              BIM Standards & Web APIs
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">12 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Integrating OpenBIM BCF API for Web-Based Issue Collaboration
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Connecting 3D WebGL model viewports with standardized Building Collaboration Format (BCF) workflows for real-time site coordination.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Communicating structural clashes or site revisions across different BIM software requires open standards. The Building Collaboration Format (BCF) XML and REST API standards allow web platforms to link 3D viewpoints, GUID selections, and comments seamlessly.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Capturing Viewpoints & Camera State Serialization
            </h2>
            <p>
              Serializing camera projection matrices, clipping planes, and IFC component GUID selections into BCF XML/JSON payloads allows stakeholders to instantly restore exact 3D perspective views across web and desktop platforms.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. RESTful BCF API Integration in Next.js Apps
            </h2>
            <p>
              Connecting front-end 3D viewports to serverless BCF API handlers streamlines real-time creation, updating, and assignment of site issues without modifying underlying IFC geometry files.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Interactive WebGL Viewport Annotations
            </h2>
            <p>
              Projecting 2D markup pins and measurement vectors directly over 3D WebGL canvases provides visual context for field engineers reviewing site issues on mobile web devices.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}