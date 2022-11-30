/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useData, useCart, useMe } from "hooks";
import { Product, Header, Pagination } from "components/";
import { Loader, Basic, Toast } from "ui";
import { NoResultsIcons } from "ui/icons";
import { getNumberOfPages } from "helpers/pagination";
import { usePagination } from "hooks/usePagination";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const user = useMe("/me");

  const {
    data,
    leakedProducts,
    numberOfPages,
    currentPage,
    totalPage,
    setOffSet,
    setCurrentPage,
  } = usePagination(q as string);

  const { addToCart } = useCart();

  return (
    <div className="container-page  flex  justify-center items-center  relative">
      <Head>
        <title>Search</title>
      </Head>
      <div className="fixed top-4 w-full px-4">
        <Header />
      </div>
      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40 md:w-1/2 lg:w-1/3 h-full"
        >
          <h2 className="card-title">No Results!</h2>
        </Basic>
      )}
      {data ? (
        <>
          <div className="flex flex-col gap-5 items-center mt-32 mb-8">
            {leakedProducts.map((product: any) => (
              <Product
                key={product.objectID}
                title={product.Name}
                description={product.Description}
                price={product["Unit cost"]}
                picture={product.Images[0].url || ""}
                id={product.objectID}
                onClick={() => {
                  addToCart(user.data.cart, product);
                  Toast(`${product.Name} added to cart`);
                }}
              />
            ))}
            {data?.pagination?.total !== 0 && (
              <div className="flex justify-center mb-8">
                <Pagination
                  currentPage={[...numberOfPages]}
                  totalPages={totalPage}
                  handlerPrev={(page: number) => {
                    setCurrentPage(page);
                    totalPage > 1 && setOffSet((prev) => prev - 5);
                  }}
                  handlerNext={(page: number) => {
                    setCurrentPage(page);
                    totalPage > 1 && setOffSet((prev) => prev + 5);
                  }}
                  activePage={currentPage}
                  handler={(page: any) => {
                    if (page === 1) {
                      setOffSet(0);
                      setCurrentPage(page);
                    } else if (page === 2) {
                      setOffSet(5);
                      setCurrentPage(page);
                    } else if (page === 3) {
                      setOffSet(10);
                      setCurrentPage(page);
                    } else if (page === 4) {
                      setOffSet(15);
                      setCurrentPage(page);
                    } else if (page === 5) {
                      setOffSet(20);
                      setCurrentPage(page);
                    } else if (page === 6) {
                      setOffSet(25);
                      setCurrentPage(page);
                    } else if (page === 7) {
                      setOffSet(60);
                      setCurrentPage(page);
                    } else if (page === 8) {
                      setOffSet(70);
                      setCurrentPage(page);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
