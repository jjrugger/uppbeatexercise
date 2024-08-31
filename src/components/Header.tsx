import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import HeaderLogos from "./HeaderLogos";

const Header: React.FC = () => {
  return (
    <header className="py-4 sm:p-8 flex justify-between">
      <nav>
        <HeaderLogos />
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
