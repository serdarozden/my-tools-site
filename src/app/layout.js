import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'TechTools - Technical Converters & Engineering Guides',
  description: 'Fast, free, and precise measurement converters for architects, engineers, and creators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen font-sans selection:bg-blue-600 selection:text-white">
        {/* Dark Header / Navbar */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white tracking-tight hover:opacity-90 transition">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shadow-lg shadow-blue-600/30">
                T
              </span>
              <span>TechTools</span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/tools/unit-converter" className="hover:text-blue-400 transition">
                Unit Converter
              </Link>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Guides
              </Link>
            </nav>
          </div>
        </header>

        {/* Ana İçerik */}
        <div className="flex-1">
          {children}
        </div>

        {/* Dark Footer */}
        <footer className="bg-slate-900 border-t border-slate-800/80 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} TechTools. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}