import React from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useMe, useProduct } from 'hooks/useData';
import { Product } from 'components/Product';
import { Toast } from 'ui/Toast';
import { Loader } from 'ui/loaders/Loader';
import { useCart } from 'hooks/userCart';
import { isUserLogged } from 'helpers/localStorage';
import { CardTitle } from 'ui/label/styled';
import { usePagination } from 'hooks/usePagination';
import { ProductFeatured } from 'components';

export default function ItemId() {
  const router = useRouter();
  const productId = router.query.itemId as string;
  const product = useProduct(productId);
  const user = useMe('/me');

  const { data } = usePagination(product?.product?.Type as string);

  const currentCart = user?.data?.cart;

  const { addToCart, disableButton } = useCart();
  const logged = isUserLogged();

  const handler = async () => {
    if (!logged) {
      return Router.push('/signin');
    }
    await addToCart(currentCart, product.product);
    Toast(`${product?.product?.Name} agregado al carrito`);
  };

  return (
    <div className="container-page flex-col-center pt-8">
      <Head>
        <title>Search</title>
      </Head>

      {product ? (
        <>
          <Product
            detail
            description={product.product.Description}
            id={product.product.objectID}
            picture={product.product.Images[0].url}
            price={product.product['Unit cost']}
            title={product.product.Name}
            className="h-full w-2/3"
            category={product.product.Type}
            onClick={handler}
            disable={disableButton}
          />
          <div className="grid justify-items-center border-t-2 pt-6">
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
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
