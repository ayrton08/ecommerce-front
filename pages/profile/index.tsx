import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import { User } from 'ui';
import { useMe } from 'hooks';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { isUserLogged } from 'helpers';
import { GetServerSideProps } from 'next';
import { fetchApi } from '../../api/';
import { getSession } from 'next-auth/react';

const ProfilePage = () => {
  const data = useMe('/me');

  const logged = isUserLogged();

  useEffect(() => {
    if (!logged) {
      Router.push('/signin');
    }
  }, [logged]);

  return (
    <ShopLayout title={data?.data?.name} pageDescription={data?.data?.name}>
      <div className="flex-col-center container-page pt-12 pb-4 px-4 sm:px-0">
        <Head>
          <title>{data?.data?.name || 'Profile'}</title>
        </Head>
        <User userName={data?.data?.name || 'User'}></User>
      </div>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req });

  console.log({ session });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?page=/orders/history',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default ProfilePage;
