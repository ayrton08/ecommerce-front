import { fetchApi } from 'fetcher';
import { IUser } from 'interfaces/user';
import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

export interface IAuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const Auth_INITIAL_STATE: IAuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: '[Auth] - Login', payload: data.user as IUser });
    }
  }, [data, status]);

  const router = useRouter();

  const checkToken = async () => {
    if (!cookies.get('token')) return;
    try {
      const { data } = await fetchApi.get('/user/validate-token');

      const { token, user } = data;

      cookies.set('token', token);

      dispatch({ type: '[Auth] - Login', payload: user });
    } catch (error) {
      cookies.remove('token');
    }
  };

  // useEffect(() => {
  //   checkToken();
  // }, []);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await fetchApi.post('/user/login', { email, password });

      const { token, user } = data;

      cookies.set('token', token);

      dispatch({ type: '[Auth] - Login', payload: user });

      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await fetchApi.post('/user/register', {
        name,
        email,
        password,
      });

      const { token, user } = data;

      cookies.set('token', token);

      dispatch({ type: '[Auth] - Login', payload: user });

      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }
      return {
        hasError: true,
        message: 'No se pudo crear el usuario - intente de nuevo',
      };
    }
  };

  const logout = () => {
    // cookies.remove('token');
    cookies.remove('cart');
    cookies.remove('firstName');
    cookies.remove('lastName');
    cookies.remove('address');
    cookies.remove('address2');
    cookies.remove('zip');
    cookies.remove('city');
    cookies.remove('country');
    cookies.remove('phone');

    signOut();

    // router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
