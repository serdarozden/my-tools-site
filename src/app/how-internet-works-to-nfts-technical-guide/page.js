import Link from 'next/link';

export default function Web3NftGuidePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Üst Navigasyon / Ana Sayfaya Dön */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>&larr;</span> Back to Home
          </Link>
        </nav>

        {/* Başlık ve Meta Bilgileri */}
        <header className="mb-10 pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-4">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider text-blue-400">
              Web3 & Network Architecture
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            From Internet Protocols to Web3: A Technical Explanation of NFTs
          </h1>

          <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            A foundational guide explaining how the internet works, the evolution of web architecture, blockchain smart contracts, and the technical mechanics behind NFTs.
          </p>
        </header>

        {/* Ana İçerik Alanı */}
        <div className="space-y-10 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          {/* Bölüm 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              1. The Foundation: How Does the Internet Work?
            </h2>
            <p className="text-slate-100">
              To understand modern Web3 technologies like NFTs, we first need to understand the underlying infrastructure of the internet. At its core, the internet is a globally connected network of computers that communicate using standardized rules called protocols.
            </p>
            
            <div className="space-y-3 my-4 pl-4 border-l-2 border-blue-500 font-mono text-sm sm:text-base text-slate-100">
              <p>
                <strong className="text-white font-bold">IP (Internet Protocol):</strong> Gives every connected device a unique address (like a digital street address) so data packets know where to go.
              </p>
              <p>
                <strong className="text-white font-bold">TCP (Transmission Control Protocol):</strong> Breaks data down into small packets, sends them across various physical routes (undersea fiber-optic cables, routers), and reassembles them accurately at the destination.
              </p>
              <p>
                <strong className="text-white font-bold">HTTP / HTTPS:</strong> The protocol your web browser uses to request web pages from remote servers and render HTML, CSS, and JavaScript onto your screen.
              </p>
            </div>
          </section>

          {/* Bölüm 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              2. The Evolution of the Web: Web1 to Web3
            </h2>
            <p className="text-slate-100">
              Over the decades, the way we use these network protocols has evolved through three distinct phases:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Web1 (Read-Only)</h3>
                <p className="text-sm text-slate-200">
                  The early internet (1990s–2000s). Static web pages hosted on simple servers where users could only consume content.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-2">Web2 (Read-Write)</h3>
                <p className="text-sm text-slate-200">
                  The modern centralized web (2000s–Present). Users create content via centralized platforms. However, users do not truly own their data or digital assets—the platform corporations do.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Web3 (Read-Write-Own)</h3>
                <p className="text-sm text-slate-200">
                  A decentralized paradigm built on top of the internet that allows users to verify ownership of digital assets without relying on a central database administrator.
                </p>
              </div>
            </div>
          </section>

          {/* Bölüm 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              3. Enter Blockchain and Smart Contracts
            </h2>
            <p className="text-slate-100">
              A <strong className="text-white">Blockchain</strong> is a distributed, peer-to-peer database replicated across thousands of computers (nodes) globally. Instead of a single company controlling the database, consensus algorithms (like Proof of Stake) ensure that nobody can alter past records fraudulently.
            </p>
            <p className="text-slate-100">
              <strong className="text-white">Smart Contracts</strong> are self-executing programs deployed directly onto the blockchain (such as Ethereum). Once deployed, they run automatically based on hardcoded conditions, removing the need for intermediaries.
            </p>
          </section>

          {/* Bölüm 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              4. What is an NFT Technically? (ERC-721 Standard)
            </h2>
            <p className="text-slate-100">
              An NFT (Non-Fungible Token) is essentially a specific smart contract deployed on a blockchain network that adheres to standard interfaces—most commonly the ERC-721 or ERC-1155 token standards.
            </p>
            <p className="text-slate-100">
              Technically, an NFT consists of three main components:
            </p>

            <ul className="space-y-3 my-4 list-disc pl-6 text-slate-100">
              <li>
                <strong className="text-white">Token ID:</strong> A unique <code className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-blue-400 text-sm font-mono">uint256</code> integer generated by the smart contract upon minting.
              </li>
              <li>
                <strong className="text-white">Owner Address:</strong> A cryptographic wallet address mapping directly to the Token ID inside the contract&apos;s public state memory.
              </li>
              <li>
                <strong className="text-white">Token URI (Metadata Pointer):</strong> A link (often pointing to IPFS - InterPlanetary File System) that contains a JSON object describing the asset (name, image URL, traits, and properties).
              </li>
            </ul>
          </section>

          {/* Bölüm 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-2">
              5. Why Decentralized Media Storage (IPFS) Matters
            </h2>
            <p className="text-slate-100">
              A common technical misconception is that the actual image or 3D model file is stored directly inside the blockchain token. Because storing megabytes of raw data on a blockchain is extremely expensive, NFTs store a cryptographic link to the media using IPFS.
            </p>
            
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 my-6">
              <p className="text-slate-100 font-medium">
                Unlike traditional web links (HTTP) that break if a server goes down, IPFS uses content addressing (hashes). This ensures that the metadata cannot be modified or replaced without invalidating the token&apos;s cryptographic signature.
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}