import type { Metadata } from "next";
import {Outfit as localFont} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import Footer from "@/components/footer";

const geistSans = localFont({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feedback-submitter",
  description: "Feedbackque is a simple feedback submission app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.className}  antialiased`}
      >
        <Providers>
          <Navbar/>
          <main className="mt-[4rem]">
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
