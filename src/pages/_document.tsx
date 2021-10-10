import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
	  <script async defer data-domain="easyregister.it" src="https://dashboard.pangio.it/js/plausible.js"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin&family=Raleway:wght@700&display=swap" rel="stylesheet" />
          <meta name="description" content="An online register for the new millennium." />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
          <noscript>
            To use this website you need to <a href="https://www.enable-javascript.com/">enable JavaScript</a>
          </noscript>
        </body>
      </Html>
    );

  }
}

export default AppDocument;
