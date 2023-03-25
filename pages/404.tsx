import { Header } from 'components';
import Head from 'next/head';
import { NotFoundIcon } from 'ui/icons';
import { Basic } from 'ui/wrappers/Basic';

export default function notFound() {
  return (
    <div className="flex-col-center">
      <Head>
        <title>Not Found</title>
        <meta
          property="description"
          content="The url you are trying to access does not exist or is temporarily unavailable"
          key="title"
        />
      </Head>
      <Basic
        icon={<NotFoundIcon className="w-full" />}
        color="bg-red-600/40 self-center"
      >
        <h2 className="card-title">Page not Found!</h2>
      </Basic>
    </div>
  );
}
