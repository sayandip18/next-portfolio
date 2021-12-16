import Theme from '../styles/theme';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>  <Head>
          <title>Sayandip's portfolio</title>
          <meta charset="UTF-8" />
          <meta name="keywords" content="portfolio app" />
          <meta name="author" content="Sayandip Halder" />
        </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 