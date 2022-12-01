/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Form } from "formik";

import { LoginIcon } from "../ui/icons";
import { Basic, Button, ButtonSmall, UserField } from "ui";
import { LoginCodeProps } from "interface/signin";
import { Field } from "ui/field/styled";
import { CardTitle, ContainerInput } from "ui/label/styled";
import { ContainerCard } from "ui/wrappers/styled";
import { PasteIcon } from "ui/icons/boxicons";
import { useEffect, useState } from "react";
import * as yup from "yup";

const initialValues = {
  code: "",
};

const schema = yup.object({
  code: yup.number().required(),
});

export const LoginCode = ({ handler, email, onClick }: LoginCodeProps) => {
  const [codeCopied, setCodeCopied] = useState<number | null | string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    navigator.clipboard.readText().then((value) => {
      const copiedText = Number(value);
      const code = isNaN(copiedText);
      if (code) {
        return setError(code);
      } else {
        setCodeCopied(copiedText.toString());
      }
    });
  }, [handler]);

  return (
    <Basic icon={<LoginIcon className="w-full" />} color="bg-black/20">
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ code }) => {
            handler({ email, code });
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, setFieldValue }) => (
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
                id="code"
                value={values.code}
              >
                <Button
                  type="button"
                  className="w-12"
                  onClick={(e) => {
                    // if (error) {
                    //   return alert(
                    //     `el codigo ${codeCopied} copiado no es un numero`
                    //   );
                    // }
                    setFieldValue("code", codeCopied);
                  }}
                >
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
