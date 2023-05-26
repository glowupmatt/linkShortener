"use client";

import Image from "next/image";
import linkShortener from "../utils/linkShortenerApi";
import {
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { string } from "prop-types";

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

const LinkInput: React.FC<ChangeLinksProps> = ({ setLinks }) => {
  const [linkInput, setLinkInput] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    linkShortener({ url: `${linkInput}` }).then((data) => {
      setLinks((prev) => {
        return [
          ...prev,
          {
            shortLink: data.result.full_short_link,
            longLink: linkInput,
          },
        ];
      });
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
  };
  return (
    <div className="flex items-center justify-center bg-[rgb(58,48,84)] h-40 w-93 rounded-2xl w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 relative w-4/5"
      >
        <input
          name="linkInput"
          placeholder="Shorten a link here..."
          onChange={onChangeHandler}
          type="text"
          value={linkInput}
          className="w-full p-2 rounded-md relative m-auto"
        />
        <button
          type="submit"
          className="list-none bg-[rgb(43,208,208)] hover:bg-[#b2e5ee] text-white cursor-pointer rounded p-3 w-full  flex align-center justify-center"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};

export default LinkInput;
