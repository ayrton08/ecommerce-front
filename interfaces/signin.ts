import { MouseEventHandler } from "react";

export interface LoginCodeProps {
  email: string;
  onClick: MouseEventHandler;
  logged: boolean;
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
