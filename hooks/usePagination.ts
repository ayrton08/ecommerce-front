import { getNumberOfPages } from "helpers/pagination";
import { useEffect, useState } from "react";
import { useData } from "./useData";

export const usePagination = (query: string) => {
  const [offSet, setOffSet] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const data = useData(`/products?limit=5&offset=${offSet}&search=${query}`);

  const leakedProducts = data?.results?.filter((product: any) => {
    if (product.Name) {
      return product;
    }
  });

  const numberOfPages = getNumberOfPages(
    data?.pagination?.total,
    data?.pagination?.limit
  );

  useEffect(() => {
    const pages = Math.ceil(data?.pagination?.total / data?.pagination?.limit);
    setTotalPage(pages);
  }, [data]);

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setOffSet(0);
        break;
      case 2:
        setOffSet(5);
        break;
      case 3:
        setOffSet(10);
        break;
      case 4:
        setOffSet(15);
        break;
      case 5:
        setOffSet(20);
        break;
      case 6:
        setOffSet(25);
        break;
      case 7:
        setOffSet(30);
        break;
    }
  }, [currentPage]);

  return {
    data,
    leakedProducts,
    numberOfPages,
    totalPage,
    currentPage,
    setOffSet,
    setCurrentPage,
  };
};
