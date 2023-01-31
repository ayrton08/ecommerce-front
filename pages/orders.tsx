/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";

import { Header, OrdersMobile } from "components";
import { useOrders } from "hooks";
import { Loader, Order } from "ui";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";
import { convertSecondsToDate, isUserLogged } from "helpers";

export default function Orders() {
  const [selected, setSelected] = useState<string>("Chose");
  const { orders, allOrders } = useOrders(selected);
  const logged = isUserLogged();

  useEffect(() => {
    if (!logged) {
      Router.push("/signin");
    }
  }, [logged]);

  const handlerChange = (event: any) => {
    setSelected(event.target.value);
  };

  let index = 1;

  return (
    <div className=" flex-center bg-gradient-to-bl from-indigo-700 via-indigo-400 to-indigo-700">
      <Head>
        <title>Cart</title>
      </Head>
      {!allOrders ? (
        <Loader />
      ) : (
        <div className="flex px-2 flex-col w-full absolute top-32 h-full">
          <div className="form-control w-36 max-w-xs self-end mr-6 ">
            <select
              className="select select-primary bg-black/60"
              value={selected}
              onChange={handlerChange}
            >
              <option value="Chose">Chose status</option>
              <option value="Pending">Pending</option>
              <option value="Payeds">Payeds</option>
              <option value="All">All</option>
            </select>
          </div>
          <OrdersMobile>
            {orders?.map((order: any) => {
              const date = convertSecondsToDate(order.createdAt._seconds);
              return (
                <Order
                  key={order.createdAt._seconds}
                  createdAt={date}
                  status={order.status}
                  linkToPay={order.aditionalInfo.linkToPay}
                />
              );
            })}
          </OrdersMobile>

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
