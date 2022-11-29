import { MouseEventHandler } from "react";

export interface LoginCodeProps {
  handlerEmail: (args: any) => void;
  email: string;
  onClick: MouseEventHandler;
}

export interface LoginEmail {
  email: string;
}

export interface HandlerEmail {
  handler: (args: LoginEmail) => Promise<any>;
}

export type BodyFetch = {
  code: string;
};
