import { Header } from "components/Header";
import Head from "next/head";
import { NotFoundIcon } from "ui/icons";
import { Basic } from "ui/wrappers/Basic";

export default function notFound() {
  return (
    <div className="flex flex-col screen justify-center self-center items-center relative bg-red">
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="fixed top-4 w-full px-4">
        <Header />
      </div>
      <Basic icon={<NotFoundIcon className="w-full" />} color="bg-red-600/40 self-center">
        <h2 className="card-title">Page not Found!</h2>
      </Basic>
    </div>
  );
}
