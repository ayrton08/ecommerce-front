import { MouseEventHandler } from "react";

export interface LoginCodeProps {
  handler: (args: any) => void;
  email: string;
  onClick: MouseEventHandler;
}

export interface LoginEmailType {
  email: string;
}

export interface HandlerEmail {
  handler: (args: LoginEmailType) => Promise<any>;
}

export type BodyFetch = {
  code: string;
};
