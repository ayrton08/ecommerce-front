import { useEffect, useState } from "react";

export const useTotalCart = (cart: any) => {
  const [totalItems, setTotalItems] = useState(0);

  let values: number[] = [];
  const [total, setTotal] = useState(0);

  cart?.map((item: any) => values.push(item["Unit cost"]));

  useEffect(() => {
    let total = values.reduce((a, b) => a + b, 0);
    setTotal(total);
    setTotalItems(cart?.length);
  }, [cart]);

  return {
    total,
    totalItems,
  };
};
