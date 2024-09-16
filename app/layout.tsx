import type { Metadata } from "next";
import "./globals.css";
import '@/node_modules/react-modal-video/scss/modal-video.scss';

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
