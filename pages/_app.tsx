import 'styles/global.css';
import { Footer } from 'ui';
import { RecoilRoot } from 'recoil';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from '../components/Header';
import { lightTheme } from '../themes/light-theme';

const theme = createTheme({
  type: 'light',
});

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <NextUIProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NextUIProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
