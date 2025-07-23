// import React from "react";
// import { Header } from "../layout";
// import Image from "next/image";

// export const AboutHero = () => {
//   return (
//     <main>
//       <div className=" bg-black  mt-2  general-sans text-white">
//         <div className="w-[90vw] mx-auto">
//           <Header />
//         </div>

//         <div className="flex gap-5 mt-10 p-16 justify-between items-center">
//           <div className="w-1/2">
//             <div>
//               <p className=" text-6xl font-semibold leading-16">
//                 Precious, Integrity,
//               </p>
//               <p className=" text-6xl font-semibold leading-16">
//                 Strategy, Your{" "}
//                 <span className="bg-gradient-to-r from-[#FFFFFF] to-[#9F9F9F] text-transparent bg-clip-text">
//                   Success,
//                 </span>
//               </p>
//               <p className=" text-6xl font-semibold leading-16">Our Priority</p>
//             </div>
//             <p className="text-sm mt-5 font-normal w-2/3">
//               Providing expert accounting, tax planning, and financial
//               consulting services to help businesses grow, comply, and achieve
//               long-term success.
//             </p>

//             <div className="flex gap-5 mt-10">
//               <button className="bg-white px-10 py-2 text-black rounded-4xl text-sm  font-medium">
//                 Get Started
//               </button>

//               <div className="flex ">
//                 <div className="w-9 h-9  rounded-full bg-gray-300"></div>
//                 <div className="w-9 h-9 -ms-3 rounded-full bg-gray-300"></div>
//                 <div className="w-9 h-9 -ms-3 rounded-full bg-gray-300"></div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-8 ">
//             <div className="relative h-52 w-96 right-56">
//               <div className="absolute bg-red-500 w-full h-full rounded-2xl z-10"></div>
//               <div className="absolute -left-32 -top-16 bg-blue-500 rounded-2xl w-full h-2/3 z-10"></div>
//             </div>

//             <div className="relative h-96 w-80">
//               <div className="absolute bg-purple-600 rounded-xl p-3 w-3/4 h-1/5 z-50 left-28 top-1/3">
//                 <div className="flex justify-between general-sans font-medium text-xs text-black">
//                   <p>104 Reports</p>
//                   <p>100%</p>
//                 </div>

//                 <Image
//                   alt="a"
//                   src={"./images/reports.svg"}
//                   fill
//                   className="mx-2  mt-1 w-full"
//                 />
//               </div>

//               <div className="absolute bg-green-500 w-full h-full rounded-2xl z-10"></div>
//               <div className="absolute bottom-5 -left-64 bg-yellow-500 rounded-2xl w-full h-1/2 z-10"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

"use client";

import React, { useEffect, useRef } from "react";
import { Header } from "../layout";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutHero = () => {
  const leftContentRef = useRef(null);
  // const rightBoxesRef = useRef(null);
  const rightBoxesRef = useRef<HTMLDivElement>(null);

  const cardRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    gsap.from(leftContentRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftContentRef.current,
        start: "top 80%",
      },
    });

    gsap.from(avatarRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: avatarRef.current,
        start: "top 100%",
      },
    });

    if (rightBoxesRef.current) {
      gsap.from(Array.from(rightBoxesRef.current.children), {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: rightBoxesRef.current,
          start: "top 85%",
        },
      });
    }

    gsap.from(cardRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <main>
      <div className="bg-black mt-2 general-sans text-white overflow-hidden">
        <div className="w-[90vw] mx-auto">
          <Header />
        </div>

        <div className="flex gap-5 mt-10 p-16 justify-between items-center">
          {/* LEFT SIDE */}
          <div className="w-1/2" ref={leftContentRef}>
            <div>
              <p className="text-6xl font-semibold leading-16">
                Precious, Integrity,
              </p>
              <p className="text-6xl font-semibold leading-16">
                Strategy, Your{" "}
                <span className="bg-gradient-to-r from-[#FFFFFF] to-[#9F9F9F] text-transparent bg-clip-text">
                  Success,
                </span>
              </p>
              <p className="text-6xl font-semibold leading-16">Our Priority</p>
            </div>

            <p className="text-sm mt-5 font-normal w-2/3">
              Providing expert accounting, tax planning, and financial
              consulting services to help businesses grow, comply, and achieve
              long-term success.
            </p>

            <div className="flex gap-5 mt-10" ref={avatarRef}>
              <button className="bg-white px-10 py-2 text-black rounded-4xl text-sm font-medium">
                Get Started
              </button>

              <div className="flex">
                <div className="w-9 h-9 rounded-full bg-gray-300"></div>
                <div className="w-9 h-9 -ms-3 rounded-full bg-gray-300"></div>
                <div className="w-9 h-9 -ms-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8" ref={rightBoxesRef}>
            <div className="relative h-52 w-96 right-56">
              <div className="absolute bg-red-500 w-full h-full rounded-2xl z-10"></div>
              <div className="absolute -left-32 -top-16 bg-blue-500 rounded-2xl w-full h-2/3 z-10"></div>
            </div>

            <div className="relative h-96 w-80">
              <div
                ref={cardRef}
                className="absolute bg-purple-600 rounded-xl p-3 w-3/4 h-1/5 z-50 left-28 top-1/3"
              >
                <div className="flex justify-between general-sans font-medium text-xs text-black">
                  <p>104 Reports</p>
                  <p>100%</p>
                </div>

                <Image
                  alt="a"
                  src={"./images/reports.svg"}
                  fill
                  className="mx-2 mt-1 w-full"
                />
              </div>

              <div className="absolute bg-green-500 w-full h-full rounded-2xl z-10"></div>
              <div className="absolute bottom-5 -left-64 bg-yellow-500 rounded-2xl w-full h-1/2 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
