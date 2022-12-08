import { ContactForm } from "components/ContactForm";
import { Header } from "components/Header";
import Head from "next/head";
import { NotFoundIcon, SuportImage } from "ui/icons";
import { Basic } from "ui/wrappers/Basic";

export default function suport() {
  return (
    <div className="flex-col-center container-page">
      <Head>
        <title>Suport</title>
        <meta
          property="description"
          content="The url you are trying to access does not exist or is temporarily unavailable"
          key="title"
        />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row w-full justify-evenly mt-32 ">
        <SuportImage />

        <ContactForm />
      </div>
    </div>
  );
}
