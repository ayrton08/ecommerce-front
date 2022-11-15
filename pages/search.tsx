import { Product } from "components/Product";
import React from "react";
import { Header } from "ui/Header";
import { Menu } from "ui/Menu";

export default function Search() {
  return (
    <div className="m-4 mb-10 flex flex-col gap-10 items-center">
      <Header />
      <Menu />
      <Product />
    </div>
  );
}
