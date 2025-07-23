"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { CircularText } from "../animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomeSpecializedRegistrationFilings = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const circularRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for heading animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reset",
        },
      });

      tl.from([line1Ref.current, line2Ref.current], {
        yPercent: 100,
        opacity: 0,
        skewY: 8,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.15,
        clipPath: "inset(0 0 100% 0)",
      });

      // CircularText 3D entrance
      gsap.from(circularRef.current, {
        scale: 0.4,
        rotateY: 90,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.6,
        ease: "expo.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section className="bg-white">
      
      <div className="flex justify-between p-16 items-center" ref={sectionRef}>
        <div className="font-medium text-4xl space-y-2">
          <p ref={line1Ref} className="general-sans overflow-hidden ">
            Specialized
          </p>
          <p ref={line2Ref} className="general-sans overflow-hidden ">
            Registration & Filings
          </p>
        </div>

        <div ref={circularRef}>
          <CircularText
            text="YES*TO*BOSS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>

      <Marquee autoFill={true}>
        <div className="flex gap-7 flex-shrink-0 overflow-x-auto ms-5">
          <div className="h-72 w-72 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-56 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-64 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
        </div>
      </Marquee>

      <Marquee autoFill={true} className="mt-7" direction="right">
        <div className="flex gap-7 flex-shrink-0 overflow-x-auto ms-5">
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
          <div className="h-72 w-96 flex-shrink-0 rounded-3xl bg-black relative">
            <div className="absolute z-10 w-full h-full rounded-3xl">
              <Image
                alt="lo"
                src={"./images/dummy-image1.svg"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 z-50 absolute bottom-4 left-4 general-sans text-white">
              <p className="text-2xl font-medium">Business Registration</p>
              <p className=" font-normal">(Startup & Entity Formation)</p>
            </div>
          </div>
        </div>
      </Marquee>

      <div className="flex items-center gap-3 p-16 justify-center general-sans">
        <div className="h-8 w-16 bg-[#D6D6EB] rounded-2xl"></div>
        <p className="text-5xl font-bold">Financial Consultancy &</p>
        <p className="text-[#a8a6c9] text-5xl font-bold">Analysis,</p>
        <div className="h-8 w-16 bg-[#a8a6c9] rounded-2xl"></div>
        <p className="text-[#a8a6c9] text-5xl font-bold">Tax Pro</p>
      </div>
    </section>
  );
};
