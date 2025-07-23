import type { Metadata } from "next";
import "./globals.css";
import { roboto, lora, poppins,BricolageGrotesque,inter } from './fonts'


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
      </body>
    </html>
  );
}
