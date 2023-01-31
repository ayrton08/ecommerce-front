import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerFooter: FC<any> = tw.footer`
    footer p-10 glass-footer text-base-content z-30 text-white
`;

export const SectionFooter: FC<any> = tw.div`
`;

export const TitleFooter: FC<any> = tw.div`
    footer-title
`;
