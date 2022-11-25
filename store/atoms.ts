import { atom, selector } from "recoil";

export const cartAmount = atom({
  key: "total-money",
  default: 0,
});

export const cartItems = atom({
  key: "total-items",
  default: 0,
});

export const loginStatus = atom({
  key: "user-logged",
  default: false,
});
