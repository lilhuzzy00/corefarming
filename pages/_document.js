import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3265665575364691"
            crossorigin="anonymous">
          </script>
          <meta name="google-site-verification" content="7BTSPvjOkvW48t21X6VE-DZWdtmx6cCcz52p00CoX6I" />
          <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
