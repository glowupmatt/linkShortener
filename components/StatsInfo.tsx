"use client";
import Image from "next/image";
import ShortenedLink from "./ShortenedLink";

type ServicesType = {
  title: string;
  desc: string;
  img: string;
}[];

type LinksProps = {
  links: {
    longLink: string;
    shortLink: string;
  }[];
};

const StatsInfo: React.FC<LinksProps> = ({ links }) => {
  const services: ServicesType = [
    {
      title: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      img: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      img: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      img: "/images/icon-fully-customizable.svg",
    },
  ];

  return (
    <div className="bg-zinc-200 flex flex-col items-center justify-center text-center gap-[1rem] p-6 lg:py-[6.5rem] lg:h-full relative">
      {links.map((link, index) => {
        return (
          <div
            key={index}
            className="lg:top-[.25rem] top-[6.25rem] flex flex-col gap-[1rem] justify-center items-center w-full lg:w-[65%] relative"
          >
            <ShortenedLink
              longLink={link.longLink}
              shortLink={link.shortLink}
            />
          </div>
        );
      })}

      <div className=" mt-[7rem] gap-4 flex flex-col lg:w-[40%]">
        <h2 className="font-semibold text-2xl ">Advanced Statistics</h2>
        <p className="text-base">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-[2rem]">
        {services.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-[rgb(58,48,84)] relative top-10 rounded-full flex items-center justify-center p-5 w-24 h-24 ">
              <Image
                src={info.img}
                alt=""
                height={80}
                width={80}
                className="w-full"
              />
            </div>
            <div className=" flex flex-col justify-evenly h-64 lg:text-start lg:items-start items-center px-4 pt-16 pb-10 gap-2 bg-white w-full rounded ">
              <h3 className="text-2xl font-semibold">{info.title}</h3>
              <p>{info.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsInfo;
