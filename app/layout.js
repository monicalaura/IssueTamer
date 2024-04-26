import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IssueTamer",
  description: "A basic Issue Tracking application built in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow flex">
            <div className="flex-grow overflow-y-auto bg-page text-font">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
