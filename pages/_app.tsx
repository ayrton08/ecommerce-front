import 'styles/global.css';
import { Footer } from 'ui';
import { RecoilRoot } from 'recoil';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Header } from '../components/Header';

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      background: '#0099ff',
    },
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <NextUIProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
