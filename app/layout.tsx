import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phillip Jason Geiger - A Portfolio",
  description: "I just wanna make something cool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 style={{ textAlign: "center" }}>Phillip Jason Geiger</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
