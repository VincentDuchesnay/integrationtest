import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura, Kdam_Thmor_Pro} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jura",
});

const kdam = Kdam_Thmor_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kdam",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} ${kdam.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
