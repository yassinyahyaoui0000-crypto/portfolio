import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Yassin Yahyaoui | Freelance Web Designer & Developer",
  description: "A polished freelance portfolio for Mohamed Yassin Yahyaoui. Clear process, credible case studies, and conversion-focused frontend work for clients who want a professional web presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">Skip to content</a>
        <Header />
        {children}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-foreground/55">
          <p>© {new Date().getFullYear()} Mohamed Yassin Yahyaoui. Designed for clear, credible project inquiries.</p>
        </footer>
      </body>
    </html>
  );
}
