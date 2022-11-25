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

import noImage from "ui/icons/no-image.svg";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [offSet, setOffSet] = useState(0);

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const data = useData(`/products?limit=5&offset=${offSet}&search=${q}`);

  const newData = data?.results?.filter((product: any) => {
    if (product.Name) {
      return product;
    }
  });

  console.log("products", newData);
  console.log("total Page", totalPage);

  const pageNumbers = [] as any;

  for (
    let i = 1;
    i <= Math.ceil(data?.pagination?.total / data?.pagination?.limit);
    i++
  ) {
    pageNumbers.push(i);
  }

  const selectPage = (page: number) => {
    setOffSet(page);
  };

  useEffect(() => {
    const pages = Math.ceil(data?.pagination?.total / data?.pagination?.limit);
    setTotalPage(pages);
  }, [data]);

  let id = 0;
  return (
    <div className="p-4   min-h-screen  ">
      <Head>
        <title>Search</title>
      </Head>
      <Header />
      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40"
        >
          <h2 className="card-title">No Results!</h2>
        </Basic>
      )}
      {data ? (
        <>
          <div className="flex flex-col gap-5 items-center mt-12 mb-8">
            {newData.map((product: any) => (
              <Product
                key={id++}
                title={product.Name}
                description={product.Description}
                price={product["Unit cost"]}
                picture={product.Images[0].url || ""}
                id={product.objectID}
                onClick={() => {
                  Toast("Producto agregado al carrito");
                }}
              />
            ))}
          </div>
          <div className="flex justify-center">
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
