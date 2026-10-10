import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://eetechnologies.lk"),
  title: "E & E Technologies | Electrical & Solar Inspections",
  description:
    "E & E Technologies provides electrical and solar inspection services in Sri Lanka — safety inspections, compliance checks, pre-purchase inspections, and solar system performance assessments.",
  keywords: [
    "electrical inspection Sri Lanka",
    "solar inspection Sri Lanka",
    "electrical safety inspection Colombo",
    "solar panel inspection Gampaha",
    "pre-purchase electrical inspection",
  ],
  openGraph: {
    title: "E & E Technologies | Electrical & Solar Inspections",
    description:
      "Electrical and solar inspections for homes and small businesses in Colombo and Gampaha — clear findings, honest reporting, practical next steps.",
    url: "https://eetechnologies.lk",
    siteName: "E & E Technologies",
    images: ["/images/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "E & E Technologies | Electrical & Solar Inspections",
    description:
      "Electrical and solar inspections for homes and small businesses in Colombo and Gampaha.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
