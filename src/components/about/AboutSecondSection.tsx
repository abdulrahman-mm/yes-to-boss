// import Image from "next/image";
// import React from "react";
// import { BlurText, CountUp } from "../animations";

// export const AboutSecondSection = () => {
//   return (
//     <section className="bg-white  general-sans">
//       <div className="flex gap-32 p-16">
//         <div className="w-1/3">
//           <p className="  px-8 h-fit  font-medium text-sm text-center rounded-full  py-2.5  border-[#EBEBEB] border-2">
//             About Us
//           </p>
//         </div>

//         <div>
//           {/* <p className=" font-medium text-5xl leading-14">
//             We consistently uphold the highest standards of honesty, integrity,
//             and transparency in every aspect of our work from client
//             communications to financial reporting.
//           </p> */}

//           <BlurText
//             text=" We consistently uphold the highest standards of honesty, integrity,
//             and transparency in every aspect of our work from client
//             communications to financial reporting."
//             delay={50}
//             animateBy="words"
//             direction="top"
//             // className=" text-6xl font-semibold leading-16"
//             className=" font-medium text-5xl leading-14"
//           />

//           <p className=" font-normal text-xs mt-5">
//             We are committed to the highest standards of honesty, integrity, and
//             transparency—reflected in every detail of our work, from clear
//             client communication to accurate financial reporting—ensuring trust,
//             professionalism, and long-term success in every partnership we build
//           </p>
//           <div className="flex gap-24 justify-between mt-14">
//             <div>
//               <p className="font-medium text-6xl">
//                 {" "}
//                 <CountUp
//                   from={0}
//                   to={1200}
//                   separator=","
//                   direction="up"
//                   duration={0.2}
//                   className="count-up-text"
//                 />
//                 +
//               </p>

//               <p className="font-normal text-sm mt-3">
//                 Prepared annually with precision and strategic insight.
//               </p>
//             </div>

//             <div>
//               <p className="font-medium text-6xl"> <CountUp
//                   from={0}
//                   to={98}
//                   separator=","
//                   direction="up"
//                   duration={0.5}
//                   className="count-up-text"
//                 />%</p>
//               <p className="font-normal text-sm mt-3">
//                 Built on trust, reliability, and consistent service
//               </p>
//             </div>

//             <div>
//               <p className="font-medium text-6xl">

//               <CountUp
//                   from={0}
//                   to={24}
//                   separator=","
//                   direction="up"
//                   duration={2}
//                   className="count-up-text"
//                 />/7
//               </p>
//               <p className="font-normal text-sm mt-3">
//                 To your financial data through our secure and modern{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-[#212121] to-[#070707]  h-[90vh] flex justify-end p-9">
//         <div className="relative h-full w-[50%]">
//           <Image
//             alt="a"
//             src="/images/india-map-image.svg"
//             fill
//             className="object-contain" // or object-cover
//           />
//         </div>
//       </div>

//       <div className="h-80 w-full  bg-gray-300"></div>
//     </section>
//   );
// };







// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { BlurText, CountUp } from "../animations";

// gsap.registerPlugin(ScrollTrigger);

// export const AboutSecondSection = () => {
//   const sectionRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const statsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const imageRef = useRef(null);
//   const badgeRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Badge animation
//       gsap.from(badgeRef.current, {
//         scrollTrigger: {
//           trigger: badgeRef.current,
//           start: "top 80%",
//         },
//         opacity: 0,
//         y: -20,
//         duration: 0.8,
//         ease: "power2.out",
//       });

//       // Paragraph animation
//       gsap.from(paragraphRef.current, {
//         scrollTrigger: {
//           trigger: paragraphRef.current,
//           start: "top 80%",
//         },
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         ease: "power3.out",
//       });

//       // Stats animation
//       statsRef.current.forEach((stat, i) => {
//         gsap.from(stat, {
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 90%",
//           },
//           opacity: 0,
//           y: 30,
//           duration: 0.8,
//           delay: i * 0.2,
//           ease: "power2.out",
//         });
//       });

