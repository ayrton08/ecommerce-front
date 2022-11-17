import { Product } from "components/Product";
import React from "react";
import { Header } from "ui/Header";
import { Menu } from "ui/Menu";

import useSWR from "swr";
import { data } from "components/data";

export default function Search() {
  // const { data, error } = useSWR("product", async () => {
  //   const res = await fetch(
  //     "https://e-commerce-backend-jade.vercel.app/api/products?search=Chairs"
  //   );
  //   const data = await res.json();
  //   return data;
  // });

  return (
    <div className="p-4  flex flex-col min-h-screen gap-10 items-center">
      <Header />
      {/* <Menu /> */}
      <Product
        title={data.Name}
        description={data.Description}
        price={data["Unit cost"]}
        picture={data.Images[0].url}
      />
    </div>
  );
}
