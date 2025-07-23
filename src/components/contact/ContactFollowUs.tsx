import React from "react";
import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";

export const ContactFollowUs = () => {
  return (
    <section>
      <div className="bg-black general-sans pt-16 pb-16 text-white">
        <Marquee autoFill={true} className="mt-7" direction="right">
          <div className="flex gap-5 items-center">
            <p className="text-white font-extralight text-[150px]">Follow Us</p>
            <img
              src="./icons/yes-to-boss-circle-logo.svg"
              alt=""
              style={{ animation: "spin 15s linear infinite" }}
              className=" w-[150px] h-[150px]"
            />
          </div>
        </Marquee>

        <div className="flex flex-col gap-8">
          
          <div className="flex justify-between px-16 mt-5">
            <p className="font-medium text-3xl">Instagram</p>
            <GoArrowUpRight className="text-4xl" />
          </div>

          <hr className="border-[#2F2F2F]"/>

            
          <div className="flex justify-between px-16 mt-5">
            <p className="font-medium text-3xl">Facebook</p>
            <GoArrowUpRight className="text-4xl" />
          </div>

          <hr className="border-[#2F2F2F]"/>

            
          <div className="flex justify-between px-16 mt-5">
            <p className="font-medium text-3xl">LinkedIn</p>
            <GoArrowUpRight className="text-4xl" />
          </div>

          <hr className="border-[#2F2F2F]"/>

            
          <div className="flex justify-between px-16 mt-5">
            <p className="font-medium text-3xl">X</p>
            <GoArrowUpRight className="text-4xl" />
          </div>

          <hr className="border-[#2F2F2F]"/>
        </div>
      </div>
    </section>
  );
};
