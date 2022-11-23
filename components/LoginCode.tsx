/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { LoginIcon } from "../ui/icons";
import { Basic } from "../ui/wrappers/Basic";
import { Field } from "ui/Field";
import { Button } from "ui/Button";

import { Formik, Form } from "formik";

const initialValues = {
  code: "",
};

export const LoginCode = ({ handler, email }: any) => {
  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <h2 className="card-title">Login</h2>
      <div className="card-actions">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            const code = Number(values.code);
            handler({ email: email, code });
          }}
        >
          {({ handleChange }) => (
            <Form className="form-control">
              <Field
                title="Your Code"
                label="Code"
                placeholder="****"
                name="code"
                onChange={handleChange}
                type="text"
              />
              <Button type="submit" className="mt-4">
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Basic>
  );
};
