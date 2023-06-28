import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="dark:bg-night">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
