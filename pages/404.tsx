import React from "react";
import { Header } from "ui/Header";
import { NotFound } from "ui/NotFound";

import { Payment } from "ui/Payment";

export default function notFound() {
  return (
    <div className="flex flex-col screen justify-center self-center items-center relative">
      <div className="fixed top-4 w-full px-4">
        <Header />
      </div>
      <NotFound />
    </div>
  );
}
