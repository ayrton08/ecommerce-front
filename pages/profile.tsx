import Image from "next/image";
import React from "react";

import { User } from "ui/User";

import background from "assets/bg-signin.svg";
import { Header } from "ui/Header";
import { Cart } from "ui/Cart";

export default function Profile() {
  return (
    <div className="flex gap-5 h-screen justify-center self-center items-center relative">
      <Image
        src={background}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 object-cover z-10"
      />
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      <User />
      <Cart />
    </div>
  );
}