//       // Image animation
//       gsap.from(imageRef.current, {
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 80%",
//         },
//         opacity: 0,
//         x: 100,
//         duration: 1.2,
//         ease: "power3.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-white general-sans overflow-hidden">
//       <div className="flex gap-32 p-16">
//         <div className="w-1/3" ref={badgeRef}>
//           <p className="px-8 h-fit font-medium text-sm text-center rounded-full py-2.5 border-[#EBEBEB] border-2">
//             About Us
//           </p>
//         </div>

//         <div>
//           <BlurText
//             text=" We consistently uphold the highest standards of honesty, integrity, and transparency in every aspect of our work from client communications to financial reporting."
//             delay={50}
//             animateBy="words"
//             direction="top"
//             className="font-medium text-5xl leading-14"
//           />

//           <p ref={paragraphRef} className="font-normal text-xs mt-5">
//             We are committed to the highest standards of honesty, integrity, and
//             transparency—reflected in every detail of our work, from clear
//             client communication to accurate financial reporting—ensuring trust,
//             professionalism, and long-term success in every partnership we build
//           </p>

//           <div className="flex gap-24 justify-between mt-14">
//             <div
//               ref={(el) => {
//                 statsRef.current[0] = el;
//               }}
//             >
//               <p className="font-medium text-6xl">
//                 <CountUp
//                   from={0}
//                   to={1200}
//                   separator=","
//                   direction="up"
//                   duration={0.2}
//                   className="count-up-text"
//                 />
//                 +
//               </p>
//               <p className="font-normal text-sm mt-3">
//                 Prepared annually with precision and strategic insight.
//               </p>
//             </div>

//             <div
//               ref={(el) => {
//                 statsRef.current[1] = el;
//               }}
//             >
//               <p className="font-medium text-6xl">
//                 <CountUp
//                   from={0}
//                   to={98}
//                   separator=","
//                   direction="up"
//                   duration={0.5}
//                   className="count-up-text"
//                 />
//                 %
//               </p>
//               <p className="font-normal text-sm mt-3">
//                 Built on trust, reliability, and consistent service
//               </p>
//             </div>

//             <div
//               ref={(el) => {
//                 statsRef.current[2] = el;
//               }}
//             >
//               <p className="font-medium text-6xl">
//                 <CountUp
//                   from={0}
//                   to={24}
//                   separator=","
//                   direction="up"
//                   duration={2}
//                   className="count-up-text"
//                 />
//                 /7
//               </p>
//               <p className="font-normal text-sm mt-3">
//                 To your financial data through our secure and modern{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-[#212121] to-[#070707] h-[90vh] flex justify-end p-9">
//         <div className="relative h-full w-[50%]" ref={imageRef}>
//           <Image
//             alt="a"
//             src="/images/india-map-image.svg"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>

//       <div className="h-80 w-full bg-gray-300"></div>
//     </section>
//   );
// };




// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { BlurText, CountUp } from "../animations";

// gsap.registerPlugin(ScrollTrigger);

//  const AboutSecondSection = () => {
//   const sectionRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const statsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const imageRef = useRef(null);
//   const badgeRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Badge animation
//       gsap.from(badgeRef.current, {
//         scrollTrigger: {
//           trigger: badgeRef.current,
//           start: "top 80%",
//         },
//         autoAlpha: 0,
//         y: -20,
//         duration: 0.8,
//         ease: "power2.out",
//         willChange: "transform, opacity",
//         force3D: true,
//         clearProps: "transform, opacity",
//       });

//       // Paragraph animation
//       gsap.from(paragraphRef.current, {
//         scrollTrigger: {
//           trigger: paragraphRef.current,
//           start: "top 80%",
//         },
//         autoAlpha: 0,
//         y: 40,
//         duration: 1,
//         ease: "power3.out",
//         willChange: "transform, opacity",
//         force3D: true,
//         clearProps: "transform, opacity",
//       });

