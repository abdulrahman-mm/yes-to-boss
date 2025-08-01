// import React from "react";


// export const ITR1KeyServices = () => {
//   return (
//     <section className="bg-white min-h-screen p-16 font-Bricolage_Grotesque">
//       <div className="flex justify-between items-center gap-5">
      
//         <div className="flex flex-col gap-4 w-2/5">
//           <p className="text-sm ">Key Services</p>
//           <p className="text-5xl">
//             Comprehensive Audit Solutions for Every Challenge
//           </p>
//           <p className="text-sm">
//             Explore our specialized internal audit services designed to manage
//             risk, enhance control, and ensure operational and regulatory
//             excellence
//           </p>
//           <button className="bg-[#070707] px-8 py-3 rounded-4xl text-white w-fit">
//             Book Consultation
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-4 flex-grow">
//           <div className="relative h-80  rounded-2xl top-5">
//             <img
//               src="/images/itr1KeySerivces1.jpg"
//               alt="fdf"
//               className="absolute w-full z-10 h-full object-cover  rounded-2xl"
//             />
//             <div className="bg-black/75 absolute w-full h-full z-20  rounded-2xl"></div>

//             <div className="flex flex-col  rounded-2xl justify-between absolute w-full h-full z-30 text-white p-5">
//               <p className="text-3xl">01</p>

//               <div className="flex flex-col gap-2">
//                 <p className="text-3xl">Risk Assessment</p>
//                 <p className="text-sm">
//                   We evaluate your organization’s key risk areas and assess the
//                   design and effectiveness of internal controls to ensure
//                   proactive risk mitigation.
//                 </p>
//               </div>

//               <div className="flex justify-end">
//                 <img
//                   src="/icons/ArrowUpRight.svg"
//                   alt=""
//                   className="w-10 h-10"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="relative h-80  rounded-2xl ">
//             <img
//               src="/images/itr1KeySerivces2.jpg"
//               alt="fdf"
//               className="absolute w-full z-10 h-full object-cover  rounded-2xl"
//             />
//             <div className="bg-black/75 absolute w-full h-full z-20  rounded-2xl"></div>

//             <div className="flex flex-col  rounded-2xl justify-between absolute w-full h-full z-30 text-white p-5">
//               <p className="text-3xl">02</p>

//               <div className="flex flex-col gap-2">
//                 <p className="text-3xl">Operational & Financial Audits</p>
//                 <p className="text-sm">
//                   We evaluate your organization’s key risk areas and assess the
//                   design and effectiveness of internal controls to ensure
//                   proactive risk mitigation.
//                 </p>
//               </div>

//               <div className="flex justify-end">
//                 <img
//                   src="/icons/ArrowUpRight.svg"
//                   alt=""
//                   className="w-10 h-10"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="relative h-80  rounded-2xl top-5">
//             <img
//               src="/images/itr1KeySerivces3.jpg"
//               alt="fdf"
//               className="absolute w-full z-10 h-full object-cover  rounded-2xl"
//             />
//             <div className="bg-black/75 absolute w-full h-full z-20  rounded-2xl"></div>

//             <div className="flex flex-col  rounded-2xl justify-between absolute w-full h-full z-30 text-white p-5">
//               <p className="text-3xl">03</p>

//               <div className="flex flex-col gap-2">
//                 <p className="text-3xl">Risk Compliance Audits</p>
//                 <p className="text-sm">
//                   We evaluate your organization’s key risk areas and assess the
//                   design and effectiveness of internal controls to ensure
//                   proactive risk mitigation.
//                 </p>
//               </div>

//               <div className="flex justify-end">
//                 <img
//                   src="/icons/ArrowUpRight.svg"
//                   alt=""
//                   className="w-10 h-10"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="relative h-80  rounded-2xl">
//             <img
//               src="/images/itr1KeySerivces4.jpg"
//               alt="fdf"
//               className="absolute w-full z-10 h-full object-cover  rounded-2xl"
//             />
//             <div className="bg-black/75 absolute w-full h-full z-20  rounded-2xl"></div>

//             <div className="flex flex-col  rounded-2xl justify-between absolute w-full h-full z-30 text-white p-5">
//               <p className="text-3xl">04</p>

//               <div className="flex flex-col gap-2">
//                 <p className="text-3xl">IT & Cybersecurity Audits</p>
//                 <p className="text-sm">
//                   We evaluate your organization’s key risk areas and assess the
//                   design and effectiveness of internal controls to ensure
//                   proactive risk mitigation.
//                 </p>
//               </div>

//               <div className="flex justify-end">
//                 <img
//                   src="/icons/ArrowUpRight.svg"
//                   alt=""
//                   className="w-10 h-10"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


















// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const ITR1KeyServices = () => {
//   const textRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<HTMLDivElement[]>([]);

//   const addToCardRefs = (el: HTMLDivElement) => {
//     if (el && !cardRefs.current.includes(el)) {
//       cardRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     gsap.from(textRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: "top 80%",
//       },
//     });

