/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Router, { useRouter } from "next/router";

import { useCart, useMe } from "hooks";
import { Product, Header, Pagination } from "components/";
import { Loader, Basic, Toast } from "ui";
import { NoResultsIcons } from "ui/icons";
import { usePagination } from "hooks/usePagination";
import { isUserLogged } from "helpers/localStorage";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const {
    data,
    leakedProducts,
    numberOfPages,
    currentPage,
    totalPage,
    setOffSet,
    setCurrentPage,
  } = usePagination(q as string);

  const user = useMe("/me");
  const { disableButton, addToCart } = useCart();
  const logged = isUserLogged();

  const handler = async (product: any) => {
    if (!logged) {
      return Router.push("/signin");
    }
    await addToCart(user.data.cart, product);
    Toast(`${product.Name} added to cart`);
  };

  return (
    <div className="container-page flex-center">
      <Head>
        <title>Search</title>
      </Head>
      <Header />

      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40 md:w-1/2 lg:w-1/3 h-full"
        >
          <h2 className="card-title">No Results!</h2>
        </Basic>
      )}
      {data?.pagination.total !== 0 && (
        <div className={`relative pb-20 w-full `}>
          <div className="flex flex-col items-center mt-32 mb-8">
            {leakedProducts?.map((product: any) => (
              <Product
                detail={false}
                key={product.objectID}
                title={product.Name}
                description={product.Description}
                price={product["Unit cost"]}
                picture={product.Images[0].url || ""}
                id={product.objectID}
                onClick={() => {
                  handler(product);
                }}
                disable={disableButton}
              />
            ))}
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
    </div>
  );
}
