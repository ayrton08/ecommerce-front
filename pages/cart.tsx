import Head from "next/head";
import { User, Header, Cart } from "ui";

export default function Profile() {
  return (
    <div className="flex gap-5 min-h-screen justify-center self-center items-center relative">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      <Cart>
        <label className="input-group">
          <span className="w-[80px]">Email</span>
          <input
            type="text"
            placeholder="user@mail.com"
            className="input input-bordered"
          />
        </label>
      </Cart>
    </div>
  );
}
