import { ChangeEventHandler } from "react";

export interface ButtonProps {
  onClick?: (args: any) => any;
  children: any;
  className?: string;
  type?: "button" | "submit" | "reset";
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
  disable?: boolean;
  className?: string;
  autoComplete?: string;
  children?: any;
  value?: any;
  id?: string;
}

export interface LinkType {
  label: string;
  href?: string;
  className?: string;
}
