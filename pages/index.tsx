import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vedant Dubey - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vedant Dubey" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a passionate Developer with a knack for creating impactful digital experiences." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Vedant Dubey - Software Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Vedant Dubey - Software Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Vedant Dubey - Software Developer"/>
        <meta data-rh="true" property="og:image" content="/images/vedantdubey.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;