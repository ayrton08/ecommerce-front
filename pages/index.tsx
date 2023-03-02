import Head from 'next/head';
import { useProducts } from 'hooks';

import { ProductFeatured, Header } from 'components';
import { Banner, Featured, Categories, Category } from 'ui';
import { CashIcon, MasterIcon, MercadoPagoIcon, VisaIcon } from 'ui/icons';
import { ContainerCard, ContainerPayments } from 'ui/wrappers/styled';
import { CardTitle } from 'ui/label/styled';
import { Progress } from 'ui/loaders/styled';
import { Divider } from 'ui/divider/styled';

import Image from 'next/image';

export default function Home() {
  const products = useProducts();

  const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  ];

  return (
    <div className="bg-white">
      <Head>
        <title>Home</title>
      </Head>

      <div className="pb-32 relative">
        <Image
          alt="Banner Promocion"
          src="/wave.svg"
          className="w-full h-full lg:object-cover"
          height={2000}
          width={2000}
        />
        <div className="flex w-full absolute top-1/3  justify-evenly">
          {images.map((img) => (
            <img
              alt="product"
              src={img}
              key={img}
              width={400}
              height={400}
              className="w-1/3 px-2 md:px-8 max-w-[500px]"
            />
          ))}
        </div>
      </div>

      {products ? (
        <Featured>
          {products?.results?.map((product: any) => (
            <ProductFeatured
              key={product.Name}
              title={product.Name}
              price={product['Unit cost']}
              picture={product.Images[0].url}
              id={product.objectID}
              category={product.Type}
            />
          ))}
        </Featured>
      ) : (
        <Progress />
      )}

      <Divider />
      <Categories>
        <Category
          label="Bookshelves"
          src="https://cdn-icons-png.flaticon.com/512/2406/2406831.png"
        />
        <Category
          label="Chairs"
          src="https://cdn-icons-png.flaticon.com/512/2271/2271478.png"
        />
        <Category
          label="Lighting"
          src="https://cdn-icons-png.flaticon.com/512/4072/4072223.png"
        />
        <Category
          label="Rugs"
          src="https://cdn-icons-png.flaticon.com/512/3005/3005036.png"
        />
        <Category
          label="Sofas"
          src="https://cdn-icons-png.flaticon.com/512/1698/1698771.png"
        />
        <Category
          label="Tables"
          src="https://cdn-icons-png.flaticon.com/512/2669/2669013.png"
        />
      </Categories>
    </div>
  );
}
