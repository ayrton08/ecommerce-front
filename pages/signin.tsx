import { Product } from "components/Product";
import React from "react";
import { Header } from "ui/Header";
import { Login } from "ui/Login";
import { Menu } from "ui/Menu";

import background from "assets/bg-signin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex flex-col h-screen justify-center self-center items-center relative">
      <Image
        src={background}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 object-cover z-10"
      />
      <Login />
    </div>
  );
}