//       // Stats animation
//       statsRef.current.forEach((stat, i) => {
//         if (stat) {
//           gsap.from(stat, {
//             scrollTrigger: {
//               trigger: stat,
//               start: "top 90%",
//             },
//             autoAlpha: 0,
//             y: 30,
//             duration: 0.8,
//             delay: i * 0.2,
//             ease: "power2.out",
//             willChange: "transform, opacity",
//             force3D: true,
//             clearProps: "transform, opacity",
//           });
//         }
//       });

//       // Image animation
//       gsap.from(imageRef.current, {
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 80%",
//         },
//         autoAlpha: 0,
//         x: 100,
//         duration: 1.2,
//         ease: "power3.out",
//         willChange: "transform, opacity",
//         force3D: true,
//         clearProps: "transform, opacity",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
   

//     <section ref={sectionRef} className="bg-white general-sans overflow-hidden">
//   {/* About Section */}
//   <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16
// ">
//     {/* Badge */}
//     <div className=" flex justify-center lg:justify-start" ref={badgeRef}>
//       <p className="px-8 h-fit font-medium text-sm text-center rounded-full py-2.5 border-[#EBEBEB] border-2">
//         About Us
//       </p>
//     </div>

//     {/* Text Section */}
//     <div className="w-full flex-grow lg:w-2/3">
//       <BlurText
//         text="At YesToBoss, our mission is to help Indians master their money, simplify finances, and create smart solutions that save time and money for both businesses and individuals."
//         delay={50}
//         animateBy="words"
//         direction="top"
//         className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight"
//       />

//       <p
//         ref={paragraphRef}
//         className="font-normal text-xs mt-5 will-change-transform"
//       >
//         With a team of experienced consultants, we empower entrepreneurs, startups, and established businesses by streamlining essential operations and eliminating complexity from business processes.
//       </p>

//       {/* CountUp Section */}
//       <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 justify-between mt-10 lg:mt-14">
//         {[1200, 98, 24].map((value, i) => (
//           <div
//             key={i}
//             ref={(el) => { statsRef.current[i] = el }}
//             className="will-change-transform"
//           >
//             <p className="font-medium text-4xl md:text-5xl lg:text-6xl">
//               <CountUp
//                 from={0}
//                 to={value}
//                 separator=","
//                 direction="up"
//                 duration={value === 24 ? 2 : value === 98 ? 0.5 : 0.2}
//                 className="count-up-text"
//               />
//               {value === 24 ? "/7" : value === 98 ? "%" : "+"}
//             </p>
//             <p className="font-normal text-sm mt-3">
//               {i === 0 &&
//                 "Businesses are supported through reliable, end-to-end assistance."}
//               {i === 1 &&
//                 "Success rate is built on trust and accuracy"}
//               {i === 2 &&
//                 "Expert support is available anytime—no waiting required."}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* India Reach Section */}
//   <div className="bg-gradient-to-b gap-10 text-white from-[#212121] to-[#070707] h-auto lg:h-[90vh] flex flex-col lg:flex-row justify-between p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16
// ">
//     {/* Left */}
//     <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
//       <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight">
//         We Serve Across India
//       </p>

//       <p className="font-normal text-sm leading-6">
//         Whether you're in a metro or a growing city, our nationwide footprint ensures your business is supported with speed, precision, and consistency. With deep local insights and seamless coordination across regions, we deliver reliable, fast, and region-specific services tailored to your business needs.
//       </p>

//       <div className="grid grid-cols-2 gap-6 md:gap-10 w-full sm:w-fit">
//         <div className="flex flex-col gap-1">
//           <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">30+</p>
//           <p className="text-sm">Major Cities Covered</p>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">5</p>
//           <p className="text-sm">Regional Service Zones</p>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">100%</p>
//           <p className="text-sm">Commitment to Local Relevance</p>
//         </div>

//         <div className="flex flex-col gap-1">
//           <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">4.8</p>
//           <p className="text-sm">Star Service Rating</p>
//         </div>
//       </div>
//     </div>

