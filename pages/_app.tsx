import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import { useRouter } from 'next/router';
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import NavMobile from "@/components/NavMobile";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const showNavhandler = () => setShowNav(true);
  const closeNavhandler = () => setShowNav(false);
  React.useEffect(() => {
    if (AOS) {
      AOS.init();
    }
  }, [AOS]);

  return (
    <>
      <Head>
        <title>ATM Solutions IT</title>
        <meta name="description" content="Ancora Indonesia Resources" />
        <link rel="icon" href="/img/atm-master2.png" />
      </Head>
      <main className={lexend.className}>
      <NavMobile showNav={showNav} closeNav={closeNavhandler}/>
        {router.pathname !== '/compro-pdf' && <Nav openNav={showNavhandler}/>}
        <Component {...pageProps} />
        {router.pathname !== '/newsinfo' && router.pathname !== '/compro-pdf' ? <Footer /> : ""}
        {/* <Footer/> */}
      </main>
    </>
  );
}

export default MyApp;
