import { atom, selector } from "recoil";

export const cartAmount = atom({
  key: "cash",
  default: 0,
});

export const cartItems = atom({
  key: "items",
  default: 0,
});

export const loginStatus = atom({
  key: "user-logged",
  default: false,
});
