import Head from "next/head";
import { LoginEmail } from "components/LoginEmail";
import { getCode, getTokenJWT } from "lib/api";
import { LoginCode } from "components/LoginCode";
import { useEffect, useState } from "react";
import { useCode } from "hooks/useData";
import { Loader } from "ui/Loader";
import { isUserLogged } from "helpers/isUserLogged";

import Router from "next/router";

type BodyFetch = {
  code: string;
};

export default function Signin() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState();

  const { getCode, isSendig } = useCode();

  const getToken = async (data: BodyFetch) => {
    const token = await getTokenJWT(data);
    setToken(token);
  };

  useEffect(() => {
    const res = isUserLogged();
    if (res) {
      Router.push("/");
    }
  }, [token]);

  return (
    <div className="flex flex-col screen justify-center self-center items-center relative ">
      <Head>
        <title>Signin</title>
      </Head>
      {isSendig && <Loader />}
      {!status ? (
        <LoginEmail
          handler={async (e: any) => {
            const data = await getCode(e);
            setEmail(data?.email);
            data && setStatus(true);
          }}
        />
      ) : (
        <LoginCode
          handler={async (e: any) => {
            await getToken({ ...e });
          }}
          email={email}
        />
      )}
    </div>
  );
}
