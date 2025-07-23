// import Image from "next/image";
// import React from "react";

// export const HomeTaxBusinessConsultingService = () => {
//   return (
//     <section className="p-16 bg-black">
//       <div className="flex gap-32 items-center h-[85vh] text-white">
//         <div className="w-[45%]">
//           <p className="text-6xl font-medium  general-sans">
//             Tax & Business Consulting Services
//           </p>
//           <p className="mt-5  text-sm">
//             Comprehensive support for startups, MSMEs, and growing
//             businesses—from registrations to regulatory compliance
//           </p>

//           <div className="flex flex-col gap-5 mt-8">
//             <div className="flex border hover:bg-[#202020]  hover:border-white border-[#FFFFFF]/30 rounded-xl px-6 py-4 gap-5">
//               <Image
//                 alt="business-consulting-icon"
//                 src={"./icons/tax-business-consulting-icon1.svg"}
//                 width={40}
//                 height={20}
//               />
//               <p className="border border-r border-[#FFFFFF]/30"></p>

//               <div>
//                 <p className="text-xl general-sans font-medium ">
//                   Business Structuring & Registrations
//                 </p>
//                 <p className="text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>
//             </div>

//             <div className="flex border hover:bg-[#202020]  hover:border-white border-[#FFFFFF]/30 rounded-xl px-6 py-4 gap-5">
//               <Image
//                 alt="tax-business-consulting"
//                 src={"./icons/tax-business-consulting-icon2.svg"}
//                 width={40}
//                 height={20}
//               />
//               <p className="border border-r border-[#FFFFFF]/30"></p>

//               <div>
//                 <p className="text-xl general-sans font-medium ">
//                   Business Structuring & Registrations
//                 </p>
//                 <p className="text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>
//             </div>

//             <div className="flex border hover:bg-[#202020]  hover:border-white border-[#FFFFFF]/30 rounded-xl px-6 py-4 gap-5">
//               <Image
//                 alt="tax-business-consulting"
//                 src={"./icons/tax-business-consulting-icon3.svg"}
//                 width={40}
//                 height={20}
//               />
//               <p className="border border-r border-[#FFFFFF]/30"></p>

//               <div>
//                 <p className="text-xl general-sans font-medium ">
//                   Business Structuring & Registrations
//                 </p>
//                 <p className="text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>
//             </div>

//             <div className="flex border hover:bg-[#202020]  hover:border-white border-[#FFFFFF]/30 rounded-xl px-6 py-4 gap-5">
//               <Image
//                 src={"./icons/tax-business-consulting-icon4.svg"}
//                 width={40}
//                 height={20}
//                 alt="tax-business-consulting"
//               />
//               <p className="border border-r border-[#FFFFFF]/30"></p>

//               <div>
//                 <p className="text-xl general-sans font-medium ">
//                   Business Structuring & Registrations
//                 </p>
//                 <p className="text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-1/2 h-full flex items-center relative">
//           <div className="w-2/3 bg-white h-3/4 rounded-3xl absolute"></div>
//           <div className="w-1/2 bg-white  h-1/2 rounded-3xl absolute z-40 -bottom-10 right-24 border-[5] border-black "></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeTaxBusinessConsultingService = () => {
//   const sectionRef = useRef(null);
//   // const cardsRef = useRef([]);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   const whiteBox1Ref = useRef(null);
//   const whiteBox2Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Fade in whole section
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//         },
//       });

//       // Stagger animation for each card
//       gsap.from(cardsRef.current, {
//         opacity: 0,
//         x: -50,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//         },
//       });

//       // Animate white boxes on right
//       gsap.from([whiteBox1Ref.current, whiteBox2Ref.current], {
//         scale: 0,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="p-16 bg-black" ref={sectionRef}>
//       <div className="flex gap-32 items-center h-[85vh] text-white">
//         {/* Left Side */}
//         <div className="w-[45%]">
//           <p className="text-6xl font-medium general-sans">
//             Tax & Business Consulting Services
//           </p>
//           <p className="mt-5 text-sm">
//             Comprehensive support for startups, MSMEs, and growing businesses—from registrations to regulatory compliance
//           </p>

