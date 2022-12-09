import React from "react";

export const SearchIconDark = () => {
  return <i className={`bx bx-search bx-sm mt-1 text-dark`}></i>;
};

export const SearchIconLight = () => {
  return <i className={`bx bx-search bx-sm mt-1 text-white`}></i>;
};

export const ProfileIcon = () => {
  return <i className={"bx bx-user-circle bx-sm text-white"}></i>;
};
export const ProfileIconPrimary = () => {
  return <i className={"bx bx-user-circle bx-sm text-primary"}></i>;
};

export const OrdersIcon = () => {
  return <i className="bx bx-money-withdraw bx-sm text-white"></i>;
};

export const OrdersIconPrimary = () => {
  return <i className="bx bx-money-withdraw bx-sm text-primary"></i>;
};

export const LogoutIcon = () => {
  return <i className="bx bx-log-out text-white bx-sm"></i>;
};

export const CartIcon = () => {
  return <i className="bx bx-cart text-white bx-sm"></i>;
};

export const TrashIcon = () => {
  return <i className="bx bx-trash bx-xs text-white"></i>;
};

export const SaveIcon = () => {
  return <i className="bx bx-save bx-sm text-white"></i>;
};

export const EditIcon = () => {
  return <i className="bx bx-edit-alt bx-sm text-white"></i>;
};

export const TwitterIcon = () => {
  return <i className="bx bxl-twitter bx-md text-color"></i>;
};

export const FacebookIcon = () => {
  return <i className="bx bxl-facebook-circle bx-md text-color"></i>;
};

export const PasteIcon = () => {
  return <i className="bx bx-paste text-white bx-sm"></i>;
};

export const ErrorIcon = () => {
  return <i className="bx bx-error-alt text-white"></i>;
};

export const SupportIconPrimary = () => {
  return <i className={`bx bx-support bx-sm text-primary`}></i>;
};
export const SupportIcon = ({ className }: any) => {
  return <i className={`bx bx-support bx-sm text-white ${className}`}></i>;
};
