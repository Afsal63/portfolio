import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afsal | Full Stack Developer",
  description: "Full Stack MERN Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}