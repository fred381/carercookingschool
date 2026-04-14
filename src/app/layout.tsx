import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamilton George Care",
  description: "Hamilton George Care cooking school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
