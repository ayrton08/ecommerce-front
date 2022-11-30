import Head from "next/head";
import { Header } from "components/Header";
import { useMe } from "hooks";
import { Cart, Loader } from "ui";

export default function CartPage() {
  const data = useMe("/me");

  return (
    <div className="flex-center">
      <Head>
        <title>Cart</title>
        <meta
          property="description"
          content="Here you can see your shopping cart and added products"
          key="title"
        />
      </Head>
      <Header />
      {!data ? <Loader /> : <Cart data={data}></Cart>}
    </div>
  );
}
