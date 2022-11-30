/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useMe, useProduct } from "hooks/useData";
import { Product } from "components/Product";
import { updateCart } from "lib/api";
import { Toast } from "ui/Toast";
import { Loader } from "ui/loaders/Loader";
import { Header } from "components/Header";
import { useCart } from "hooks/userCart";

export default function itemId() {
  const router = useRouter();
  const productId = router.query.itemId as string;
  const data = useProduct(productId);
  const user = useMe("/me");

  const currentCart = user?.data?.cart;

  const { addToCart } = useCart();

  return (
    <div className="p-4 container-page flex flex-col min-h-screen gap-10 items-center ">
      <Head>
        <title>Search</title>
      </Head>
      <Header />

      {data ? (
        <Product
          detail
          description={data.product.Description}
          id={data.product.objectID}
          picture={data.product.Images[0].url}
          price={data.product["Unit cost"]}
          title={data.product.Name}
          className="h-full w-2/3"
          category={data.product.Type}
          onClick={() => {
            addToCart(currentCart, data.product);
            Toast(`${data?.product?.Name} agregado al carrito`);
          }}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
