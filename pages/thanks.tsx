import { Header } from "components";
import { useLogin } from "hooks";
import Router from "next/router";
import { useEffect } from "react";
import { Payment } from "ui";

export default function Thanks() {
  const { logged } = useLogin();

  useEffect(() => {
    if (!logged) {
      Router.push("/signin");
    }
  }, [logged]);
  return (
    <div className="flex-col-center">
      <Header />
      <Payment />
    </div>
  );
}
