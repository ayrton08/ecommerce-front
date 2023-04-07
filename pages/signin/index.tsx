/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';

import { useLogin } from 'hooks';
import { LoginEmail, LoginCode } from 'components';
import { LoginEmailType } from 'interfaces/signin';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { getProviders, getSession } from 'next-auth/react';
import { AuthContext } from '../../context/auth/AuthContext';

export default function Signin() {
  const [email, setEmail] = useState<any>();

  const [status, setStatus] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const { getCode } = useLogin();

  const handlerEmail = async ({ email }: LoginEmailType) => {
    // await signIn('credentials', { email });
    setStatus(true);
    setEmail(email);
    await getCode({ email });
  };

  const [providers, setProviders] = useState({});

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov!);
    });
  }, []);

  return (
    <ShopLayout title="Signin" pageDescription="Page to log in on the web">
      {!status ? (
        <>
          <LoginEmail handler={handlerEmail} providers={providers} />
        </>
      ) : (
        <LoginCode
          logged={isLoggedIn}
          email={email}
          onClick={() => setStatus(false)}
        />
      )}
    </ShopLayout>
  );
}

export const getServerSideProps: any = async ({ req, query }: any) => {
  const session = await getSession({ req });

  const { page = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: page,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
