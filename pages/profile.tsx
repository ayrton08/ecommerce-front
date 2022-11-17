import Image from "next/image";
import React from "react";

import { User } from "ui/User";

import background from "assets/bg-signin.svg";
import { Header } from "ui/Header";
import { Cart } from "ui/Cart";

export default function Profile() {
  return (
    <div className="flex gap-5 h-screen justify-center self-center items-center relative bg">
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      <User />
      <Cart />
    </div>
  );
}
