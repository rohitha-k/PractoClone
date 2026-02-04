import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white text-center py-3 mt-5"
      style={{ backgroundColor: "#007bff" }}
    >
      <p className="mb-0">
        &copy; {new Date().getFullYear()} practo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
