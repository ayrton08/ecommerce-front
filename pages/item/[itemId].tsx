/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Header } from "ui";

export default function itemId() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div className="p-4  flex flex-col min-h-screen gap-10 items-center ">
      <Head>
        <title>Search</title>
      </Head>
      <Header />
    </div>
  );
}
