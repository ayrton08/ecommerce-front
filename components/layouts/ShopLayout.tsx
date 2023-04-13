import { padding } from '@mui/system';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Footer } from 'components/styled';
import { Header } from '../ui/Header';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: ReactNode;
  className?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
  className,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <Header />

      <main
        className={`container-page ${className}`}
        style={{
          margin: '10px auto',
          maxWidth: '1440px',
          padding: '0px 20px',
        }}
      >
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
