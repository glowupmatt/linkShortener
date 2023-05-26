"use client";

import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./Nav";
import clsx from "clsx";
import { useState } from "react";

interface HeaderProps {
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className=" flex flex-col lg:flex-row">
      <header className=" flex bg-white p-7 justify-center w-full align-center">
        <div className="flex justify-between w-full">
          <Image
            alt="logo"
            src="/images/logo.svg"
            width={120.04}
            height={20.67}
            className="mr-auto self-center h-8"
          />

          <img
            alt=""
            src="/images/bars-solid.svg"
            className="ml-auto block w-[25px] lg:items-center lg:justify-end lg:hidden z-90 lg:w-0 lg:h-0 lg:invisible"
            onClick={handleClick}
          />
        </div>
        <div
          className={clsx(
            "z-[1000] lg:opacity-100 w-full flex absolute lg:relative justify-center top-[5.5rem] lg:bottom-auto",
            !showNav && "opacity-0 z-50 w-0 h-0 "
          )}
        >
          <Nav showNav={showNav} />
        </div>
      </header>
    </div>
  );
};

export default Header;
