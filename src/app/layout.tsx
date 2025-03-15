import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Abanoub Meseha",
  description: "Abanoub Meseha | Fullstack Software Engineer Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-200 text-black dark:bg-[#151617] dark:text-white">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
