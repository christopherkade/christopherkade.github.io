// import { Open_Sans } from "@next/font/google";
import React, { useEffect } from "react";
import "../styles/globals.css";
import { Navigation } from "../components/Navigation";

// const gildaDisplay = Gilda_Display({ weight: "400" });
// const openSans = Open_Sans();

function MyApp({ Component, pageProps }) {
  return (
    <div
    // className={`bg-theme-background color-theme-text h-full ${inter.className}`}
    >
      <Navigation />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
