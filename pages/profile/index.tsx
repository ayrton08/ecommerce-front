import { User } from 'components/styled';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const ProfilePage = () => {
  return (
    <ShopLayout
      title={'Profile'}
      pageDescription="Page of user"
      className="flex"
    >
      <User />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default ProfilePage;
