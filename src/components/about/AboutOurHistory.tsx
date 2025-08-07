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















// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export const AboutOurHistory = () => {
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     gsap.from(cardsRef.current, {
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: cardsRef.current[0],
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <section className="min-h-screen">
//       <div className="grid grid-cols-3 general-sans p-16 gap-5">
//         {/* Left Column */}
//         <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
//           <div
//             ref={(el) => {
//               cardsRef.current[0] = el}}
//             className="bg-white rounded-2xl row-span-2"
//           >
//             <div className="w-full h-[70%] relative rounded-2xl">
//               <Image
//                 src={"/images/dummy-image1.svg"}
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

//           <div
//             ref={(el) => {
//               cardsRef.current[1] = el}}
//             className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]"
//           >
//             <Image
//               src={"/icons/home-history-icon.svg"}
//               width={50}
//               height={50}
//               alt="aa"
//             />

//             <p className="font-medium text-2xl mt-5">
//               2012 — Founded with a Vision
//             </p>
//             <p className="font-normal text-sm">
//               Started as a small team of passionate accountants dedicated to
//               helping local businesses manage their finances with confidence.
//               Reached a major milestone by partnering with over 100 clients.
//             </p>
//           </div>
//         </div>

//         {/* Middle Column */}
//         <div className="grid gap-5 grid-cols-1 grid-rows-3">
//           <div
//             ref={(el) => {cardsRef.current[2] = el}}
//             className="bg-white rounded-2xl row-span-4"
//           >
//             <div className="w-full h-[80%] relative rounded-2xl">
//               <Image
//                 src={"/images/dummy-image1.svg"}
//                 fill
//                 className="absolute w-full h-full object-cover rounded-t-2xl"
//                 alt="a"
//               />
//             </div>
//             <div className="p-3">
//               <p className="font-medium text-2xl">
//                 2021 — Nationwide Expansion
//               </p>
//               <p className="font-normal text-sm">
//                 Expanded services nationwide, enabling remote support and digital-first operations for clients across India.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
//           <div
//             ref={(el) => {cardsRef.current[3] = el}}
//             className="bg-white rounded-2xl row-span-2"
//           >
//             <div className="w-full h-[70%] relative rounded-2xl">
//               <Image
//                 src={"/images/dummy-image1.svg"}
//                 fill
//                 className="absolute w-full h-full object-cover rounded-t-2xl"
//                 alt="a"
//               />
//             </div>
//             <div className="p-3">
//               <p className="font-medium text-2xl">
//                 2022 — Fintech Integration
//               </p>
//               <p className="font-normal text-sm">
//                 Integrated cutting-edge fintech tools to offer smarter
//                 budgeting, forecasting, and automation for clients.
//               </p>
//             </div>
//           </div>

//           <div
//             ref={(el) => {cardsRef.current[4] = el}}
//             className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79]"
//           >
//             <Image
//               src={"/icons/home-history-icon.svg"}
//               width={50}
//               height={50}
//               alt="aa"
//             />

//             <p className="font-medium text-2xl mt-5">
//               2023 — Sustainable Finance
//             </p>
//             <p className="font-normal text-sm">
//               Embraced ESG principles, helping clients transition into
//               sustainable financial strategies with clear environmental impact.
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

 const AboutOurHistory = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
          autoAlpha: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
          force3D: true,
          clearProps: "all",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // <section className="min-h-screen">
    //   <div className="grid grid-cols-3 general-sans p-16 gap-5">
    //     {/* Left Column */}
    //     <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
    //       <div
    //         ref={(el) => {cardsRef.current[0] = el}}
    //         className="bg-white rounded-2xl row-span-2 will-change-transform"
    //       >
    //         <div className="w-full h-[70%] relative rounded-2xl">
    //           <Image
    //             src={"/images/dummy-image1.svg"}
    //             fill
    //             className="absolute w-full h-full object-cover rounded-t-2xl"
    //             alt="a"
    //           />
    //         </div>
    //         <div className="p-3">
    //           <p className="font-medium text-2xl">Company Registration</p>
    //           <p className="font-normal text-sm">
    //           Fast, accurate registration services that launch your business while we handle formalities.

    //           </p>
    //         </div>
    //       </div>

    //       <div
    //         ref={(el) => {cardsRef.current[1] = el}}
    //         className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79] will-change-transform"
    //       >
    //         <Image
    //           src={"/icons/home-history-icon.svg"}
    //           width={50}
    //           height={50}
    //           alt="aa"
    //         />
    //         <p className="font-medium text-2xl mt-5">Licensing</p>
    //         <p className="font-normal text-sm">
    //         Expert guidance securing trade, GST, and FSSAI licenses to meet legal requirements smoothly.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Middle Column */}
    //     <div className="grid gap-5 grid-cols-1 grid-rows-3">
    //       <div
    //         ref={(el) => {cardsRef.current[2] = el}}
    //         className="bg-white rounded-2xl row-span-4 will-change-transform"
    //       >
    //         <div className="w-full h-[80%] relative rounded-2xl">
    //           <Image
    //             src={"/images/dummy-image1.svg"}
    //             fill
    //             className="absolute w-full h-full object-cover rounded-t-2xl"
    //             alt="a"
    //           />
    //         </div>
    //         <div className="p-3">
    //           <p className="font-medium text-2xl">Trade Mark </p>
    //           <p className="font-normal text-sm">
    //           Complete support in trademark search, filing, and protection to legally secure your brand identity.

    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Column */}
    //     <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
    //       <div
    //         ref={(el) => {cardsRef.current[3] = el}}
    //         className="bg-white rounded-2xl row-span-2 will-change-transform"
    //       >
    //         <div className="w-full h-[70%] relative rounded-2xl">
    //           <Image
    //             src={"/images/dummy-image1.svg"}
    //             fill
    //             className="absolute w-full h-full object-cover rounded-t-2xl"
    //             alt="a"
    //           />
    //         </div>
    //         <div className="p-3">
    //           <p className="font-medium text-2xl">Tax Compliance</p>
    //           <p className="font-normal text-sm">
    //           From GST to income tax, we ensure timely, stress-free financial compliance.

    //           </p>
    //         </div>
    //       </div>

    //       <div
    //         ref={(el) => {cardsRef.current[4] = el}}
    //         className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79] will-change-transform"
    //       >
    //         <Image
    //           src={"/icons/home-history-icon.svg"}
    //           width={50}
    //           height={50}
    //           alt="aa"
    //         />
    //         <p className="font-medium text-2xl mt-5">Legal Documentation</p>
    //         <p className="font-normal text-sm">
    //         Professional drafting and review of NDAs, MOAs, and partnership agreements.

    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 general-sans  p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16
 gap-5">
    {/* Left Column */}
    <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
      <div
        ref={(el) => {
          cardsRef.current[0] = el;
        }}
        className="bg-white rounded-2xl flex flex-col row-span-2 will-change-transform"
      >
        <div className="w-full min-h-[200px] flex-grow md:h-[250px] lg:h-[70%] relative rounded-2xl">
          <Image
            src={"/images/dummy-image1.svg"}
            fill
            className="absolute w-full h-full object-cover rounded-t-2xl"
            alt="a"
          />
        </div>
        <div className="p-3">
          <p className="font-medium text-2xl">Company Registration</p>
          <p className="font-normal text-sm">
            Fast, accurate registration services that launch your business while we handle formalities.
          </p>
        </div>
      </div>

      <div
        ref={(el) => {
          cardsRef.current[1] = el;
        }}
        className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79] will-change-transform"
      >
        <Image
          src={"/icons/home-history-icon.svg"}
          width={50}
          height={50}
          alt="aa"
        />
        <p className="font-medium text-2xl mt-5">Licensing</p>
        <p className="font-normal text-sm">
          Expert guidance securing trade, GST, and FSSAI licenses to meet legal requirements smoothly.
        </p>
      </div>
    </div>

    {/* Middle Column */}
    <div className="grid gap-5 grid-cols-1 grid-rows-3">
      <div
        ref={(el) => {
          cardsRef.current[2] = el;
        }}
        className="bg-white flex flex-col rounded-2xl row-span-4 will-change-transform"
      >
        <div className="w-full flex-grow h-[250px] md:h-[300px] lg:h-[80%] relative rounded-2xl">
          <Image
            src={"/images/dummy-image1.svg"}
            fill
            className="absolute w-full h-full object-cover rounded-t-2xl"
            alt="a"
          />
        </div>
        <div className="p-3">
          <p className="font-medium text-2xl">Trade Mark</p>
          <p className="font-normal text-sm">
            Complete support in trademark search, filing, and protection to legally secure your brand identity.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="grid gap-5 grid-cols-1 grid-rows-3 rounded-2xl">
      <div
        ref={(el) => {
          cardsRef.current[3] = el;
        }}
        className="bg-white rounded-2xl flex flex-col row-span-2 will-change-transform"
      >
        <div className="w-full h-[200px] flex-grow md:h-[250px] lg:h-[70%] relative rounded-2xl">
          <Image
            src={"/images/dummy-image1.svg"}
            fill
            className="absolute w-full h-full object-cover rounded-t-2xl"
            alt="a"
          />
        </div>
        <div className="p-3">
          <p className="font-medium text-2xl">Tax Compliance</p>
          <p className="font-normal text-sm">
            From GST to income tax, we ensure timely, stress-free financial compliance.
          </p>
        </div>
      </div>

      <div
        ref={(el) => {
          cardsRef.current[4] = el;
        }}
        className="bg-gradient-to-b from-[#FFFFFF] p-3 rounded-2xl to-[#FF9B79] will-change-transform"
      >
        <Image
          src={"/icons/home-history-icon.svg"}
          width={50}
          height={50}
          alt="aa"
        />
        <p className="font-medium text-2xl mt-5">Legal Documentation</p>
        <p className="font-normal text-sm">
          Professional drafting and review of NDAs, MOAs, and partnership agreements.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};


export default AboutOurHistory