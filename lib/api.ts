import { getToken } from "helpers/localStorage";
import { CreateOrder } from "interface/cart";
import { LoginEmailType } from "interface/signin";

const BASE_URL = "https://e-commerce-backend-jade.vercel.app/api";
// const BASE_URL = "http://localhost:3001/api";

export const fetchApi = async (input: RequestInfo, options: any) => {
  const url = BASE_URL + input;
  const token = getToken();

  const newOptions: any = options || {};
  newOptions.headers ||= {};
  if (token) {
    newOptions.headers.authorization = "Bearer " + token;
  }
  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw new Error("Something went wrong");
  }
};

export const getCode = async ({ email }: LoginEmailType) => {
  try {
    const data = await fetchApi("/auth", {
      method: "POST",
      body: { email },
    });

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTokenJWT = async (info: any) => {
  try {
    const data = await fetchApi("/auth/token", {
      method: "POST",
      body: { ...info },
    });

    localStorage.setItem("token", data.token);
    return data.token;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserData = async (info: any) => {
  try {
    if (info.email === "") {
      delete info.email;
    }
    if (info.name === "") {
      delete info.name;
    }
    if (info.address === "") {
      delete info.address;
    }
    if (info.city === "") {
      delete info.city;
    }

    delete info.cart;

    const data = await fetchApi("/me", {
      method: "PATCH",
      body: { ...info },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const updateCart = async (cart: any) => {
  try {
    const data = await fetchApi("/me", {
      method: "PATCH",
      body: { ...cart },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const createOrder = async (order: CreateOrder, productId: string) => {
  try {
    const data = await fetchApi("/order?productId=" + productId, {
      method: "POST",
      body: { ...order },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
