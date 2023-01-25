import { ContactForm } from "components/ContactForm";
import { Header } from "components/Header";
import Head from "next/head";
import { SuportImage } from "ui/icons";

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
      <div className="flex flex-col md:flex-row w-full justify-evenly mt-32 px-4">
        <SuportImage className="md:w-[500px] mb-4" />

        <ContactForm />
      </div>
    </div>
  );
}
