import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { Roboto } from "next/font/google";
import BootstrapClient from "../components/BootstrapClient";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Artist Portfolio",
  description: "A minimalist portfolio showcasing beautiful artwork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="container-fluid">
          <div className="row">
            <Header/>

            <div className="col-md-8 col-lg-8 ms-sm-auto px-md-4">
              {children}
            </div>
          </div>
        </div>
        <BootstrapClient/>
      </body>
    </html>
  );
}
