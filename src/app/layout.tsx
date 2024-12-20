import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Layouts";

const circular = localFont({
  src: [
    {
      path: "./fonts/3MCircularTT-Light.ttf",
      weight: "100 400",
      style: "normal",
    },
    {
      path: "./fonts/3MCircularTT-Regular.ttf",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/3MCircularTT-Bold.ttf",
      weight: "600 900",
      style: "normal",
    },
  ],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Trend Forum",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={`${circular.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
