import { Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/footer";

import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuddler",
  description: "Toddler Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
