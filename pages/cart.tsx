/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header";
import { useMe } from "hooks/useData";
import { useTotalCart } from "hooks/useTotalCart";
import { createOrder, updateCart } from "lib/api";
import Head from "next/head";
import { Cart } from "ui";
import { Loader } from "ui/Loader";
import { useCart } from "hooks/userCart";
import Router from "next/router";
import { useState } from "react";

export default function Profile() {
  const data = useMe("/me");
  const [efect, setEfect] = useState("animate__fadeIn");

  const { total, totalItems } = useTotalCart(data?.data?.cart);

  const { totalItemsCart } = useCart(totalItems);

  const cleanCart = async () => {
    setEfect("animate__wobble");

    await updateCart({ cart: [] });
    window.location.href = window.location.href;
  };

  const productId = data?.data?.cart[0]?.objectID;
  const orderProduct = data?.data?.cart[0];
  const order = {
    items: [
      {
        title: orderProduct?.Name,
        description: orderProduct?.Description.substring(0, 100),
        // picture_url: orderProduct ? orderProduct?.Image[0]?.url : "",
        category_id: orderProduct?.Type,
        quantity: 1,
        currency_id: "ARS",
        ...orderProduct,
        unit_price: total,
      },
    ],
    back_urls: {
      success: "https://apx.school",
    },
    notification_url:
      "https://e-commerce-backend-jade.vercel.app/api/ipn/mercadopago",
  };

  const handler = async () => {
    const res = await createOrder({ ...order }, productId);
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
