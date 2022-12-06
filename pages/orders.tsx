/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect, useState } from "react";

import { Header } from "components";
import { useLogin, useOrders } from "hooks";
import { Loader, Order } from "ui";
import { OrdersWrapp } from "ui/wrappers/OrdersWrapp";
import { convertSecondsToDate } from "helpers/convertSecondsToDate";
import Router from "next/router";
const Moment = require("moment");

export default function Orders() {
  const [selected, setSelected] = useState<string>("Chose");
  const { orders, allOrders } = useOrders(selected);
  const { logged } = useLogin();

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
              className="select select-primary "
              value={selected}
              onChange={handlerChange}
            >
              <option value="Chose">Chose status</option>
              <option value="Pending">Pending</option>
              <option value="Payeds">Payeds</option>
              <option value="All">All</option>
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
