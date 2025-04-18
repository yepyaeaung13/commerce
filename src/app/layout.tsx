import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import QueryProvider from "./QueryProvider";

export const metadata: Metadata = {
  title: "JU E-commerce App",
  description: "An innovative e-commerce platform in Myanmar offering a wide range of products with seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <StoreProvider>{children}</StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
