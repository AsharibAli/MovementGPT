import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "MovementGPT 🤖 - Help Developers to Build on Movement 👨‍💻 - For Movement Ecosystem ✨",
  description:
    "MovementGPT is an Smart AI chatbot trained on Movement Blockchain and its ecosystem data to help developers build on top of Movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
