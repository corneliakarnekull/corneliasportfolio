import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spline from '@splinetool/react-spline/next';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Cornelia Karnekull 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body className="bg-black relative overflow-hidden">
        <Header />
        <Navbar />
        <main className="relative z-10 flex flex-col justify-center min-h-screen">
          <h1 className="font-bodoni text-9xl py-20 px-20 italic text-perfectpurple ">
            CORNELIA KÄRNEKULL
          </h1>
          <h2 className="font-bodoni text-7xl justify- py-20 px-10 italic text-perfectpurple">• PORTFOLIO  •</h2>
          
          {children}
        </main>
        <section className="relative bg-gradient-to-t from-black to-transparent h-40 flex items-center justify-center -mt-40">
        </section>
        <section className="relative bg-slate-400  h-screen flex items-center justify-center ">
          <div className="relative h-full w-full bg-black">
            <h3 className="">THIS MY PORTFOLIO • 2024 </h3>
          </div>
          <div className="relative h-full w-full bg-black">
          <Spline
        scene="https://prod.spline.design/fYey8yqHvtO94CNa/scene.splinecode" 
      />
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}