// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// gsap.registerPlugin(ScrollTrigger);

// export const HomeTaxBusinessConsultingService = () => {
//   const sectionRef = useRef(null);
//   const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
//   const whiteBox1Ref = useRef(null);
//   const whiteBox2Ref = useRef(null);
//   const headingRef = useRef<HTMLParagraphElement | null>(null);
//   const descRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const section = sectionRef.current;

//       // Split heading into words
//       if (!headingRef.current) return;

//       const splitHeading = new SplitType(headingRef.current, {
//         types: "words",
//         tagName: "span",
//       });

//       gsap.from(splitHeading.words, {
//         yPercent: 100,
//         skewY: 10,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         stagger: 0.07,
//         scrollTrigger: {
//           trigger: section,
//           start: "top 75%",
//         },
//       });

//       // Animate description
//       gsap.from(descRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 75%",
//         },
//       });

//       // Batch animate cards
//       if (cardsWrapperRef.current) {
//         ScrollTrigger.batch(cardsWrapperRef.current.querySelectorAll(".card"), {
//           interval: 0.1,
//           batchMax: 4,
//           onEnter: (batch) =>
//             gsap.fromTo(
//               batch,
//               {
//                 clipPath: "inset(0 100% 0 0)",
//                 rotateY: -20,
//                 scale: 0.95,
//                 opacity: 0,
//               },
//               {
//                 clipPath: "inset(0 0% 0 0)",
//                 rotateY: 0,
//                 scale: 1,
//                 opacity: 1,
//                 duration: 1,
//                 ease: "power3.out",
//                 // stagger: 0.2,
//               }
//             ),
//         });
//       }

//       // Animate white boxes
//       gsap.fromTo(
//         whiteBox1Ref.current,
//         { y: 100, scale: 0.7, rotate: -10, opacity: 0 },
//         {
//           y: 0,
//           scale: 1,
//           rotate: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         whiteBox2Ref.current,
//         { x: 100, scale: 0, rotate: 25, opacity: 0 },
//         {
//           x: 0,
//           scale: 1,
//           rotate: 0,
//           opacity: 1,
//           duration: 1.3,
//           ease: "elastic.out(1, 0.5)",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="relative p-16 bg-black" ref={sectionRef}>
//       <div className="flex gap-32 items-center min-h-[100vh] text-white relative z-10">
//         {/* Left Side */}
//         <div className="w-[60%]">
//           <p
//             className="text-6xl font-bold leading-tight general-sans overflow-hidden"
//             ref={headingRef}
//           >
//             Tax & Business Consulting Services
//           </p>

//           <p className="mt-5 text-sm text-gray-300" ref={descRef}>
//             Comprehensive support for startups, MSMEs, and growing
//             businesses—from registrations to regulatory compliance
//           </p>

//           <div className="flex flex-col gap-5 mt-10" ref={cardsWrapperRef}>
//             {[
//               {
//                 icon: "tax-business-consulting-icon1.svg",
//                 title: "Business Structuring & Registrations",
//                 subText:
//                   "Proprietorship, Partnership, LLP, Trust, Pvt Ltd & More",
//               },
//               {
//                 icon: "tax-business-consulting-icon2.svg",
//                 title: "Tax Filing & Advisory",
//                 subText:
//                   "GST Registrations, ITR Filing, TDS Returns, Advance Tax ",
//               },
//               {
//                 icon: "tax-business-consulting-icon3.svg",
//                 title: "Regulatory Compliance",
//                 subText:
//                   "DIN eKYC, AOC-4, MGT-7, ADT-1 Filing, MOA/ AOA Amendments.",
//               },
//               {
//                 icon: "tax-business-consulting-icon4.svg",
//                 title: "Financial Planning & Growth",
//                 subText:
//                   "PF / ESI / PT Registration & Returns, FSSAI & DSC, IEC.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card flex border border-[#FFFFFF]/30 hover:border-white hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl px-6 py-5 gap-5 backdrop-blur-sm shadow-md"
//               >
//                 <Image
//                   alt={item.title}
//                   src={`./icons/${item.icon}`}
//                   width={40}
//                   height={20}
//                 />
//                 <div className="border-r border-[#FFFFFF]/30 h-auto"></div>
//                 <div>
//                   <p className="text-xl font-semibold general-sans">
//                     {item.title}
//                   </p>
//                   <p className="text-sm mt-2 text-gray-400">{item.subText}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-[40%] me-20 min-h-[500px] flex items-center relative z-10">
//           <Image
//             src="/images/home-tax&businessconsultingservice-image1.jpg"
//             alt="a"
//             fill
//             className="w-2/3 bg-white h-3/4 rounded-3xl absolute shadow-2xl object-cover"
//           />
//           <div
//             className="w-1/2 bg-white h-1/2 rounded-3xl absolute z-40 -bottom-25 -right-28 border-[10px] border-black shadow-xl"
//             ref={whiteBox2Ref}
//           >
//             <Image
//               src="/images/home-tax-business-consulting-image1.jpg"
//               alt="a"
//               fill
//               className="w-2/3 bg-white h-3/4 rounded-3xl absolute shadow-2xl object-cover"
//             />
//           </div>
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
// import SplitType from "split-type";
// gsap.registerPlugin(ScrollTrigger);

