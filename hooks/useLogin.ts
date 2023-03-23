/* eslint-disable react-hooks/exhaustive-deps */
import { BodyFetch, LoginEmailType } from "interfaces/signin";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginStatus } from "store/atoms";
import axios from "axios";
import { fetchApi, getTokenJWT } from "lib/api";
import { isUserLogged } from "helpers/localStorage";
const BASE_URL = "https://e-commerce-backend-jade.vercel.app/api";

export const useLogin = () => {
  const [logged, setLogged] = useRecoilState(loginStatus);

  const { getCode } = useCode();

  const getToken = async (data: BodyFetch) => {
    const token = await getTokenJWT(data);
    token && setLogged(true);
  };

  return { logged, setLogged, getToken, getCode };
};

export const useCode = () => {
  const [isSendig, setIsSendig] = useState(false);
  const getCode = async ({ email }: LoginEmailType) => {
    try {
      setIsSendig(true);
      const { data } = await axios.post(BASE_URL + "/auth", { email });
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
