import { MouseEventHandler } from 'react';

export interface LoginCodeProps {
  email: string;
  onClick: MouseEventHandler;
  logged: boolean;
}

export interface LoginEmailType {
  email: string;
}

export type BodyFetch = {
  code: string;
};
