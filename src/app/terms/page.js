import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - TechTools',
  description: 'Terms of Service for using TechTools measurement converters and guides.',
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-400">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500/80 hover:text-blue-400 transition"
        >
          &larr; Back to Home
        </Link>
      </div>

      <header className="mb-10 pb-8 border-b border-slate-800/60">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-300 tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500">Last updated: July 22, 2026</p>
      </header>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">1. Terms</h2>
          <p>
            By accessing TechTools, available at serdarozden.com, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">2. Disclaimer & Calculation Accuracy</h2>
          <p>
            The materials and calculation tools on TechTools are provided on an 'as is' basis. While we strive for absolute technical precision in all unit converters and engineering guides, TechTools makes no warranties, expressed or implied, regarding accuracy, completeness, or reliability for engineering or structural safety decisions. Always verify critical measurements independently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">3. Limitations</h2>
          <p>
            In no event shall TechTools or its suppliers be liable for any damages arising out of the use or inability to use the materials or calculations on TechTools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">4. Revisions and Errata</h2>
          <p>
            The materials appearing on TechTools could include technical, typographical, or photographic errors. TechTools may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">5. Governing Law</h2>
          <p>
            Any claim related to TechTools shall be governed by applicable laws without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </main>
  );
}