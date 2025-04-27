import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import QueryProvider from "./QueryProvider";
import Navbar from "@/components/common/Navbar";
import { FlyCartProvider } from "@/context/FlyCartContext";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Commerce",
  description:
    "An innovative e-commerce platform in Myanmar offering a wide range of products with seamless shopping experience.",
  keywords: ["e-commerce", "commerce", "online shopping", "products"],
  openGraph: {
    title: "Commerce",
    description:
      "An innovative e-commerce platform in Myanmar offering a wide range of products with seamless shopping experience.",
    type: "website",
    url: "https://commerce.com",
  },
  twitter: {
    title: "Commerce",
    description:
      "An innovative e-commerce platform in Myanmar offering a wide range of products with seamless shopping experience.",
    card: "summary_large_image",
    site: "@commerce",
    creator: "@commerce",
  },
  alternates: {
    canonical: "https://commerce.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary-color">
        <QueryProvider>
          <StoreProvider>
            <FlyCartProvider>
              <main className="relative min-h-screen max-w-[1140px] mx-auto">
                {/* navbar section */}
                <div className="py-3 sticky top-0 bg-secondary-color left-0 z-50">
                  <Navbar />
                </div>
                {children}
                {/* footer section  */}
                <Footer />
              </main>
            </FlyCartProvider>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
