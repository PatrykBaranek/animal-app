import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Animal App",
  description: "Explore adorable dogs and cats in our animal gallery app",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="dark">
        <ReactQueryProvider>
          <Navbar />
          <main className="bg-gradient-to-r from-rose-400 to-orange-300">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
