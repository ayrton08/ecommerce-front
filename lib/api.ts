import useSWR from "swr";
const BASE_URL = "https://e-commerce-backend-jade.vercel.app/api";

import axios from "axios";

export const fetchApi = async (input: RequestInfo, options: RequestInit) => {
  const url = BASE_URL + input;
  const token = localStorage.getItem("token");

  if (token) {
    const newOptions: any = options || {};
    newOptions.headers ||= {};
    newOptions.headers.authorization = "Bearer " + token;
    options = newOptions;
  }

  const res = await fetch(url, options);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw new Error("Something went wrong");
  }
};

export const getCode = async (email: any) => {
  try {
    const { data } = await axios.post(BASE_URL + "/auth", email);

    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTokenJWT = async (info: any) => {
  try {
    const { data } = await axios.post(BASE_URL + "/auth/token", { ...info });
    localStorage.setItem("token", data.token);
    return data.token;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserData = async (info: any) => {
  try {
    if (info["email"] === "") {
      delete info.email;
    }
    if (info["name"] === "") {
      delete info.name;
    }
    if (info["address"] === "") {
      delete info.address;
    }
    if (info["city"] === "") {
      delete info.city;
    }

    const data = await fetchApi("/me", {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
