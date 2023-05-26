"use client";

const GetStarted = () => {
  return (
    <div className="bg-indigo-950 relative h-72">
      <img
        alt=""
        src="/images/bg-boost-desktop.svg"
        className="w-full h-full"
      />
      <div className="absolute flex flex-col justify-center items-center w-full h-full top-0 text-white gap-3">
        <h2 className="text-2xl font-bold">Boost your links today</h2>
        <button className="p-3 w-[11.75rem] bg-[rgb(43,208,208)] rounded-full hover:bg-[#b2e5ee] text-white">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
