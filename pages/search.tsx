/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { Product } from "components/Product";

import { useRouter } from "next/router";

import { Header } from "components/Header";

import { Loader } from "ui/Loader";
import { useData } from "hooks/useData";
import { Basic } from "ui/wrappers/Basic";

import { NoResultsIcons } from "ui/icons";
import { Toast } from "ui/Toast";
import { Pagination } from "ui/Pagination";
import { useEffect, useState } from "react";
import { useCart } from "hooks/userCart";
import { useMe, useProduct } from "hooks/useData";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const user = useMe("/me");

  const [offSet, setOffSet] = useState(0);

  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const data = useData(`/products?limit=5&offset=${offSet}&search=${q}`);

  const newData = data?.results?.filter((product: any) => {
    if (product.Name) {
      return product;
    }
  });

  const pageNumbers = [] as any;

  for (
    let i = 1;
    i <= Math.ceil(data?.pagination?.total / data?.pagination?.limit);
    i++
  ) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const pages = Math.ceil(data?.pagination?.total / data?.pagination?.limit);
    setTotalPage(pages);
  }, [data]);

  const { addToCart } = useCart();

  let id = 0;
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center relative">
      <Head>
        <title>Search</title>
      </Head>
      <div className="fixed top-4 w-full px-4">
        <Header />
      </div>
      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40 w-1/2 "
        >
          <h2 className="card-title">No Results!</h2>
        </Basic>
      )}
      {data ? (
        <>
          <div className="flex flex-col gap-5 items-center mt-32 mb-8">
            {newData.map((product: any) => (
              <Product
                key={id++}
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
          </div>
          <div className="flex justify-center mb-8">
            <Pagination
              currentPage={[...pageNumbers]}
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
        </>
      ) : (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
