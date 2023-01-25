import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

import { Header } from "components/Header";
import { useLogin, useMe } from "hooks";
import { Cart, Loader } from "ui";
import { isUserLogged } from "helpers/localStorage";

export default function CartPage() {
  const logged = isUserLogged();

  useEffect(() => {
    if (!logged) {
      Router.push("/signin");
    }
  }, [logged]);

  return (
    <div className="flex-center px-4 sm:px-0">
      <Head>
        <title>Cart</title>
        <meta
          property="description"
          content="Here you can see your shopping cart and added products"
          key="title"
        />
      </Head>
      <Cart />
    </div>
  );
}
