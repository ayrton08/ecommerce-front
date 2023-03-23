import Head from 'next/head';

import axios from 'axios';
import { ProductFeatured } from 'components';
import { Featured, Categories, Category } from 'ui';
import { Divider } from 'ui/divider/styled';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { IProduct } from '../interfaces/product';

interface Props {
  products: IProduct[];
}

const HomePage: FC<Props> = ({ products }) => {
  return (
    <div className="bg-white">
      <Head>
        <title>Market | Home</title>
      </Head>

      <div className="flex  flex-col gap-4 px-4 md:px-0 md:flex-row w-full justify-around lg:justify-evenly text-black md:text-lg font-bold md:py-16 pb-10 ">
        <div className="border-b-4 border-r-4 border-[#0099ff] shadow-md">
          <div className="flex gap-4 px-6 py-4 border-4 mb-1 mr-1 border-primaryA/50">
            <span>Shipping all over the country</span>
            <i className="bx bxs-package bx-sm"></i>
          </div>
        </div>
        <div className="border-b-4 border-r-4 border-[#0099ff] shadow-md">
          <div className="flex gap-4 px-6 py-4 border-4 mb-1 mr-1 border-primaryA/50">
            <span>Discounts of 10% 20% and 30%</span>
            <i className="bx bxs-discount bx-sm"></i>
          </div>
        </div>
        <div className="border-b-4 border-r-4 border-[#0099ff] shadow-md">
          <div className="flex gap-4 px-6 py-4 border-4 mb-1 mr-1 border-primaryA/50">
            <span>Offers of the week</span>
            <i className="bx bxs-offer bx-sm"></i>
          </div>
        </div>
      </div>

      <Featured>
        {products.map((product: IProduct) => (
          <ProductFeatured
            key={product.objectID}
            title={product.name}
            price={product.price}
            picture={product.images}
            id={product.objectID}
            category={product.type}
          />
        ))}
      </Featured>

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
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    'https://e-commerce-backend-jade.vercel.app/api/products'
  );

  if (data.error)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };

  return {
    props: {
      products: data.results,
    },
  };
};
