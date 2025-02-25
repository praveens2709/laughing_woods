"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@styles/main.scss";
import "./globals.scss";
import WhatsappIcon from "@components/WhatsappIcon";
import LoadingProvider from "@utils/LoadingProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalForm from "@components/ModalForm";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  const hideHeaderFooter = ["/get-estimates", "/get-estimates-form"].includes(pathname);

  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>
        <WhatsappIcon />
        <LoadingProvider isLoading={isLoading}>
          {!hideHeaderFooter && <Header isLoading={isLoading} />}
          <ModalForm/>
          <main>{children}</main>
          {!hideHeaderFooter && <Footer />}
        </LoadingProvider>
      </body>
    </html>
  );
}