//  const HomeTaxBusinessConsultingService = () => {
//   const sectionRef = useRef(null);
//   const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
//   const whiteBox1Ref = useRef(null);
//   const whiteBox2Ref = useRef(null);
//   const headingRef = useRef<HTMLParagraphElement | null>(null);
//   const descRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const section = sectionRef.current;
//       if (!headingRef.current) return;

//       const splitHeading = new SplitType(headingRef.current, {
//         types: "words",
//         tagName: "span",
//       });

//       gsap.from(splitHeading.words, {
//         yPercent: 100,
//         skewY: 10,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         stagger: 0.07,
//         scrollTrigger: {
//           trigger: section,
//           start: "top 75%",
//         },
//       });

//       gsap.from(descRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 75%",
//         },
//       });

//       if (cardsWrapperRef.current) {
//         ScrollTrigger.batch(cardsWrapperRef.current.querySelectorAll(".card"), {
//           interval: 0.1,
//           batchMax: 4,
//           onEnter: (batch) =>
//             gsap.fromTo(
//               batch,
//               {
//                 clipPath: "inset(0 100% 0 0)",
//                 rotateY: -20,
//                 scale: 0.95,
//                 opacity: 0,
//               },
//               {
//                 clipPath: "inset(0 0% 0 0)",
//                 rotateY: 0,
//                 scale: 1,
//                 opacity: 1,
//                 duration: 1,
//                 ease: "power3.out",
//               }
//             ),
//         });
//       }

//       gsap.fromTo(
//         whiteBox1Ref.current,
//         { y: 100, scale: 0.7, rotate: -10, opacity: 0 },
//         {
//           y: 0,
//           scale: 1,
//           rotate: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         whiteBox2Ref.current,
//         { x: 100, scale: 0, rotate: 25, opacity: 0 },
//         {
//           x: 0,
//           scale: 1,
//           rotate: 0,
//           opacity: 1,
//           duration: 1.3,
//           ease: "elastic.out(1, 0.5)",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className="relative p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black"
//       ref={sectionRef}
//     >
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 xl:gap-28 items-start lg:items-center min-h-[100vh] text-white relative z-10">
//         {/* Left Side */}
//         <div className="w-full lg:w-[60%]">
//           <p
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-loose4  xl:leading-tight general-sans overflow-hidden"
//             ref={headingRef}
//           >
//             Tax & Business Consulting Services
//           </p>

//           <p className="mt-5 text-sm sm:text-base text-gray-300" ref={descRef}>
//             Comprehensive support for startups, MSMEs, and growing
//             businesses—from registrations to regulatory compliance
//           </p>

