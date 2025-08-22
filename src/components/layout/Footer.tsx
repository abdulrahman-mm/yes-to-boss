import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import TextPressure from "../animations/TextPressure";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-black text-white max-w-screen min-h-screen general-sans">
      <div className="p-5 md:p-10 lg:p-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5 md:gap-10 w-full lg:w-1/2 text-center lg:text-left flex-col lg:flex-row">
            <Image
              src={"/icons/yes-to-boss-white-logo.svg"}
              alt="yes-to-boss-logo"
              width={140}
              height={100}
            />
            {/* <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Subscribe Newsletter & Get Latest Updates
            </p> */}
          </div>

          {/* <div className="flex flex-col gap-1 justify-center items-center w-full lg:w-auto  lg:mt-0">
            <div className="bg-white rounded-4xl w-full max-w-md flex items-center justify-between py-1 px-1">
              <input
                type="text"
                placeholder="Enter Email id "
                className="outline-none text-black ps-5 w-full"
              />
              <button className="bg-black text-sm text-white rounded-4xl px-4 py-2">
                Submit
              </button>
            </div>
            <p className="text-sm mt-2">Signup to get first order free..</p>
          </div> */}
        </div>

        <hr className="border border-white/10 w-full mt-11" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mt-14">
          {/* Contact */}
          <div className=" ">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between text-sm">
                <p>Mobile</p>
                <p>+91 63799 20255</p>
              </div>
              <hr className="border border-white/10 w-full " />
              <div className="flex justify-between text-sm">
                <p>Email</p>
                <a href="mailto:yestobossservices@gmail.com">
                  <p>yestobossservices@gmail.com</p>
                </a>
              </div>
              <hr className="border border-white/10 w-full " />
            </div>

            <p className="mt-8">Follow Us</p>
            <div className="mt-2 flex gap-2">
              <Link
                target="_blank"
                href="https://www.facebook.com/share/1EkhGhedjN/"
              >
                <Image
                  alt="facebook-icon"
                  src={"/icons/facebook-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              {/* <Image
                alt="x-icon"
                src={"/icons/x-icon.svg"}
                width={20}
                height={20}
              /> */}

              <Link
                target="_blank"
                href="https://www.instagram.com/yestobossservices?igsh=MTkzdWY3YmtpdGUwNQ=="
              >
                <Image
                  alt="threads-icon"
                  src={"/icons/instagram-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/company/yestoboss/"
              >
                <Image
                  alt="threads-icon"
                  src={"/icons/linkedin-icon.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className=" ">
            <p className="font-semibold text-xl">Office Address</p>
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex gap-2">
                {/* <IoLocationOutline className="text-2xl " /> */}
                <img src="/icons/footer-location-icon.svg" alt="" className="h-fit" />
                <p className="text-sm">
                  No 33/14, Ground floor, Jayammal St, Ayyavoo Colony,
                  Aminjikarai, Chennai, Tamil Nadu 600029
                </p>
              </div>
              <div className="flex gap-2 items-center">
              <img src="/icons/footer-mail-icon.svg" alt="" className="h-fit" />
                {/* <LuMailOpen className="text-md" /> */}
                {/* <p className="text-sm">yestobossservices@gmail.com</p> */}
                <a href="mailto:yestobossservices@gmail.com">
                  <p className="text-sm">yestobossservices@gmail.com</p>
                </a>
              </div>
              <div className="flex gap-2 items-center">
              <img src="/icons/footer-phone-icon.svg" alt="" className="h-fit" />
                {/* <FiPhoneCall className="text-md" /> */}
                <p className="text-sm">Phone : +91 63799 20255</p>
              </div>
              {/* <p className="underline text-sm text-center">View Map</p> */}
            </div>
          </div>

          {/* Links */}
          <div className=" ">
            <p className="font-semibold text-xl">Link</p>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/" className="text-sm">
                Home
              </Link>
              <Link href="/about" className="text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-sm">
                Contact
              </Link>
              <Link href="/services" className="text-sm">
                Services
              </Link>
              {/* <p className="text-sm">About Us</p> */}
              {/* <p className="text-sm">Contact Us</p> */}

              {/* <p className="text-sm">Services</p> */}
              {/* <p className="text-sm">Projects</p> */}
              {/* <p className="text-sm">Blog</p> */}
              {/* <p className="text-sm">Faq</p> */}
            </div>
          </div>

          {/* Creative Links */}
          {/* <div className=" ">
            <p className="font-semibold text-xl">Creative Link</p>
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm">Strategy</p>
              <p className="text-sm">Creative Finance</p>
              <p className="text-sm">Business Finance</p>
              <p className="text-sm">Online Strategy</p>
              <p className="text-sm">Digital Marketing</p>
              <p className="text-sm">Insights</p>
            </div>
          </div> */}

          {/* Policy */}
          {/* <div className=" ">
            <p className="font-semibold text-xl">Policy</p>
            <div className="mt-6 flex flex-col gap-2">
              <p className="text-sm">Support</p>
              <p className="text-sm">Pricing</p>
              <p className="text-sm">Testimonials</p>
              <p className="text-sm">Faq</p>
              <p className="text-sm">Signup</p>
              <p className="text-sm">Signin</p>
            </div>
          </div> */}

          {/* Office Address */}
        </div>

        <hr className="border border-white/10 w-full mt-7" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-5 text-center md:text-left">
          <div>
            <p className="text-sm">
              &copy; 2022-2025 | Alrights Reserved by yestoboss.com
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
            <p className="text-sm sm:text-base">
              Monday-Saturday : 10.00 AM - 07.00 PM
            </p>
            {/* <p className="border border-r border-white/40 h-4 hidden sm:block"></p>
            <p>
              Book An Appointments{" "}
              <span>
                <FaPlay className="text-white inline ms-2 text-xs" />
              </span>
            </p> */}
          </div>
        </div>
      </div>

      {/* TextPressure Section */}
      <div className="hidden md:block my-11 relative">
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

      <div className="w-screen  px-3 flex md:hidden items-center justify-center">
        <div className="flex w-full h-full text-[10vw] font-bold">
          <p className="flex-1 text-center">Y</p>
          <p className="flex-1 text-center">E</p>
          <p className="flex-1 text-center">S</p>
          <p className="flex-1 text-center">T</p>
          <p className="flex-1 text-center">O</p>
          <p className="flex-1 text-center">B</p>
          <p className="flex-1 text-center">O</p>
          <p className="flex-1 text-center">S</p>
          <p className="flex-1 text-center">S</p>
        </div>
      </div>
    </section>
  );
};
