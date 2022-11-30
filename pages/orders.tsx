/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useState } from "react";

import { Header } from "components";
import { useOrders } from "hooks";
import { Loader, Order } from "ui";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";
import { convertSecondsToDate } from "helpers/convertSecondsToDate";

export default function Orders() {
  const [selected, setSelected] = useState<string>("Pending");
  const { orders, allOrders } = useOrders(selected);

  const handlerChange = (event: any) => {
    setSelected(event.target.value);
  };

  let index = 1;

  return (
    <div className="container-page flex-center">
      <Head>
        <title>Cart</title>
      </Head>
      <Header />
      {!allOrders ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full absolute top-32 h-full">
          <div className="form-control w-36 max-w-xs self-end mr-6">
            <select
              className="select  select-primary "
              value={selected}
              onChange={handlerChange}
              defaultValue={"Pending"}
            >
              <option value={"Pending"}>Pending</option>
              <option value={"Payeds"}>Payeds</option>
              <option value={"All"}>All</option>
            </select>
          </div>
          <OrdersWrapp>
            {orders?.map((order: any) => {
              const date = convertSecondsToDate(order.createdAt._seconds);

              return (
                <Order
                  key={order.createdAt._seconds}
                  orderId={order.productId}
                  createdAt={date}
                  status={order.status}
                  linkToPay={order.aditionalInfo.linkToPay}
                  index={index++}
                />
              );
            })}
          </OrdersWrapp>
        </div>
      )}
    </div>
  );
}
