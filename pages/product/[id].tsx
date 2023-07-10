import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useProduct } from 'hooks/useData';
import { Loader } from 'components/styled/loaders/Loader';
import { Product } from 'components';
import { CartContext } from 'context';
import { IProduct } from '../../interfaces/product';
import { ICartProduct } from '../../interfaces/cart';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllProductsId } from 'controllers/product-controller';
import { findProductById } from '../../controllers/product-controller';

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    id: product?.id,
    images: product?.images,
    price: product?.price,
    name: product?.name,
    quantity: 1,
  });

  useEffect(() => {
    setTempCartProduct({ ...product, quantity: 1 });
  }, [product]);

  const onAddProduct = () => {
    if (product) {
      addProductToCart(tempCartProduct);
    }
    // Toast(`${product.name} agregado al carrito`);
  };

  return (
    <ShopLayout title={product?.name} pageDescription={product?.description}>
      <>
        {product ? (
          <Product
            description={product.description}
            id={product.id}
            image={product.images}
            price={product.price}
            title={product.name}
            className="h-full w-2/3"
            category={product.type}
            onClick={onAddProduct}
          />
        ) : (
          <div className="fixed top-1/3 right-1/2">
            <Loader />
          </div>
        )}
        {/* <div className="grid justify-items-center border-t-2 pt-6">
            <CardTitle className="px-2 text-center">
              Other products that might interest you
            </CardTitle>
            <div className="order py-10 overflow-auto z-20 p-2 flex flex-col md:flex-row flex-wrap justify-center items-center">
              {data?.results?.map((product: any) => (
                <ProductFeatured
                  key={product.Name}
                  title={product.Name}
                  price={product['Unit cost']}
                  picture={product.Images[0].url}
                  id={product.objectID}
                  category={product.Type}
                  recomended
                />
              ))}
            </div>
          </div> */}
      </>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productsIds = await getAllProductsId();

  const paths = productsIds.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id = '' } = params as { id: string };
  const product = await findProductById(id);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
