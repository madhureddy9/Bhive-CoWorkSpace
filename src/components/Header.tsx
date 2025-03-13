import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import bhiveLogo from "../assets/bhive.png";

const Header: React.FC = () => {
  return (
    <header className="bg-secondary text-white px-6 md:px-12 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <img
        src={bhiveLogo}
        alt="BHIVE Logo"
        className="h-10 ml-[-8px] md:ml-0"
      />

      {/* Call Icon */}
      <a
        href="tel:+919876543210"
        className="flex justify-center items-center w-10 h-10 border-2 border-[#FFBB00] rounded-lg shadow-md bg-white hover:bg-primary transition-all 
        ml-auto"
      >
        <FiPhoneCall className="text-[#FFBB00] text-2xl" />
      </a>
    </header>
  );
};

export default Header;
