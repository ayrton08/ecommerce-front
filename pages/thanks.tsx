import Image from "next/image";
import React from "react";

import background from "assets/bg-signin.svg";
import { Payment } from "ui/Payment";

export default function thanks() {
  return (
    <div className="flex flex-col h-screen justify-center self-center items-center relative">
      <Image
        src={background}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 object-cover z-10"
      />
      <Payment />
    </div>
  );
}
