import type { Metadata } from "next";
import "./globals.css";

// Path is now standardized to lowercase to prevent build issues
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import { use } from "react";
import { getServerComponentsHmrCache } from "next/dist/server/app-render/work-unit-async-storage.external";

export const metadata: Metadata = {
  title: "Tour & Travel | Explore the Unseen",
  description: "Experience the world's most beautiful destinations with our curated travel packages.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white selection:bg-sky-500/30 selection:text-sky-900">
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}