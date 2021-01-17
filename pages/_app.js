import React from "react";
import NextNprogress from "nextjs-progressbar";

import "../styles/globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
