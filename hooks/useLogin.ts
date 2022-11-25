/* eslint-disable react-hooks/exhaustive-deps */
import { isUserLogged } from "helpers/localStorage";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginStatus } from "store/atoms";

export const useLogin = () => {
  const [logged, setLogged] = useRecoilState(loginStatus);

  return { logged, setLogged };
};
