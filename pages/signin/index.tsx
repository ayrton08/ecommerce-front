import { useEffect, useState, useContext } from 'react';

import { useLogin } from 'hooks';
import { LoginEmail, LoginCode } from 'components';
import { LoginEmailType } from 'interfaces/signin';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { getProviders, getSession } from 'next-auth/react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

export default function Signin() {
  const [providers, setProviders] = useState({});
  const [email, setEmail] = useState<string>('');

  const { isLoggedIn } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const { getCode } = useLogin();

  const handlerEmail = async ({ email }: LoginEmailType) => {
    setEmail(email);
    await getCode({ email });
  };

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov!);
    });
  }, []);

  return (
    <ShopLayout title="Signin" pageDescription="Page to log in on the web">
      {!email ? (
        <LoginEmail handler={handlerEmail} providers={providers} />
      ) : (
        <LoginCode email={email} onClick={() => setEmail('')} />
      )}
    </ShopLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}: any) => {
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
