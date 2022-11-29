/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { LoginEmail } from "interface/signin";
import { fetchApi, getCode } from "lib/api";
import { useState } from "react";
import useSWR from "swr";
import useSWRInmutable from "swr/immutable";

const BASE_URL = "https://e-commerce-backend-jade.vercel.app/api";

export const useData = (path: string) => {
  const { data, error } = useSWR(path, fetchApi);
  return data;
};

export const useProducts = () => {
  const { data, error } = useSWRInmutable("/products", fetchApi);
  return data;
};

export const useProduct = (id: string) => {
  const { data, error } = useSWRInmutable("/products/" + id, fetchApi);
  return data;
};

export const useOrders = () => {
  const { data, error } = useSWR("/me/orders", fetchApi);
  return data;
};

export const useCode = () => {
  const [isSendig, setIsSendig] = useState(false);
  const getCode = async ({ email }: LoginEmail) => {
    try {
      setIsSendig(true);
      const { data } = await axios.post(BASE_URL + "/auth", email);
      setIsSendig(false);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isSendig,
    getCode,
  };
};

export const useMe = (path: string) => {
  const { data, error } = useSWR(path, fetchApi);
  return data;
};

export const useGetProductBySearch = (
  query: string,
  offset?: number,
  limit?: number
) => {
  const path = `/search?q=${query}&offset=${offset || 0}&limit=${limit || 12}`;
  const { data, error } = useSWR(path, fetchApi);

  if (error?.status) return false;
  return data;
};
