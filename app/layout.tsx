
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./essentials/Header";
import Footer from "./essentials/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virin-Landing page",
  description: "To attract users",
};

export default function RootLayout ({children}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );

}