//           <div className="flex flex-col gap-5 mt-8">
//             {[
//               { icon: "tax-business-consulting-icon1.svg", title: "Business Structuring & Registrations" },
//               { icon: "tax-business-consulting-icon2.svg", title: "Tax Filing & Advisory" },
//               { icon: "tax-business-consulting-icon3.svg", title: "Regulatory Compliance" },
//               { icon: "tax-business-consulting-icon4.svg", title: "Financial Planning & Growth" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 ref={(el) => {
//                   cardsRef.current[i] = el
//                 }}
//                 className="flex border hover:bg-[#202020] hover:border-white border-[#FFFFFF]/30 rounded-xl px-6 py-4 gap-5"
//               >
//                 <Image
//                   alt={item.title}
//                   src={`./icons/${item.icon}`}
//                   width={40}
//                   height={20}
//                 />
//                 <p className="border border-r border-[#FFFFFF]/30"></p>
//                 <div>
//                   <p className="text-xl general-sans font-medium">{item.title}</p>
//                   <p className="text-sm mt-2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-1/2 h-full flex items-center relative">
//           <div
//             className="w-2/3 bg-white h-3/4 rounded-3xl absolute"
//             ref={whiteBox1Ref}
//           ></div>
//           <div
//             className="w-1/2 bg-white h-1/2 rounded-3xl absolute z-40 -bottom-10 right-24 border-[5] border-black"
//             ref={whiteBox2Ref}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeTaxBusinessConsultingService = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const whiteBox1Ref = useRef(null);
//   const whiteBox2Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const section = sectionRef.current;

//       // Fade in whole section
//       gsap.from(section, {
//         opacity: 0,
//         y: 80,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 70%",
//         },
//       });

//       // Staggered cards animation with scale and bounce
//       cardsRef.current.forEach((card, i) => {
//         if (card) {
//           gsap.from(card, {
//             opacity: 0,
//             x: -80,
//             scale: 0.95,
//             duration: 1.2,
//             delay: i * 0.15,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 80%",
//             },
//           });
//         }
//       });

//       // White box 1 animation with rotation & scale
//       gsap.fromTo(
//         whiteBox1Ref.current,
//         {
//           opacity: 0,
//           scale: 0.5,
//           rotate: -10,
//           y: 80,
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           rotate: 0,
//           y: 0,
//           duration: 1.3,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 70%",
//           },
//         }
//       );

//       // White box 2 animation with skew and bounce
//       gsap.fromTo(
//         whiteBox2Ref.current,
//         {
//           opacity: 0,
//           scale: 0,
//           skewX: 20,
//           x: 50,
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           skewX: 0,
//           x: 0,
//           duration: 1.4,
//           ease: "elastic.out(1, 0.5)",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 70%",
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="p-16 bg-black" ref={sectionRef}>
//       <div className="flex gap-32 items-center h-[85vh] text-white">
//         {/* Left Side */}
//         <div className="w-[45%]">
//           <p className="text-6xl font-medium general-sans leading-tight">
//             Tax & Business Consulting Services
//           </p>
//           <p className="mt-5 text-sm text-gray-300">
//             Comprehensive support for startups, MSMEs, and growing businesses—
//             from registrations to regulatory compliance
//           </p>

