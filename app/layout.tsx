import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar.jsx";
import ConditionalBookingButton from "./components/ConditionalBoookingBtn";
import localFont from '@next/font/local';
import { Montserrat, Oswald } from "next/font/google";

const myFont = localFont({
  src: '../public/font/pricedown.otf',
  variable: '--gta-font',
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
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
    <html lang="en" className={myFont.className} suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        {/* Add structured data here */}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${oswald.variable}`}
      >
        <header className="sticky top-0 w-full z-10">
          <NavBar />
        </header>
        <main className="flex flex-col ">{children}</main>
        <ConditionalBookingButton />
        <footer className="h-auto  p-4 bg-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}