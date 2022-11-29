export const createCart = (user: any) => {
  console.log(user);
  const profile = Object.keys(user);

  if (profile) {
    profile.filter((prop) => {
      if (prop === "cart") {
        return;
      } else {
        user.cart = [];
      }
    });
  }
  return user;
};
