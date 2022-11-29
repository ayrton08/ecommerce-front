/* eslint-disable react-hooks/rules-of-hooks */
import { Formik, Form } from "formik";

import { LoginIcon } from "../ui/icons";
import { Basic, Field, Button } from "ui";
import { LoginCodeProps } from "interface/signin";

const initialValues = {
  code: "",
};

export const LoginCode = ({ handler, email, onClick }: LoginCodeProps) => {
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
                <code className="text-violet-800">{email}</code>
              </span>
              <button
                className="bg-red-500 w-max px-3 py-1  self-end text-white font-bold text-sm rounded-b-md mr-2  hover:bg-red-600"
                onClick={onClick}
              >
                Change email
              </button>
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