//           <div className="flex flex-col gap-5 mt-10">
//             {[
//               {
//                 icon: "tax-business-consulting-icon1.svg",
//                 title: "Business Structuring & Registrations",
//               },
//               {
//                 icon: "tax-business-consulting-icon2.svg",
//                 title: "Tax Filing & Advisory",
//               },
//               {
//                 icon: "tax-business-consulting-icon3.svg",
//                 title: "Regulatory Compliance",
//               },
//               {
//                 icon: "tax-business-consulting-icon4.svg",
//                 title: "Financial Planning & Growth",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 ref={(el) => {
//                   cardsRef.current[i] = el}}
//                 className="flex border border-[#FFFFFF]/30 hover:border-white hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl px-6 py-5 gap-5 backdrop-blur-sm"
//               >
//                 <Image
//                   alt={item.title}
//                   src={`./icons/${item.icon}`}
//                   width={40}
//                   height={20}
//                 />
//                 <div className="border-r border-[#FFFFFF]/30 h-auto"></div>
//                 <div>
//                   <p className="text-xl general-sans font-medium">
//                     {item.title}
//                   </p>
//                   <p className="text-sm mt-2 text-gray-400">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-1/2 h-full flex items-center relative">
//           <div
//             className="w-2/3 bg-white h-3/4 rounded-3xl absolute shadow-2xl"
//             ref={whiteBox1Ref}
//           ></div>
//           <div
//             className="w-1/2 bg-white h-1/2 rounded-3xl absolute z-40 -bottom-10 right-24 border-[5px] border-black shadow-lg"
//             ref={whiteBox2Ref}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const HomeTaxBusinessConsultingService = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const whiteBox1Ref = useRef(null);
  const whiteBox2Ref = useRef(null);
  // const headingRef = useRef(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);

  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // Split heading into words
      if (!headingRef.current) return;

      const splitHeading = new SplitType(headingRef.current, {
        types: "words",
        tagName: "span",
      });

      // Animate heading words in with skew & stagger
      gsap.from(splitHeading.words, {
        yPercent: 100,
        skewY: 10,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      // Description fade in with slight movement
      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        delay: 0.5,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      // Animate cards with clip reveal and rotation
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              clipPath: "inset(0 100% 0 0)",
              rotateY: -20,
              scale: 0.9,
              opacity: 0,
            },
            {
              clipPath: "inset(0 0% 0 0)",
              rotateY: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 97%",
              },
            }
          );
        }
      });

      // Animate white boxes with parallax scale + bounce
      gsap.fromTo(
        whiteBox1Ref.current,
        {
          y: 100,
          scale: 0.5,
          rotate: -15,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        whiteBox2Ref.current,
        {
          x: 100,
          scale: 0,
          rotate: 30,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.4,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative p-16 bg-black" ref={sectionRef}>
      <div className="flex gap-32 items-center min-h-[100vh] text-white relative z-10">
        {/* Left Side */}
        <div className="w-[45%]">
          <p
            className="text-6xl font-bold leading-tight general-sans overflow-hidden"
            ref={headingRef}
          >
            Tax & Business Consulting Services
          </p>

          <p className="mt-5 text-sm text-gray-300" ref={descRef}>
            Comprehensive support for startups, MSMEs, and growing
            businesses—from registrations to regulatory compliance
          </p>

          <div className="flex flex-col gap-5 mt-10">
            {[
              {
                icon: "tax-business-consulting-icon1.svg",
                title: "Business Structuring & Registrations",
              },
              {
                icon: "tax-business-consulting-icon2.svg",
                title: "Tax Filing & Advisory",
              },
              {
                icon: "tax-business-consulting-icon3.svg",
                title: "Regulatory Compliance",
              },
              {
                icon: "tax-business-consulting-icon4.svg",
                title: "Financial Planning & Growth",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="flex border border-[#FFFFFF]/30 hover:border-white hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl px-6 py-5 gap-5 backdrop-blur-sm shadow-md"
              >
                <Image
                  alt={item.title}
                  src={`./icons/${item.icon}`}
                  width={40}
                  height={20}
                />
                <div className="border-r border-[#FFFFFF]/30 h-auto"></div>
                <div>
                  <p className="text-xl font-semibold general-sans">
                    {item.title}
                  </p>
                  <p className="text-sm mt-2 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 min-h-[500px] flex items-center relative z-10">
          <div
            className="w-2/3 bg-white h-3/4 rounded-3xl absolute shadow-2xl"
            ref={whiteBox1Ref}
          ></div>
          <div
            className="w-1/2 bg-white h-1/2 rounded-3xl absolute z-40 -bottom-10 right-24 border-[5px] border-black shadow-xl"
            ref={whiteBox2Ref}
          ></div>
        </div>
      </div>
    </section>
  );
};
