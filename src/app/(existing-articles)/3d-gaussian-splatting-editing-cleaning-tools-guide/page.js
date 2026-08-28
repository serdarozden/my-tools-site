import Link from 'next/link';

export const metadata = {
  title: 'Editing & Cleaning 3D Gaussian Splats: Tools & Workflow Guide | serdarozden.com',
  description: 'Master post-processing and editing for 3D Gaussian Splatting scenes. Compare SuperSplat, Brush, Volinga, and Blender 3DGS clean-up tools.',
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
              3DGS Post-Processing & Editing
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Editing and Cleaning 3D Gaussian Splats: Practical Workflows and Software
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Raw photogrammetry splats suffer from floating artifacts and background noise. Learn how to crop, transform, and optimize 3DGS point clouds for production engines.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              While initial 3D Gaussian Splatting training creates hyper-realistic scenes, raw output files often contain floating noise particles (floaters) and unwanted background geometry that degrade real-time performance.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Browser-Based Editing: PlayCanvas SuperSplat Pipeline
            </h2>
            <p>
              Tools like SuperSplat allow instant web-based manipulation of <code className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">.ply</code> files. Bounding box selections, spherical clipping zones, and isolated point deletes trim unnecessary Gaussians without re-training models.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Integrating 3DGS Clean-Up into Blender Add-ons
            </h2>
            <p>
              Using specialized Blender plugins (e.g., K-Splat or Brush extensions), technical artists can leverage standard viewport selection tools to trim floating artifacts, re-center origin points, and align splats with traditional polygon props.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Gaussian Pruning and Spherical Harmonics Reduction
            </h2>
            <p>
              Optimize final file size for web delivery by stripping higher-order Spherical Harmonics (SH) coefficients and pruning low-opacity Gaussians, reducing total memory footprints by over 60% with minimal visual loss.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}