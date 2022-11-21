import React from "react";
import { Link } from "./Link";

export const Footer = () => {
  return (
    <footer className="footer p-10 glass-efect text-base-content z-30">
      <div>
        <span className="footer-title">Services</span>
        <Link label="Branding" />
        <Link label="Design" />
        <Link label="Marketing" />
        <Link label="Advertisement" />
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link label="About us" />
        <Link label="Contact" />
        <Link label="Jobs" />
        <Link label="Press kit" />
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <i className="bx bxl-twitter bx-md"></i>
          </a>
          <a>
            <i className="bx bxl-facebook-circle bx-md"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
