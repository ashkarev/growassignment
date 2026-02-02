import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
  description: "Licensed clinical psychologist in Santa Monica specializing in anxiety, trauma, and burnout therapy for adults. Evidence-based treatment with CBT, EMDR, and mindfulness approaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
