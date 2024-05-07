import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import "../app/Componenets/MediaQ.css"
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const MemoizedNav = React.memo(Nav);

export const metadata = {
  title: "NamitSingh",
  description: "Created By VpnWan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body  className={inter.className}>
      <MemoizedNav />
         
      {children}
      
      
      </body>
      
    </html>
  );
}
