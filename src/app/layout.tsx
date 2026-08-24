import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishaan Parimal — Data Analyst",
  description:
    "Data Analyst specializing in SQL, Python, Tableau, and Product Analytics.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#050505] text-[#EDEDED] antialiased">
        {children}
      </body>
    </html>
  );
}
