import { Header } from 'components';
import Head from 'next/head';
import { NotFoundIcon } from 'ui/icons';
import { Basic } from 'ui/wrappers/Basic';
import { ShopLayout } from 'components/layouts/ShopLayout';

export default function notFound() {
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
}
