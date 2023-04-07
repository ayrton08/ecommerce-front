import { ContactForm, Header } from 'components';
import Head from 'next/head';
import { SuportImage } from 'ui/icons';
import { ShopLayout } from '../../components/layouts/ShopLayout';

export default function suport() {
  return (
    <ShopLayout title="Suport" pageDescription="Suport page">
      <div className="flex-col-center container-page ">
        <Head>
          <title>Suport</title>
          <meta
            property="description"
            content="The url you are trying to access does not exist or is temporarily unavailable"
            key="title"
          />
        </Head>
        <div className="flex flex-col md:flex-row w-full justify-evenly mt-20 mb-10 md:mb-0 md:mt-0 px-4">
          <SuportImage className="md:w-[500px] mb-4" />

          <ContactForm />
        </div>
      </div>
    </ShopLayout>
  );
}
