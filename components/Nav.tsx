"use client";
import clsx from "clsx";

export interface NavProps {
  showNav: boolean;
}

const Nav = ({ showNav }: NavProps) => {
  return (
    <nav
      className={clsx(
        `relative
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        gap-6
        text-white
        lg:text-slate-500
        bg-[rgb(58,48,84)]
        lg:bg-transparent
        p-12
        rounded-2xl
        w-[90%]
        m-auto
        lg:m-0`,
        !showNav && "hidden lg:flex"
      )}
    >
      <li className="list-none  cursor-pointer hover:text-black">Features</li>
      <li className="list-none  cursor-pointer hover:text-black">Pricing</li>
      <li className="list-none  cursor-pointer hover:text-black">Resources</li>
      <hr className="w-full lg:opacity-0 lg:w-0" />
      <li className="list-none  cursor-pointer hover:text-black">LogIn</li>
      <li
        className="
      list-none
      bg-[rgb(43,208,208)]
      hover:bg-[#b2e5ee]
      cursor-pointer
      rounded-full
      p-3
      w-full
      lg:w-60
      flex
      align-center
      justify-center
      text-white
      hover:text-[rgb(22, 56, 56)]
      "
      >
        SignUp
      </li>
    </nav>
  );
};

export default Nav;
