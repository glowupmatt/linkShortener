"use state";

type FeaturesResources = {
  title: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
}[];

type CompanyArray = {
  title: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
}[];

type IconInfo = {
  icon: string;
}[];

const Footer: React.FC = () => {
  const featuresResources: FeaturesResources = [
    {
      title: "Features",
      optionOne: "Link Shortening",
      optionTwo: "Branded Links",
      optionThree: "Analytics",
    },
    {
      title: "Resources",
      optionOne: "Blog",
      optionTwo: "Developers",
      optionThree: "Support",
    },
  ];

  const companyArray: CompanyArray = [
    {
      title: "Company",
      optionOne: "About",
      optionTwo: "Our Team",
      optionThree: "Careers",
      optionFour: "Contact",
    },
  ];

  const socialIcons: IconInfo = [
    { icon: "/images/icon-facebook.svg" },
    { icon: "/images/icon-twitter.svg" },
    { icon: "/images/icon-pinterest.svg" },
    { icon: "/images/icon-instagram.svg" },
  ];

  return (
    <div className="bg-[#232127] flex flex-col items-center justify-center gap-5 p-5 lg:p-[3.25rem] lg:flex-row lg:gap-12 lg:items-start">
      <img alt="" src="/images/logo.svg" className="invert" />
      {featuresResources.map((items, index) => (
        <div
          className="text-center gap-3 flex flex-col lg:text-start lg:relative lg:top-0"
          key={index}
        >
          <h2 className="text-white">{items.title}</h2>
          <div className="flex flex-col gap-2 text-gray-400">
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionOne}
            </p>
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionTwo}
            </p>
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionThree}
            </p>
          </div>
        </div>
      ))}
      {companyArray.map((items, index) => (
        <div
          className="text-center gap-3 flex flex-col lg:text-start"
          key={index}
        >
          <h2 className="text-white">{items.title}</h2>
          <div className="flex flex-col gap-2 text-gray-400">
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionOne}
            </p>
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionTwo}
            </p>
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionThree}
            </p>
            <p className="hover:text-[#b2e5ee] text-gray-400 cursor-pointer">
              {items.optionFour}
            </p>
          </div>
        </div>
      ))}
      <div className="flex gap-6">
        {socialIcons.map((logo, index) => (
          <div key={index}>
            <img className="cursor-pointer" src={logo.icon} alt={logo.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
