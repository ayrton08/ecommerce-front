import React from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { useMe, useProduct } from "hooks/useData";
import { Product } from "components/Product";
import { Toast } from "ui/Toast";
import { Loader } from "ui/loaders/Loader";
import { Header } from "components/Header";
import { useCart } from "hooks/userCart";
import { isUserLogged } from "helpers/localStorage";

export default function ItemId() {
  const router = useRouter();
  const productId = router.query.itemId as string;
  const data = useProduct(productId);
  const user = useMe("/me");

  const currentCart = user?.data?.cart;

  const { addToCart, disableButton } = useCart();
  const logged = isUserLogged();

  const handler = async () => {
    if (!logged) {
      return Router.push("/signin");
    }
    await addToCart(currentCart, data.product);
    Toast(`${data?.product?.Name} agregado al carrito`);
  };

  return (
    <div className="container-page flex-col-center pt-8">
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
          onClick={handler}
          disable={disableButton}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
