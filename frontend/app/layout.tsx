import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AFSO - Afghan Female Student Outreach",
  description: "AFSO is a collective of volunteer professors from around the world, teaching classes and building pathways forward for university women in Afghanistan.",
  icons: {
    icon: "/AFSO-Logo-16-.png",
    shortcut: "/AFSO-Logo-16-.png",
    apple: "/AFSO-Logo-16-.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleTagManager />
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
