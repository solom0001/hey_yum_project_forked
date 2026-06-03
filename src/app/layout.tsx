import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lilita_One } from "next/font/google";
import "./globals.css";
import Footer from "./components/utilityComponents/Footer";
import localFont from "next/font/local";

export const heyYumFont = localFont({
  src: [
    {
      path: "../app/fonts/Hey_yum_font-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heyyum-local",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hey Yum!",
  description: "site for Hey Yum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${lilitaOne.variable} ${heyYumFont.variable} h-full antialiased`}
    >
      <body className="min-h-full grid">
        {children}

        <Footer />
      </body>
    </html>
  );
}
