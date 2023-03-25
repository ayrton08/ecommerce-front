import React, { useContext, useState } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useMe, useProduct } from 'hooks/useData';
import { Toast } from 'ui/Toast';
import { Loader } from 'ui/loaders/Loader';
import { isUserLogged } from 'helpers/localStorage';
import { CardTitle } from 'ui/label/styled';
import { usePagination } from 'hooks/usePagination';
import { Product, ProductFeatured } from 'components';
import { CartContext } from 'context';
import axios from 'axios';
import { IProduct } from '../../interfaces/product';
import { ICartProduct } from '../../interfaces/cart';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { useEffect } from 'react';

const ProductPage = () => {
  const { query } = useRouter();
  const product: IProduct = useProduct(query.itemId as string);

  const user = useMe('/me');

  // const { data } = usePagination(product?.type);

  // const currentCart = user?.data?.cart;

  // const logged = isUserLogged();

  // const handler = async () => {
  //   if (!logged) {
  //     return Router.push('/signin');
  //   }

  //   addProductToCart(product);

  //   Toast(`${product?.name} agregado al carrito`);
  // };

  const router = useRouter();

  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    objectID: product?.objectID,
    images: product?.images,
    price: product?.price,
    name: product?.name,
    quantity: 1,
  });

  useEffect(() => {
    setTempCartProduct({ ...product, quantity: 1 });
  }, [product]);

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const onAddProduct = () => {
    if (product) {
      addProductToCart(tempCartProduct);
      Toast(`${product?.name} agregado al carrito`);
    }
    // router.push('/cart');
  };

  console.log(product?.description);

  return (
    <ShopLayout title={product?.name} pageDescription={product?.description}>
      {product ? (
        <>
          <Product
            detail
            description={product.description}
            id={product.objectID}
            picture={product.images}
            price={product.price}
            title={product.name}
            className="h-full w-2/3"
            category={product.type}
            onClick={onAddProduct}
          />
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
      ) : (
        <Loader />
      )}
    </ShopLayout>
  );
};

export default ProductPage;
