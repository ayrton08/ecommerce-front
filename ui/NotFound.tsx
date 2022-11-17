import Image from "next/image";
import Link from "next/link";
import React from "react";

import notFound from "assets/404.svg";

export const NotFound = () => {
  return (
    <div className="card lg:card-side  shadow-xl h-2/5 bg-green-400/40 z-30 animate__animated animate__fadeIn">
      <figure>
        <Image src={notFound} alt="login" className="w-80" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">Page not Found!</h2>
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
