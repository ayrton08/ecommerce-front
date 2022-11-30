import Head from "next/head";
import { Header } from "components/Header";
import { useMe } from "hooks";
import { Cart, Loader } from "ui";

export default function CartPage() {
  const data = useMe("/me");

  return (
    <div className="flex gap-5 min-h-screen justify-center self-center items-center relative">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header />
      </div>
      {!data ? <Loader /> : <Cart data={data}></Cart>}
    </div>
  );
}
