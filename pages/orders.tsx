/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect, useState } from "react";
import moment from "moment";

import { Header } from "components";
import { useOrders } from "hooks";
import { Loader, Order } from "ui";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";
import { convertSecondsToDate } from "helpers/convertSecondsToDate";
import { data } from "autoprefixer";

export default function Orders() {
  const [selected, setSelected] = useState<string>("Pending");

  const { orders, allOrders } = useOrders(selected);

  const handlerChange = (event: any) => {
    setSelected(event.target.value);
  };

  let index = 1;

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
              console.log(date);

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
