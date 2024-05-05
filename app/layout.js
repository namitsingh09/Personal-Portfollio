import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import "../app/Componenets/MediaQ.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NamitSingh",
  description: "Created By VpnWan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body  className={inter.className}> <Nav />
      {children}
      
      
      </body>
      
    </html>
  );
}
