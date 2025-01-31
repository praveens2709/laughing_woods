import styles from './layout.module.scss';
import '../app/styles/main.scss';
import './globals.scss';
import WhatsappIcon from '@components/WhatsappIcon';
import LoadingProvider from '@utils/LoadingProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <WhatsappIcon />
        <LoadingProvider>
          <main className={styles.content}>{children}</main>
        </LoadingProvider>
      </body>
    </html>
  );
}