import { UserType } from "interfaces/user";

export const createCart = (user: UserType) => {
  const profile = Object.keys(user);

  if (profile) {
    profile.filter((prop) => {
      if (prop === "cart") {
        return true;
      } else {
        user.cart = [];
      }
    });
  }
  return user;
};
