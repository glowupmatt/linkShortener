"use client";

import { useState, useRef } from "react";

type LinksProps = {
  longLink: string;
  shortLink: string;
};

const ShortenedLink: React.FC<LinksProps> = ({ longLink, shortLink }) => {
  const [copySuccess, setCopySuccess] = useState("");

  function copyToClipboard({
    event,
    shortLink,
  }: {
    event: React.MouseEvent<HTMLElement>;
    shortLink: string;
  }) {
    event.preventDefault();
    navigator.clipboard.writeText(shortLink);
    setCopySuccess("Copied!");
  }

  return (
    <div className="flex text-start items-center justify-center bg-white lg:h-[4rem] h-[11rem] w-full px-[1rem] lg:w-full rounded">
      <div className="flex w-full relative justify-between flex-col lg:flex-row">
        <p className="w-full p-2 relative m-auto truncate">{longLink}</p>
        <div className="flex text-start flex-col lg:flex-row justify-center items-center gap-2">
          <p className="p-2 w-full rounded-md relative m-0 lg:m-auto">
            {shortLink}
          </p>
          {copySuccess === "Copied!" ? (
            <p className="list-none bg-[#3A3054] hover:bg-[#736d84] text-white cursor-pointer rounded h-[2rem]  w-full lg:w-[6.438rem] flex items-center justify-center">
              Copied!
            </p>
          ) : (
            <button
              onClick={(e) => copyToClipboard({ event: e, shortLink })}
              className="list-none bg-[rgb(43,208,208)] hover:bg-[#b2e5ee] text-white cursor-pointer rounded h-[2rem]  w-full lg:w-[6.438rem] flex items-center justify-center"
            >
              Copy
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenedLink;
