import { Html, Head, Main, NextScript } from 'next/document';
import { siteConfig } from '@/config';

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <script
          dangerouslySetInnerHTML={{
            __html: `     
              window.axeptioSettings = {
                clientId: "6478d953293c21422d11b536",
                cookiesVersion: "kulteo-fr",
              };
               
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");
              `,
          }}
        />
        <NextScript />
      </body>
    </Html>
  );
}
