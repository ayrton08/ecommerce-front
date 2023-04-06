import { useRouter } from 'next/router';

import { useGetProductBySearch, useMe } from 'hooks';
import { Pagination } from 'components/';
import { Loader, Basic } from 'ui';
import { NoResultsIcons } from 'ui/icons';
import { usePagination } from 'hooks/usePagination';
import { isUserLogged } from 'helpers/localStorage';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { IProduct } from '../../interfaces/product';
import { ProductSearched } from '../../components/product/ProductSearched';

export default function Search() {
  const router = useRouter();
  const { q } = router.query as { q: string };

  const products = useGetProductBySearch(q);

  const {
    data,
    leakedProducts,
    numberOfPages,
    currentPage,
    totalPage,
    setOffSet,
    setCurrentPage,
  } = usePagination(q as string);

  const user = useMe('/me');
  const logged = isUserLogged();

  return (
    <ShopLayout title={q + ' | Market'} pageDescription="">
      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40 md:w-1/2 lg:w-1/3 h-full"
        >
          <h2 className="card-title">No results with {q}!</h2>
        </Basic>
      )}
      {data?.pagination.total !== 0 && (
        <div className={`relative pb-20 w-full `}>
          <div className="flex flex-col  text-start items-center mt-8 xl:mt-10 mb-8">
            <div className="w-4/5 pb-5 grid gap-2">
              <h4 className="text-black text-3xl font-bold">{q}</h4>
              <span className="text-primaryA">
                {data?.pagination.total} results
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              {products?.results.map((product: IProduct) => (
                <ProductSearched
                  key={product.objectID}
                  title={product.name}
                  price={product.price}
                  images={product.images}
                  description={product.description}
                  id={product.objectID}
                />
              ))}
            </div>
            {data?.pagination?.total && (
              <div className="absolute bottom-0 flex justify-center mb-8">
                <Pagination
                  currentPage={[...numberOfPages]}
                  totalPages={totalPage}
                  handlerPrev={() => {
                    setCurrentPage(currentPage - 1);
                    totalPage > 1 && setOffSet((prev) => prev - 5);
                  }}
                  handlerNext={() => {
                    setCurrentPage(currentPage + 1);
                    totalPage > 1 && setOffSet((prev) => prev + 5);
                  }}
                  activePage={currentPage}
                  handler={(page: any) => {
                    setCurrentPage(page);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {!data && <Loader />}
    </ShopLayout>
  );
}
