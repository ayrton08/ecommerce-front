/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { LoginEmail } from "components/LoginEmail";
import { getCode, getTokenJWT } from "lib/api";
import { LoginCode } from "components/LoginCode";
import { useEffect, useState } from "react";
import { useCode } from "hooks/useData";
import { Loader } from "ui/Loader";

import Router from "next/router";
import { useLogin } from "hooks/useLogin";
import { Header } from "components/Header";

type BodyFetch = {
  code: string;
};

export default function Signin() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  console.log(status);

  const { getCode, isSendig } = useCode();
  const { logged, setLogged } = useLogin();

  const getToken = async (data: BodyFetch) => {
    const token = await getTokenJWT(data);
    token && setLogged(true);
  };

  useEffect(() => {
    if (logged) {
      Router.push("/");
    }
  }, [logged]);

  return (
    <div className="flex flex-col screen justify-center self-center items-center relative ">
      <Head>
        <title>Signin</title>
      </Head>
      <div className="fixed top-4 right-4 left-4">
        <Header />
      </div>
      {/* {isSendig && <Loader />} */}
      {!status ? (
        <LoginEmail
          handler={async (e: any) => {
            setStatus(true);
            const data = await getCode(e);
            setEmail(data?.email);
          }}
        />
      ) : (
        <LoginCode
          handler={async (e: any) => {
            await getToken({ ...e });
          }}
          email={email}
          label="change email"
          onClick={() => setStatus(false)}
        />
      )}
    </div>
  );
}
