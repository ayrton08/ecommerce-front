/* eslint-disable react-hooks/exhaustive-deps */
import { updateCart } from "lib/api";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartItems } from "store/atoms";

export const useCart = (totalItems = 0, totalCart?: number) => {
  const [counter, setCounter] = useState(totalItems);
  const [totalItemsCart, setTotalItemsCart] = useRecoilState(cartItems);

  useEffect(() => {
    setTotalItemsCart(counter);
  }, [counter]);

  useEffect(() => {
    setCounter(totalItems);
  }, [totalItems]);

  const increment = (value = 1) => {
    setTotalItemsCart((current) => current + value);
  };
  const decrement = (value = 1) => {
    setTotalItemsCart((current) => current - value);
  };

  const addToCart = async (currentCart: any, product: any) => {
    increment();
    if (!currentCart[0]) {
      product.cantidad = 1;
      await updateCart({ cart: [{ ...product }] });
    }

    await currentCart.map(async (producto: any) => {
      if (producto.objectID === product.objectID) {
        producto.cantidad++;
        await updateCart({ cart: [...currentCart] });
      } else {
        product.cantidad = 1;
        await updateCart({ cart: [...currentCart, { ...product }] });
      }
    });
  };

  return {
    counter,
    totalItemsCart,
    increment,
    addToCart,
    decrement,
  };
};
