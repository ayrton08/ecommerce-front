/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import Head from "next/head";
import { Header } from "components/Header";
import { useMe, useCleanCart, useCart, useTotalCart } from "hooks";
import { createOrder } from "lib/api";
import { Cart, Loader } from "ui";
import { createNewOrder } from "helpers/createOrder";
import { useEffect, useState } from "react";

export default function CartPage() {
  const data = useMe("/me");
  const [currentOrders, setCurrentOrders] = useState([]);
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);
  const { efect, cleanCart } = useCleanCart();

  const [url, setUrl] = useState("");

  const productId = data?.data?.cart[0]?.objectID;
  const orderProduct = data?.data?.cart[0];

  useEffect(() => {
    setCurrentOrders(data?.data?.cart);
  }, [data]);

  const { order } = createNewOrder(orderProduct, total);

  const handler = async () => {
    const orderCreated = await createOrder({ ...order }, productId);
    setUrl(orderCreated.url);
    console.log("url", orderCreated.url);
    await cleanCart();
  };

  useEffect(() => {
    if (url) {
      window.open(url, "Payment");
    }
  }, [url]);

  const { removeProduct } = useCleanCart();

  const removeElement = async (index: any, orders: any, id: string) => {
    const newFruits = currentOrders.filter((_, i) => i !== index);
    setCurrentOrders(newFruits);
    await removeProduct(orders, id);
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
          orders={currentOrders}
          total={total}
          items={totalItemsCart}
          handler={handler}
          handlerRemove={cleanCart}
          efect={efect}
          handlerRemoveProduct={removeElement}
        ></Cart>
      )}
    </div>
  );
}
