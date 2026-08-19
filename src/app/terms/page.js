import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | serdarozden.com',
  description: 'Terms of Service for using measurement converters, engineering tools, and technical guides.',
};

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigasyon / Geri Dönüş Linki */}
        <nav className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>←</span> Back to Home
          </Link>
        </nav>

        {/* Ana İçerik Kartı */}
        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Üst Rozet Header */}
          <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6">
            <span className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-md uppercase tracking-wider">
              Legal & Policy
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">Last updated: July 22, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Terms of Service
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            Please read these terms and conditions carefully before using our unit converters, calculation utilities, and technical engineering guides.
          </p>

          <div className="space-y-8 text-slate-100 leading-relaxed text-base sm:text-lg">
            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                1. Terms
              </h2>
              <p className="text-slate-300">
                By accessing TechTools, available at serdarozden.com, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                2. Disclaimer & Calculation Accuracy
              </h2>
              <p className="text-slate-300">
                The materials and calculation tools on TechTools are provided on an &apos;as is&apos; basis. While we strive for absolute technical precision in all unit converters and engineering guides, TechTools makes no warranties, expressed or implied, regarding accuracy, completeness, or reliability for engineering or structural safety decisions. Always verify critical measurements independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                3. Limitations
              </h2>
              <p className="text-slate-300">
                In no event shall TechTools or its suppliers be liable for any damages arising out of the use or inability to use the materials or calculations on TechTools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                4. Revisions and Errata
              </h2>
              <p className="text-slate-300">
                The materials appearing on TechTools could include technical, typographical, or photographic errors. TechTools may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                5. Governing Law
              </h2>
              <p className="text-slate-300">
                Any claim related to TechTools shall be governed by applicable laws without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}