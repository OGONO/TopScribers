import React, { useEffect, useState } from "react";
import Script from "next/script";

import "../../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
<!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ETL1YQLSQB"></script>
  <script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'G-ETL1YQLSQB');
</script>
      <Component {...pageProps} />
    </>
  );
}
