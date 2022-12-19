import React from "react";
import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { Inter } from "@next/font/google";

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
