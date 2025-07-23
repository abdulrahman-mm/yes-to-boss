import React from "react";

export const HomeOurCoreServices = () => {
  return (
    <section className="p-12 bg-black">
      
      <div className="flex justify-center">
        <p className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans">
          Our Core Services
        </p>
      </div>

      <div className="flex flex-col justify-center mt-12 gap-16 items-center general-sans font-medium text-5xl">
        <p className="text-[#575757]  hover:text-white hover:scale-105 transition-all duration-500">
          01. Startup Proprietorship Firm Formation
        </p>
        <hr className="border border-[#464646] w-2/3" />

        <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
          02.GST Registration
        </p>
        <hr className="border border-[#464646] w-2/3" />

        <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
          03.TDS Returns Filings
        </p>
        <hr className="border border-[#464646] w-2/3" />

        <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
          04. Income Tax Return (ITR) Filing
        </p>
        <hr className="border border-[#464646] w-2/3" />

        <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
          05. Private Limited Company Registration
        </p>
      </div>
    </section>
  );
};
