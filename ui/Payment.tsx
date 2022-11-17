import Image from "next/image";

import payment from "assets/payment.svg";
import Link from "next/link";

import "animate.css";
import { PaymentIcon } from "./icons";

export const Payment = () => {
  return (
    <div className="card lg:card-side  shadow-xl h-2/5 bg-green-400/40 z-30 animate__animated animate__fadeIn">
      <figure>
        <PaymentIcon className="p-4" />
      </figure>
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title">Payment succesfully!</h2>
        <div className="card-actions justify-end">
          <div className="form-control">
            <Link href="/" className="btn mt-4">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
