import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SYNCOMX | Intelligent Life Sciences",
  description:
    "SYNCOMX's intelligent pharmaceutical ecosystem provides regulatory-ready, edge computing software to accelerate cleanroom production, elevate safety protocols, and maximize overall operational throughput.",
  keywords: [
    "pharma manufacturing",
    "AI",
    "quality management",
    "batch execution",
    "compliance",
  ],
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen w-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
