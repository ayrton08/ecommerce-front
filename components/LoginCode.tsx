/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Form } from "formik";

import { LoginIcon } from "../ui/icons";
import { Basic, Button, ButtonSmall } from "ui";
import { LoginCodeProps } from "interface/signin";
import { Field } from "ui/field/styled";
import { CardTitle } from "ui/label/styled";
import { ContainerCard } from "ui/wrappers/styled";

const initialValues = {
  code: "",
};

export const LoginCode = ({ handler, email, onClick }: LoginCodeProps) => {
  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            const code = Number(values.code);
            handler({ email: email, code });
          }}
        >
          {({ handleChange }) => (
            <Form className="form-control" onClick={() => {}}>
              <Field
                title="Your Code"
                label="Code"
                placeholder="****"
                name="code"
                onChange={handleChange}
                type="number"
                className="bg-white"
              />
              <span className="w-full text-center bg-white/60 mt-2 rounded-md py-2 font-bold flex flex-col">
                We send your code to{" "}
                <code className="text-primary">{email}</code>
              </span>
              <ButtonSmall onClick={onClick}>Change email</ButtonSmall>
              <Button type="submit" className="mt-4">
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </ContainerCard>
    </Basic>
  );
};
