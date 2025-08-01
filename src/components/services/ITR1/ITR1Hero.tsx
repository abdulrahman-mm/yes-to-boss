// 'use client'
// import { BlurText } from "@/components/animations";
// import { Header } from "@/components/layout";
// import React from "react";

// export const ITR1Hero = () => {
//   return (
//     <section className="bg-white min-h-screen pt-2 general-sans p-16">
//       <div className="w-[90vw] mx-auto">
//         <Header bgColor="black" textColor="white" />
//       </div>

//       <div className="flex justify-center  items-center py-28 flex-col gap-2">
//         <p className="font-semibold text-6xl ">ITR-1 Return Filing (Sahaj)</p>
        
//         <p className="font-semibold text-6xl ">
//           in <span className="text-[#6A6A6A]">India</span>
//         </p>
//         <p className="font-normal text-sm w-2/5 text-center">
//           Providing expert accounting, tax planning, and financial consulting
//           services to help businesses grow, comply, and achieve long-term
//           success.
//         </p>

//         <div className="flex gap-4 mt-5 items-center">
//           <button className="bg-black text-white rounded-full px-16 py-3 font-medium text-sm">
//             Get Started
//           </button>

//           <div className="flex items-start gap-3">
//             <div className="flex items-center">
//               <p className="w-8 h-8 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//             </div>

//             <div>
//               <p className="font-medium">100k+</p>
//               <p className="font-normal text-sm">Customer</p>
//               <p className="font-normal text-sm">Satisfied</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex  gap-28 justify-between">
//         <div className="flex flex-col gap-3 w-[60%]">
//           <p className=" font-medium text-sm font-Bricolage_Grotesque">Key Services</p>
//           {/* <p className="font-semibold text-5xl">What Is ITR-1 Sahaj Return Filing?</p> */}

//           <BlurText
//             text="What Is ITR-1 Sahaj Return Filing?"
//             delay={50}
//             animateBy="words"
//             direction="top"
//             className="font-semibold text-5xl"
//           />
//           <p className="text-sm leading-5 font-medium font-Bricolage_Grotesque">
//             ITR-1, also known as Sahaj, is a simplified income tax return form
//             prescribed under the Income Tax Act, 1961, for resident individuals
//             earning up to ₹50,00,000 from eligible income sources. This form is
//             ideal for most salaried taxpayers, and offers a streamlined approach
//             for filing returns online.ITR-1, also known as Sahaj, is a
//             simplified income tax return form prescribed under the Income Tax
//             Act, 1961, for resident individuals earning up to ₹50,00,000 from
//             eligible income sources. This form is ideal for most salaried
//             taxpayers, and offers a streamlined approach for filing returns
//             online.ITR-1, also known as Sahaj, is a simplified income tax return
//             form prescribed under the Income Tax Act, 1961, for resident
//             individuals earning up to ₹50,00,000 from eligible income sources.
//             This form is ideal for most salaried taxpayers, and offers a
//             streamlined approach for filing returns online.ITR-1, also known as
//             Sahaj, is a simplified income tax return form prescribed under the
//             Income Tax Act, 1961, for resident individuals earning up to
//             ₹50,00,000 from eligible income sources. This form is ideal for most
//             salaried taxpayers, and offers a streamlined approach for filing
//             returns online.ITR-1, also known as Sahaj, is a simplified income
//             tax return form prescribed under the Income Tax Act, 1961, for
//             resident individuals earning up to ₹50,00,000 from eligible income
//             sources. This form is ideal for most salaried taxpayers, and offers
//             a streamlined approach for filing returns online.ITR-1, also known
//             as Sahaj, is a simplified income tax return form prescribed under
//             the Income Tax Act, 1961, for resident individuals earning up to
//             ₹50,00,000 from eligible income sources. This form is ideal for most
//             salaried taxpayers, and offers a streamlined approach for filing
//             returns online.
//           </p>
//         </div>

//         <div className="h-96 w-96 flex-grow bg-gray-300">

//         </div>
//       </div>
//     </section>
//   );
// };







// "use client";

// import { BlurText } from "@/components/animations";
// import { Header } from "@/components/layout";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const ITR1Hero = () => {
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const descRef = useRef(null);
//   const btnRef = useRef(null);
//   const userStatsRef = useRef(null);
//   const sectionTextRef = useRef(null);
//   const imageBoxRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { ease: "power3.out", duration: 1 },
//     });

//     tl.from(headingRef.current, {
//       y: 50,
//       opacity: 0,
//     })
//       .from(subheadingRef.current, {
//         y: 50,
//         opacity: 0,
//       }, "-=0.8")
//       .from(descRef.current, {
//         y: 30,
//         opacity: 0,
//       }, "-=0.7")
//       .from(btnRef.current, {
//         scale: 0.8,
//         opacity: 0,
//       }, "-=0.7")
//       .from(userStatsRef.current, {
//         x: 50,
//         opacity: 0,
//       }, "-=0.8");

