import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { Basic } from 'components/styled';
import { PaymentIcon } from 'components/styled/icons';
import { CardTitle } from 'components/styled/label/styled';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const ThanksPage = () => {
  return (
    <ShopLayout
      title="Successful payment"
      pageDescription="The payment of the order was successful"
    >
      <div className="flex-col-center">
        <Basic icon={<PaymentIcon className="w-full" />} color="bg-successfull">
          <CardTitle>Payment succesfully!</CardTitle>
          <div className="card-actions justify-end">
            <div className="form-control">
              <Link href="/" className="btn mt-4">
                Back to Home
              </Link>
            </div>
          </div>
        </Basic>
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

export default ThanksPage;
