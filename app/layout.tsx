import type { Metadata } from "next";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import Navbar from "@/components/Navbar";
import { Chicle } from "next/font/google";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const chicle = Chicle({
  weight: "400",
  variable: "--font-chicle",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animal App",
  description: "Explore adorable dogs and cats in our animal gallery app",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${chicle.variable}`}>
      <body className="dark">
        <ReactQueryProvider>
          <Navbar />
          <main className="mb-16 min-h-screen bg-gradient-to-r from-rose-400 to-orange-300 sm:mb-0">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
