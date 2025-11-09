import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-a442c5ff.vercel.app'),
  title: {
    default: 'What is AI? | Agentic',
    template: '%s | Agentic'
  },
  description: 'A concise, clear explanation of Artificial Intelligence (AI) with history, types, and examples.',
  openGraph: {
    title: 'What is AI? | Agentic',
    description: 'Understand Artificial Intelligence (AI): key concepts, types, history, and examples.',
    url: 'https://agentic-a442c5ff.vercel.app',
    siteName: 'Agentic',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is AI? | Agentic',
    description: 'Understand Artificial Intelligence (AI): key concepts, types, history, and examples.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">Agentic</a>
            <nav className="nav">
              <a href="#what-is-ai">What is AI</a>
              <a href="#types">Types</a>
              <a href="#history">History</a>
              <a href="#uses">Uses</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>? {new Date().getFullYear()} Agentic. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
