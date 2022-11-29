/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useState } from "react";

import { useLogin } from "hooks";
import { LoginEmail, Header, LoginCode } from "components";
import { LoginEmailType } from "interface/signin";

export default function Signin() {
  const [email, setEmail] = useState<any>();
  const [status, setStatus] = useState(false);

  const { getToken, getCode } = useLogin();

  const handlerEmail = async ({ email }: LoginEmailType) => {
    setStatus(true);
    setEmail(email);
    await getCode({ email });
  };

  const handlerCode = async (e: any) => {
    await getToken({ ...e });
  };

  return (
    <div className="flex flex-col screen justify-center self-center items-center relative ">
      <Head>
        <title>Signin</title>
      </Head>
      <div className="fixed top-4 right-4 left-4">
        <Header />
      </div>
      {!status ? (
        <LoginEmail handler={handlerEmail} />
      ) : (
        <LoginCode
          handler={handlerCode}
          email={email}
          onClick={() => setStatus(false)}
        />
      )}
    </div>
  );
}
