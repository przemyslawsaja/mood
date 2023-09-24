import type { Metadata } from "next";
import React from "react";
import { Providers } from "@/app/providers";
import { Poppins } from "@next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mood",
  description:
    "Experience tranquility and productivity at your fingertips with our meditation and focus app. Choose your path to inner balance and mental clarity. Meditate for calm or sharpen your focus for peak performance. Begin your mindful journey today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
