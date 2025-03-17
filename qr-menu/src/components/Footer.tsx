import React from "react";
import Logo from "./Logo";

interface FooterProps {
  copyright: string;
  address: string;
  contact: string;
}

const Footer: React.FC<FooterProps> = ({ copyright, address, contact }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Logo size={40} />
        <p>{copyright}</p>
        <p className="address">{address}</p>
        <p className="contact">{contact}</p>
      </div>
    </footer>
  );
};

export default Footer;
