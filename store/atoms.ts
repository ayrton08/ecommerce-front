import { atom, selector } from "recoil";

export const cartAmount = atom({
  key: "cash-cart",
  default: 0,
});

export const cartItems = atom({
  key: "items-cart",
  default: 0,
});

export const loginStatus = atom({
  key: "user-logged",
  default: false,
});
