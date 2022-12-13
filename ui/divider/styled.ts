import tw from "tailwind-styled-components";
import { FC } from "react";

export const Divider: FC<any> = tw.div`
    divider px-8
`;

export const DividerItems: FC<any> = tw.div`
    ${(props) => props.className}
    divider m-0
`;
