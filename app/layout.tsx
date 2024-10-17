
import type { Metadata } from "next";
import localFont from "next/font/local";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ansh - personal website",
  description: "Personal website of Ansh, showcasing projects and skills in full stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-gray-800 bg-opacity-80 text-white p-4">
          <nav className="container mx-auto flex justify-center items-center">
            <ul className="flex space-x-8">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#experience">Experience</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 bg-opacity-80 text-white p-4">
          <div className="container mx-auto flex justify-center items-center space-x-8">
            <Link href="https://www.linkedin.com/in/ansh-chadha-659255b7/" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <CiLinkedin/>
            </Link>
            <Link href="https://github.com/GeekyA" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaGithub/>
            </Link>
            <Link href="mailto:anshchadha9211@gmail.com" className="text-2xl">
            <MdOutlineEmail/>
            </Link>
            <Link href="https://x.com/sanchez_wannabe" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <FaXTwitter />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
