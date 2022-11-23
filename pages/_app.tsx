import "styles/global.css";
import { Footer } from "ui/Footer";
import { RecoilRoot } from "recoil";

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
