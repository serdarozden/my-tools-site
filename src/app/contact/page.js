import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | serdarozden.com',
  description: 'Get in touch with us for feedback, unit converter suggestions, or technical questions.',
};

export default function ContactPage() {
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
              Get In Touch
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-slate-200 font-semibold">Feedback & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Contact Us
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            We are continuously improving our web tools and unit converters. If you noticed a bug, would like to suggest a new tool, or have questions regarding our technical guides, feel free to reach out.
          </p>

          {/* İletişim Kartları Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Direct Email Card */}
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                  Direct Email
                </span>
                <a 
                  href="mailto:serdarozdenn@gmail.com" 
                  className="text-white font-semibold hover:text-blue-300 text-base sm:text-lg block truncate transition-colors"
                >
                  serdarozdenn@gmail.com
                </a>
              </div>
            </div>

            {/* Twitter / X Card */}
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                  Twitter / X
                </span>
                <a 
                  href="https://twitter.com/srdrozdn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-blue-300 text-base sm:text-lg block truncate transition-colors"
                >
                  @srdrozdn
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}