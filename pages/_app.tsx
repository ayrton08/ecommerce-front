import "styles/global.css";
import { Footer } from "ui/Footer";

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="bg">
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
