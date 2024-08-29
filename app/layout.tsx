import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast-PlatformAI",
  description: "Generated your podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ConvexClerkProvider>
          {children}
        </ConvexClerkProvider></body>
    </html>
  );
}
