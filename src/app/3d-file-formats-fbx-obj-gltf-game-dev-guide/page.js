import Link from 'next/link';

export const metadata = {
  title: '3D File Formats Comparison: FBX vs OBJ vs glTF | serdarozden.com',
  description: 'Comprehensive guide comparing FBX, OBJ, and glTF file formats for game development, web 3D, and ArchViz pipelines. Learn when to use each format.',
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
            <span className="text-slate-200 font-semibold">8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            3D File Formats Explained: FBX vs OBJ vs glTF for Game Engines & Web
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand the architectural differences, animation capabilities, and PBR material support across OBJ, FBX, and glTF 2.0 standards.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Selecting the right 3D asset file extension determines whether your skeletal rigs, lightmap UV channels, and complex PBR texture networks transfer correctly into game engines or web browsers.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. OBJ: The Legacy Mesh Exchange Standard
            </h2>
            <p>
              Wavefront OBJ is an open ASCII format strictly designed for geometry, vertex normals, and basic UV maps. While universally supported, it lacks support for skeletal animation, rig hierarchies, camera data, or embedded PBR material parameters.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. FBX: The Game Engine Workhorse
            </h2>
            <p>
              Autodesk FBX remains the industry standard for complex animation pipelines in Unreal Engine and Unity. FBX stores skinning weights, armature hierarchies, BlendShapes (morph targets), and multi-UV channels inside a binary container for rapid parsing.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. glTF 2.0: The JPEG of 3D for Web & Real-Time Applications
            </h2>
            <p>
              glTF (GL Transmission Format) is an open-standard format optimized for runtime loading on WebGL, Three.js, and WebXR applications. It natively supports PBR material properties, animations, and Draco mesh compression, keeping file payload sizes minimal.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}