import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getActualYear = () => {
    return new Date().getFullYear();
  };

  return (
    <html lang="en" className="min-w-min">
      <body
        className={
          "flex flex-col min-h-screen bg-gradient-to-r from-sky-400 to-blue-600"
        }
      >
        <Providers>
          <header className="bg-gray-600 text-white py-2 text-center sticky top-0 mb-5">
            <h1 className="text-2xl text-center">Weather App</h1>
          </header>
          <main className="flex-grow items-center justify-center text-black">
            {children}
          </main>
          <footer className="bg-gray-600 text-white py-4 text-center sticky bottom-0">
            <p>© {getActualYear()} Weather App</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
