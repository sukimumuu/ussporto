import type { Metadata } from "next";
import { Playfair_Display, Newsreader, Courier_Prime, Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Sukimumuu Chronicle | Portfolio Rizqy Bagus Saputra",
  description: "Portofolio Bergaya Retro Newspaper - Rizqy Bagus Saputra (Web & Backend Developer)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cinzel.variable} ${playfair.variable} ${newsreader.variable} ${courier.variable}`}>
      <body className="font-serif antialiased bg-[#f6f1e5] text-[#1c1917] selection:bg-[#292524] selection:text-[#f6f1e5] min-h-screen">
        {children}
      </body>
    </html>
  );
}
