/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { CartLogo } from "../icons";
import { Button } from "ui/Button";

export const Cart = ({ orders, handler, total, items }: any) => {
  return (
    <div className=" card flex lg:flex-row shadow-xl h-max w-max bg-black/20 py-8 px-8  gap-8 z-10 glass-efect">
      <CartLogo className="w-96" />
      <div className="flex flex-col p-4  lg:min-h-[564px] w-96 relative">
        <h2 className="card-title self-center mb-4">Cart</h2>
        <div className="form-control gap-3 flex items-center">
          {orders.map((order: any) => (
            <div className="w-full flex items-center  p-2" key={order.Name}>
              <img
                src={order.Images[0].url}
                alt=""
                className="w-10 h-10 mr-4"
              />
              <div className="flex w-full items-center justify-between">
                <span className="mr-5">{order.Name}</span>
                <span className="text-white">$ {order["Unit cost"]}</span>
                <Button className="w-max mt-0 px-2  border-0 bg-red-500/80 text-xs btn-sm">
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="flex w-full items-center bg-green-500/80 p-2 justify-between absolute bottom-24">
            <div>
              <span className="mr-5">Items:</span>
              <span className="text-white">{items}</span>
            </div>
            <div>
              <span className="mr-5">Total =</span>
              <span className="text-white">$ {total}</span>
            </div>
          </div>
          <Button onClick={handler} className="absolute bottom-4 w-1/2 ">
            Pay
          </Button>
        </div>
      </div>
    </div>
  );
};
