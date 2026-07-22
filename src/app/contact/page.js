import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - TechTools',
  description: 'Get in touch with the TechTools team for feedback, support, or suggestions.',
};

export default function ContactPage() {
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
          Contact Us
        </h1>
        <p className="text-sm text-slate-500">Have feedback, suggestions, or technical questions?</p>
      </header>

      <div className="max-w-2xl bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-bold text-slate-300 mb-3">Get in Touch</h2>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          We are continuously improving TechTools. If you noticed a bug in our unit converters, would like to suggest a new tool, or have questions regarding our technical guides, feel free to reach out to us.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Email Box */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Direct Email</span>
            <a 
              href="mailto:serdarozdenn@gmail.com" 
              className="text-blue-400 font-medium hover:underline text-sm sm:text-base block truncate"
            >
              serdarozdenn@gmail.com
            </a>
          </div>

          {/* Twitter / X Box */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Twitter / X</span>
            <a 
              href="https://twitter.com/srdrozdn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 font-medium hover:underline text-sm sm:text-base block truncate"
            >
              @srdrozdn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}