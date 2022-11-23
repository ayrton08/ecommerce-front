/* eslint-disable @next/next/no-img-element */
import { useMe } from "hooks/useData";
import { useTotalCart } from "hooks/useTotalCart";
import Head from "next/head";
import { useEffect, useState } from "react";
import { User, Header, Cart } from "ui";
import { Button } from "ui/Button";
import { Loader } from "ui/Loader";

export default function Profile() {
  const data = useMe("/me");
  const { total } = useTotalCart(data);

  return (
    <div className="flex gap-5 min-h-screen justify-center self-center items-center relative">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      {!data ? (
        <Loader />
      ) : (
        <Cart orders={data?.data?.cart} total={total}></Cart>
      )}
    </div>
  );
}
