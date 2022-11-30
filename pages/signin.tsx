/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect, useState } from "react";
import Router from "next/router";

import { useLogin } from "hooks";
import { LoginEmail, Header, LoginCode } from "components";
import { LoginEmailType } from "interface/signin";

export default function Signin() {
  const [email, setEmail] = useState<any>();
  const [status, setStatus] = useState(false);

  const { logged, getToken, getCode } = useLogin();

  const handlerEmail = async ({ email }: LoginEmailType) => {
    setStatus(true);
    setEmail(email);
    await getCode({ email });
  };

  const handlerCode = async (e: any) => {
    await getToken({ ...e });
  };

  useEffect(() => {
    if (logged) {
      Router.push("/");
    }
  }, [logged]);

  return (
    <div className="flex-col-center container-page">
      <Head>
        <title>Signin</title>
      </Head>
      <Header />

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
