import { ChangeEventHandler } from 'react';

export interface ButtonProps {
  onClick?: (args: any) => any;
  children: any;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface CartTotals {
  totalItems: number;
  total: number;
}

export interface CategoryType {
  label: string;
  src: string;
}

export interface LinkType {
  label: string;
  href?: string;
  className?: string;
}