//     gsap.from(sectionTextRef.current, {
//       scrollTrigger: {
//         trigger: sectionTextRef.current,
//         start: "top 80%",
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     gsap.from(imageBoxRef.current, {
//       scrollTrigger: {
//         trigger: imageBoxRef.current,
//         start: "top 90%",
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <section className="bg-white min-h-screen pt-2 general-sans p-16">
//       <div className="w-[90vw] mx-auto">
//         <Header bgColor="black" textColor="white" />
//       </div>

//       <div className="flex justify-center items-center py-28 flex-col gap-2">
//         <p ref={headingRef} className="font-semibold text-6xl">
//           ITR-1 Return Filing (Sahaj)
//         </p>

//         <p ref={subheadingRef} className="font-semibold text-6xl">
//           in <span className="text-[#6A6A6A]">India</span>
//         </p>

//         <p ref={descRef} className="font-normal text-sm w-2/5 text-center">
//           Providing expert accounting, tax planning, and financial consulting
//           services to help businesses grow, comply, and achieve long-term
//           success.
//         </p>

//         <div className="flex gap-4 mt-5 items-center" ref={btnRef}>
//           <button className="bg-black text-white rounded-full px-16 py-3 font-medium text-sm">
//             Get Started
//           </button>

//           <div className="flex items-start gap-3" ref={userStatsRef}>
//             <div className="flex items-center">
//               <p className="w-8 h-8 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//             </div>

//             <div>
//               <p className="font-medium">100k+</p>
//               <p className="font-normal text-sm">Customer</p>
//               <p className="font-normal text-sm">Satisfied</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-28 justify-between">
//         <div className="flex flex-col gap-3 w-[60%]" ref={sectionTextRef}>
//           <p className="font-medium text-sm font-Bricolage_Grotesque">Key Services</p>

//           <BlurText
//             text="What Is ITR-1 Sahaj Return Filing?"
//             delay={50}
//             animateBy="words"
//             direction="top"
//             className="font-semibold text-5xl"
//           />
//           <p className="text-sm leading-5 font-medium font-Bricolage_Grotesque">
//             ITR-1, also known as Sahaj, is a simplified income tax return form
//             prescribed under the Income Tax Act, 1961, for resident individuals
//             earning up to ₹50,00,000 from eligible income sources. This form is
//             ideal for most salaried taxpayers and offers a streamlined approach
//             for filing returns online.
//           </p>
//         </div>

//         <div className="h-96 w-96 flex-grow bg-gray-300" ref={imageBoxRef}></div>
//       </div>
//     </section>
//   );
// };






// "use client";

// import { BlurText } from "@/components/animations";
// import { Header } from "@/components/layout";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const ITR1Hero = () => {
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const descRef = useRef(null);
//   const btnRef = useRef(null);
//   const userStatsRef = useRef(null);
//   const sectionTextRef = useRef(null);
//   const imageBoxRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: {
//           ease: "power3.out",
//           duration: 1,
//           lazy: true,
//           immediateRender: false,
//         },
//       });

//       tl.from(headingRef.current, {
//         y: 50,
//         opacity: 0,
//       })
//         .from(
//           subheadingRef.current,
//           {
//             y: 50,
//             opacity: 0,
//           },
//           "-=0.8"
//         )
//         .from(
//           descRef.current,
//           {
//             y: 30,
//             opacity: 0,
//           },
//           "-=0.7"
//         )
//         .from(
//           btnRef.current,
//           {
//             scale: 0.8,
//             opacity: 0,
//           },
//           "-=0.7"
//         )
//         .from(
//           userStatsRef.current,
//           {
//             x: 50,
//             opacity: 0,
//           },
//           "-=0.8"
//         );

//       gsap.from(sectionTextRef.current, {
//         scrollTrigger: {
//           trigger: sectionTextRef.current,
//           start: "top 80%",
//           once: true,
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(imageBoxRef.current, {
//         scrollTrigger: {
//           trigger: imageBoxRef.current,
//           start: "top 90%",
//           once: true,
//         },
//         scale: 0.8,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       });
//     });

//     return () => ctx.revert(); // Cleanup
//   }, []);

//   return (
//     <section className="bg-white min-h-screen pt-2 general-sans p-16">
//       <div className="w-[90vw] mx-auto">
//         <Header bgColor="black" textColor="white" />
//       </div>

//       <div className="flex justify-center items-center py-28 flex-col gap-2">
//         <p
//           ref={headingRef}
//           className="font-semibold text-6xl will-change-transform translate-z-0"
//         >
//           ITR-1 Return Filing (Sahaj)
//         </p>

//         <p
//           ref={subheadingRef}
//           className="font-semibold text-6xl will-change-transform translate-z-0"
//         >
//           in <span className="text-[#6A6A6A]">India</span>
//         </p>

//         <p
//           ref={descRef}
//           className="font-normal text-sm w-2/5 text-center will-change-transform translate-z-0"
//         >
//           Providing expert accounting, tax planning, and financial consulting
//           services to help businesses grow, comply, and achieve long-term
//           success.
//         </p>

//         <div
//           className="flex gap-4 mt-5 items-center will-change-transform translate-z-0"
//           ref={btnRef}
//         >
//           <button className="bg-black text-white rounded-full px-16 py-3 font-medium text-sm">
//             Get Started
//           </button>

//           <div
//             className="flex items-start gap-3 will-change-transform translate-z-0"
//             ref={userStatsRef}
//           >
//             <div className="flex items-center">
//               <p className="w-8 h-8 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//               <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
//             </div>

//             <div>
//               <p className="font-medium">100k+</p>
//               <p className="font-normal text-sm">Customer</p>
//               <p className="font-normal text-sm">Satisfied</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-28 justify-between">
//         <div
//           className="flex flex-col gap-3 w-[60%] will-change-transform translate-z-0"
//           ref={sectionTextRef}
//         >
//           <p className="font-medium text-sm font-Bricolage_Grotesque">
//             Key Services
//           </p>

//           <BlurText
//             text="What Is ITR-1 Sahaj Return Filing?"
//             delay={50}
//             animateBy="words"
//             direction="top"
//             className="font-semibold text-5xl"
//           />

//           <p className="text-sm leading-5 font-medium font-Bricolage_Grotesque">
//             ITR-1, also known as Sahaj, is a simplified income tax return form
//             prescribed under the Income Tax Act, 1961, for resident individuals
//             earning up to ₹50,00,000 from eligible income sources. This form is
//             ideal for most salaried taxpayers and offers a streamlined approach
//             for filing returns online.
//           </p>
//         </div>

//         <div
//           className="h-96 w-96 flex-grow bg-gray-300 will-change-transform translate-z-0"
//           ref={imageBoxRef}
//         ></div>
//       </div>
//     </section>
//   );
// };








"use client";

import { BlurText } from "@/components/animations";
import { Header } from "@/components/layout";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ITR1Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const userStatsRef = useRef(null);
  const sectionTextRef = useRef(null);
  const imageBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        skewY: 10,
        y: 40,
      })
        .from(
          subheadingRef.current,
          {
            opacity: 0,
            skewY: 10,
            y: 40,
          },
          "-=0.8"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            skewY: 8,
            y: 30,
          },
          "-=0.7"
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            skewX: -10,
            y: 20,
            scale: 0.95,
          },
          "-=0.6"
        )
        .from(
          userStatsRef.current,
          {
            opacity: 0,
            skewX: -8,
            x: 20,
          },
          "-=0.7"
        );

      gsap.from(sectionTextRef.current, {
        scrollTrigger: {
          trigger: sectionTextRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        skewY: 12,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageBoxRef.current, {
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top 90%",
          once: true,
        },
        scale: 0.9,
        skewX: 5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white min-h-screen pt-2 general-sans p-16">
      <div className="w-[90vw] mx-auto">
        <Header bgColor="black" textColor="white" />
      </div>

      <div className="flex justify-center items-center py-28 flex-col gap-2">
        <p
          ref={headingRef}
          className="font-semibold text-6xl will-change-transform translate-z-0"
        >
          ITR-1 Return Filing (Sahaj)
        </p>

        <p
          ref={subheadingRef}
          className="font-semibold text-6xl will-change-transform translate-z-0"
        >
          in <span className="text-[#6A6A6A]">India</span>
        </p>

        <p
          ref={descRef}
          className="font-normal text-sm w-2/5 text-center will-change-transform translate-z-0"
        >
          Providing expert accounting, tax planning, and financial consulting
          services to help businesses grow, comply, and achieve long-term
          success.
        </p>

        <div
          className="flex gap-4 mt-5 items-center will-change-transform translate-z-0"
          ref={btnRef}
        >
          <button className="bg-black text-white rounded-full px-16 py-3 font-medium text-sm">
            Get Started
          </button>

          <div
            className="flex items-start gap-3 will-change-transform translate-z-0"
            ref={userStatsRef}
          >
            <div className="flex items-center">
              <p className="w-8 h-8 rounded-full bg-gray-500"></p>
              <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
              <p className="w-8 h-8 -ms-3 rounded-full bg-gray-500"></p>
            </div>

            <div>
              <p className="font-medium">100k+</p>
              <p className="font-normal text-sm">Customer</p>
              <p className="font-normal text-sm">Satisfied</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-28 justify-between">
        <div
          className="flex flex-col gap-3 w-[60%] will-change-transform translate-z-0"
          ref={sectionTextRef}
        >
          <p className="font-medium text-sm font-Bricolage_Grotesque">
            Key Services
          </p>

          <BlurText
            text="What Is ITR-1 Sahaj Return Filing?"
            delay={50}
            animateBy="words"
            direction="top"
            className="font-semibold text-5xl"
          />

          <p className="text-sm leading-5 font-medium font-Bricolage_Grotesque">
            ITR-1, also known as Sahaj, is a simplified income tax return form
            prescribed under the Income Tax Act, 1961, for resident individuals
            earning up to ₹50,00,000 from eligible income sources. This form is
            ideal for most salaried taxpayers and offers a streamlined approach
            for filing returns online.
          </p>
        </div>

        <div
          className="h-96 w-96 flex-grow bg-gray-300 will-change-transform translate-z-0"
          ref={imageBoxRef}
        ></div>
      </div>
    </section>
  );
};
