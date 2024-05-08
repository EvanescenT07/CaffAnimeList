import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CaffAnimeList",
  description: "CaffAnimeList is your ultimate destination to discover and explore popular anime lists. Powered by up-to-date data from MyAnimeList, find recommendations, the latest trends, and everything you need to choose your next anime to watch. Whether you're a hardcore fan or just starting out, CaffAnimeList makes it easy to find the best content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
