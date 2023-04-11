import '../styles/global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes/light-theme';
import { CartProvider } from 'context';
import { AuthProvider } from 'context/auth';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
