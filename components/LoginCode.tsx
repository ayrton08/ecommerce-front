/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Form } from "formik";

import { LoginIcon } from "../ui/icons";
import { Basic, Button, ButtonSmall, UserField } from "ui";
import { LoginCodeProps } from "interface/signin";
import { Field } from "ui/field/styled";
import { CardTitle, ContainerInput } from "ui/label/styled";
import { ContainerCard } from "ui/wrappers/styled";
import { PasteIcon } from "ui/icons/boxicons";
import { useState } from "react";

const initialValues = {
  code: "",
};

export const LoginCode = ({ handler, email, onClick }: LoginCodeProps) => {
  const [codeCopied, setCode] = useState<number | null>(null);
  const pasteCode = async () => {
    const text = await navigator.clipboard.readText();
    setCode(Number(text));
  };

  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ code }) => {
            await pasteCode();
            setCode(Number(code));
            handler({ email: email, code: codeCopied });
          }}
        >
          {({ handleChange }) => (
            <Form className="form-control" onClick={() => {}}>
              <UserField
                title="Your Code"
                label="Code"
                placeholder="****"
                name="code"
                onChange={handleChange}
                type="number"
                className="bg-white"
                autoComplete={"false"}
                value={codeCopied}
              >
                <Button className="w-12">
                  <PasteIcon />
                </Button>
              </UserField>
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
