import type { Metadata } from "next";
import "./globals.css";
import { getGlobalData } from "@/data/loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Neurolinq",
  description: "Linking Neurodiversity with the Workplace",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getGlobalData();

  const header = response.data.blocks.find(
    (block: any) => block.__component === "layout.header"
  );
  const footer = response.data.blocks.find(
    (block: any) => block.__component === "layout.footer"
  );
  const cta = response.data.blocks.find(
    (block: any) => block.__component === "layout.cta"
  );

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <Header data={header} />
        {children}
        <Footer data={footer} cta={cta} />
      </body>
    </html>
  );
}
