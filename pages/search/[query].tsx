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
import { GetServerSideProps, NextPage } from 'next';
import { findProductById } from '../../controllers/product-controller';

interface Props {
  products: IProduct[];
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, query }) => {
  // const {
  //   data,
  //   leakedProducts,
  //   numberOfPages,
  //   currentPage,
  //   totalPage,
  //   setOffSet,
  //   setCurrentPage,
  // } = usePagination(query as string);

  return (
    <ShopLayout title={query + ' | Market'} pageDescription="">
      {products.length === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40 md:w-1/2 lg:w-1/3 h-full"
        >
          <h2 className="card-title">No results with {query}!</h2>
        </Basic>
      )}
      <div className={`relative pb-20 w-full `}>
        <div className="flex flex-col  text-start items-center mt-8 xl:mt-10 mb-8">
          <div className="w-4/5 pb-5 grid gap-2">
            <h4 className="text-black text-3xl font-bold">{query}</h4>
            <span className="text-primaryA">{products.length} results</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {products.map((product: IProduct) => (
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
          {/* {data?.pagination?.total && (
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
          )} */}
        </div>
      </div>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log({ params });
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await findProductById(query);

  return {
    props: {
      products,
      query,
    },
  };
};

export default SearchPage;
