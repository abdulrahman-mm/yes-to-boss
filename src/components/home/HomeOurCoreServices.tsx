// "use client";
// import React, { useState, useEffect } from "react";

// const services = [
//   {
//     id: "01",
//     title: "Startup Proprietorship Firm Formation",
//     image: "./images/dummy-image1.svg", // Replace with actual image URL
//   },
//   {
//     id: "02",
//     title: "GST Registration",
//     image: "./images/india-map-image.svg",
//   },
//   {
//     id: "03",
//     title: "TDS Returns Filings",
//     // image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
//     image: "./images/dummy-image1.svg", // Replace with actual image URL
//   },
//   {
//     id: "04",
//     title: "Income Tax Return (ITR) Filing",
//     // image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
//     image: "./images/india-map-image.svg",
//   },
//   {
//     id: "05",
//     title: "Private Limited Company Registration",
//     image: "https://images.unsplash.com/photo-1607706189992-eae578626c33",
//   },
// ];

// export const HomeOurCoreServices = () => {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Track mouse position
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
//   return (
//     <section className="p-12 bg-black">
//       <div className="flex justify-center">
//         <p className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans">
//           Our Core Services
//         </p>
//       </div>

//       {/* <div className="flex flex-col justify-center mt-12 gap-16 items-center general-sans font-medium text-5xl">
//         <p className="text-[#575757]  hover:text-white hover:scale-105 transition-all duration-500">
//           01. Startup Proprietorship Firm Formation
//         </p>
//         <hr className="border border-[#464646] w-2/3" />

//         <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
//           02.GST Registration
//         </p>
//         <hr className="border border-[#464646] w-2/3" />

//         <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
//           03.TDS Returns Filings
//         </p>
//         <hr className="border border-[#464646] w-2/3" />

//         <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
//           04. Income Tax Return (ITR) Filing
//         </p>
//         <hr className="border border-[#464646] w-2/3" />

//         <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500">
//           05. Private Limited Company Registration
//         </p>
//       </div> */}

//       <div className="relative flex justify-center mt-12 gap-16 items-start general-sans font-medium text-5xl">
//         <div className="flex flex-col gap-16 w-full text-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <p
//                 // onMouseEnter={() => setHovered(index)}
//                 // onMouseLeave={() => setHovered(null)}
//                 className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer"
//               >
//                 {service.id}. {service.title}
//               </p>
//               {index !== 4 && (
//                 <hr className="border border-[#464646] w-2/3 mx-auto mt-8" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floating Image on Hover */}
//         {hovered !== null && (
//           <img
//             src={services[hovered].image}
//             alt="hover"
//             className="fixed z-50 w-64 h-40 object-cover rounded-xl shadow-lg pointer-events-none transition-all duration-1000 ease-in-out"
//             style={{
//               top: mousePosition.y - 40,
//               left: mousePosition.x + 50,
//             }}
//           />
//         )}
//       </div>
//     </section>
//   );
// };







// "use client";
// import React, { useState, useEffect, useRef } from "react";

// const services = [
//   {
//     id: "01",
//     title: "Startup Proprietorship Firm Formation",
//     image: "./images/dummy-image1.svg",
//   },
//   {
//     id: "02",
//     title: "GST Registration",
//     image: "./images/india-map-image.svg",
//   },
//   {
//     id: "03",
//     title: "TDS Returns Filings",
//     image: "./images/dummy-image1.svg",
//   },
//   {
//     id: "04",
//     title: "Income Tax Return (ITR) Filing",
//     image: "./images/india-map-image.svg",
//   },
//   {
//     id: "05",
//     title: "Private Limited Company Registration",
//     image: "https://images.unsplash.com/photo-1607706189992-eae578626c33",
//   },
// ];

// export const HomeOurCoreServices = () => {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const targetPosition = useRef({ x: 0, y: 0 });
//   const currentPosition = useRef({ x: 0, y: 0 });
//   // const animationRef = useRef<number>();
//   const animationRef = useRef<number | null>(null);


//   // Track mouse and store the target position
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       targetPosition.current = { x: e.clientX + 50, y: e.clientY - 40 };
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Smooth animation using linear interpolation (lerp)
//   useEffect(() => {
//     const lerp = (start: number, end: number, factor: number) =>
//       start + (end - start) * factor;

//     const animate = () => {
//       currentPosition.current.x = lerp(
//         currentPosition.current.x,
//         targetPosition.current.x,
//         0.1
//       );
//       currentPosition.current.y = lerp(
//         currentPosition.current.y,
//         targetPosition.current.y,
//         0.1
//       );

//       if (imageRef.current) {
//         imageRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`;
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationRef.current!);
//   }, []);

//   return (
//     <section className="p-12 bg-black">
//       <div className="flex justify-center">
//         <p className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans">
//           Our Core Services
//         </p>
//       </div>

//       <div className="relative flex justify-center mt-12 gap-16 items-start general-sans font-medium text-5xl">
//         <div className="flex flex-col gap-16 w-full text-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <p className="text-[#575757] hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer">
//                 {service.id}. {service.title}
//               </p>
//               {index !== 4 && (
//                 <hr className="border border-[#464646] w-2/3 mx-auto mt-8" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Super Smooth Floating Image */}
//         <div className="pointer-events-none fixed top-0 left-0 z-50">
//           {hovered !== null && (
//             <img
//               ref={imageRef}
//               src={services[hovered].image}
//               alt="hover"
//               className="w-64 h-40 object-cover rounded-xl shadow-2xl transition-all duration-500 ease-out opacity-100 scale-100"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };










