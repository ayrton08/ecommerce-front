/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header";
import { useMe } from "hooks/useData";
import { useTotalCart } from "hooks/useTotalCart";
import { createOrder, updateCart } from "lib/api";
import Head from "next/head";
import { Cart } from "ui";
import { Loader } from "ui/Loader";

export default function Profile() {
  const data = useMe("/me");
  const { total, totalItems } = useTotalCart(data);

  const cleanCart = async () => {
    await updateCart({ cart: [] });
  };

  const productId = data?.data?.cart[0].objectID;
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
    console.log(res);
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
          items={totalItems}
          handler={handler}
        ></Cart>
      )}
    </div>
  );
}
