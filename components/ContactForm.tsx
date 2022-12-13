import { useRef } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useSendMail } from "hooks/useSendMail";

import { MyTextarea } from "components";
import { ButtonPrimary, Loader, UserField } from "../ui";
import { CardTitle } from "ui/label/styled";
import { Alert } from "ui/Alert";

export interface InitialValue {
  fullname: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Name is required")
    .min(2, "The minimum of characters must be 2")
    .max(15, "The maximum characters must be 15"),
  email: Yup.string()
    .email("Check the email format")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Must contain at least 10 characters"),
});

const initialValue: InitialValue = {
  fullname: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const form = useRef(null);

  const { isSending, sendEmail } = useSendMail();

  return (
    <section className="animate__animated animate__fadeIn self-center">
      <div className="flex flex-col gap-6">
        <CardTitle>Get in touch</CardTitle>

        <Formik
          initialValues={initialValue}
          onSubmit={(values, { resetForm }) => {
            form.current && sendEmail(form.current, resetForm);
          }}
          validationSchema={schema}
        >
          {({ values, errors, touched }) => (
            <>
              <Form ref={form} className="flex flex-col">
                <UserField
                  placeholder=""
                  name="fullname"
                  label="Name"
                  type="text"
                  id="fullname"
                  className="bg-white/80"
                />
                {errors.fullname && touched.fullname ? (
                  <ErrorMessage
                    name={"fullname"}
                    component="span"
                    className="error"
                  />
                ) : (
                  <span className="w-full h-[24px] my-2"></span>
                )}
                <UserField
                  placeholder=""
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  className="bg-white/80"
                />
                {errors.email && touched.email ? (
                  <ErrorMessage
                    name={"email"}
                    component="span"
                    className="error"
                  />
                ) : (
                  <span className="w-full h-[24px] my-2"></span>
                )}
                <MyTextarea
                  name="message"
                  type="text"
                  id="message"
                  className="bg-dark"
                />
                {errors.message && touched.message ? (
                  <ErrorMessage
                    name={"message"}
                    component="span"
                    className="error"
                  />
                ) : (
                  <span className="w-full h-[24px] my-2"></span>
                )}
                <ButtonPrimary className="w-full h-[45px]" type="submit">
                  SEND
                </ButtonPrimary>
              </Form>
            </>
          )}
        </Formik>
      </div>

      {isSending === "sendig" && (
        <div className="flex justify-center fixed top-0 bottom-0 right-0 left-0 bg-dark">
          <Loader />
        </div>
      )}

      {isSending === "sent" && <Alert message="Email sent successfull" />}
    </section>
  );
};
