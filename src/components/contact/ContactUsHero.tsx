import React from "react";
import { Header } from "../layout";
import Image from "next/image";

export const ContactUsHero = () => {
  return (
    <main className=" rounded-b-[60px] bg-white">
      <div className=" pt-2   rounded-b-[60px]">
        <div className="w-[90vw] mx-auto">
          <Header bgColor="black" textColor="white"/>
        </div>

        <div className="flex gap-5 general-sans px-44 justify-between pt-16 h-full items-center">

          <div className="flex flex-col  gap-7  w-2/3 ">
            <p className=" text-5xl font-medium">Get Your Queries Answered Instantly on <span className="font-semibold bg-gradient-to-r from-[#047D00] to-[#0DC707] text-transparent bg-clip-text">WhatsApp</span> </p>
            <p className="text-lg">Whether you need help with services, pricing, or general inquiries, our team is just a message away</p>
            <p  className="text-lg">Connect With Our Support Team!</p>
            <button className="bg-gradient-to-r  from-[#212121] to-[#070707] px-8 py-3 rounded-4xl w-fit text-white">Chat now</button>
          </div>

          <div className="relative">
            <Image alt="aa" src={'./images/contact-us-hero.svg'} width={400} height={500}/>
            <Image alt="aa" className="absolute" src={'./icons/whatsapp-icon.svg'} width={100} height={100}/>
            <Image alt="aa" className="absolute" src={'./icons/whatsapp-icon.svg'} width={100} height={100}/>
          </div>

        </div>
      </div>
    </main>
  );
};
