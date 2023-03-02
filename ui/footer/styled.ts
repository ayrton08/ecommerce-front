import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerFooter: FC<any> = tw.footer`
    footer p-10  text-base-content z-30 text-white bg-primaryA relative
`;

export const SectionFooter: FC<any> = tw.div`
`;

export const TitleFooter: FC<any> = tw.div`
    footer-title
`;
