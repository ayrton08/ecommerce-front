import Image from "next/image";

import payment from "assets/payment.svg";
import Link from "next/link";

export const Payment = () => {
  return (
    <div className="card lg:card-side  shadow-xl h-2/5 bg-green-400/60 z-30">
      <figure>
        <Image src={payment} alt="login" className="w-80" />
      </figure>
      <div className="card-body justify-center">
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
