import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A Coffeee site" />
          <meta name="author" content="Ocean Bao" />

          <meta property="og:title" content="Coffeee" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:description" content="Coffeee." />
          <meta property="og:image" content="coffee.png" />

          <link rel="icon" href="/favicon.ico" />
          <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
