import '../styles/global.css';
import { RecoilRoot } from 'recoil';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes/light-theme';
import { CartProvider } from 'context';
import { AuthProvider } from 'context/auth';
import { SessionProvider } from 'next-auth/react';

const theme = createTheme({
  type: 'light',
});

function MyApp({ Component, pageProps }: any) {
  return (
    <SessionProvider>
      <AuthProvider>
        <CartProvider>
          <RecoilRoot>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              {/* <NextUIProvider theme={theme}> */}
              <Component {...pageProps} />
              {/* </NextUIProvider> */}
            </ThemeProvider>
          </RecoilRoot>
        </CartProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
