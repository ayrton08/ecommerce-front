import { Header } from "components";
import { isUserLogged } from "helpers/localStorage";
import Router from "next/router";
import { useEffect } from "react";
import { Payment } from "ui";

export default function Thanks() {
  const logged = isUserLogged();

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
