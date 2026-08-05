import Link from 'next/link';

export const metadata = {
  title: 'Optimizing 3D Files for IPFS & On-Chain NFTs: GLTF/GLB Guide | serdarozden.com',
  description: 'Learn how to optimize and compress 3D assets (GLTF/GLB) using Draco compression for fast IPFS decentralized storage and seamless Web3 NFT integration.',
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
              Web3 & 3D Pipeline
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Optimizing 3D Files for Decentralized Storage & On-Chain NFTs
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Compress heavy 3D models into lightweight glTF/GLB binaries using Draco mesh compression for rapid loading across IPFS, Arweave, and Web3 marketplaces.
          </p>

          <div className="space-y-6 text-slate-100 leading-relaxed text-base sm:text-lg">
            <p>
              Storing raw, high-polygon 3D files on decentralized storage networks like IPFS or Arweave can result in slow loading times and high gas fees during minting. Optimizing 3D assets for Web3 requires balancing geometry fidelity with extreme file compression.
            </p>
            
            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              1. Choosing glTF/GLB as the Open Standard for 3D NFTs
            </h2>
            <p>
              While OBJ and FBX formats are widely used in desktop 3D modeling, <strong className="text-white">glTF (GL Transmission Format)</strong> and its binary format <strong className="text-white">GLB</strong> serve as the standard format for 3D NFTs. GLB packages geometry, PBR textures, animation data, and material shaders into a single compact file ideal for web viewers.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              2. Draco Geometry Compression & Texture Baking
            </h2>
            <p>
              Utilize <strong className="text-white">Google Draco Compression</strong> to reduce 3D mesh file sizes by up to 90% without sacrificing visual geometric resolution. Combine Draco compression with WebP or KHR_texture_basisu texture formats to ensure instantaneous rendering on mobile NFT marketplaces.
            </p>

            <h2 className="text-2xl font-extrabold text-white pt-4 tracking-tight">
              3. Pinning Assets to IPFS & Arweave Permanent Storage
            </h2>
            <p>
              Ensure 3D NFT metadata immutability by pinning assets to IPFS via dedicated pinning gateways (such as Pinata or Web3.Storage) or permanent storage solutions like Arweave. This prevents broken image links and maintains token liquidity over time.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}