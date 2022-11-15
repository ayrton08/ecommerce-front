import { Product } from "components/Product";
import React from "react";
import { Header } from "ui/Header";
import { Login } from "ui/Login";
import { Menu } from "ui/Menu";

export default function Signin() {
  return (
    <div className="flex h-screen justify-center self-center items-center">
      {/* <Header />
      <Menu /> */}
      <Login />
    </div>
  );
}
