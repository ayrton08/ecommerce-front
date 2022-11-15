import React from "react";
import login from "assets/login.svg";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-2/5">
      <figure>
        <Image src={login} alt="login" className="w-80" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">New album is released!</h2>
        {/* <p>Click the button to listen on Spotiwhy app.</p> */}
        <div className="card-actions justify-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
            <button className="btn mt-4">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
