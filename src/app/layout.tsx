import "./globals.css";
import { roboto, lora, poppins, BricolageGrotesque, inter } from "./fonts";
import { Footer } from "@/components/layout";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://yestoboss.com"), // ✅ your domain here
  title: "income tax consultancy services | YesToBoss",
  description:
    "YesToBoss offers expert Income Tax Consultancy Services for individuals & businesses. File ITR online, save tax legally, with professional financial support.",
  keywords: [
    "Tax consultancy services",
    "Best chartered accountant firms in India",
    "Tax advisor in India",
    "Tax auditor in India",
    "Financial consultancy services in India",
  ],
  openGraph: {
    title:
      "Tax consultancy services | Best chartered accountant firms in India",
    description:
      "YesToBoss provides expert tax consultancy services with the best chartered accountant firms in India, offering GST, ITR filing, startup registration & more.",
    url: "https://yestoboss.com/",
    siteName: "YesToBoss",
    images: [
      {
        url: "https://yestoboss.com/og-image2.png",
        width: 1200,
        height: 630,
        alt: "YesToBoss - Tax Consultancy Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tax consultancy services | Best chartered accountant firms in India",
    description:
      "YesToBoss provides expert tax consultancy services with the best chartered accountant firms in India, offering GST, ITR filing, startup registration & more.",
    images: ["https://yestoboss.com/og-image2.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/", // ✅ canonical for homepage
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${lora.variable} ${poppins.variable} ${BricolageGrotesque.className} antialiased overflow-hidden`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JY3CSXP7VR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JY3CSXP7VR');
          `}
        </Script>
        {/* <ScrollSmooth> */}
        {children}
        <Footer />
        {/* </ScrollSmooth> */}
      </body>
    </html>
  );
}
