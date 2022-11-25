/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { LoginIcon } from "../ui/icons";
import { Basic } from "../ui/wrappers/Basic";
import { Field } from "ui/Field";
import { Button } from "ui/Button";

import { Formik, Form } from "formik";

const initialValues = {
  email: "",
};

export const LoginEmail = ({ handler }: any) => {
  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <h2 className="card-title">Login</h2>
      <div className="card-actions">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handler({ ...values });
          }}
        >
          {({ handleChange, values }) => (
            <Form className="form-control">
              <Field
                title="Your Email"
                label="Email"
                placeholder="user@email.com"
                name="email"
                onChange={handleChange}
                type="email"
                className="bg-white"
              />
              <Button type="submit" className="mt-4">
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Basic>
  );
};
