/* eslint-disable react-hooks/exhaustive-deps */
import { updateCart } from "lib/api";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cart, cartAmount, cartItems } from "store/atoms";

export const useCart = (totalItems = 0, totalCart?: number) => {
  const [disableButton, setDisableButton] = useState(false);
  const [totalItemsCart, setTotalItemsCart] = useRecoilState(cartItems);

  useEffect(() => {
    setTotalItemsCart(totalItems);
  }, [totalItems]);

  const increment = (value = 1) => {
    setTotalItemsCart((current) => current + value);
  };
  const decrement = (value = 1) => {
    setTotalItemsCart((current) => current - value);
  };

  const addToCart = async (currentCart: [], product: any) => {
    setDisableButton(true); // set fetching true to disable the button addToCart
    increment(); // increse counter cart

    const res = currentCart.some(
      ({ objectID }: any) => objectID === product.objectID
    ); // check if the product exists in the currentCart

    if (!currentCart.length) {
      // if cart is clean enter in this if
      product.cantidad = 1;

      await updateCart({ cart: [{ ...product }] });
      return setDisableButton(false);
    }

    if (!res) {
      // if cart have another products but not contain the new product added enter in this if
      const rest = currentCart.filter(
        (item: any) => item.objectID !== product.objectID
      );
      product.cantidad = 1;
      await updateCart({
        cart: [...rest, { ...product }],
      });
      return setDisableButton(false);
    }

    // if the cart contain the product increase the cantidad of product
    currentCart.map(async (producto: any) => {
      if (producto.objectID === product.objectID) {
        const rest = currentCart.filter(
          (item: any) => item.objectID !== product.objectID
        );
        product.cantidad = producto.cantidad + 1;
        await updateCart({
          cart: [...rest, { ...product }],
        });
        setDisableButton(false);
      }
    });
  };

  return {
    totalItemsCart,
    disableButton,
    setTotalItemsCart,
    increment,
    addToCart,
    decrement,
  };
};
