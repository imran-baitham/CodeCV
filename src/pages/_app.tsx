import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Header, Footer } from "../components";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Hydrated>
  );
}

export default MyApp;

const Hydrated = ({ children }: { children?: React.ReactNode }) => {
  const [hydration, setHydration] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);
  return hydration ? children : <div></div>;
};
