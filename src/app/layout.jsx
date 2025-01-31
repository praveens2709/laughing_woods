import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import styles from "./layout.module.scss";
import "../app/styles/main.scss";
import "./globals.scss";
import Header from "@components/Header";
import WhatsappIcon from "@components/WhatsappIcon";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <DefaultSeo {...SEO} /> */}
      </head>
      <body>
        <div className={styles.container}>
          <WhatsappIcon />
          {/* <Header /> */}
          <main className={styles.content}>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
