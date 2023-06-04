import "./globals.css";
import "./style.css";
import { inter } from "./fonts";

/* Components */
import { NavBar, Footer } from "@/components";

import Providers from "./providers";
import { DataProvider } from "./DataContext";

export const metadata = {
  title: "TN Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-dark`}>
        <DataProvider>
          <Providers>
            <NavBar />
            <span className="mt-28 block"></span>
            {children}
            <Footer />
          </Providers>
        </DataProvider>
      </body>
    </html>
  );
}

// text-dark dark:bg-dark dark:text-white
