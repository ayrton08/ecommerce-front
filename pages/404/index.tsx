import { NotFoundIcon } from 'components/styled/icons';
import { Basic } from 'components/styled/wrappers/Basic';
import { ShopLayout } from 'components/layouts/ShopLayout';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="page not found">
      <div className="flex-col-center">
        <Basic
          icon={<NotFoundIcon className="w-full" />}
          color="bg-red-600/40 self-center"
        >
          <h2 className="card-title">Page not Found!</h2>
        </Basic>
      </div>
    </ShopLayout>
  );
};
export default NotFoundPage;
