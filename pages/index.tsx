import { ProductFeatured } from 'components';
import { Featured, Categories, Category } from 'ui';
import { Divider } from 'ui/divider/styled';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { IProduct } from '../interfaces/product';
import { ShopLayout } from '../components/layouts/ShopLayout';
import { fetchApi } from 'fetcher';
import { findProductsWithPagination } from 'controllers/product-controller';

interface Props {
  products: IProduct[];
}

const HomePage: FC<Props> = ({ products }) => {
  return (
    <ShopLayout
      title="Market | Home"
      pageDescription="Find the best products in Market "
    >
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
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.images}
            id={product.id}
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
    </ShopLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await fetchApi('/products');
  // const products = await findProductsWithPagination();

  // console.log(data.results);

  if (data.error)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };

  // const result = products.filter(
  //   (product: any) => product.description && product
  // );

  return {
    props: {
      products: data.results,
    },
  };
};

export default HomePage;
