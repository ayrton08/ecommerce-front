/* eslint-disable @next/next/no-img-element */
import { Header } from "components/Header";
import { useOrders } from "hooks/useData";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Loader } from "ui/Loader";
import { Order } from "ui/Order";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";

export default function Orders() {
  const [selected, setSelected] = useState("Pending");
  const allOrders = useOrders();
  const [orders, setOrders] = useState([]);

  const pendigOrders = allOrders?.orders?.filter(
    (order: any) => order.status === "pending"
  );
  const closedOrders = allOrders?.orders?.filter(
    (order: any) => order.status === "closed"
  );

  useEffect(() => {
    if (selected === "Pending") {
      setOrders(pendigOrders);
    }
    if (selected === "Payeds") {
      setOrders(closedOrders);
    }
    if (selected === "All") {
      setOrders(allOrders.orders);
    }
    console.log(orders);
  }, [selected]);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex gap-5 min-h-screen  h-full justify-center self-center items-center  pt-36 pb-16 relative">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="fixed top-4 z-30 right-4 left-4">
        <Header />
      </div>
      {!allOrders ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full absolute top-32 h-full">
          <div className="form-control w-36 max-w-xs self-end mr-6">
            <select
              className="select select-bordered"
              value={selected}
              onChange={handleChange}
              defaultValue={"Pending"}
            >
              <option value={"Pending"}>Pending</option>
              <option value={"Payeds"}>Payeds</option>
              <option value={"All"}>All</option>
            </select>
          </div>
          <OrdersWrapp>
            {orders?.map((order: any) => (
              <Order
                key={order.createdAt._seconds}
                orderId={order.productId}
                createdAt={order.createdAt._seconds}
                status={order.status}
                linkToPay={order.aditionalInfo.linkToPay}
              />
            ))}
          </OrdersWrapp>
        </div>
      )}
    </div>
  );
}
