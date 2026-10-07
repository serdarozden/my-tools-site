import Link from 'next/link';

export const metadata = {
  title: 'Streaming Massive Point Clouds with Octree & WebGL | serdarozden.com',
  description: 'Architecting progressive point cloud visualization pipelines for multi-billion point LiDAR scans using spatial Octrees, Potree structures, and WebGL.',
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
              Geospatial & Point Clouds
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">13 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Progressive Streaming of Multi-Billion Point Clouds in Web Browsers
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Visualizing massive LiDAR datasets and photogrammetry point clouds using hierarchical spatial Octrees and GPU point size attenuation.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Loading uncompressed LAS or LAZ point cloud files directly into browser memory causes instant crashes. Hierarchical spatial Octree structures allow WebGL applications to stream only visible point nodes based on camera proximity and viewport frustums.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Spatial Octree Indexing & Lod Partitioning
            </h2>
            <p>
              Subdividing 3D spatial bounding boxes recursively creates a multi-resolution hierarchy where root nodes store sparse point representations, while leaf nodes contain dense local laser scan details.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Screen-Space Point Budgeting
            </h2>
            <p>
              To maintain 60 FPS interaction, the rendering engine enforces strict maximum point budgets (e.g., 5 million active points per frame), dynamically prioritizing Octree nodes closest to the camera center.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Dynamic Point Sizing & Eye-Dome Lighting (EDL)
            </h2>
            <p>
              Scaling GPU point size based on camera distance fills visual gaps. Applying Eye-Dome Lighting (EDL) post-processing passes calculates depth gradients to highlight subtle geometric contours in un-textured scans.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}