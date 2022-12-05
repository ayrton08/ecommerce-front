import { useEffect } from "react";
import Head from "next/head";

import { Header } from "components";
import { useMe } from "hooks/useData";
import { User } from "ui";
import { useLogin } from "hooks";
import Router from "next/router";

export default function Profile() {
  const data = useMe("/me");

  const { logged } = useLogin();

  useEffect(() => {
    if (!logged) {
      Router.push("/signin");
    }
  }, [logged]);

  return (
    <div className="flex-col-center container-page pt-12 pb-4 px-4 sm:px-0">
      <Head>
        <title>{data?.data?.name || "Profile"}</title>
      </Head>
      <Header />
      <User userName={data?.data?.name || "User"}></User>
    </div>
  );
}
