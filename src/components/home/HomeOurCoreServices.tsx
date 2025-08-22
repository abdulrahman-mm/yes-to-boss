// // "use client";
// // import gsap from "gsap";
// // import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // gsap.registerPlugin(ScrollTrigger);

// // const services = [
// //   {
// //     id: "01",
// //     title: "Startup Proprietorship Firm Formation",
// //     image: "./images/home-ourcoreservice-image1.svg",
// //   },
// //   {
// //     id: "02",
// //     title: "GST Registration",
// //     image: "./images/home-ourcoreservice-image2.svg",
// //   },
// //   {
// //     id: "03",
// //     title: "Income Tax Return (ITR) Filing",
// //     image: "./images/home-ourcoreservice-image4.svg",
// //   },
// //   {
// //     id: "04",
// //     title: "Private Limited Company Registration",
// //     image: "./images/home-ourcoreservice-image5.svg",
// //   },
// //   {
// //     id: "05",
// //     title: "TDS Returns Filing",
// //     image: "./images/home-ourcoreservice-image3.svg",
// //   },
// //   {
// //     id: "06",
// //     title: "EPFO Registration",
// //     image: "./images/home-ourcoreservice-image3.svg",
// //   },
// //   {
// //     id: "07",
// //     title: "Trademark Registration",
// //     image: "./images/home-ourcoreservice-image3.svg",
// //   },
// // ];

// //  const HomeOurCoreServices = () => {
// //   const [hovered, setHovered] = useState<number | null>(null);
// //   const imageRef = useRef<HTMLImageElement | null>(null);
// //   const targetPosition = useRef({ x: 0, y: 0 });
// //   const currentPosition = useRef({ x: 0, y: 0 });
// //   const animationRef = useRef<number | null>(null);
// //   const pulseRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   useEffect(() => {
// //     const lerp = (start: number, end: number, factor: number) =>
// //       start + (end - start) * factor;

// //     const animate = () => {
// //       currentPosition.current.x = lerp(
// //         currentPosition.current.x,
// //         targetPosition.current.x,
// //         0.15
// //       );
// //       currentPosition.current.y = lerp(
// //         currentPosition.current.y,
// //         targetPosition.current.y,
// //         0.15
// //       );

// //       if (imageRef.current) {
// //         imageRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`;
// //       }

// //       animationRef.current = requestAnimationFrame(animate);
// //     };

// //     animationRef.current = requestAnimationFrame(animate);
// //     return () => {
// //       if (animationRef.current !== null) {
// //         cancelAnimationFrame(animationRef.current);
// //       }
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (pulseRef.current) {
// //       gsap.to(pulseRef.current, {
// //         scale: 1.1,
// //         duration: 1,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: "power1.inOut",
// //       });
// //     }
// //   }, []);

// //   useLayoutEffect(() => {
// //     if (hovered !== null && imageRef.current) {
// //       gsap.fromTo(
// //         imageRef.current,
// //         {
// //           scale: 0.2,
// //           opacity: 0,
// //         },
// //         {
// //           scale: 1,
// //           opacity: 1,
// //           duration: 0.4,
// //           ease: "power3.out",
// //         }
// //       );
// //     }
// //   }, [hovered]);

// //   return (
// //     <section
// //       data-start="top center"
// //       className=" p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black overflow-hidden xxx"
// //     >
// //       <div className="flex justify-center">
// //         <p
// //           ref={pulseRef}
// //           className="text-white border border-white font-medium rounded-4xl px-3 py-1 text-sm md:text-base general-sans"
// //         >
// //           Our Core Services
// //         </p>
// //       </div>

// //       <div className="relative flex flex-col md:flex-row justify-center mt-10 md:mt-16 gap-10 md:gap-20 items-start general-sans font-medium text-xl md:text-4xl">
// //         {/* Services List */}
// //         <div className="flex flex-col w-full text-center">
// //           {services.map((service, index) => (
// //             <div
// //               key={index}
// //               className="pt-10 md:pt-14"
// //               onMouseEnter={() => setHovered(index)}
// //               onMouseLeave={() => setHovered(null)}
// //               onTouchStart={() => setHovered(index)}
// //               onTouchEnd={() => setHovered(null)}
// //             >
// //               <p className="text-gray-100 md:text-[#575757] md:text-3xl lg:text-4xl font-medium hover:text-white hover:scale-105 md:hover:scale-110 transition-all duration-500">
// //                 {service.id}. {service.title}
// //               </p>
// //               {index !== services.length - 1 && (
// //                 <hr className="border border-[#464646] w-full md:w-2/3 mx-auto mt-8 md:mt-14" />
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Floating Image (hidden on small screens) */}
// //        {/* Floating Image near mouse cursor */}
// // <div className="block pointer-events-none fixed top-0 left-0 z-50">
// //   {hovered !== null && (
// //     <img
// //       key={hovered}
// //       ref={imageRef}
// //       src={services[hovered].image}
// //       alt="hover"
// //       className="w-32 sm:w-40 md:w-64 h-20 sm:h-28 md:h-40 object-cover rounded-xl shadow-2xl"
// //       style={{
// //         transformOrigin: "top left",
// //       }}
// //     />
// //   )}
// // </div>

