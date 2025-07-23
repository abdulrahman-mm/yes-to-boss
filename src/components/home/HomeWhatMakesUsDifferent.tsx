// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeWhatMakesUsDifferent = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     if (containerRef.current && imageRef.current) {
//       const container = containerRef.current;
//       const image = imageRef.current;

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: "top 20%",
//           toggleActions: "play none none none",
//         },
//       });

//       tl.fromTo(
//         image,
//         {
//           x: -200,
//           y: -100,
//           rotate: 720,
//           opacity: 0,
//           scale: 0.5,
//         },
//         {
//           x: 0,
//           y: 0,
//           rotate: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 2,
//           ease: "power4.out",
//         }
//       );
//     }
//   }, []);

//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     cardsRef.current.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 100%",
//           // toggleActions: "play none none none",
//           toggleActions: "play none none reset",

//         },
//         delay: i * 0.1,
//       });
//     });
//   }, []);

//   return (
//     <section className=" bg-white pb-16 general-sans">
//       <div className="flex p-16 flex-col gap-5 items-center justify-center">
//         {/* <div className="flex items-center gap-5 font-medium text-5xl">
//           <p>What</p>
//           <p className="bg-gray-400 w-28 h-10 rounded-4xl"></p>
//           <p>Makes Us Different</p>
//           <div className="w-14 h-auto">
//             <Image
//               alt="tax-business-consulting"
//               src={"./icons/home-cirlce-icon.svg"}
//               width={50}
//               height={40}
//             />
//           </div>
//         </div> */}
//         <div
//           ref={containerRef}
//           className="flex items-center gap-5 font-medium text-5xl"
//         >
//           <p>What</p>
//           <p className="bg-gray-400 w-28 h-10 rounded-4xl"></p>
//           <p>Makes Us Different</p>
//           <div className="w-14 h-auto" ref={imageRef}>
//             <Image
//               alt="tax-business-consulting"
//               src="./icons/home-cirlce-icon.svg"
//               width={50}
//               height={40}
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-5 font-medium text-5xl">
//           <p>For</p>
//           <div className="w-14  h-auto">
//             <Image
//               alt="tax-business-consulting"
//               src={"./icons/home-play-icon.svg"}
//               width={50}
//               height={40}
//             />
//           </div>
//           <p>Our Clients</p>
//           <div className="w-20 sm:w-24 h-auto">
//             <Image
//               src="/icons/home-our-clients-icon.svg" // public folder path
//               alt="Client Icon"
//               width={70}
//               height={80}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* <div className="flex px-16 pt-16 items-center gap-3 ">
//         <div className="bg-[#E8E8E8] transition-all duration-500 hover:bg-black group h-110 w-52 relative rounded-2xl flex-grow">
//           <div className="bg-[#292833]/50 transition-all duration-500 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl">
//             <p className="text-white text-xs font-medium ">01</p>
//             <p className="font-medium text-white text-3xl">
//               Nationwide Expertise
//             </p>
//           </div>
//         </div>

//         <div className="bg-[#E8E8E8] hover:bg-black group transition-all duration-500 h-110 w-52 relative rounded-2xl flex-grow">
//           <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl">
//             <p className="text-white text-xs font-medium">02</p>
//             <p className="font-medium text-white text-3xl">
//               Personalized Financial Solutions
//             </p>
//           </div>
//         </div>

//         <div className="bg-[#E8E8E8] hover:bg-black group transition-all duration-500  h-110 w-52 relative rounded-2xl flex-grow">
//           <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl">
//             <p className="text-white text-xs font-medium">03</p>
//             <p className="font-medium text-white text-3xl">
//               Multi-Sector Proficiency
//             </p>
//           </div>
//         </div>

//         <div className="bg-[#E8E8E8] hover:bg-black group  transition-all duration-500 h-110 w-52 relative rounded-2xl flex-grow">
//           <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl">
//             <p className="text-white text-xs font-medium">04</p>
//             <p className="font-medium text-white text-3xl">
//               Tech-Enabled Delivery
//             </p>
//           </div>
//         </div>
//       </div> */}

//       <div className="flex flex-wrap justify-center gap-5 px-16 pt-16">
//         {[
//           {
//             id: "01",
//             title: "Nationwide Expertise",
//           },
//           {
//             id: "02",
//             title: "Personalized Financial Solutions",
//           },
//           {
//             id: "03",
//             title: "Multi-Sector Proficiency",
//           },
//           {
//             id: "04",
//             title: "Tech-Enabled Delivery",
//           },
//         ].map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => {
//               cardsRef.current[index] = el!;
//             }}
//             className="bg-[#E8E8E8] flex-grow hover:bg-black group transition-all duration-500 h-110 w-52 relative rounded-2xl overflow-hidden cursor-pointer"
//           >
//             <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl transition-all duration-500">
//               <p className="text-white text-xs font-medium">{item.id}</p>
//               <p className="font-medium text-white text-3xl">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };





// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeWhatMakesUsDifferent = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const headingRef = useRef(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     if (containerRef.current && imageRef.current) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       });

//       tl.fromTo(
//         headingRef.current,
//         {
//           y: 100,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power4.out",
//         }
//       ).fromTo(
//         imageRef.current,
//         {
//           x: -100,
//           rotate: 720,
//           opacity: 0,
//           scale: 0.5,
//         },
//         {
//           x: 0,
//           rotate: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1.5,
//           ease: "power4.out",
//         },
//         "-=1"
//       );
//     }
//   }, []);

//   useEffect(() => {
//     cardsRef.current.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 90%",
//           toggleActions: "play none none none",
//         },
//         delay: i * 0.1,
//       });
//     });
//   }, []);

//   return (
//     <section className="bg-white pb-16 general-sans">
//       <div className="flex p-16 flex-col gap-5 items-center justify-center">
//         <div
//           ref={containerRef}
//           className="flex items-center gap-5 font-medium text-5xl"
//         >
//           <div ref={headingRef} className="flex items-center gap-5">
//             <p>What</p>
//             <p className="bg-gray-400 w-28 h-10 rounded-4xl"></p>
//             <p>Makes Us Different</p>
//           </div>
//           <div className="w-14 h-auto" ref={imageRef}>
//             <Image
//               alt="tax-business-consulting"
//               src="/icons/home-cirlce-icon.svg"
//               width={50}
//               height={40}
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-5 font-medium text-5xl">
//           <p>For</p>
//           <div className="w-14 h-auto">
//             <Image
//               alt="tax-business-consulting"
//               src="/icons/home-play-icon.svg"
//               width={50}
//               height={40}
//             />
//           </div>
//           <p>Our Clients</p>
//           <div className="w-20 sm:w-24 h-auto">
//             <Image
//               src="/icons/home-our-clients-icon.svg"
//               alt="Client Icon"
//               width={70}
//               height={80}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-5 px-16 pt-16">
//         {[
//           {
//             id: "01",
//             title: "Nationwide Expertise",
//           },
//           {
//             id: "02",
//             title: "Personalized Financial Solutions",
//           },
//           {
//             id: "03",
//             title: "Multi-Sector Proficiency",
//           },
//           {
//             id: "04",
//             title: "Tech-Enabled Delivery",
//           },
//         ].map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => {
//               cardsRef.current[index] = el!;
//             }}
//             className="bg-[#E8E8E8] flex-grow hover:bg-black group transition-all duration-500 h-110 w-52 relative rounded-2xl overflow-hidden cursor-pointer"
//           >
//             <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl transition-all duration-500">
//               <p className="text-white text-xs font-medium">{item.id}</p>
//               <p className="font-medium text-white text-3xl">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };





















// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeWhatMakesUsDifferent = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const headingTextRef = useRef<HTMLDivElement>(null);
//   const subHeadingTextRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate top heading text group
//       if (headingTextRef.current) {
//         gsap.from(Array.from(headingTextRef.current.children), {
//           opacity: 0,
//           y: 50,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power4.out",
//         });
//       }

//       // Clip-path + opacity animation for the icon image
//       gsap.fromTo(
//         imageRef.current,
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
//             trigger: containerRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       // Animate subheading text ("For Our Clients")
//       if(subHeadingTextRef.current){
//       gsap.from(subHeadingTextRef.current?.children, {
//         y: 50,
//         opacity: 0,
//         scale: 0.95,
//         duration: 1,
//         ease: "power4.out",
//         stagger: 0.15,
//         scrollTrigger: {
//           trigger: subHeadingTextRef.current,
//           start: "top 80%",
//         },
//       });
//     }
//       // Animate cards one-by-one
//       cardsRef.current.forEach((card, index) => {
//         gsap.fromTo(
//           card,
//           {
//             opacity: 0,
//             y: 80,
//             scale: 0.95,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//             },
//             delay: index * 0.1,
//           }
//         );
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="bg-white pb-16 general-sans">
//       <div className="flex p-16 flex-col gap-5 items-center justify-center">
//         <div
//           ref={containerRef}
//           className="flex items-center gap-5 font-medium text-5xl"
//         >
//           {/* Animated text block */}
//           <div ref={headingTextRef} className="flex items-center gap-5">
//             <p>What</p>
//             <p className="bg-gray-400 w-28 h-10 rounded-4xl"></p>
//             <p>Makes Us Different</p>
//           </div>

