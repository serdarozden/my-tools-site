import Link from 'next/link';

export const metadata = {
  title: 'Real-Time FFT Ocean & Wave Rendering in WebGPU | serdarozden.com',
  description: 'Master Fast Fourier Transform (FFT) ocean surface generation, Tessendorf wave spectra, and WebGPU WGSL compute shaders for realistic water dynamics.',
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
              WebGPU Physics & Oceans
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">14 min read</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Oct 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Real-Time FFT Ocean Simulation and Wave Generation in WebGPU
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Evaluating Phillips and Tessendorf wave spectra using parallel 2D Fast Fourier Transform (FFT) passes in WGSL compute workgroups.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Simulating deep-water ocean waves with realistic choppy crests requires evaluating complex spatial frequency spectra. Moving Fast Fourier Transform (FFT) solvers from CPU routines to WebGPU compute dispatches yields hardware-native frame rates for expansive water surfaces.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Tessendorf Spectrum & Phillips Wave Generation
            </h2>
            <p>
              Generating initial frequency-domain height maps uses wind speed, direction, and fetch distance parameters inside WGSL compute shaders to evaluate statistical Phillips spectrum distribution functions.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Parallel 2D Radix-2 FFT Compute Passes
            </h2>
            <p>
              Transforming frequency-domain wave states into spatial displacement vectors relies on butterfly FFT compute passes, evaluating horizontal and vertical row transforms across storage textures in parallel.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Jacobian Choppiness & Subsurface Scattering Shaders
            </h2>
            <p>
              Calculating Jacobian determinant matrices from horizontal displacement fields detects wave crest pinching, driving dynamic foam texture generation and subsurface light scattering inside water fragment shaders.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}