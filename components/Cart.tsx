import { CartLogo } from "../ui/icons";
import { Button } from "ui/button/Button";
import { CartWrapperType } from "interface/cart";
import { useCart, useCleanCart, useTotalCart } from "hooks";
import { useEffect, useRef, useState } from "react";
import { createNewOrder } from "helpers/createOrder";
import { createOrder } from "lib/api";
import Image from "next/image";
import { TrashIcon } from "ui/icons/boxicons";

export const Cart = ({ data }: CartWrapperType) => {
  const ref = useRef<HTMLInputElement>(null);
  const { decrement } = useCart();

  const [currentOrders, setCurrentOrders] = useState([]);
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);
  const { efect, cleanCart } = useCleanCart();

  const [url, setUrl] = useState("");

  const productId = data?.data?.cart[0]?.objectID;
  const orderProduct = data?.data?.cart[0];

  useEffect(() => {
    setCurrentOrders(data?.data?.cart);
  }, [data]);

  const { order } = createNewOrder(orderProduct, total);

  const handler = async () => {
    const orderCreated = await createOrder({ ...order }, productId);
    setUrl(orderCreated.url);
    await cleanCart();
  };

  useEffect(() => {
    if (url) {
      window.open(url, "Payment");
    }
  }, [url]);

  const { removeProduct } = useCleanCart();

  const removeElement = async (index: any, orders: any, id: string) => {
    const newFruits = currentOrders.filter((_, i) => i !== index);
    setCurrentOrders(newFruits);
    await removeProduct(orders, id);
  };

  return (
    <div
      className={`card flex w-full  lg:flex-col shadow-xl sm:w-2/3 xl:w-1/2 py-8 md:px-8 mt-32 mb-12 gap-8 z-10 glass-efect animate__animated  ${efect}`}
    >
      <CartLogo className="w-[350px] self-center" />

      <div className="flex flex-col p-4   w-full ">
        <h2 className="card-title self-center mb-4">Cart</h2>
        <div className="form-control flex items-center h-full">
          {currentOrders?.map((order: any, index: any) => {
            return (
              <div key={index} className="w-full" id={order.objectID} ref={ref}>
                <div className="divider h-max m-0"></div>

                <div className="w-full flex items-center  p-2 hover:bg-dark_light rounded-sm">
                  <Image
                    src={order.Images[0].url}
                    alt="product cart"
                    width={100}
                    height={100}
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
                      <Button
                        className="w-max mt-0 px-2  btn-danger text-xs btn-sm"
                        onClick={() => {
                          decrement(order.cantidad);
                          removeElement(index, currentOrders, order.objectID);
                        }}
                      >
                        <TrashIcon />
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
                {currentOrders?.length}
              </span>
            </div>
            <div className="divider m-0"></div>
            <div className="relative">
              <span className="mr-5 w-14  p-1 rounded-md">Items:</span>
              <span className="text-white absolute right-4">{totalItems}</span>
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
            <Button onClick={cleanCart} className="btn-danger">
              Clean Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
