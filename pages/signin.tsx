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

  const { logged, getCode } = useLogin();

  const handlerEmail = async ({ email }: LoginEmailType) => {
    setStatus(true);
    setEmail(email);
    await getCode({ email });
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

      {!status ? (
        <LoginEmail handler={handlerEmail} />
      ) : (
        <LoginCode
          logged={logged}
          email={email}
          onClick={() => setStatus(false)}
        />
      )}
    </div>
  );
}
