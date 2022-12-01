import "styles/global.css";
import { Footer } from "ui";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <div className="bg">
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
