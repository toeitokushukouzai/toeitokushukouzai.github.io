import { AppProps } from "next/app";
import "../app/globals.css";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import GoogleAnalytics from "@/components/Head/GoogleAnalytics";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>東栄特殊鋼材株式会社</title>
      </Head>
      <GoogleAnalytics />
      <Header />
      <main className="bg-my-bg">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default App;
