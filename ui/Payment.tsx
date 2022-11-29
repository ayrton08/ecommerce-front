import Link from "next/link";

import { PaymentIcon } from "./icons";
import { Basic } from "./wrappers/Basic";

export const Payment = () => {
  return (
    <Basic icon={<PaymentIcon className="w-full" />} color="bg-green-400/40">
      <h2 className="card-title">Payment succesfully!</h2>
      <div className="card-actions justify-end">
        <div className="form-control">
          <Link href="/" className="btn mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    </Basic>
  );
};
