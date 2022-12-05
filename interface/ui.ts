import { ChangeEventHandler } from "react";

export interface ButtonProps {
  onClick?: (args: any) => any;
  children: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface CartTotals {
  totalItems: number;
  total: number;
}

export interface CategoryType {
  label: string;
  icon: any;
}

export interface FieldType {
  title?: string;
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  onChange?: ChangeEventHandler;
  disable?: string | boolean;
  className?: string;
  autoComplete?: string;
  children?: any;
  value?: any;
  id?: string;
  [x: string]: any;
}

export interface LinkType {
  label: string;
  href?: string;
  className?: string;
}
