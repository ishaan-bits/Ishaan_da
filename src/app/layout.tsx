import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="grain min-h-screen bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
