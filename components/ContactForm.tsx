import { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useSendMail } from "hooks/useSendMail";

import { MyTextarea } from "components";
import { ButtonPrimary, Loader, UserField } from "../ui";
import { CardTitle } from "ui/label/styled";

export interface InitialValue {
  user_name: string;
  user_email: string;
  message: string;
}

const initialValue: InitialValue = {
  user_name: "",
  user_email: "",
  message: "",
};

export const ContactForm = () => {
  const form = useRef(null);

  const { isSending, sendEmail } = useSendMail();

  return (
    <section className="animate__animated  animate__fadeIn self-center">
      <div className="flex flex-col gap-6">
        <CardTitle>Get in touch</CardTitle>

        <Formik
          initialValues={initialValue}
          onSubmit={(values, { resetForm }) => {
            sendEmail(form.current, resetForm);
          }}
          validationSchema={Yup.object({
            user_name: Yup.string()
              .required("Name is required")
              .min(2, "The minimum of characters must be 2")
              .max(15, "The maximum characters must be 15"),
            user_email: Yup.string().email("Check the email format").required(),
            message: Yup.string()
              .required()
              .min(10, "Must contain at least 10 characters"),
          })}
        >
          {({ values }) => (
            <>
              <Form ref={form} className="flex flex-col gap-6">
                <UserField
                  placeholder=""
                  name="user_name"
                  label="Name"
                  type="text"
                  id="name"
                  className="bg-white/80"
                />
                <UserField
                  placeholder=""
                  name="user_email"
                  label="Email"
                  type="email"
                  id="email"
                  className="bg-white/80"
                />
                <MyTextarea
                  name="message"
                  type="text"
                  id="message"
                  className="bg-dark"
                />
                <ButtonPrimary className="w-full" type="submit">
                  Send
                </ButtonPrimary>
              </Form>
            </>
          )}
        </Formik>
      </div>

      {isSending && <Loader />}
    </section>
  );
};
