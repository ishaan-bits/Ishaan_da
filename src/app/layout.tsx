import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishaan Parimal — Data Analyst",
  description:
    "Transforming complex datasets into actionable business decisions. Data Analyst specializing in SQL, Python, Tableau, and Product Analytics.",
  keywords: [
    "data analyst",
    "SQL",
    "Python",
    "Tableau",
    "product analytics",
    "data science",
    "BITS Pilani",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#09090B] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
