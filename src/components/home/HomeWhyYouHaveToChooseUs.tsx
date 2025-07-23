// "use client";
// import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";
// import Image from "next/image";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CountUp } from "../animations";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeWhyYouHaveToChooseUs = () => {
//   const textRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     if (!textRef.current) return;

//     gsap.fromTo(
//       textRef.current,
//       {
//         y: 60,
//         scale: 0.98,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         scale: 1,
//         opacity: 1,
//         duration: 1.2,
//         ease: "back.out(1.7)", // modern "springy" bounce
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 85%", // adjust based on layout
//           toggleActions: "play play play play",
//         },
//       }
//     );
//   }, []);

//   const paraRef = useRef<HTMLParagraphElement | null>(null);

//   useEffect(() => {
//     if (!paraRef.current) return;

//     gsap.fromTo(
//       paraRef.current,
//       {
//         clipPath: "inset(0 100% 0 0)",
//         opacity: 0,
//       },
//       {
//         clipPath: "inset(0 0% 0 0)",
//         opacity: 1,
//         duration: 5.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: paraRef.current,
//           start: "top 80%", // when paragraph top hits 80% of viewport
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="p-16 bg-white">
//       <div className="flex justify-between items-center ">
//         <p
//           ref={textRef}
//           className="text-6xl text-[#070707]  w-1/3 satoshi font-bold"
//         >
//           Why You Have to Choose Us
//         </p>

//         {/* <p className="text-[#6B7280] w-1/4 satoshi font-medium">
//           Whatever your customers' payment preferences, we’ll help you find the
//           right solution for your business.
//         </p> */}
//         <p
//           ref={paraRef}
//           className="text-[#6B7280] w-1/4 satoshi font-medium leading-relaxed"
//           style={{
//             clipPath: "inset(0 100% 0 0)",
//             opacity: 0,
//             display: "inline-block",
//           }}
//         >
//           Whatever your customers' payment preferences, we’ll help you find the
//           right solution for your business.
//         </p>
//       </div>

//       <div className="flex gap-14 mt-28 satoshi font-medium">
//         <div className="flex flex-col w-1/3  ">
//           <div className="flex bg-black w-fit text-white items-center  gap-2 px-2 py-1 rounded-4xl">
//             <BsPeopleFill />
//             <p>Customers</p>
//           </div>
//           <div className="flex mt-3 ">
//             <p className="text-9xl  font-medium">
//               {/* 20K{" "} */}
//               <CountUp
//                 from={0}
//                 to={20}
//                 separator=","
//                 direction="up"
//                 duration={2}
//                 className="count-up-text"
//               />
//               K
//             </p>

//             <p className="text-5xl">+</p>
//           </div>

//           <p className="text-[#6B7280] text-lg mt-5  satoshi font-normal">
//             In 38 countries, we work as one global team to help clients
//           </p>
//         </div>

//         <div className="border-e border-dashed border-[#D1D5DB]"></div>

//         <div className="flex flex-col w-1/3 ">
//           <div className="flex bg-black w-fit text-white items-center  gap-2 px-2 py-1 rounded-4xl">
//             <Image
//               src={"./icons/impact-icon.svg"}
//               width={17}
//               height={17}
//               alt="impact-icon"
//             />
//             <p>Impact</p>
//           </div>
//           <div className="flex mt-3 ">
//             <p className="text-9xl  font-medium">
//               {" "}
//               <CountUp
//                 from={0}
//                 to={98}
//                 separator=","
//                 direction="up"
//                 duration={2}
//                 className="count-up-text"
//               />
//             </p>
//             <p className="text-5xl">%</p>
//           </div>
//           <p className="text-[#6B7280] text-lg satoshi mt-5 font-normal">
//             We have worked with 89% of the Global 500 companies.
//           </p>
//         </div>
//         <div className="border-e border-dashed border-[#D1D5DB]"></div>