//           {/* Icon animation */}
//           <div className="w-14 h-auto overflow-hidden" ref={imageRef}>
//             <Image
//               alt="tax-business-consulting"
//               src="/icons/home-cirlce-icon.svg"
//               width={50}
//               height={40}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Animated subheading */}
//         <div
//           ref={subHeadingTextRef}
//           className="flex items-center gap-5 font-medium text-5xl"
//         >
//           <p>For</p>
//           <div className="w-14 h-auto">
//             <Image
//               alt="tax-business-consulting"
//               src="/icons/home-play-icon.svg"
//               width={50}
//               height={40}
//             />
//           </div>
//           <p>Our Clients</p>
//           <div className="w-20 sm:w-24 h-auto">
//             <Image
//               src="/icons/home-our-clients-icon.svg"
//               alt="Client Icon"
//               width={70}
//               height={80}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Cards with modern scroll animations */}
//       <div className="flex flex-wrap justify-center gap-5 px-16 pt-16">
//         {[
//           {
//             id: "01",
//             title: "Nationwide Expertise",
//           },
//           {
//             id: "02",
//             title: "Personalized Financial Solutions",
//           },
//           {
//             id: "03",
//             title: "Multi-Sector Proficiency",
//           },
//           {
//             id: "04",
//             title: "Tech-Enabled Delivery",
//           },
//         ].map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => {
//               cardsRef.current[index] = el!;
//             }}
//             className="bg-[#E8E8E8] flex-grow hover:bg-black group transition-all duration-500 h-110 w-52 relative rounded-2xl overflow-hidden cursor-pointer"
//           >
//             <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl transition-all duration-500">
//               <p className="text-white text-xs font-medium">{item.id}</p>
//               <p className="font-medium text-white text-3xl">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };



"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomeWhatMakesUsDifferent = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingTextRef = useRef<HTMLDivElement>(null);
  const subHeadingTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate top heading text
      if (headingTextRef.current) {
        gsap.from(Array.from(headingTextRef.current.children), {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingTextRef.current,
            start: "top 80%",
          },
        });
      }

      // Animate the wheel image from top with rotation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            y: -200,
            opacity: 0,
            rotate: 360,
          },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 2.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Subheading animation
      if (subHeadingTextRef.current) {
        gsap.from(Array.from(subHeadingTextRef.current.children), {
          y: 50,
          opacity: 0,
          scale: 0.95,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: subHeadingTextRef.current,
            start: "top 85%",
          },
        });
      }

      // Animate service cards
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
            },
            delay: index * 0.1,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white pb-16 general-sans">
      <div className="flex p-16 flex-col gap-5 items-center justify-center">
        {/* Top heading */}
        <div
          ref={containerRef}
          className="flex items-center gap-5 font-medium text-5xl"
        >
          <div ref={headingTextRef} className="flex items-center gap-5">
            <p>What</p>
            <p className="bg-gray-400 w-28 h-10 rounded-4xl"></p>
            <p>Makes Us Different</p>
          </div>

          <div className="w-14 h-auto overflow-hidden" ref={imageRef}>
            <Image
              alt="tax-business-consulting"
              src="/icons/home-cirlce-icon.svg"
              width={50}
              height={40}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Subheading */}
        <div
          ref={subHeadingTextRef}
          className="flex items-center gap-5 font-medium text-5xl"
        >
          <p>For</p>
          <div className="w-14 h-auto">
            <Image
              alt="tax-business-consulting"
              src="/icons/home-play-icon.svg"
              width={50}
              height={40}
            />
          </div>
          <p>Our Clients</p>
          <div className="w-20 sm:w-24 h-auto">
            <Image
              src="/icons/home-our-clients-icon.svg"
              alt="Client Icon"
              width={70}
              height={80}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-5 px-16 pt-16">
        {[
          {
            id: "01",
            title: "Nationwide Expertise",
          },
          {
            id: "02",
            title: "Personalized Financial Solutions",
          },
          {
            id: "03",
            title: "Multi-Sector Proficiency",
          },
          {
            id: "04",
            title: "Tech-Enabled Delivery",
          },
        ].map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el!;
            }}
            className="bg-[#E8E8E8] flex-grow hover:bg-black group transition-all duration-500 h-110 w-52 relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="bg-[#292833]/50 group-hover:bg-gradient-to-b from-[#232323] from-15% to-[#000000] h-1/3 w-full absolute bottom-0 p-8 rounded-b-2xl transition-all duration-500">
              <p className="text-white text-xs font-medium">{item.id}</p>
              <p className="font-medium text-white text-3xl">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


