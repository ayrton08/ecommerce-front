import { useEffect, useState } from "react";

export const useTotalCart = (cart: any) => {
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);

  let values: number[] = [];

  cart?.map((item: any) => values.push(item["Unit cost"]));

  console.log("cart", cart);

  useEffect(() => {
    let cartItems = cart?.map((order: any) => order.cantidad);
    cartItems = cartItems?.reduce((a: number, b: number) => a + b, 0);
    console.log(cartItems);
    let total = values.reduce((a, b) => a + b, 0);
    setTotal(total);
    setTotalItems(cartItems);
  }, [cart]);

  return {
    total,
    totalItems,
  };
};
