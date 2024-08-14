import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/domky/Header";
import Footer from "@/components/domky/Footer";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "www.ecorapidhouse.at",
  description: "GAZU Group s.r.o. * EcoRapidHouse * Affordable modular housing",
};

interface LayoutProps {
  children: React.ReactNode; // Ensure the correct typing for children
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* - */}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
