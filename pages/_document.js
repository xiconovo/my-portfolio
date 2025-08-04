import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential for responsive design on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="box-border">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}