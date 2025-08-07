import type { Metadata } from "next";
import "./globals.css";
import { roboto, lora, poppins,BricolageGrotesque,inter } from './fonts'
import { Footer } from "@/components/layout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} ${poppins.variable} ${BricolageGrotesque.className} antialiased`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
