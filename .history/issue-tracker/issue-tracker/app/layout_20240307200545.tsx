import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme-config.css";
import Navbar from "./Navbar";
// import radix ui
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";

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
        <AuthProvider></AuthProvider>
        <Theme>
          <Navbar></Navbar>
          {/* moving the children into the main part, more semantic */}

          <main>
            <Container> {children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
