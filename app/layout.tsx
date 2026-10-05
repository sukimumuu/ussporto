import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rizqy Bagus Saputra | Backend Developer & Web Engineer",
  description: "Portfolio of Rizqy Bagus Saputra - Backend Developer, Web Engineer, and Information Systems student based in Purwokerto, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
