import "./globals.css";
import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background3D } from "@/components/Background3D";
import { CursorBlob } from "@/components/ui/cursorBlob";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel"
});

export const metadata: Metadata = {
  title: "devsanchoo",
  description: "The Developer's Journey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`scroll-smooth ${inter.variable} ${pixelFont.variable} font-sans`}>
        <CursorBlob />
        <Background3D />
        <div className="flex min-h-screen flex-col relative z-10">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}