// "use client";
// import React, { useState } from "react";

// export const ContactEmpowerYourBusiness = () => {
//   return (
//     <section>
//       <div className="bg-white general-sans rounded-t-[50px] pt-16 pb-16">
//         <p className="font-semibold text-5xl text-center">
//           Empower Your Business With YesToBoss
//         </p>
//         <p className="font-normal text-xl text-[#212121] text-center mt-3">
//           Any question or remarks? Just write us a message!
//         </p>

//         <div className="relative  flex overflow-auto ">
//           <div className="relative  w-[100%] h-[125px] md:h-[310px] lg:h-[405px] xl:h-[500px]  2xl:h-dvh overflow-auto ">
//             <div className="absolute overflow-auto top-0 left-0 w-full h-[20%] md:h-[22%] bg-white rounded-[50%] z-10  "></div>
//             <div className="top-5 overflow-auto md:top-14 xl:top-20      absolute    text-center text-black">
//               <div className=" flex space-x-8  overflow-auto">
//                 <img
//                   src="/images/dummy-image1.svg"
//                   alt=""
//                   className="w-72 h-72"
//                 />

//                 <img
//                   src="/images/dummy-image1.svg"
//                   alt=""
//                   className="w-72 h-72"
//                 />

//                 <img
//                   src="/images/dummy-image1.svg"
//                   alt=""
//                   className="w-72 h-72"
//                 />

//                 <img
//                   src="/images/dummy-image1.svg"
//                   alt=""
//                   className="w-72 h-72"
//                 />

//                 <img
//                   src="/images/dummy-image1.svg"
//                   alt=""
//                   className="w-72 h-72"
//                 />
//               </div>
//             </div>
//             <div className="absolute overflow-auto bottom-0 left-0 w-full h-[25%] bg-white rounded-[50%] z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// useEffect(()=>{

// gsap.fromTo(
//   imageRef.current,
//   {
//     clipPath: "inset(100% 0% 0% 0%)",
//     opacity: 0,
//   },
//   {
//     clipPath: "inset(0% 0% 0% 0%)",
//     opacity: 1,
//     duration: 1.5,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: containerRef.current,
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//   }
// );
// },[])

// export const ContactEmpowerYourBusiness = () => {
//   return (
//     <section>
//       <div className="bg-white general-sans rounded-t-[50px] pt-16 pb-16">
//         <p className="font-semibold text-5xl text-center">
//           Empower Your Business With YesToBoss
//         </p>
//         <p className="font-normal text-xl text-[#212121] text-center mt-3">
//           Any question or remarks? Just write us a message!
//         </p>

//       </div>
//     </section>
//   );
// };



// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Marquee from "react-fast-marquee";
// import Image from "next/image";

// export const ContactEmpowerYourBusiness = () => {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const subHeadingRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       headingRef.current,
//       {
//         clipPath: "inset(100% 0% 0% 0%)",
//         opacity: 0,
//       },
//       {
//         clipPath: "inset(0% 0% 0% 0%)",
//         opacity: 1,
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 60%",
//           toggleActions: "play none none none",
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       subHeadingRef.current,
//       {
//         clipPath: "inset(100% 0% 0% 0%)",
//         opacity: 0,
//       },
//       {
//         clipPath: "inset(0% 0% 0% 0%)",
//         opacity: 1,
//         duration: 1.5,
//         delay: 0.3,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 60%",
//           toggleActions: "play none none none",
//           scrub: 1,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={containerRef} className="bg-white pt-16 pb-16">
//       <div className=" general-sans rounded-t-[50px] ">
//         <p ref={headingRef} className="font-semibold text-5xl text-center">
//           Empower Your Business With YesToBoss
//         </p>
//         <p
//           ref={subHeadingRef}
//           className="font-normal text-xl text-[#212121] text-center mt-3"
//         >
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <Marquee autoFill={true} >
//         <div className="flex gap-5 shrink-0 overflow-x-auto mt-10">
//           <div className="bg-gray-300 h-64 w-80 "></div>
//           <div className="bg-gray-300 h-64 w-80 "></div>
//           <div className="bg-gray-300 h-64 w-80 "></div>
//           <div className="bg-gray-300 h-64 w-80 "></div>
//           <div className="bg-gray-300 h-64 w-80 "></div>
//           <div className="bg-gray-300 h-64 w-80 "></div>
//         </div>
//       </Marquee>
//     </section>
//   );
// };











// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Marquee from "react-fast-marquee";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export const ContactEmpowerYourBusiness = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const headingRef = useRef<HTMLParagraphElement | null>(null);
//   const subHeadingRef = useRef<HTMLParagraphElement | null>(null);

//   useEffect(() => {
//     const heading = headingRef.current;
//     const subHeading = subHeadingRef.current;
//     const triggerEl = containerRef.current;

//     if (heading && triggerEl) {
//       gsap.fromTo(
//         heading,
//         {
//           clipPath: "inset(100% 0% 0% 0%)",
//           opacity: 0,
//         },
//         {
//           clipPath: "inset(0% 0% 0% 0%)",
//           opacity: 1,
//           duration: 1.5,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: triggerEl,
//             start: "top 60%",
//             toggleActions: "play none none none",
//             scrub: true,
//           },
//         }
//       );
//     }

//     if (subHeading && triggerEl) {
//       gsap.fromTo(
//         subHeading,
//         {
//           clipPath: "inset(100% 0% 0% 0%)",
//           opacity: 0,
//         },
//         {
//           clipPath: "inset(0% 0% 0% 0%)",
//           opacity: 1,
//           duration: 1.5,
//           delay: 0.3,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: triggerEl,
//             start: "top 60%",
//             toggleActions: "play none none none",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section ref={containerRef} className="bg-white pt-16 pb-16">
//       <div className="general-sans rounded-t-[50px]">
//         <p
//           ref={headingRef}
//           className="font-semibold text-5xl text-center"
//         >
//           Empower Your Business With YesToBoss
//         </p>
//         <p
//           ref={subHeadingRef}
//           className="font-normal text-xl text-[#212121] text-center mt-3"
//         >
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <Marquee autoFill={true}>
//         <div className="flex gap-5 shrink-0 overflow-x-auto mt-10">
//           <div className="bg-gray-300 h-64 w-80" />
//           <div className="bg-gray-300 h-64 w-80" />
//           <div className="bg-gray-300 h-64 w-80" />
//           <div className="bg-gray-300 h-64 w-80" />
//           <div className="bg-gray-300 h-64 w-80" />
//           <div className="bg-gray-300 h-64 w-80" />
//         </div>
//       </Marquee>
//     </section>
//   );
// };








"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

 const ContactEmpowerYourBusiness = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subHeadingRef = useRef<HTMLParagraphElement | null>(null);
  const marqueeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const marqueeWrapper = marqueeWrapperRef.current;
    const triggerEl = containerRef.current;

    if (heading && triggerEl) {
      gsap.fromTo(
        heading,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 60%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );
    }

    if (subHeading && triggerEl) {
      gsap.fromTo(
        subHeading,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.5,
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 60%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );
    }

    if (marqueeWrapper && triggerEl) {
      gsap.fromTo(
        marqueeWrapper,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.5,
          delay: 0.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 60%",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    


    <section ref={containerRef} className="bg-white py-8 md:py-10 lg:py-14 xl:py-16">
  <div className="general-sans rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] px-4 sm:px-8 md:px-16">
    <p
      ref={headingRef}
      className="font-semibold text-2xl sm:text-4xl md:text-5xl text-center"
    >
      Empower Your Business With YesToBoss
    </p>
    <p
      ref={subHeadingRef}
      className="font-normal text-base sm:text-lg md:text-xl text-[#212121] text-center mt-3"
    >
      Any question or remarks? Just write us a message!
    </p>
  </div>

  <div
    ref={marqueeWrapperRef}
    className="overflow-hidden mt-10"
  >
    <Marquee autoFill={true}>
      <div className="flex gap-3 sm:gap-4 md:gap-5 shrink-0">
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
        <div className="bg-gray-300 h-40 w-60 sm:h-48 sm:w-72 md:h-64 md:w-80" />
      </div>
    </Marquee>
  </div>
</section>

  );
};

export default ContactEmpowerYourBusiness;

