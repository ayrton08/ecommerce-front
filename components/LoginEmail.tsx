/* eslint-disable react-hooks/rules-of-hooks */
import { LoginIcon } from "../ui/icons";
import { Basic } from "../ui/wrappers/Basic";
import { UserField } from "ui/field/Field";
import { Button } from "ui/button/Button";

import { Formik, Form } from "formik";
import { HandlerEmail } from "interface/signin";
import { ContainerCard } from "ui/wrappers/styled";
import { CardTitle } from "ui/label/styled";

const initialValues = {
  email: "",
};

export const LoginEmail = ({ handler }: HandlerEmail) => {
  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handler({ ...values });
          }}
        >
          {({ handleChange, values }) => (
            <Form className="form-control">
              <UserField
                title="Your Email"
                label="Email"
                placeholder="user@email.com"
                name="email"
                onChange={handleChange}
                type="email"
                className="bg-white"
                disable={false}
              />
              <Button type="submit" className="mt-4">
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </ContainerCard>
    </Basic>
  );
};
