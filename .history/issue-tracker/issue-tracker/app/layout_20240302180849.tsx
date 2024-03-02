import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../t"
import "./globals.css";
import Navbar from "./Navbar";
// import radix ui
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="purple">
          <Navbar></Navbar>
          {/* moving the children into the main part, more semantic */}
          <main> {children}</main>
        </Theme>
      </body>
    </html>
  );
}