//         <div className="flex flex-col w-1/3">
//           <div className="flex bg-black w-fit text-white items-center  gap-2 px-2 py-1 rounded-4xl">
//             <FaBars className="rotate-90 font-extrabold" />
//             <p>Experience</p>
//           </div>
//           <div className="flex mt-3 ">
//             <p className="text-9xl  font-medium">
//               {" "}
//               <CountUp
//                 from={0}
//                 to={89}
//                 separator=","
//                 direction="up"
//                 duration={2}
//                 className="count-up-text"
//               />{" "}
//             </p>
//             <p className="text-5xl">%</p>
//           </div>
//           <p className="text-[#6B7280] text-lg satoshi mt-5 font-normal">
//             We started with a ebellious mindset and set ourselves the challange
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };













"use client";
import React, { useRef, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

export const HomeWhyYouHaveToChooseUs = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const boxRefs = useRef<HTMLDivElement[]>([]); // for boxes animation

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      {
        y: 60,
        scale: 0.98,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!paraRef.current) return;

    gsap.fromTo(
      paraRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.2, // stagger based on index
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="p-16 bg-white">
      <div className="flex justify-between items-center">
        <p
          ref={textRef}
          className="text-6xl text-[#070707] w-1/3 satoshi font-bold"
        >
          Why You Have to Choose Us
        </p>

        <p
          ref={paraRef}
          className="text-[#6B7280] w-1/4 satoshi font-medium leading-relaxed"
          style={{
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            display: "inline-block",
          }}
        >
          Whatever your customers' payment preferences, we’ll help you find the
          right solution for your business.
        </p>
      </div>

      <div className="flex gap-14 mt-28 satoshi font-medium">
        {/* Box 1 */}
        <div
          className="flex flex-col w-1/3"
          ref={(el) => {
            boxRefs.current[0] = el!}}
        >
          <div className="flex bg-black w-fit text-white items-center gap-2 px-2 py-1 rounded-4xl">
            <BsPeopleFill />
            <p>Customers</p>
          </div>
          <div className="flex mt-3">
            <p className="text-9xl font-medium">
              <CountUp
                from={0}
                to={20}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
              K
            </p>
            <p className="text-5xl">+</p>
          </div>
          <p className="text-[#6B7280] text-lg mt-5 satoshi font-normal">
            In 38 countries, we work as one global team to help clients
          </p>
        </div>

        <div className="border-e border-dashed border-[#D1D5DB]"></div>

        {/* Box 2 */}
        <div
          className="flex flex-col w-1/3"
          ref={(el) => {boxRefs.current[1] = el!}}
        >
          <div className="flex bg-black w-fit text-white items-center gap-2 px-2 py-1 rounded-4xl">
            <Image
              src={"./icons/impact-icon.svg"}
              width={17}
              height={17}
              alt="impact-icon"
            />
            <p>Impact</p>
          </div>
          <div className="flex mt-3">
            <p className="text-9xl font-medium">
              <CountUp
                from={0}
                to={98}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
            </p>
            <p className="text-5xl">%</p>
          </div>
          <p className="text-[#6B7280] text-lg satoshi mt-5 font-normal">
            We have worked with 89% of the Global 500 companies.
          </p>
        </div>

        <div className="border-e border-dashed border-[#D1D5DB]"></div>

        {/* Box 3 */}
        <div
          className="flex flex-col w-1/3"
          ref={(el) => {boxRefs.current[2] = el!}}
        >
          <div className="flex bg-black w-fit text-white items-center gap-2 px-2 py-1 rounded-4xl">
            <FaBars className="rotate-90 font-extrabold" />
            <p>Experience</p>
          </div>
          <div className="flex mt-3">
            <p className="text-9xl font-medium">
              <CountUp
                from={0}
                to={89}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
            </p>
            <p className="text-5xl">%</p>
          </div>
          <p className="text-[#6B7280] text-lg satoshi mt-5 font-normal">
            We started with a rebellious mindset and set ourselves the
            challenge
          </p>
        </div>
      </div>
    </section>
  );
};