//     gsap.from(cardRefs.current, {
//       opacity: 0,
//       scale: 0.9,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: cardRefs.current[0],
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <section className="bg-white min-h-screen p-16 font-Bricolage_Grotesque">
//       <div className="flex justify-between items-center gap-5 flex-wrap lg:flex-nowrap">
//         {/* Text Section */}
//         <div className="flex flex-col gap-4 w-full lg:w-2/5" ref={textRef}>
//           <p className="text-sm">Key Services</p>
//           <p className="text-5xl">
//             Comprehensive Audit Solutions for Every Challenge
//           </p>
//           <p className="text-sm">
//             Explore our specialized internal audit services designed to manage
//             risk, enhance control, and ensure operational and regulatory
//             excellence
//           </p>
//           <button className="bg-[#070707] px-8 py-3 rounded-4xl text-white w-fit">
//             Book Consultation
//           </button>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
//           {[
//             {
//               title: "Risk Assessment",
//               image: "/images/itr1KeySerivces1.jpg",
//               index: "01",
//             },
//             {
//               title: "Operational & Financial Audits",
//               image: "/images/itr1KeySerivces2.jpg",
//               index: "02",
//             },
//             {
//               title: "Risk Compliance Audits",
//               image: "/images/itr1KeySerivces3.jpg",
//               index: "03",
//             },
//             {
//               title: "IT & Cybersecurity Audits",
//               image: "/images/itr1KeySerivces4.jpg",
//               index: "04",
//             },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className={`relative h-80 rounded-2xl ${i % 2 === 0 ? "top-5" : ""}`}
//               ref={addToCardRefs}
//             >
//               <img
//                 src={service.image}
//                 alt=""
//                 className="absolute w-full z-10 h-full object-cover rounded-2xl"
//               />
//               <div className="bg-black/75 absolute w-full h-full z-20 rounded-2xl"></div>

//               <div className="flex flex-col justify-between absolute w-full h-full z-30 text-white p-5 rounded-2xl">
//                 <p className="text-3xl">{service.index}</p>
//                 <div className="flex flex-col gap-2">
//                   <p className="text-3xl">{service.title}</p>
//                   <p className="text-sm">
//                     We evaluate your organization’s key risk areas and assess
//                     the design and effectiveness of internal controls to ensure
//                     proactive risk mitigation.
//                   </p>
//                 </div>
//                 <div className="flex justify-end">
//                   <img
//                     src="/icons/ArrowUpRight.svg"
//                     alt=""
//                     className="w-10 h-10"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };









"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ITR1KeyServices = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // ✅ Function to collect refs
  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // ✅ Clear refs BEFORE rendering
  cardRefs.current = [];

  useLayoutEffect(() => {
    // Animate text section
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate each card individually
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  const services = [
    {
      title: "Risk Assessment",
      image: "/images/itr1KeySerivces1.jpg",
      index: "01",
    },
    {
      title: "Operational & Financial Audits",
      image: "/images/itr1KeySerivces2.jpg",
      index: "02",
    },
    {
      title: "Risk Compliance Audits",
      image: "/images/itr1KeySerivces3.jpg",
      index: "03",
    },
    {
      title: "IT & Cybersecurity Audits",
      image: "/images/itr1KeySerivces4.jpg",
      index: "04",
    },
  ];

  return (
    <section className="bg-white min-h-screen p-16 font-Bricolage_Grotesque">
      <div className="flex justify-between items-center gap-5 flex-wrap lg:flex-nowrap">
        {/* Text Section */}
        <div
          className="flex flex-col gap-4 w-full lg:w-2/5 will-change-transform"
          ref={textRef}
        >
          <p className="text-sm">Key Services</p>
          <p className="text-5xl">
            Comprehensive Audit Solutions for Every Challenge
          </p>
          <p className="text-sm">
            Explore our specialized internal audit services designed to manage
            risk, enhance control, and ensure operational and regulatory
            excellence
          </p>
          <button className="bg-[#070707] px-8 py-3 rounded-4xl text-white w-fit">
            Book Consultation
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative h-80 rounded-2xl will-change-transform ${
                i % 2 === 0 ? "top-5" : ""
              }`}
              ref={addToCardRefs}
            >
              <img
                loading="lazy"
                src={service.image}
                alt=""
                className="absolute w-full z-10 h-full object-cover rounded-2xl"
              />
              <div className="bg-black/75 absolute w-full h-full z-20 rounded-2xl" />
              <div className="flex flex-col justify-between absolute w-full h-full z-30 text-white p-5 rounded-2xl">
                <p className="text-3xl">{service.index}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-3xl">{service.title}</p>
                  <p className="text-sm">
                    We evaluate your organization’s key risk areas and assess
                    the design and effectiveness of internal controls to ensure
                    proactive risk mitigation.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="/icons/ArrowUpRight.svg"
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

