import { describe, expect, test } from "@jest/globals";
import { createCart } from "../../helpers/createCart";

describe("createCart()", () => {
  const userWithCart = {
    name: "John",
    cart: [],
    city: "Paris",
    address: "Eiffel Tower",
    email: "john@mail.com",
  };
  test("should return the same user", () => {
    const res = createCart(userWithCart);

    expect(res).toEqual(userWithCart);
  });
  test("should return the user with new field cart", () => {
    const userWithoutCart = {
      name: "John",
      city: "Paris",
      address: "Eiffel Tower",
      email: "john@mail.com",
    };

    const res = createCart(userWithoutCart);

    expect(res).toEqual(userWithoutCart);
  });
});
