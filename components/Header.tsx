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
      <header
        className=" flex bg-white p-7 justify-center w-full align-center

    "
      >
        <Image
          alt="logo"
          src="/images/logo.svg"
          width={120.04}
          height={20.67}
          className="mr-auto self-center h-8"
        />
        <div
          className="
          ml-auto
          lg:hidden
          sm:z-90
          lg:w-0
          lg:h-0
          lg:invisible
      "
        >
          <MenuIcon onClick={handleClick} />
        </div>
      </header>
      <div
        className={clsx(
          "z-[1000] lg:opacity-100  w-full flex absolute lg:relative justify-center bottom-[32rem] lg:bottom-auto",
          !showNav && "opacity-0 z-50 w-0 h-0 "
        )}
      >
        <Nav showNav={showNav} />
      </div>
    </div>
  );
};

export default Header;
