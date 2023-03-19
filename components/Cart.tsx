import { CartLogo } from '../ui/icons';
import { Button } from 'ui/button/styled';
import { useCart, useCleanCart, useMe, useTotalCart } from 'hooks';
import { useEffect, useState } from 'react';
import { createNewOrder } from 'helpers/createOrder';
import { createOrder } from 'lib/api';
import Image from 'next/image';
import { TrashIcon } from 'ui/icons/boxicons';
import { Loader } from 'ui';
import Link from 'next/link';
import { CardTitle } from 'ui/label/styled';
import { DividerItems } from 'ui/divider/styled';

export const Cart = () => {
  const data = useMe('/me');
  const { removeProduct } = useCleanCart();
  const { decrement, setTotalItemsCart } = useCart();
  const { efect, cleanCart } = useCleanCart();
  const { total, totalItems, setTotal, setTotalItems } = useTotalCart(
    data?.data?.cart
  );

  const [disableButton, setDisableButton] = useState(false);
  const [url, setUrl] = useState('');
  const [currentOrders, setCurrentOrders] = useState([]);

  const productId = data?.data?.cart[0]?.objectID;
  const orderProduct = data?.data?.cart[0];
  const { order } = createNewOrder(orderProduct, total);

  useEffect(() => {
    setCurrentOrders(data?.data?.cart);
  }, [data]);

  useEffect(() => {
    if (url) {
      window.open(url, 'Payment');
    }
  }, [url]);

  const onPay = async () => {
    setDisableButton(true);
    const orderCreated = await createOrder({ ...order }, productId);
    setUrl(orderCreated.url);
    await cleanCart();
    setDisableButton(false);
  };

  const removeProductCart = async (index: any, orders: any, id: string) => {
    const newFruits = currentOrders.filter((_, i) => i !== index);
    setCurrentOrders(newFruits);
    await removeProduct(orders, id);
  };

  const handlerCleanCart = () => {
    if (currentOrders.length === 0) return;
    setTotalItemsCart(0);
    cleanCart();
    setTotal(0);
    setTotalItems(0);
    setCurrentOrders([]);
  };


  return !currentOrders ? (
    <Loader />
  ) : (
    <div
      className={`card flex w-full items-center lg:flex-row   py-8 md:px-16   z-10 justify-center animate__animated  ${efect}`}
    >
      <div className="bg-[#0099ff] rounded-l-3xl py-10">
        <CartLogo className="w-96 h-96 px-10 self-center" />
      </div>

      <div className="flex flex-col p-2 md:p-10  w-full max-w-[800px] h-2/3 bg-black/30 rounded-r-3xl">
        <CardTitle>Cart</CardTitle>

        {currentOrders?.length > 0 && (
          <div className="form-control flex items-center h-full mt-2">
            {currentOrders?.map((order: any, index: any) => (
              <div key={index} className="w-full" id={order.objectID}>
                <div className="divider h-max m-0"></div>

                <div className="w-full flex items-center  py-2 md:p-2 hover:bg-dark_light rounded-sm">
                  <Link href={'/item/' + order.objectID}>
                    <Image
                      src={order.Images[0].url}
                      alt="product cart"
                      width={100}
                      height={100}
                      className="w-16 h-16 mr-4 flex justify-center rounded-md"
                    />
                  </Link>
                  <div className="flex w-full items-center justify-between">
                    <div className="indicator">
                      <span className="mr-3 ">{order.Name}</span>
                      <span className="indicator-item badge badge-primary ">
                        {order.cantidad}
                      </span>
                    </div>
                    <div className="w-32 flex justify-evenly md:justify-between items-center">
                      <span className="text-black w-max">
                        $ {order['Unit cost']}
                      </span>
                      <Button
                        className="w-max mt-0 px-2  btn-danger text-xs btn-sm"
                        onClick={() => {
                          decrement(order.cantidad);
                          removeProductCart(
                            index,
                            currentOrders,
                            order.objectID
                          );
                        }}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="divider h-max m-0 mb-6"></div>
          </div>
        )}

        {currentOrders?.length === 0 && (
          <div className="w-full flex gap-2 border-y-2 border-primaryA/20 py-4 my-4">
            <i className="bx bx-info-circle text-dark bx-sm"></i>
            <span className="text-dark font-bold">
              The shopping cart is empty.
            </span>
          </div>
        )}
        <div className="flex w-full items-center justify-between">
          <div className="bg-black/50 text-white w-full justify-between  py-2 px-4 rounded-md mr-4 h-full">
            <div className="relative">
              <span className=" w-14  p-1 rounded-md">Products:</span>
              <span className="text-white  absolute right-4">
                {currentOrders?.length}
              </span>
            </div>
            <DividerItems />
            <div className="relative">
              <span className="mr-5 w-14  p-1 rounded-md">Items:</span>
              <span className="text-white absolute right-4">{totalItems}</span>
            </div>
            <DividerItems />

            <div className="relative">
              <span className="mr-5 w-14  p-1 rounded-md">Total:</span>
              <span className="text-white font-extrabold absolute right-4">
                $ {total}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-max">
            <Button
              onClick={onPay}
              className="btn-success text-white"
              disabled={totalItems === 0 ? true : disableButton}
            >
              {disableButton ? <Loader sm /> : 'Pay'}
            </Button>
            <Button onClick={handlerCleanCart} className="btn-danger">
              Clean Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
