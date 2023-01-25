import "styles/global.css";
import { Footer } from "ui";
import { RecoilRoot } from "recoil";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Header } from "../components/Header";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      {/* <div className="bg"> */}
        <NextUIProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NextUIProvider>
      {/* </div> */}
    </RecoilRoot>
  );
}

export default MyApp;
