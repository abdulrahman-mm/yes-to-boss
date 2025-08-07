"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { CircularText } from "../animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 const HomeSpecializedRegistrationFilings = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const circularRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation with skewY and clipPath
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
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
        willChange: "transform, opacity, clip-path",
      });

      // CircularText animation
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
          start: "top 60%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white overflow-x-hidden">
      <div
        className="flex flex-wrap justify-between items-center p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 gap-5 md:gap-8"
        ref={sectionRef}
      >
        <div className="font-medium text-2xl sm:text-3xl md:text-4xl space-y-2  md:text-left">
          <p
            ref={line1Ref}
            className="general-sans overflow-hidden will-change-transform"
            style={{ willChange: "transform, opacity, clip-path" }}
          >
            Specialized
          </p>
          <p
            ref={line2Ref}
            className="general-sans overflow-hidden will-change-transform"
            style={{ willChange: "transform, opacity, clip-path" }}
          >
            Registration & Filings
          </p>
        </div>

        <div ref={circularRef} className="hidden md:block">
          <CircularText
            text="YES*TO*BOSS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>

      {/* === Marquee Section 1 === */}
      <Marquee autoFill={true}>
        <div className="flex gap-5 md:gap-7 flex-shrink-0 overflow-x-auto px-3 py-4">
          {[
            {
              title: "Trademark Registration",
              subTitle: "Protect Your Brand Identity",
              image: "/images/home-specializedRegistration-image1.jpg",
            },
            {
              title: "Income Tax Filing (ITR)",
              subTitle: "Individuals & Businesses – ITR-1 to ITR-7",
              image: "/images/home-specializedRegistration-image2.jpg",
            },
            {
              title: "Logo & Design Registration",
              subTitle: "Safeguard Creative Assets",
              image: "/images/home-specializedRegistration-image3.jpg",
            },
            {
              title: "FSSAI Registration & License",
              subTitle: "Food Business Compliance",
              image: "/images/home-specializedRegistration-image4.jpg",
            },
            {
              title: "MCA Annual Filings",
              subTitle: "Corporate Compliance – AOC-4, MGT-7, ADT-1, etc.",
              image: "/images/home-specializedRegistration-image5.jpg",
            },
          ].map((item, i) => (
            <div
              key={`marquee-1-${i}`}
              className={`group h-64 sm:h-72 ${
                i % 2 === 0 ? "w-72 sm:w-80" : "w-[320px] sm:w-[450px]"
              } flex-shrink-0 rounded-3xl bg-black relative`}
            >
              <div className="absolute w-full h-full group-hover:bg-black/40 transition-all duration-1000 bg-black/75 z-20 rounded-3xl"></div>
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black from-70% transition-all duration-1000 opacity-0 group-hover:opacity-100 z-30 rounded-3xl"></div>
              <div className="absolute z-10 w-full h-full rounded-3xl">
                <Image
                  alt="card"
                  src={item.image}
                  fill
                  className="rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 z-50 absolute bottom-3 left-3 sm:bottom-4 sm:left-4 general-sans text-white">
                <p className="text-lg sm:text-2xl font-medium">{item.title}</p>
                <p className="text-sm sm:text-base font-normal">
                  ({item.subTitle})
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* === Marquee Section 2 === */}
      <Marquee autoFill={true} className="" direction="right">
        <div className="flex gap-5 md:gap-7 flex-shrink-0 overflow-x-auto px-3 py-4">
          {[
            {
              title: "HR & Payroll Services",
              subTitle: "Employee Compliance Solutions",
              image: "/images/home-specializedRegistration-image6.jpg",
            },
            {
              title: "E-Way Bill & E-Invoice",
              subTitle: "Digital Tax Documents",
              image: "/images/home-specializedRegistration-image7.jpg",
            },
            {
              title: "Professional Tax Registration",
              subTitle: "State Tax Compliance",
              image: "/images/home-specializedRegistration-image8.jpg",
            },
            {
              title: "TDS & TCS Compliance",
              subTitle: "Timely Tax Deductions – 24Q, 26Q, 27Q, 27EQ Returns",
              image: "/images/home-specializedRegistration-image9.jpg",
            },
          ].map((item, i) => (
            <div
              key={`marquee-2-${i}`}
              className={`h-64 sm:h-72 group ${
                i % 2 === 0 ? "w-80 sm:w-96" : "w-[300px] sm:w-[550px]"
              } flex-shrink-0 rounded-3xl bg-black relative`}
            >
              <div className="absolute w-full h-full group-hover:bg-black/40 transition-all duration-1000 bg-black/75 z-20 rounded-3xl"></div>
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black from-70% transition-all duration-1000 opacity-0 group-hover:opacity-100 z-30 rounded-3xl"></div>
              <div className="absolute z-10 w-full h-full rounded-3xl">
                <Image
                  alt="card"
                  src={item.image}
                  fill
                  className="rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 z-50 absolute bottom-3 left-3 sm:bottom-4 sm:left-4 general-sans text-white">
                <p className="text-lg sm:text-2xl font-medium">{item.title}</p>
                <p className="text-sm sm:text-base font-normal">
                  ({item.subTitle})
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* === Footer Tagline Section === */}
      <div className="flex flex-wrap  items-center justify-center gap-2 sm:gap-6 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 general-sans text-center sm:text-left">
        <video
          src="/videos/home-specialized-registration-video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-10 w-20 sm:h-12 sm:w-24 rounded-3xl object-cover hover:w-36 transition-all duration-700 hidden sm:block"
        />
        <p className="text-xl sm:text-4xl md:text-5xl font-bold">
          Financial Consultancy &
        </p>
        <p className="text-[#a8a6c9] text-xl sm:text-4xl md:text-5xl font-bold">
          Analysis,
        </p>
        <video
          src="/videos/home-specialized-registration-video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-10 w-20 sm:h-12 sm:w-24 rounded-3xl object-cover hover:w-36 transition-all duration-700"
        />
        <p className="text-[#a8a6c9] text-xl sm:text-4xl md:text-5xl font-bold">
          Tax Pro
        </p>
      </div>
    </section>
  );
};


export default HomeSpecializedRegistrationFilings;