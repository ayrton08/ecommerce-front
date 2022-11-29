/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import Head from "next/head";
import { Header } from "components/Header";
import { useMe, useCleanCart, useCart, useTotalCart } from "hooks";
import { createOrder } from "lib/api";
import { Cart, Loader } from "ui";
import { createNewOrder } from "helpers/createOrder";

export default function CartPage() {
  const data = useMe("/me");
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);
  const { efect, cleanCart } = useCleanCart();

  const productId = data?.data?.cart[0]?.objectID;
  const orderProduct = data?.data?.cart[0];

  const { order } = createNewOrder(orderProduct, total);

  const handler = async () => {
    await createOrder({ ...order }, productId);
    cleanCart();
    Router.push({
      pathname: "/orders",
    });
  };

  return (
    <div className="flex gap-5 min-h-screen justify-center self-center items-center relative">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header />
      </div>
      {!data ? (
        <Loader />
      ) : (
        <Cart
          orders={data?.data?.cart}
          total={total}
          items={totalItemsCart}
          handler={handler}
          handlerRemove={cleanCart}
          efect={efect}
        ></Cart>
      )}
    </div>
  );
}
