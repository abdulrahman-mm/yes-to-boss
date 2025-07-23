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

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText, CountUp } from "../animations";

gsap.registerPlugin(ScrollTrigger);

export const AboutSecondSection = () => {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  // const statsRef = useRef([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      });

      // Paragraph animation
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Stats animation
      statsRef.current.forEach((stat, i) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power2.out",
        });
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white general-sans overflow-hidden">
      <div className="flex gap-32 p-16">
        <div className="w-1/3" ref={badgeRef}>
          <p className="px-8 h-fit font-medium text-sm text-center rounded-full py-2.5 border-[#EBEBEB] border-2">
            About Us
          </p>
        </div>

        <div>
          <BlurText
            text=" We consistently uphold the highest standards of honesty, integrity,
            and transparency in every aspect of our work from client
            communications to financial reporting."
            delay={50}
            animateBy="words"
            direction="top"
            className="font-medium text-5xl leading-14"
          />

          <p ref={paragraphRef} className="font-normal text-xs mt-5">
            We are committed to the highest standards of honesty, integrity, and
            transparency—reflected in every detail of our work, from clear
            client communication to accurate financial reporting—ensuring trust,
            professionalism, and long-term success in every partnership we build
          </p>

          <div className="flex gap-24 justify-between mt-14">
            <div
              ref={(el) => {
                statsRef.current[0] = el;
              }}
            >
              <p className="font-medium text-6xl">
                <CountUp
                  from={0}
                  to={1200}
                  separator=","
                  direction="up"
                  duration={0.2}
                  className="count-up-text"
                />
                +
              </p>
              <p className="font-normal text-sm mt-3">
                Prepared annually with precision and strategic insight.
              </p>
            </div>

            <div
              ref={(el) => {
                statsRef.current[1] = el;
              }}
            >
              <p className="font-medium text-6xl">
                <CountUp
                  from={0}
                  to={98}
                  separator=","
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                />
                %
              </p>
              <p className="font-normal text-sm mt-3">
                Built on trust, reliability, and consistent service
              </p>
            </div>

            <div
              ref={(el) => {
                statsRef.current[2] = el;
              }}
            >
              <p className="font-medium text-6xl">
                <CountUp
                  from={0}
                  to={24}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text"
                />
                /7
              </p>
              <p className="font-normal text-sm mt-3">
                To your financial data through our secure and modern{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#212121] to-[#070707] h-[90vh] flex justify-end p-9">
        <div className="relative h-full w-[50%]" ref={imageRef}>
          <Image
            alt="a"
            src="/images/india-map-image.svg"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="h-80 w-full bg-gray-300"></div>
    </section>
  );
};
