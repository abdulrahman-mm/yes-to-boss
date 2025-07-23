// import Image from "next/image";
// import React from "react";

// export const AboutOurHistory = () => {
//   return (
//     <section className="min-h-screen">
//       <div className="grid grid-cols-3 general-sans p-16 gap-5">
//         <div className=" grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
//           <div className="bg-white rounded-2xl row-span-2">
//             <div className="w-full h-[70%] relative rounded-2xl">
//               <Image
//                 src={"./images/dummy-image1.svg"}
//                 fill
//                 className="absolute w-full h-full object-cover rounded-t-2xl"
//                 alt="a"
//               />
//             </div>
//             <div className="p-3">
//               <p className="font-medium  text-2xl">
//                 2020 — Digital Transformation
//               </p>
//               <p className="font-normal  text-sm">
//                 Introduced full-service payroll, auditing, and financial
//                 advisory to meet growing client demands.
//               </p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]">
//             <Image
//               src={"./icons/home-history-icon.svg"}
//               width={50}
//               height={50}
//               alt="aa"
//             />

//             <p className="font-medium text-2xl mt-5">
//               2012 — Founded with a Vision
//             </p>
//             <p className="font-normal text-sm">
//               Started as a small team of passionate accountants dedicated to
//               helping local businesses manage their finances with confidence
//               Reached a major milestone by partnering with over 100 clients{" "}
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-5 grid-cols-1 grid-rows-3">
//           <div className="bg-white rounded-2xl row-span-4">
            
//             <div className="w-full h-[80%] relative rounded-2xl">
//               <Image
//                 src={"./images/dummy-image1.svg"}
//                 fill
//                 className="absolute w-full h-full object-cover rounded-t-2xl"
//                 alt="a"
//               />
//             </div>
//             <div className="p-3">
//               <p className="font-medium text-2xl">
//                 2020 — Digital Transformation
//               </p>
//               <p className="font-normal text-sm">
//                 Introduced full-service payroll, auditing, and financial
//                 advisory to meet growing client demands.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className=" grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
//           <div className="bg-white rounded-2xl row-span-2">
//             <div className="w-full h-[70%] relative rounded-2xl">
//               <Image
//                 src={"./images/dummy-image1.svg"}
//                 fill
//                 className="absolute w-full h-full object-cover rounded-t-2xl"
//                 alt="a"
//               />
//             </div>
//             <div className="p-3">
//               <p className="font-medium  text-2xl">
//                 2020 — Digital Transformation
//               </p>
//               <p className="font-normal  text-sm">
//                 Introduced full-service payroll, auditing, and financial
//                 advisory to meet growing client demands.
//               </p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]">
//             <Image
//               src={"./icons/home-history-icon.svg"}
//               width={50}
//               height={50}
//               alt="aa"
//             />

//             <p className="font-medium text-2xl mt-5">
//               2012 — Founded with a Vision
//             </p>
//             <p className="font-normal text-sm">
//               Started as a small team of passionate accountants dedicated to
//               helping local businesses manage their finances with confidence
//               Reached a major milestone by partnering with over 100 clients{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };















"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutOurHistory = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-3 general-sans p-16 gap-5">
        {/* Left Column */}
        <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
          <div
            ref={(el) => {
              cardsRef.current[0] = el}}
            className="bg-white rounded-2xl row-span-2"
          >
            <div className="w-full h-[70%] relative rounded-2xl">
              <Image
                src={"/images/dummy-image1.svg"}
                fill
                className="absolute w-full h-full object-cover rounded-t-2xl"
                alt="a"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-2xl">
                2020 — Digital Transformation
              </p>
              <p className="font-normal text-sm">
                Introduced full-service payroll, auditing, and financial
                advisory to meet growing client demands.
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              cardsRef.current[1] = el}}
            className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]"
          >
            <Image
              src={"/icons/home-history-icon.svg"}
              width={50}
              height={50}
              alt="aa"
            />

            <p className="font-medium text-2xl mt-5">
              2012 — Founded with a Vision
            </p>
            <p className="font-normal text-sm">
              Started as a small team of passionate accountants dedicated to
              helping local businesses manage their finances with confidence.
              Reached a major milestone by partnering with over 100 clients.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="grid gap-5 grid-cols-1 grid-rows-3">
          <div
            ref={(el) => {cardsRef.current[2] = el}}
            className="bg-white rounded-2xl row-span-4"
          >
            <div className="w-full h-[80%] relative rounded-2xl">
              <Image
                src={"/images/dummy-image1.svg"}
                fill
                className="absolute w-full h-full object-cover rounded-t-2xl"
                alt="a"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-2xl">
                2021 — Nationwide Expansion
              </p>
              <p className="font-normal text-sm">
                Expanded services nationwide, enabling remote support and digital-first operations for clients across India.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
          <div
            ref={(el) => {cardsRef.current[3] = el}}
            className="bg-white rounded-2xl row-span-2"
          >
            <div className="w-full h-[70%] relative rounded-2xl">
              <Image
                src={"/images/dummy-image1.svg"}
                fill
                className="absolute w-full h-full object-cover rounded-t-2xl"
                alt="a"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-2xl">
                2022 — Fintech Integration
              </p>
              <p className="font-normal text-sm">
                Integrated cutting-edge fintech tools to offer smarter
                budgeting, forecasting, and automation for clients.
              </p>
            </div>
          </div>

          <div
            ref={(el) => {cardsRef.current[4] = el}}
            className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]"
          >
            <Image
              src={"/icons/home-history-icon.svg"}
              width={50}
              height={50}
              alt="aa"
            />

            <p className="font-medium text-2xl mt-5">
              2023 — Sustainable Finance
            </p>
            <p className="font-normal text-sm">
              Embraced ESG principles, helping clients transition into
              sustainable financial strategies with clear environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
