// Import necessary dependencies
import Head from "next/head";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navbar from "./Navbar";
import "@radix-ui/themes/styles.css";

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Define the RootLayout component
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Use Head component to set metadata and font style */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <style>{`body { font-family: ${inter.variable}; }`}</style>
      </Head>

      {/* Rest of the component */}
      <Theme>
        <Navbar />
        <main>{children}</main>
      </Theme>
    </>
  );
};

export default RootLayout;