//           <div className="flex flex-col gap-5 mt-10" ref={cardsWrapperRef}>
//             {[
//               {
//                 icon: "tax-business-consulting-icon1.svg",
//                 title: "Business Structuring & Registrations",
//                 subText:
//                   "Proprietorship, Partnership, LLP, Trust, Pvt Ltd & More",
//               },
//               {
//                 icon: "tax-business-consulting-icon2.svg",
//                 title: "Tax Filing & Advisory Services",
//                 subText:
//                   "GST Registrations, ITR Filing, TDS Returns, Advance Tax ",
//               },
//               {
//                 icon: "tax-business-consulting-icon3.svg",
//                 title: "Legal & MCA Compliance",
//                 subText:
//                   "DIN eKYC, AOC-4, MGT-7, ADT-1 Filing, MOA/ AOA Amendments.",
//               },
//               {
//                 icon: "tax-business-consulting-icon4.svg",
//                 title: "Payroll, Licensing & Other Services",
//                 subText:
//                   "PF / ESI / PT Registration & Returns, FSSAI & DSC, IEC.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="card flex items-start border border-[#FFFFFF]/30 hover:border-white hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl px-4 sm:px-6 py-5 gap-4 sm:gap-5 backdrop-blur-sm shadow-md"
//               >
//                 <Image
//                   alt={item.title}
//                   src={`./icons/${item.icon}`}
//                   width={40}
//                   height={20}
//                 />
//                 <div className="border-r border-[#FFFFFF]/30 h-14"></div>
//                 <div>
//                   <p className="text-base sm:text-lg md:text-xl font-medium general-sans">
//                     {item.title}
//                   </p>
//                   <p className="text-xs sm:text-sm mt-2 text-gray-400">
//                     {item.subText}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-full lg:w-[40%] me-0 lg:me-20 min-h-[300px] sm:min-h-[500px] flex items-center relative z-10">
//           <Image
//             src="/images/home-tax&businessconsultingservice-image1.jpg"
//             alt="a"
//             fill
//             className="w-[80%] h-[60%] sm:w-2/3 sm:h-3/4 bg-white rounded-3xl absolute shadow-2xl object-cover"
//           />
//           <div
//             className="w-3/4 h-1/2 bg-white hidden xl:block rounded-3xl absolute z-40 bottom-[-60px] right-0 sm:bottom-[-100px] xl:right-[-110px] border-[10px] border-black shadow-xl"
//             ref={whiteBox2Ref}
//           >
//             <Image
//               src="/images/home-tax-business-consulting-image1.jpg"
//               alt="a"
//               fill
//               className="w-full h-full rounded-xl object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeTaxBusinessConsultingService;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const HomeTaxBusinessConsultingService = () => {
  const sectionRef = useRef(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
  const whiteBox1Ref = useRef(null);
  const whiteBox2Ref = useRef(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!headingRef.current) return;

      const splitHeading = new SplitType(headingRef.current, {
        types: "words",
        tagName: "span",
      });

      gsap.set(splitHeading.words, { willChange: "transform, opacity" });

      gsap.from(splitHeading.words, {
        yPercent: 100,
        skewY: 10,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      gsap.set(descRef.current, { willChange: "transform, opacity" });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      if (cardsWrapperRef.current) {
        const cards = cardsWrapperRef.current.querySelectorAll(".card");
        cards.forEach((card) => {
          (card as HTMLElement).style.willChange =
            "transform, opacity, clip-path";
        });

        ScrollTrigger.batch(cards, {
          interval: 0.15,
          batchMax: 3,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              {
                clipPath: "inset(0 100% 0 0)",
                rotateY: -20,
                scale: 0.95,
                opacity: 0,
              },
              {
                clipPath: "inset(0 0% 0 0)",
                rotateY: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1,
              }
            ),
        });
      }

      gsap.set(whiteBox1Ref.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        whiteBox1Ref.current,
        { y: 100, scale: 0.7, rotate: -10, opacity: 0 },
        {
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.set(whiteBox2Ref.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        whiteBox2Ref.current,
        { x: 100, scale: 0, rotate: 25, opacity: 0 },
        {
          x: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black"
      ref={sectionRef}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 xl:gap-28 items-start lg:items-center min-h-[100vh] text-white relative z-10">
        {/* Left Side */}
        <div className="w-full lg:w-[60%]">
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-loose4 xl:leading-tight general-sans overflow-hidden"
            ref={headingRef}
          >
            Tax & Business Consulting Services
          </p>

          <p className="mt-5 text-sm sm:text-base text-gray-300" ref={descRef}>
            Comprehensive support for startups, MSMEs, and growing
            businesses—from registrations to regulatory compliance
          </p>

          <div className="flex flex-col gap-5 mt-10" ref={cardsWrapperRef}>
            {[
              {
                icon: "tax-business-consulting-icon1.svg",
                title: "Business Structuring & Registrations",
                subText:
                  "Proprietorship, Partnership, LLP, Trust, Pvt Ltd & More",
              },
              {
                icon: "tax-business-consulting-icon2.svg",
                title: "Tax Filing & Advisory Services",
                subText:
                  "GST Registrations, ITR Filing, TDS Returns, Advance Tax ",
              },
              {
                icon: "tax-business-consulting-icon3.svg",
                title: "Legal & MCA Compliance",
                subText:
                  "DIN eKYC, AOC-4, MGT-7, ADT-1 Filing, MOA/ AOA Amendments.",
              },
              {
                icon: "tax-business-consulting-icon4.svg",
                title: "Payroll, Licensing & Other Services",
                subText:
                  "PF / ESI / PT Registration & Returns, FSSAI & DSC, IEC.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card flex items-start border border-[#FFFFFF]/30 hover:border-white hover:bg-[#1a1a1a] transition-all duration-500 rounded-xl px-4 sm:px-6 py-5 gap-4 sm:gap-5 backdrop-blur-sm shadow-md tra"
              >
                <Image
                  alt={item.title}
                  src={`./icons/${item.icon}`}
                  width={40}
                  height={20}
                  loading="lazy"
                />
                <div className="border-r border-[#FFFFFF]/30 h-14"></div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-medium general-sans">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm mt-2 text-gray-400">
                    {item.subText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[40%] me-0 lg:me-20 min-h-[300px] sm:min-h-[500px] flex items-center relative z-10">
          <Image
            src="/images/home-tax&businessconsultingservice-image1.jpg"
            alt="a"
            fill
            className="w-[80%] h-[60%] sm:w-2/3 sm:h-3/4 bg-white rounded-3xl absolute shadow-2xl object-cover"
            loading="lazy"
          />
          <div
            id="image-change-div"
            className="w-3/4 h-1/2 bg-white hidden xl:block rounded-3xl absolute z-40 bottom-[-60px] right-0 sm:bottom-[-100px] xl:right-[-110px] border-[10px] border-black shadow-xl"
            ref={whiteBox2Ref}
          >
            <Image
              src="/images/home-tax-business-consulting-image1.jpg"
              alt="a"
              fill
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />

            <Image
              src="/images/home-tax-business-consulting-image2.jpg"
              alt="a"
              fill
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />

            <Image
              src="/images/home-tax-business-consulting-image3.jpg"
              alt="a"
              fill
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTaxBusinessConsultingService;
