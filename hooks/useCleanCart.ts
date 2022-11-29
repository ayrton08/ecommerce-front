import { updateCart } from "lib/api";
import { useState } from "react";

export const useCleanCart = () => {
  const [efect, setEfect] = useState("animate__fadeIn");

  const cleanCart = async () => {
    setEfect("animate__wobble");
    await updateCart({ cart: [] });
    window.location.href = window.location.href;
  };

  return { efect, cleanCart };
};
