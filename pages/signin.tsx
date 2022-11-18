import Head from "next/head";
import { Login } from "components/Login";

export default function Signin() {
  return (
    <div className="flex flex-col screen justify-center self-center items-center relative ">
      <Head>
        <title>Signin</title>
      </Head>

      <Login />
    </div>
  );
}
