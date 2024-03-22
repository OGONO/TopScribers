import React, { useEffect, useState } from "react";
import Script from "next/script";

import "../../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id =G-ETL1YQLSQB"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.datalayer = window.datalayer || [];
            function gtag(){datalayer.push(arguments);}
            gtag('js', new Date());
            gtag('config' , 'G-ETL1YQLSQB');
         `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
