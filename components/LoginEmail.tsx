/* eslint-disable react-hooks/rules-of-hooks */
import { LoginIcon } from "../ui/icons";
import { Basic } from "../ui/wrappers/Basic";
import { UserField } from "ui/field/Field";
import { Button } from "ui/button/Button";

import { Formik, Form } from "formik";
import { HandlerEmail } from "interface/signin";
import { ContainerCard } from "ui/wrappers/styled";
import { CardTitle } from "ui/label/styled";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
});

export const LoginEmail = ({ handler }: HandlerEmail) => {
  return (
    <Basic
      icon={<LoginIcon className="w-2/3 lg:w-full self-center" />}
      color="md:bg-dark_light"
    >
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handler({ ...values });
          }}
          validationSchema={schema}
        >
          {({ handleChange, values, errors }) => (
            <Form className="form-control">
              <UserField
                title="Your Email"
                label="Email"
                placeholder="user@email.com"
                name="email"
                onChange={handleChange}
                type="email"
                className="bg-white placeholder:text-gray-500"
                disabled={false}
              />
              {!errors.email && <span className="w-full h-[24px] my-2"></span>}
              <Button type="submit">Next</Button>
            </Form>
          )}
        </Formik>
      </ContainerCard>
    </Basic>
  );
};
