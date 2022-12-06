import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerHeader: FC<any> = tw.div`
    navbar h-[80px]  p-2 sm:px-4 flex  justify-between shadow-lg shadow-black/10 items-center glass-efect
`;

export const ContainerCard: FC<any> = tw.div`
    card-actions items-center justify-center 
`;

export const ContainerPayments = tw(ContainerCard)`
    flex flex-col justify-center items-center mb-8
`;
