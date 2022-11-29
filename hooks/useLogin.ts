/* eslint-disable react-hooks/exhaustive-deps */
import { isUserLogged } from "helpers/localStorage";
import { BodyFetch, LoginEmailType } from "interface/signin";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginStatus } from "store/atoms";
import axios from "axios";
import { getTokenJWT } from "lib/api";
const BASE_URL = "https://e-commerce-backend-jade.vercel.app/api";

import Router from "next/router";

export const useLogin = () => {
  const [logged, setLogged] = useRecoilState(loginStatus);
  const { getCode, isSendig } = useCode();

  const getToken = async (data: BodyFetch) => {
    const token = await getTokenJWT(data);
    token && setLogged(true);
  };

  useEffect(() => {
    if (logged) {
      Router.push("/");
    }
  }, [logged]);

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
