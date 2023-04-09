import { User } from 'ui';
import { useMe } from 'hooks';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const ProfilePage = () => {
  return (
    <ShopLayout title={'Profile'} pageDescription="Page of user">
      <div className="flex-col-center container-page pt-12 pb-4 px-4 sm:px-0">
        <User userName="User"></User>
      </div>
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
