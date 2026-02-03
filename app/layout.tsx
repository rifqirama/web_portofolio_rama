import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Kita pakai font Google 'Inter' biar rapi
import "./globals.css"; // Wajib import ini supaya Tailwind jalan

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Rama | Fullstack Developer",
  description: "Portofolio profesional Rama, Fullstack Developer spesialis Next.js dan Multimedia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}