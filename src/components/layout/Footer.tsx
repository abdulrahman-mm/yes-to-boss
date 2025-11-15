/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import TextPressure from "../animations/TextPressure";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  const router = useRouter();
  const textRef = useRef<HTMLParagraphElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (sunRef.current && textRef.current) {
  //     // Sun animation
  //     gsap.fromTo(
  //       sunRef.current,
  //       {
  //         y: 120,
  //         scale: 0.8,
  //         opacity: 0.6,
  //       },
  //       {
  //         y: -20,
  //         scale: 1.2,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current,
  //           start: "top 90%",
  //           end: "center center", // animation finishes at center of screen
  //           scrub: true,
  //         },
  //       }
  //     );

  //     // Text animation (synced with sun)
  //     gsap.fromTo(
  //       textRef.current,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current, // same trigger as sun
  //           start: "top 90%", // start together
  //           end: "top 50%", // finish together
  //           scrub: true,
  //         },
  //       }
  //     );
  //   }
  // }, []);

  //   useEffect(() => {
  //   if (sunRef.current && textRef.current) {
  //     // Sun animation
  //     gsap.fromTo(
  //       sunRef.current,
  //       {
  //         y: 120,
  //         scale: 0.8,
  //         opacity: 0.6,
  //       },
  //       {
  //         y: -20,
  //         scale: 1.2,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current,
  //           start: "top 90%",
  //           end: "center center",
  //           toggleActions: "play reverse play reverse", // 👈 this line
  //         },
  //       }
  //     );

  //     // Text animation (synced with sun)
  //     gsap.fromTo(
  //       textRef.current,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current,
  //           start: "top 90%",
  //           end: "top 50%",
  //           toggleActions: "play reverse play reverse", // 👈 repeat on scroll up/down
  //         },
  //       }
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (sunRef.current && textRef.current) {
  //     // Register GSAP plugins (if not already)
  //     gsap.registerPlugin(ScrollTrigger);

  //     // Sun animation — smooth and natural
  //     gsap.fromTo(
  //       sunRef.current,
  //       {
  //         y: 150,
  //         scale: 0.8,
  //         opacity: 0.5,
  //       },
  //       {
  //         y: -40,
  //         scale: 1.2,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current,
  //           start: "top 95%", // starts early
  //           end: "bottom center", // lasts longer
  //           scrub: 1.5, // 👈 smooth scroll-linked animation (1.5s delay)
  //           invalidateOnRefresh: true,
  //         },
  //       }
  //     );

  //     // Text animation — synced & smooth
  //     gsap.fromTo(
  //       textRef.current,
  //       {
  //         y: 80,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sunRef.current,
  //           start: "top 90%",
  //           end: "bottom center",
  //           scrub: 1.5, // 👈 same smoothing
  //           invalidateOnRefresh: true,
  //         },
  //       }
  //     );
  //   }
  // }, []);

  useEffect(() => {
    if (!sunRef.current || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const sunAnim = gsap.fromTo(
      sunRef.current,
      {
        y: 150,
        scale: 0.8,
        opacity: 0.5,
      },
      {
        y: -40,
        scale: 1.2,
        opacity: 1,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: sunRef.current,
          start: "top 95%",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: false,
        },
      }
    );

    const textAnim = gsap.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sunRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: false,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      sunAnim.kill();
      textAnim.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-black text-white  min-h-screen general-sans">
      <div className="p-5 md:p-10 lg:p-16">
        <div className="relative w-full h-[40vh] flex justify-center items-end overflow-hidden">
          <div
            ref={textRef}
            className="absolute top-6 z-30 flex justify-center items-center gap-5 w-full flex-col"
          >
            <p className="text-transparent bg-gradient-to-r from-white/20 via-white to-white/20 bg-clip-text w-[60%]  font-medium text-5xl mx-auto text-center ">
              Tax Made Simple. Growth Made Easy.
            </p>

            <button
              onClick={() => router.push("/contact-us")}
              className="relative overflow-hidden bg-white text-black px-20 py-5 font-medium text-lg cursor-pointer rounded-full transition-all duration-1000 group hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.2)]"
            >
              <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                Get In Touch
              </span>
              <span className="absolute left-1/2 top-full -translate-x-1/2 transition-all duration-200 group-hover:top-1/2 group-hover:-translate-y-1/2">
                Let’s Talk
              </span>
            </button>
          </div>

          <div className="absolute w-full h-[10%] bg-gradient-to-b from-black to-transparent top-0 z-30 overflow-hidden"></div>
          <div className="absolute w-full h-full bottom-1 backdrop-blur-3xl z-20 overflow-hidden"></div>
          <div
            ref={sunRef}
            className="h-48 w-96 bg-[#8695D4] z-10 rounded-full absolute bottom-[-10vh]"
          ></div>
        </div>

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
                <a href="tel:+91 63799 20255">
                  <p>+91 63799 20255</p>
                </a>
              </div>
              <hr className="border border-white/10 w-full " />
              <div className="flex justify-between text-sm">
                <p>Email</p>
                <a href="mailto:yestobossconsultancy@gmail.com">
                  <p>yestobossconsultancy@gmail.com</p>
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
                <img
                  src="/icons/footer-location-icon.svg"
                  alt=""
                  className="h-fit"
                />
                <p className="text-sm">
                  No 33/14, Ground floor, Jayammal St, Ayyavoo Colony,
                  Aminjikarai, Chennai, Tamil Nadu 600029
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/icons/footer-mail-icon.svg"
                  alt=""
                  className="h-fit"
                />
                {/* <LuMailOpen className="text-md" /> */}
                {/* <p className="text-sm">yestobossservices@gmail.com</p> */}
                <a href="mailto:yestobossconsultancy@gmail.com">
                  <p className="text-sm">yestobossconsultancy@gmail.com</p>
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="/icons/footer-phone-icon.svg"
                  alt=""
                  className="h-fit"
                />
                {/* <FiPhoneCall className="text-md" /> */}
                <a href="tel:+91 63799 20255">
                  <p className="text-sm">Phone : +91 63799 20255</p>
                </a>
              </div>

              <a
                target="_blank"
                href="https://maps.app.goo.gl/jy9L1T6GHZW7G1gj7"
                className="underline text-sm underline-offset-4"
              >
                View Map
              </a>
            </div>
          </div>

          {/* Links */}
          <div className=" ">
            <p className="font-semibold text-xl">Link</p>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/" className="text-sm">
                Home
              </Link>
              <Link href="/about-us" className="text-sm">
                About Us
              </Link>
              <Link href="/contact-us" className="text-sm">
                Contact
              </Link>
              <Link href="/services" className="text-sm">
                Services
              </Link>
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

      <div className="max-w-screen  px-3 flex md:hidden items-center justify-center">
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
