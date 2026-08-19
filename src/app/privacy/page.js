import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | serdarozden.com',
  description: 'Privacy Policy for TechTools - Learn how we protect your data.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed border-b border-zinc-800 pb-8 mb-8 font-medium">
            At TechTools, available at serdarozden.com, your privacy is one of our main priorities. This Privacy Policy document outlines the types of information collected and recorded by TechTools and how we use it.
          </p>

          <div className="space-y-8 text-slate-100 leading-relaxed text-base sm:text-lg">
            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                1. Overview
              </h2>
              <p className="text-slate-300">
                At TechTools, available at serdarozden.com, your privacy is one of our main priorities. This Privacy Policy document outlines the types of information collected and recorded by TechTools and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                2. Information We Collect
              </h2>
              <p className="text-slate-300">
                TechTools does not require user registration or accounts. All calculations and unit conversions performed on our tools are processed client-side in your web browser. We do not store or transmit your converted data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                3. Log Files & Analytics
              </h2>
              <p className="text-slate-300">
                TechTools follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                4. Cookies and Web Beacons
              </h2>
              <p className="text-slate-300">
                Like any other website, TechTools uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                5. Third Party Privacy Policies
              </h2>
              <p className="text-slate-300">
                TechTools&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                6. Contact Us
              </h2>
              <p className="text-slate-300">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at our{' '}
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors">
                  Contact Page
                </Link>.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}