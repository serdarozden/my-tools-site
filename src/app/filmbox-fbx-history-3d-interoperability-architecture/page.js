import Link from 'next/link';

export const metadata = {
  title: 'The History & Architecture of Filmbox (FBX) in 3D Pipelines | serdarozden.com',
  description: 'Explore the origins of Kaydara Filmbox, its transition into Autodesk FBX, binary container architecture, and why it remains the backbone of real-time 3D animation.',
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
              3D Formats & Tech
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            From Filmbox to FBX: The Architectural History of 3D Interoperability
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Discover how Kaydara’s original Filmbox format evolved into the binary FBX standard that powers modern motion capture and game engine pipelines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Before FBX became an industry standard, motion capture data and complex 3D skeletal animations could not be easily transferred between competing digital content creation (DCC) packages.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. The Origin of Filmbox (FLBX) in Motion Capture
            </h2>
            <p>
              Originally developed by Kaydara in the 1990s as <strong className="text-white">Filmbox</strong>, the format was designed to record real-time actor motion data and attach it to 3D character rigs without losing bone hierarchies or frame timing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Binary vs ASCII Container Structure
            </h2>
            <p>
              Unlike text-based OBJ files, FBX utilizes a proprietary nested binary node structure. This design enables fast parsing of complex scene graphs containing cameras, lighting rigs, skinned meshes, blendshapes, and transform animation curves.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Modern Interoperability Challenges
            </h2>
            <p>
              While open formats like glTF and USD are gaining traction for web and real-time open standards, the legacy Filmbox architectural roots inside FBX keep it deeply entrenched across game production pipelines.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}