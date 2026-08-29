import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar.jsx";
import React from "react";
import ConditionalBookingButton from "./components/ConditionalBoookingBtn";
import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bar événementiel mariage",
  description:
    "Nous sommes une entreprise de bar événementiel pour mariage, anniversaire, soirée d'entreprise, etc. Nous sommes basés à Paris et nous nous déplaçons dans toute la France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+DE+LA+Guides&display=swap"
          rel="stylesheet"
        />
        {/* Add structured data here */}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${roboto.variable}`}
      >
        <header className="sticky top-0 w-full z-10">
          <NavBar />
        </header>
        <main className="flex flex-col ">
          {children} <ConditionalBookingButton />
        </main>

        <footer className="h-auto  bg-white w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
  
}
