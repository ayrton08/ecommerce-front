/* eslint-disable @next/next/no-img-element */

import { CartLogo } from "../ui/icons";
import { Button } from "ui/button/Button";
import { CartWrapperType } from "interface/cart";

export const Cart = ({
  efect,
  handler,
  handlerRemove,
  items,
  orders,
  total,
}: CartWrapperType) => {
  return (
    <div
      className={`card flex lg:flex-col shadow-xl   lg:w-2/3 xl:w-1/2 bg-black/20 py-8 px-8 mt-24 gap-8 z-10 glass-efect animate__animated  ${efect}`}
    >
      <CartLogo className="w-[350px] self-center" />

      <div className="flex flex-col p-4   w-full ">
        <h2 className="card-title self-center mb-4">Cart</h2>
        <div className="form-control flex items-center h-full">
          {orders.map((order: any) => {
            return (
              <div key={order.objectID} className="w-full">
                <div className="divider h-max m-0"></div>

                <div className="w-full flex items-center  p-2 hover:bg-black/20 rounded-sm">
                  <img
                    src={order.Images[0].url}
                    alt=""
                    className="w-16 h-16 mr-4 flex justify-center rounded-md"
                  />
                  <div className="flex w-full items-center justify-between">
                    <div className="indicator">
                      <span className="mr-3 ">{order.Name}</span>
                      <span className="indicator-item badge badge-primary ">
                        {order.cantidad}
                      </span>
                    </div>
                    <div className="w-32 flex justify-between items-center">
                      <span className="text-black w-max">
                        $ {order["Unit cost"]}
                      </span>
                      <Button className="w-max mt-0 px-2  btn-danger text-xs btn-sm">
                        <i
                          className="bx bx-trash bx-xs"
                          style={{ color: "#fdfdfd" }}
                        ></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="divider h-max m-0 mb-6"></div>
        </div>
        <div className="flex  w-full items-center justify-between">
          <div className="bg-black/50 text-white w-full justify-between  py-2 px-4 rounded-md mr-4 h-full">
            <div className="relative">
              <span className=" w-14  p-1 rounded-md">Products:</span>
              <span className="text-white  absolute right-4">
                {orders?.length}
              </span>
            </div>
            <div className="divider m-0"></div>
            <div className="relative">
              <span className="mr-5 w-14  p-1 rounded-md">Items:</span>
              <span className="text-white absolute right-4">{items}</span>
            </div>
            <div className="divider m-0"></div>

            <div className="relative">
              <span className="mr-5 w-14  p-1 rounded-md">Total:</span>
              <span className="text-white font-extrabold absolute right-4">
                $ {total}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-max">
            <Button onClick={handler} className="btn-success text-white">
              Pay
            </Button>
            <Button onClick={handlerRemove} className="btn-danger">
              Clean Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
