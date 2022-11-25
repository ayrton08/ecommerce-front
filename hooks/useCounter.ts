/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartAmount, cartItems } from "store/atoms";

export const useCounter = (totalItems = 0, totalCart?: number) => {
  const [counter, setCounter] = useState(totalItems);
  const [totalAmountCart, setTotalAmountCart] = useRecoilState(cartAmount);
  const [totalItemsCart, setTotalItemsCart] = useRecoilState(cartItems);

  useEffect(() => {
    setTotalItemsCart(counter);
  }, [counter]);

  useEffect(() => {
    setTotalItemsCart(counter);
  }, [counter]);

  useEffect(() => {
    setCounter(totalItems);
  }, [totalItems]);

  const increment = (value = 1) => {
    setTotalItemsCart((current) => current + value);
  };

  return {
    counter,
    totalItemsCart,
    increment,
  };
};
