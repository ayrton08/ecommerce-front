import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FormikState } from "formik";

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
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        values,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
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
