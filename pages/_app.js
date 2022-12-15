// import { Open_Sans } from "@next/font/google";
import React, { useEffect } from "react";
import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { Open_Sans, Inter } from "@next/font/google";

// const gildaDisplay = Gilda_Display({ weight: "400" });
// const openSans = Open_Sans();
const inter = Inter();

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Navigation />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
