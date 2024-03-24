import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Importação da fonte Montserrat
import "./globals.css";
import { Header } from "@/components/header";

// Configuração da fonte Montserrat
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicotéra",
  description: "Um sistema de ajuda de psicólogos e pacientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}> {/* Aplicação da fonte Montserrat */}
        <Header/>
        {children}
      </body>
    </html>
  );
}
