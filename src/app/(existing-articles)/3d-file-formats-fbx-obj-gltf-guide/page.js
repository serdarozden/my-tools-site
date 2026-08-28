import Link from 'next/link';

export const metadata = {
  title: 'FBX vs OBJ vs glTF: 3D File Formats Guide for Games & Web | serdarozden.com',
  description: 'Complete comparison of FBX, OBJ, and glTF/GLB 3D formats. Learn which file format to use for game engines, web 3D, rigging, and 3D printing.',
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Geri Dönüş Linki */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Kategori ve Okuma Süresi */}
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              3D Formats & Pipelines
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          {/* SEO Dostu Ana Başlık (H1) */}
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            FBX vs OBJ vs glTF: Choosing the Right 3D File Format
          </h1>

          {/* Özet / Açıklama */}
          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Understand the fundamental differences between legacy and modern 3D asset containers to optimize load times, preserve skeletal rigs, and streamline real-time rendering.
          </p>

          {/* İçerik Gövdesi */}
          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Navigating 3D graphics requires choosing the correct file extension for your specific pipeline. Choosing the wrong format can strip animation keyframes, corrupt normal maps, or severely inflate file sizes. Here is how the three dominant 3D formats compare today.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. OBJ (Wavefront): The Reliable Legacy Standard
            </h2>
            <p>
              Introduced in the late 1980s, <strong className="text-white">OBJ</strong> remains a universally supported plain-text format for simple 3D meshes. It stores raw geometry vertices, texture coordinates, and normals alongside an auxiliary <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.mtl</code> file for basic materials. While virtually every 3D software can read OBJ, it cannot store skeletal armatures, animation data, or modern PBR material channels.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. FBX (Filmbox): The Industry Workhorse for Game Engines
            </h2>
            <p>
              Proprietary to Autodesk, <strong className="text-white">FBX</strong> is the undisputed standard for game development pipelines (Unreal Engine, Unity) and character design. Unlike OBJ, binary FBX files store complex scene hierarchies, bone rigs, skinning weights, procedural cameras, and multi-clip animation tracks in a single compressed container.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. glTF / GLB: The Modern "JPEG of 3D"
            </h2>
            <p>
              Developed by the Khronos Group, <strong className="text-white">glTF (GL Transmission Format)</strong> is an open-standard format designed specifically for fast transmission over web browsers and real-time engines. It natively supports PBR shader pipelines, compact binary compression (<code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.glb</code>), and ultra-fast decoding speed, making it the ideal choice for WebGL applications and modern 3D web configurators.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              Quick Selection Summary
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-200">
              <li><strong className="text-white">Use OBJ:</strong> For 3D printing, static geometry interchange, and legacy software compatibility.</li>
              <li><strong className="text-white">Use FBX:</strong> For complex character rigging, keyframe animations, and desktop game engine exports.</li>
              <li><strong className="text-white">Use glTF / GLB:</strong> For web 3D experiences, mobile apps, and lightweight real-time previews.</li>
            </ul>
          </div>

        </article>
      </main>
    </div>
  );
}