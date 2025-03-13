import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#263238] text-white text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} BHIVE Workspace. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
