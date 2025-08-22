
import type { Metadata } from "next";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ansh Chadha - Software Engineer",
  description: "Ansh Chadha - Software Engineer specializing in full-stack development, data engineering, and AI solutions. 3+ years of experience building scalable systems.",
  keywords: "software engineer, full stack developer, data engineer, Python, JavaScript, React, AWS, machine learning",
  authors: [{ name: "Ansh Chadha" }],
  robots: "index, follow",
  openGraph: {
    title: "Ansh Chadha - Software Engineer",
    description: "Software Engineer with 3+ years of experience in full-stack development and data engineering",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Chadha - Software Engineer",
    description: "Software Engineer specializing in full-stack development and data engineering",
    creator: "@sanchez_wannabe",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Modern glassmorphism header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-[var(--border)]">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo/Brand */}
              <Link 
                href="#" 
                className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                AC
              </Link>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link 
                    href="#about" 
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#services" 
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#experience" 
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link 
                    href="mailto:anshchadha9211@gmail.com" 
                    className="btn-base px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius-md)] hover:bg-[var(--primary)]/90 focus:ring-[var(--primary)]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        
        {/* Spacer for fixed header */}
        <div className="h-20"></div>
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Modern footer with subtle background */}
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]/50">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2">Ansh Chadha</h3>
                <p className="text-[var(--muted-foreground)] text-sm">Software Engineer</p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <Link 
                  href="https://www.linkedin.com/in/ansh-chadha-659255b7/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-2 rounded-[var(--radius-sm)] hover:bg-[var(--muted)] group"
                  aria-label="LinkedIn Profile"
                >
                  <CiLinkedin className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://github.com/GeekyA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-2 rounded-[var(--radius-sm)] hover:bg-[var(--muted)] group"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link 
                  href="mailto:anshchadha9211@gmail.com" 
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-2 rounded-[var(--radius-sm)] hover:bg-[var(--muted)] group"
                  aria-label="Email Contact"
                >
                  <MdOutlineEmail className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://x.com/sanchez_wannabe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors p-2 rounded-[var(--radius-sm)] hover:bg-[var(--muted)] group"
                  aria-label="X (Twitter) Profile"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
              <p className="text-[var(--muted-foreground)] text-sm">
                © {new Date().getFullYear()} Ansh Chadha. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
