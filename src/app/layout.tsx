import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({
  weight: ['400'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next shadcn dashboard starter",
    default: "Next shadcn dashboard starter"
  },
  description: "Dashboard starter for next js and shadcn",
  keywords: [
    'dashboard template',
    'shadcn dashboard',
    'nextjs dashboard',
    'free react dashboard'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
