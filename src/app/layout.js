import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'OmniTools - Technical Converters & Engineering Guides',
  description: 'Fast, free, and precise measurement converters for architects, engineers, and creators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 flex flex-col min-h-screen font-sans">
        {/* Header / Navbar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm">
                T
              </span>
              <span>TechTools</span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/tools/unit-converter" className="hover:text-blue-600 transition">
                Unit Converter
              </Link>
              <Link href="/" className="hover:text-blue-600 transition">
                Guides
              </Link>
            </nav>
          </div>
        </header>

        {/* Ana İçerik */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} TechTools. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <Link href="#" className="hover:underline">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}