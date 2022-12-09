import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormikState } from "formik";

type Status = "sendig" | "notSendig" | "sent";

interface UseSendMail {
  isSending: Status;
  sendEmail: (
    e: any,
    callback?: (nextState?: Partial<FormikState<any>> | undefined) => void
  ) => void;
  setIsSending: any;
}

export const useSendMail = (): UseSendMail => {
  const [isSending, setIsSending] = useState<Status>("notSendig");

  useEffect(() => {
    if (isSending === "sent") {
      setTimeout(() => {
        setIsSending("notSendig");
      }, 5000);
    }
  }, [isSending]);

  const sendEmail = (values: any, callback: any) => {
    setIsSending("sendig");

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
          setIsSending("sent");
        },
        (error) => {
          callback();
          setIsSending("sent");
        }
      );
  };

  return {
    isSending,
    sendEmail,
    setIsSending,
  };
};