// //       </div>
// //     </section>
// //   );
// // };


// // export default HomeOurCoreServices;





// "use client";
// import gsap from "gsap";
// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     id: "01",
//     title: "Startup Proprietorship Firm Formation",
//     image: "./images/home-ourcoreservice-image1.svg",
//   },
//   {
//     id: "02",
//     title: "GST Registration",
//     image: "./images/home-ourcoreservice-image2.svg",
//   },
//   {
//     id: "03",
//     title: "Income Tax Return (ITR) Filing",
//     image: "./images/home-ourcoreservice-image4.svg",
//   },
//   {
//     id: "04",
//     title: "Private Limited Company Registration",
//     image: "./images/home-ourcoreservice-image5.svg",
//   },
//   {
//     id: "05",
//     title: "TDS Returns Filing",
//     image: "./images/home-ourcoreservice-image3.svg",
//   },
//   {
//     id: "06",
//     title: "EPFO Registration",
//     image: "./images/home-ourcoreservice-image3.svg",
//   },
//   {
//     id: "07",
//     title: "Trademark Registration",
//     image: "./images/home-ourcoreservice-image3.svg",
//   },
// ];

// const HomeOurCoreServices = () => {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const targetPosition = useRef({ x: 0, y: 0 });
//   const currentPosition = useRef({ x: 0, y: 0 });
//   const animationRef = useRef<number | null>(null);
//   const pulseRef = useRef(null);
//   const lastMove = useRef(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const now = Date.now();
//       if (now - lastMove.current > 10) { // throttle to ~60fps
//         targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
//         lastMove.current = now;
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const lerp = (start: number, end: number, factor: number) =>
//       start + (end - start) * factor;

//     const animate = () => {
//       currentPosition.current.x = lerp(
//         currentPosition.current.x,
//         targetPosition.current.x,
//         0.15
//       );
//       currentPosition.current.y = lerp(
//         currentPosition.current.y,
//         targetPosition.current.y,
//         0.15
//       );