// "use client";
// import gsap from "gsap";
// import React, { useState, useEffect, useRef } from "react";

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
//     title: "TDS Returns Filings",
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

// export const HomeOurCoreServices = () => {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const targetPosition = useRef({ x: 0, y: 0 });
//   const currentPosition = useRef({ x: 0, y: 0 });
//   const animationRef = useRef<number | null>(null);
//   const pulseRef = useRef(null);


//   // Track mouse and store target position
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       // Offset so image doesn't cover cursor
//       targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Smooth follow using lerp
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
  

//   return (
//     <section className="p-12 pb-36 bg-black overflow-hidden">
//       <div className="flex justify-center">
//         <p ref={pulseRef} className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans">
//           Our Core Services
//         </p>
//       </div>

//       <div className="relative flex justify-center mt-12 gap-16 items-start general-sans font-medium text-5xl">
//         <div className="flex flex-col w-full text-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
             
//               className="pt-14 cursor-pointer"
//             >
//               <p  onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)} className="text-[#575757] hover:text-white hover:scale-110 transition-all duration-500 ">
//                 {service.id}. {service.title}
//               </p>
//               {index !== 6 && (
//                 <hr className="border border-[#464646] w-2/3 mx-auto mt-14" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floating Image near mouse cursor */}
//         <div className="pointer-events-none fixed top-0 left-0 z-50">
//           {hovered !== null && (
//             <img
//               ref={imageRef}
//               src={services[hovered].image}
//               alt="hover"
//               className="w-64 h-40 object-cover  rounded-xl shadow-2xl transition-opacity duration-1000 del ease-in-out opacity-100 scale-100"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };



















// "use client";
// import gsap from "gsap";
// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

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
//     title: "TDS Returns Filings",
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

// export const HomeOurCoreServices = () => {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const targetPosition = useRef({ x: 0, y: 0 });
//   const currentPosition = useRef({ x: 0, y: 0 });
//   const animationRef = useRef<number | null>(null);
//   const pulseRef = useRef(null);

//   // Track mouse and update target position
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Smooth follow using lerp
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

//   // Animate pulse title
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

//   // Animate image on hover
//   useLayoutEffect(() => {
//     if (hovered !== null && imageRef.current) {
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 0.8, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
//       );
//     }
//   }, [hovered]);

//   return (
//     <section className="p-12 pb-36 bg-black overflow-hidden">
//       <div className="flex justify-center">
//         <p
//           ref={pulseRef}
//           className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans"
//         >
//           Our Core Services
//         </p>
//       </div>

//       <div className="relative flex justify-center mt-12 gap-16 items-start general-sans font-medium text-5xl">
//         <div className="flex flex-col w-full text-center">
//           {services.map((service, index) => (
//             <div key={index} className="pt-14 cursor-pointer">
//               <p
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//                 className="text-[#575757] hover:text-white hover:scale-110 transition-all duration-500"
//               >
//                 {service.id}. {service.title}
//               </p>
//               {index !== 6 && (
//                 <hr className="border border-[#464646] w-2/3 mx-auto mt-14" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floating Image near mouse cursor */}
//         <div className="pointer-events-none fixed top-0 left-0 z-50">
//           {hovered !== null && (
//             <img
//               key={hovered} // <--- ensures a fresh DOM node for new animation
//               ref={imageRef}
//               src={services[hovered].image}
//               alt="hover"
//               className="w-64 h-40 object-cover rounded-xl shadow-2xl"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };







"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

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
    title: "TDS Returns Filings",
    image: "./images/home-ourcoreservice-image3.svg",
  },
  {
    id: "06",
    title: "EPFO Registration",
    image: "./images/home-ourcoreservice-image3.svg",
  },
  {
    id: "07",
    title: "Trademark Registration",
    image: "./images/home-ourcoreservice-image3.svg",
  },
];

export const HomeOurCoreServices = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef(null);

  // Track mouse and update target position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX + 20, y: e.clientY - 20 };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth follow using lerp
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

  // Animate pulse title
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

  // Animate image on hover
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
    <section className="p-12 pb-36 bg-black overflow-hidden">
      <div className="flex justify-center">
        <p
          ref={pulseRef}
          className="text-white border border-white font-medium rounded-4xl px-2 py-2 text-sm general-sans"
        >
          Our Core Services
        </p>
      </div>

      <div className="relative flex justify-center mt-12 gap-16 items-start general-sans font-medium text-5xl">
        <div className="flex flex-col w-full text-center">
          {services.map((service, index) => (
            <div key={index} className="pt-14 cursor-pointer">
              <p
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="text-[#575757] hover:text-white hover:scale-110 transition-all duration-500"
              >
                {service.id}. {service.title}
              </p>
              {index !== 6 && (
                <hr className="border border-[#464646] w-2/3 mx-auto mt-14" />
              )}
            </div>
          ))}
        </div>

        {/* Floating Image near mouse cursor */}
        <div className="pointer-events-none fixed top-0 left-0 z-50">
          {hovered !== null && (
            <img
              key={hovered} // ensures re-animation when index changes
              ref={imageRef}
              src={services[hovered].image}
              alt="hover"
              className="w-64 h-40 object-cover rounded-xl shadow-2xl"
              style={{
                transformOrigin: "top left", // so scale happens from mouse point
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};
