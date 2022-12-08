import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FormikState } from "formik";
// import { InitialValue } from "../components";

interface UseSendMail {
  isSending: boolean;
  sendEmail: (
    e: any,
    callback?: (nextState?: Partial<FormikState<any>> | undefined) => void
  ) => void;
}

export const useSendMail = (): UseSendMail => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (values: any, callback: any) => {
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        values,
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then(
        (result) => {
          callback();
          setIsSending(false);
        },
        (error) => {
          callback();
          setIsSending(false);
        }
      );
  };

  return {
    isSending,
    sendEmail,
  };
};
