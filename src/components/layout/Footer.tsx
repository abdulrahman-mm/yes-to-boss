import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import TextPressure from '../animations/TextPressure';



export const Footer = () => {
  return (
    <section className="bg-black  text-white max-w-screen min-h-screen general-sans">
      <div className="p-16">
        <div className="flex items-center justify-between  gap-5">
          <div className="flex items-center gap-10 w-1/2">
            <Image
              src={"./icons/yes-to-boss-white-logo.svg"}
              alt="yes-to-boss-logo"
              width={140}
              height={100}
            />
            <p className="text-4xl font-medium">
              Subscribe Newsletter & Get Latest Updates
            </p>
          </div>

          <div className="flex flex-col gap-1  justify-center items-center">
            <div className="bg-white rounded-4xl w-fit h-fit  flex items-center justify-between py-1 px-1">
              <input
                type="text"
                placeholder="Enter Email id "
                className="outline-none text-black ps-5 w-72"
              />
              <button className="bg-black text-sm text-white rounded-4xl px-9 py-3">
                Submit
              </button>
            </div>
            <p className="w-fit">Signup to get first order free..</p>
          </div>
        </div>

        <hr className="border border-white/10 w-full mt-11" />

        <div className="flex gap-14 mt-14">
          <div className="basis-[30%]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <p className="text-sm">Mobile</p>
                <p>+61 232 32425</p>
              </div>
              <hr className="border border-white/10 w-full " />

              <div className="flex justify-between">
                <p>Email</p>
                <p>yestoboss.com</p>
              </div>
              <hr className="border border-white/10 w-full " />
            </div>

            <p className="mt-8">Follow Us</p>
            <div className="mt-2 flex gap-2">
              <Image
                alt="facebook-icon"
                src={"./icons/facebook-icon.svg"}
                width={20}
                height={20}
              />
              <Image
                alt="x-icon"
                src={"./icons/x-icon.svg"}
                width={20}
                height={20}
              />
              <Image
                alt="threads-icon"
                src={"./icons/threads-icon.svg"}
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="flex-grow basis-[15%]">
            <p className="font-semibold text-xl">Link</p>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm">Home</p>
              <p className="text-sm">About Us</p>
              <p className="text-sm">Services</p>
              <p className="text-sm">Projects</p>
              <p className="text-sm">Blog</p>
              <p className="text-sm">Faq</p>
              <p className="text-sm">Contact Us</p>
            </div>
          </div>

          <div className="flex-grow basis-[15%]">
            <p className="font-semibold text-xl">Creative Link</p>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm">Strategy</p>
              <p className="text-sm">Creative Finance</p>
              <p className="text-sm">Business Finance</p>
              <p className="text-sm">Online Strategy</p>
              <p className="text-sm">Digital Marketing</p>
              <p className="text-sm">Insights</p>
            </div>
          </div>

          <div className="flex-grow basis-[15%]">
            <p className="font-semibold text-xl">Policy</p>

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm">Support</p>
              <p className="text-sm">Pricing</p>
              <p className="text-sm">Testimonials</p>
              <p className="text-sm">Faq</p>
              <p className="text-sm">Signup</p>
              <p className="text-sm">Signin</p>
            </div>
          </div>

          <div className="flex-grow basis-[15%]">
            <p className="font-semibold text-xl">Office Address</p>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex gap-2">
                <IoLocationOutline className="text-3xl w-20" />
                <p className="text-sm">
                  No 33/ 14 , Ground floor, Jayammal St, Ayyavoo Colony,
                  Aminjikarai, Chennai, Tamil Nadu 600029
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <LuMailOpen className="text-md" />
                <p className="text-sm">yestoboss@gmail.com</p>
              </div>

              <div className="flex gap-2 items-center">
                <FiPhoneCall className="text-md" />
                <p className="text-sm">Phone : 234 3834 549</p>
              </div>

              <p className="underline text-sm text-center">View Map</p>
            </div>
          </div>
        </div>

        <hr className="border border-white/10 w-full mt-7" />

        <div className="flex justify-between mt-5">
          <div>
            <p className="text-sm">
              &copy; 2022-2025 | Alrights Reserved by yestoboss.com{" "}
            </p>
          </div>

          <div className="flex gap-5 justify-between">
            <p>Monday-Saturday : 10.00 AM - 07.00 PM</p>
            <p className="border border-r border-white/40"></p>
            <p>
              Book An Appointments{" "}
              <span>
                <FaPlay className="text-white inline ms-5 text-xs" />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex text-[230px] h-fit justify-center text-white/10 font-semibold ">
        <p className="h-64">Y</p>
        <p className="h-64">E</p>
        <p className="h-64">S</p>
        <p className="h-64">T</p>
        <p className="h-64">O</p>
        <p className="h-64">B</p>
        <p className="h-64">O</p>
        <p className="h-64">S</p>
        <p className="h-64">S</p>
      </div> */}

      <div style={{position: 'relative', height: '300px',marginBottom:'50px'}}>
  <TextPressure
    text="YESTOBOSS"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
    </section>
  );
};