//       if (imageRef.current) {
//         imageRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`;
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationRef.current !== null) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (pulseRef.current) {
//       gsap.to(pulseRef.current, {
//         scale: 1.1,
//         duration: 1,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//       });
//     }
//   }, []);

//   useLayoutEffect(() => {
//     if (hovered !== null && imageRef.current) {
//       gsap.fromTo(
//         imageRef.current,
//         {
//           scale: 0.2,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 0.4,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, [hovered]);

//   return (
//     <section
//       data-start="top center"
//       className="p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black overflow-hidden xxx"
//     >
//       <div className="flex justify-center">
//         <p
//           ref={pulseRef}
//           className="text-white border border-white font-medium rounded-4xl px-3 py-1 text-sm md:text-base general-sans"
//         >
//           Our Core Services
//         </p>
//       </div>

//       <div className="relative flex flex-col md:flex-row justify-center mt-10 md:mt-16 gap-10 md:gap-20 items-start general-sans font-medium text-xl md:text-4xl">
//         {/* Services List */}
//         <div className="flex flex-col w-full text-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="pt-10 md:pt-14"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//               onTouchStart={() => setHovered(index)}
//               onTouchEnd={() => setHovered(null)}
//             >
//               <p className="text-gray-100 md:text-[#575757] md:text-3xl lg:text-4xl font-medium hover:text-white hover:scale-105 md:hover:scale-110 transition-all duration-500">
//                 {service.id}. {service.title}
//               </p>
//               {index !== services.length - 1 && (
//                 <hr className="border border-[#464646] w-full md:w-2/3 mx-auto mt-8 md:mt-14" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floating Image (hidden on small screens) */}
//         <div className="block pointer-events-none fixed top-0 left-0 z-50">
//           {hovered !== null && (
//             <img
//               key={hovered}
//               ref={imageRef}
//               src={services[hovered].image}
//               alt="hover"
//               className="w-32 sm:w-40 md:w-64 h-20 sm:h-28 md:h-40 object-cover rounded-xl shadow-2xl will-change-transform"
//               style={{
//                 transformOrigin: "top left",
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeOurCoreServices;












"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Startup Proprietorship Firm Formation",
    image: "./images/home-ourcoreservice-image1.svg",
  },
  {
    id: "02",
    title: "GST Registration",
    image: "./images/home-ourcoreservice-image2.svg",
  },
  {
    id: "03",
    title: "Income Tax Return (ITR) Filing",
    image: "./images/home-ourcoreservice-image4.svg",
  },
  {
    id: "04",
    title: "Private Limited Company Registration",
    image: "./images/home-ourcoreservice-image5.svg",
  },
  {
    id: "05",
    title: "TDS Returns Filing",
    image: "./images/home-ourcoreservice-image3.svg",
  },
 
];

const HomeOurCoreServices = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef(null);
  const lastMove = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMove.current > 10) { // throttle to ~60fps
        targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
        lastMove.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentPosition.current.x = lerp(
        currentPosition.current.x,
        targetPosition.current.x,
        0.15
      );
      currentPosition.current.y = lerp(
        currentPosition.current.y,
        targetPosition.current.y,
        0.15
      );

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (hovered !== null && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [hovered]);

  return (
    <section
      data-start="top center"
      className="p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16  bg-black overflow-hidden xxx"
    >
      <div className="flex justify-center">
        <p
          ref={pulseRef}
          className="text-white border border-white font-medium rounded-4xl px-3 py-1 text-sm md:text-base general-sans"
        >
          Our Core Services
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row pb-10 justify-center mt-10 md:mt-16 gap-10 md:gap-20 items-start general-sans font-medium text-xl md:text-4xl">
        {/* Services List */}
        <div className="flex flex-col w-full text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="pt-10 md:pt-14"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(index)}
              onTouchEnd={() => setHovered(null)}
            >
              <p className="text-gray-100 md:text-[#575757] md:text-3xl lg:text-4xl font-medium hover:text-white hover:scale-105 md:hover:scale-110 transition-all duration-500">
                {service.id}. {service.title}
              </p>
              {index !== services.length - 1 && (
                <hr className="border border-[#464646] w-full md:w-2/3 mx-auto mt-8 md:mt-14" />
              )}
            </div>
          ))}
        </div>

        {/* Floating Image (hidden on small screens) */}
        <div className="block pointer-events-none fixed top-0 left-0 z-50">
          {hovered !== null && (
            <img
              key={hovered}
              ref={imageRef}
              src={services[hovered].image}
              alt="hover"
              className="w-32 sm:w-40 md:w-64 h-20 sm:h-28 md:h-40 object-cover rounded-xl shadow-2xl will-change-transform"
              style={{
                transformOrigin: "top left",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeOurCoreServices;