//     {/* Right */}
//     <div
//       className="relative h-[300px] sm:h-[400px] md:h-full w-full lg:w-[50%] will-change-transform mt-10 lg:mt-0"
//       ref={imageRef}
//     >
//       <Image
//         alt="a"
//         src="/images/india-map-gif.gif"
//         fill
//         className="object-contain"
//       />
//     </div>
//   </div>

//   {/* Footer Spacer */}
//   <div className="h-40 md:h-60 lg:h-80 w-full bg-gray-300"></div>
// </section>

//   );
// };


// export default AboutSecondSection4









"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText, CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

const AboutSecondSection = () => {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const baseTrigger = {
        start: "top 80%",
        toggleActions: "play none none none",
        lazy: true,
      };

      // Badge animation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Paragraph animation
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Stats animation
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          ...baseTrigger,
        },
        autoAlpha: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform, opacity",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white general-sans overflow-hidden">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start" ref={badgeRef}>
          <p className="px-8 h-fit font-medium text-sm text-center rounded-full py-2.5 border-[#EBEBEB] border-2">
            About Us
          </p>
        </div>

        {/* Text Section */}
        <div className="w-full flex-grow lg:w-2/3">
          <BlurText
            text="At YesToBoss, our mission is to help Indians master their money, simplify finances, and create smart solutions that save time and money for both businesses and individuals."
            delay={50}
            animateBy="words"
            direction="top"
            className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight"
          />

          <p
            ref={paragraphRef}
            className="font-normal text-xs mt-5"
          >
            With a team of experienced consultants, we empower entrepreneurs,
            startups, and established businesses by streamlining essential
            operations and eliminating complexity from business processes.
          </p>

          {/* CountUp Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 justify-between mt-10 lg:mt-14">
            {[1200, 98, 24].map((value, i) => (
              <div
                key={i}
                ref={(el) => { statsRef.current[i] = el }}
              >
                <p className="font-medium text-4xl md:text-5xl lg:text-6xl">
                  <CountUp
                    from={0}
                    to={value}
                    separator=","
                    direction="up"
                    duration={value === 24 ? 2 : value === 98 ? 0.5 : 0.2}
                    className="count-up-text"
                  />
                  {value === 24 ? "/7" : value === 98 ? "%" : "+"}
                </p>
                <p className="font-normal text-sm mt-3">
                  {i === 0 &&
                    "Businesses are supported through reliable, end-to-end assistance."}
                  {i === 1 &&
                    "Success rate is built on trust and accuracy"}
                  {i === 2 &&
                    "Expert support is available anytime—no waiting required."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* India Reach Section */}
      <div className="bg-gradient-to-b gap-10 text-white from-[#212121] to-[#070707] h-auto lg:h-[90vh] flex flex-col lg:flex-row justify-between p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
          <p className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight">
            We Serve Across India
          </p>

          <p className="font-normal text-sm leading-6">
            Whether you're in a metro or a growing city, our nationwide
            footprint ensures your business is supported with speed, precision,
            and consistency. With deep local insights and seamless coordination
            across regions, we deliver reliable, fast, and region-specific
            services tailored to your business needs.
          </p>

          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full sm:w-fit">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">30+</p>
              <p className="text-sm">Major Cities Covered</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">5</p>
              <p className="text-sm">Regional Service Zones</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">100%</p>
              <p className="text-sm">Commitment to Local Relevance</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">4.8</p>
              <p className="text-sm">Star Service Rating</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className="relative h-[300px] sm:h-[400px] md:h-full w-full lg:w-[50%] mt-10 lg:mt-0"
          ref={imageRef}
        >
          <Image
            alt="Map of India"
            src="/images/india-map-gif.gif"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer Spacer */}
      {/* <div className="h-40 md:h-60 lg:h-80 w-full bg-gray-300"></div> */}
    </section>
  );
};

export default AboutSecondSection;
