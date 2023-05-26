"use client";

import Image from "next/image";
import LinkInput from "./LinkInput";
import ShortenedLink from "./ShortenedLink";
import { Dispatch, SetStateAction } from "react";

interface ChangeLinksProps {
  setLinks: Dispatch<
    SetStateAction<
      {
        longLink: string;
        shortLink: string;
      }[]
    >
  >;
}

const HeroPage: React.FC<ChangeLinksProps> = ({ setLinks }) => {
  return (
    <div className="relative z-[100]">
      <div className="flex flex-col lg:flex-row-reverse gap-4 items-center justify-center p-6 lg:p-0  lg:ml-[10.313rem] lg:mt-[1.25rem]">
        <div className="overflow-hidden">
          <Image
            alt=""
            src="/images/illustration-working.svg"
            width={2}
            height={2}
            className=" left-4 w-[28.75rem] h-fit overflow-hidden lg:w-[45.813rem] lg:relative lg:left-20"
          />
        </div>
        <div className="flex flex-col items-center lg:w-[35.25rem] gap-7 lg:text-[4rem] lg:items-start">
          <div className="flex flex-col align-center items-start text-[2.325rem] lg:text-[3rem]">
            <h2 className="font-bold">More than just</h2>
            <h2 className="font-bold">shorter links</h2>
          </div>
          <p className="text-slate-500 text-center lg:text-start lg:text-[22px]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="flex items-center justify-center p-3 w-197px text-[20px] bg-[rgb(43,208,208)] hover:bg-[#b2e5ee] rounded-full text-white">
            GET STARTED
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-[10rem] lg:flex-col">
        <div className="relative top-[4rem] lg:top-[5rem] w-full p-6 lg:w-8/12 lg:flex lg:items-center">
          <LinkInput setLinks={setLinks} />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
