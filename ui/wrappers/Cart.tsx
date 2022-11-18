import React from "react";
import Link from "next/link";

import { CartIcon } from "../icons";
import { Button } from "ui/Button";

export const Cart = ({ children, handler }: any) => {
  return (
    <div className=" card flex lg:flex-row shadow-xl h-max w-max bg-black/20 py-8 px-8  gap-8 z-30">
      <CartIcon className="w-96" />
      <div className="flex flex-col p-4 relative lg:min-h-[564px] w-96">
        <h2 className="card-title self-center mb-4">Cart</h2>
        <div className="form-control gap-3">
          {children}
          <Button handler={() => console.log("soy el button pay")}>Pay</Button>
        </div>
      </div>
    </div>
  );
};
