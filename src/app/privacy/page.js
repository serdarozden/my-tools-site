import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - TechTools',
  description: 'Privacy Policy for TechTools - Learn how we protect your data.',
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">Last updated: July 22, 2026</p>
      </header>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">1. Overview</h2>
          <p>
            At TechTools, available at serdarozden.com, your privacy is one of our main priorities. This Privacy Policy document outlines the types of information collected and recorded by TechTools and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">2. Information We Collect</h2>
          <p>
            TechTools does not require user registration or accounts. All calculations and unit conversions performed on our tools are processed client-side in your web browser. We do not store or transmit your converted data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">3. Log Files & Analytics</h2>
          <p>
            TechTools follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">4. Cookies and Web Beacons</h2>
          <p>
            Like any other website, TechTools uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">5. Third Party Privacy Policies</h2>
          <p>
            TechTools's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-300 mb-2">6. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at our <Link href="/contact" className="text-blue-400 hover:underline">Contact Page</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}