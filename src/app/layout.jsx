"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./layout.module.scss";
import "@styles/main.scss";
import "./globals.scss";
import WhatsappIcon from "@components/WhatsappIcon";
import LoadingProvider from "@utils/LoadingProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <WhatsappIcon />
        <LoadingProvider isLoading={isLoading}>
          <Header isLoading={isLoading}/>
          <main className={styles.content}>{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
