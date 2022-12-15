import React from "react";
import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { Inter } from "@next/font/google";

import { useRouter } from "next/router";

const inter = Inter();

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  console.log("865 --- AS ROUTE", asPath);
  return (
    <div className={inter.className}>
      <Navigation displayNavigation={asPath.includes("post") ? false : true} />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
