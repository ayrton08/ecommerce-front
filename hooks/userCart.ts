/* eslint-disable react-hooks/exhaustive-deps */
import { updateCart } from "lib/api";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cart, cartItems } from "store/atoms";

export const useCart = (totalItems = 0, totalCart?: number) => {
  const [counter, setCounter] = useState(totalItems);
  const [disableButton, setDisableButton] = useState(false);
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
    setDisableButton(true);
    increment();
    // console.log("current Cart", currentCart);
    console.log("product", product);
    if (!currentCart[0]) {
      product.cantidad = 1;
      const res = await updateCart({ cart: [{ ...product }] });
      console.log("res", res);
      setDisableButton(false);
      return;
    }

    await currentCart.map(async (producto: any) => {
      if (producto.objectID === product.objectID) {
        console.log("antes", producto);
        product.cantidad = producto.cantidad + 1;
        console.log("despues", product);
        const rest = currentCart.filter(
          (products: any) => products.objectID !== product.objectID
        );
        console.log("rest", rest);
        console.log("prod", product);

        await updateCart({ cart: [...rest, { ...product }] });
        setDisableButton(false);
      } else {
        product.cantidad = 1;
        await updateCart({ cart: [...currentCart, { ...product }] });
        setDisableButton(false);
      }
    });
  };

  return {
    counter,
    totalItemsCart,
    disableButton,
    increment,
    addToCart,
    decrement,
  };
};
