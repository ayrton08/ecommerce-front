import { BodyFetch, LoginEmailType } from 'interfaces/signin';
import { useState } from 'react';
import axios from 'axios';
import { getTokenJWT } from 'lib/api';
const BASE_URL = 'https://e-commerce-backend-jade.vercel.app/api';

export const useLogin = () => {
  const { getCode } = useCode();

  const getToken = async (data: BodyFetch) => {
    const token = await getTokenJWT(data);
  };

  return { getToken, getCode };
};

export const useCode = () => {
  const [isSendig, setIsSendig] = useState(false);
  const getCode = async ({ email }: LoginEmailType) => {
    try {
      setIsSendig(true);
      const { data } = await axios.post(BASE_URL + '/auth', { email });
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
