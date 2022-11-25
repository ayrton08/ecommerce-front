/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header";
import { useMe, useOrders } from "hooks/useData";
import Head from "next/head";
import { Button } from "ui/Button";
import { Loader } from "ui/Loader";
import { Order } from "ui/Order";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";

export default function Orders() {
  const orders = useOrders();
  console.log("orders", orders);

  return (
    <div className="flex gap-5 min-h-screen justify-center self-center items-center relative pt-36 pb-16">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header />
      </div>
      {!orders ? (
        <Loader />
      ) : (
        <OrdersWrapp>
          {orders?.orders.map((order: any) => (
            <Order
              key={order.createdAt._seconds}
              orderId={order.productId}
              createdAt={order.createdAt._seconds}
              status={order.status}
              linkToPay={order.aditionalInfo.linkToPay}
            />
          ))}
        </OrdersWrapp>
      )}
    </div>
  );
}
