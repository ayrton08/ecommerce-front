import React from "react";
import { LoginIcon } from "../ui/icons";
import { Basic } from "../ui/wrappers/Basic";
import { Field } from "ui/Field";
import { Button } from "ui/Button";

export const Login = () => {
  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <h2 className="card-title">Login</h2>
      <div className="card-actions justify-end">
        <div className="form-control">
          <Field
            title="Your Email"
            label="Email"
            placeholder="user@email.com"
          />
          {/* <Field title="Code" label="Code" placeholder="****" /> */}
          <Button>Next</Button>
        </div>
      </div>
    </Basic>
  );
};
