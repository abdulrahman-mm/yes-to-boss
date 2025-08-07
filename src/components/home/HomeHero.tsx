// "use client";
// import React from "react";
// import { Header } from "../layout";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export const HomeHero = () => {
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   cardsRef.current = [];

//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   useEffect(() => {
//     // Apply perspective to each card
//     cardsRef.current.forEach((card) => {
//       gsap.set(card, {
//         transformPerspective: 1000,
//         transformStyle: "preserve-3d",
//       });
//     });

//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       const centerX = innerWidth / 2;
//       const centerY = innerHeight / 2;

//       const deltaX = mouseX - centerX;
//       const deltaY = mouseY - centerY;

//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateY: deltaX / 25, // reduce divisor for more rotation
//           rotateX: -deltaY / 20,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     const handleMouseLeave = () => {
//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   const headingRefs = useRef<Array<HTMLParagraphElement | null>>([]);

//   const descRef = useRef<HTMLParagraphElement | null>(null);
//   const searchBoxRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

//     // Animate headings
//     tl.from(headingRefs.current, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//     });

//     // Animate description
//     tl.from(
//       descRef.current,
//       {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//       },
//       "-=0.5"
//     );

//     // Animate search box
//     tl.from(
//       searchBoxRef.current,
//       {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.8,
//         ease: "back.out(1.7)",
//       },
//       "-=0.6"
//     );
//   }, []);

//   return (
//     <main>
//       <div className="min-h-screen bg-[url('/images/home-hero-bg-image.svg')] py-2 bg-no-repeat bg-cover bg-center text-white">
//         <div className="w-[90vw] mx-auto">
//           <Header />
//         </div>

//         <div className="flex items-center justify-center gap-10  px-16 mt-24">
//           <div className="flex flex-col justify-between h-[75vh] ">
//             <div
//               ref={addToRefs}
//               className="w-72 h-48 rounded-xl bg-white/90 relative"
//             >
//               <div className="absolute left-14 -top-5 z-50">
//                 <Image
//                   src={"./icons/home-calculator.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//             </div>

//             <div ref={addToRefs}>
//               <div className="flex justify-end relative top-2 left-4 z-50">
//                 <Image
//                   src={"./icons/home-s-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_right,_#37373726_15%,_#FFFFFF26_30%,_#3D3D3D26_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src={"./icons/home-coins.svg"}
//                   width={30}
//                   height={30}
//                   alt="f"
//                 />

//                 <p className="mt-5 font-Bricolage_Grotesque  font-medium">
//                   Accounting Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and
//                   integrity—supporting organizations across industries for over
//                   a decade.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* <div className="basis-[40%] flex-grow flex flex-col items-center gap-5">
//             <p className="text-6xl text-white font-medium font-Bricolage_Grotesque">
//               Tax and Business{" "}
//             </p>
//             <p className="text-6xl text-white font-medium font-Bricolage_Grotesque">
//               Consultancy Services
//             </p>
//             <p className="text-sm text-white font-Bricolage_Grotesque w-3/4 text-center ">
//               YesToBoss offers expert Tax and Business Consultancy Services to
//               reduce tax, boost compliance, and grow profit.
//             </p>

//             <div className="bg-white rounded-4xl flex mt-5 items-center w-3/4 justify-between py-1 px-1">
//             <div className="flex gap-2">
//             <IoSearchOutline className="text-black ms-5 text-2xl" />
//             <input type="text" className="border-none outline-none text-black" />
//             </div>

//               <button className="bg-black text-white rounded-4xl px-5 py-4">
//                 Search Service
//               </button>
//             </div>
//           </div> */}
//           <div className="basis-[40%] flex-grow flex flex-col items-center gap-5">
//             <p
//               ref={(el) => {
//                 headingRefs.current[0] = el;
//               }}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque"
//             >
//               Tax and Business
//             </p>
//             <p
//               ref={(el) => {
//                 headingRefs.current[1] = el;
//               }}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque"
//             >
//               Consultancy Services
//             </p>
//             <p
//               ref={descRef}
//               className="text-sm text-white font-Bricolage_Grotesque w-3/4 text-center"
//             >
//               YesToBoss offers expert Tax and Business Consultancy Services to
//               reduce tax, boost compliance, and grow profit.
//             </p>

//             <div
//               ref={searchBoxRef}
//               className="bg-white rounded-4xl flex mt-5 items-center w-3/4 justify-between py-1 px-1"
//             >
//               <div className="flex gap-2">
//                 <IoSearchOutline className="text-black ms-5 text-2xl" />
//                 <input
//                   type="text"
//                   className="border-none outline-none text-black"
//                   placeholder="Search services..."
//                 />
//               </div>

//               <button className="bg-black text-white rounded-4xl px-5 py-4">
//                 Search Service
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col justify-between h-[75vh]">
//             <div ref={addToRefs}>
//               <div className="flex relative top-3 -left-4 z-50">
//                 <Image
//                   src={"./icons/home-pizza-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_bottom_right,_#FFFFFF26_40%,_#0D0D0D80_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src={"./icons/home-coins.svg"}
//                   width={30}
//                   height={30}
//                   alt="f"
//                 />

//                 <p className="mt-5 font-Bricolage_Grotesque  font-medium">
//                   Auditing Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and
//                   integrity—supporting organizations across industries for over
//                   a decade.
//                 </p>
//               </div>
//             </div>
//             <div ref={addToRefs}>
//               <div className=" relative top-5 left-4 z-50">
//                 <Image
//                   src={"./icons/home-donut-icon2.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//               <div className="w-72 h-48 rounded-xl bg-white/90"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// "use client";
// import React, { useEffect, useRef } from "react";
// import { Header } from "../layout";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "next/image";
// import gsap from "gsap";

// export const HomeHero = () => {
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   cardsRef.current = [];

//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   useEffect(() => {
//     cardsRef.current.forEach((card) => {
//       gsap.set(card, {
//         transformPerspective: 1000,
//         transformStyle: "preserve-3d",
//       });
//     });

//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;
//       const centerX = innerWidth / 2;
//       const centerY = innerHeight / 2;
//       const deltaX = mouseX - centerX;
//       const deltaY = mouseY - centerY;

//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateY: deltaX / 25,
//           rotateX: -deltaY / 20,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     const handleMouseLeave = () => {
//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   const headingRefs = useRef<Array<HTMLParagraphElement | null>>([]);
//   const descRef = useRef<HTMLParagraphElement | null>(null);
//   const searchBoxRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Clear previous styles
//     gsap.set([headingRefs.current, descRef.current, searchBoxRef.current], {
//       clearProps: "all",
//     });

//     const tl = gsap.timeline({
//       defaults: { ease: "power2.out", duration: 0.6 },
//     });

//     tl.from(headingRefs.current, {
//       y: 30,
//       opacity: 0,
//       stagger: 0.15,
//     });

//     tl.from(
//       descRef.current,
//       {
//         y: 20,
//         opacity: 0,
//       },
//       "-=0.4"
//     );

//     tl.from(
//       searchBoxRef.current,
//       {
//         y: 10,
//         opacity: 0,
//         scale: 0.95,
//         ease: "power1.out",
//       },
//       "-=0.4"
//     );
//   }, []);

//   return (
//     <main>
//       <div className="min-h-screen bg-[url('/images/home-hero-bg-image.svg')] py-2 bg-no-repeat bg-cover bg-center text-white">
//         <div className="w-[90vw] mx-auto">
//           <Header />
//         </div>

//         <div className="flex items-center justify-center gap-10 px-16 mt-24">
//           <div className="flex flex-col justify-between h-[75vh]">
//             <div
//               ref={addToRefs}
//               className="w-72 h-48 rounded-xl bg-white/90 relative"
//             >
//               <div className="absolute left-14 -top-5 z-50">
//                 <Image
//                   src={"./icons/home-calculator.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-calculator"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//             </div>

//             <div ref={addToRefs}>
//               <div className="flex justify-end relative top-2 left-4 z-50">
//                 <Image
//                   src={"./icons/home-s-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_right,_#37373726_15%,_#FFFFFF26_30%,_#3D3D3D26_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src={"./icons/home-coins.svg"}
//                   width={30}
//                   height={30}
//                   alt="coins"
//                 />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Accounting Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and
//                   integrity—supporting organizations across industries for over
//                   a decade.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="basis-[40%] flex-grow flex flex-col items-center gap-5">
//             <p
//               ref={(el) => {
//                 headingRefs.current[0] = el;
//               }}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque will-change-transform"
//             >
//               Tax and Business
//             </p>
//             <p
//               ref={(el) => {
//                 headingRefs.current[1] = el;
//               }}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque will-change-transform"
//             >
//               Consultancy Services
//             </p>
//             <p
//               ref={descRef}
//               className="text-sm text-white font-Bricolage_Grotesque w-3/4 text-center will-change-transform"
//             >
//               YesToBoss offers expert Tax and Business Consultancy Services to
//               reduce tax, boost compliance, and grow profit.
//             </p>

//             <div
//               ref={searchBoxRef}
//               className="bg-white rounded-4xl flex mt-5 items-center w-3/4 justify-between py-1 px-1 will-change-transform"
//             >
//               <div className="flex gap-2">
//                 <IoSearchOutline className="text-black ms-5 text-2xl" />
//                 <input
//                   type="text"
//                   className="border-none outline-none text-black"
//                   placeholder="Search services..."
//                 />
//               </div>

//               <button className="bg-black text-white rounded-4xl px-5 py-4">
//                 Search Service
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col justify-between h-[75vh]">
//             <div ref={addToRefs}>
//               <div className="flex relative top-3 -left-4 z-50">
//                 <Image
//                   src={"./icons/home-pizza-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-pizza"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_bottom_right,_#FFFFFF26_40%,_#0D0D0D80_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src={"./icons/home-coins.svg"}
//                   width={30}
//                   height={30}
//                   alt="coins"
//                 />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Auditing Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and
//                   integrity—supporting organizations across industries for over
//                   a decade.
//                 </p>
//               </div>
//             </div>

//             <div ref={addToRefs}>
//               <div className="relative top-5 left-4 z-50">
//                 <Image
//                   src={"./icons/home-donut-icon2.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-donut"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//               <div className="w-72 h-48 rounded-xl bg-white/90"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// "use client";
// import React, { useEffect, useRef } from "react";
// import { Header } from "../layout";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ShinnyText } from "../animations";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeHero = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const line1Ref = useRef<HTMLParagraphElement | null>(null);
//   const line2Ref = useRef<HTMLParagraphElement | null>(null);
//   const searchBoxRef = useRef<HTMLDivElement | null>(null);
//   const circularRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   cardsRef.current = [];

//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   // Card perspective and rotation
//   useEffect(() => {
//     cardsRef.current.forEach((card) => {
//       gsap.set(card, {
//         transformPerspective: 1000,
//         transformStyle: "preserve-3d",
//       });
//     });

//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       const centerX = innerWidth / 2;
//       const centerY = innerHeight / 2;

//       const deltaX = mouseX - centerX;
//       const deltaY = mouseY - centerY;

//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateY: deltaX / 25,
//           rotateX: -deltaY / 20,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     const handleMouseLeave = () => {
//       cardsRef.current.forEach((card) => {
//         gsap.to(card, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.5,
//           ease: "power2.out",
//         });
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // Scroll animation using GSAP context
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       // Text entrance
//       tl.from([line1Ref.current, line2Ref.current], {
//         yPercent: 200,
//         opacity: 0,
//         skewY: 10,
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.2,
//         clipPath: "inset(0 0 100% 0)",
//       });

//       // Circular Text entrance
//       tl.from(circularRef.current, {
//         scale: 0.3,
//         rotateY: 120,
//         opacity: 0,
//         transformOrigin: "center center",
//         duration: 1.8,
//         ease: "expo.out",
//       }, "-=1.2"); // overlaps with last part of text animation
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main>
//       <div className="min-h-screen  py-2 bg-no-repeat bg-cover bg-center text-white">
//         <div className="w-[90vw] mx-auto">
//           <Header />
//         </div>

//         <div className="flex items-center justify-center gap-10 px-16 mt-24">
//           {/* Left Cards */}
//           <div className="flex flex-col justify-between h-[75vh]">
//             <div ref={addToRefs} className="w-72 h-48 rounded-xl bg-white/90 relative">
//               <div className="absolute left-14 -top-5 z-50">
//                 <Image
//                   src={"./icons/home-calculator.svg"}
//                   width={50}
//                   height={50}
//                   alt="calculator"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//             </div>

//             <div ref={addToRefs}>
//               <div className="flex justify-end relative top-2 left-4 z-50">
//                 <Image
//                   src={"./icons/home-s-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_right,_#37373726_15%,_#FFFFFF26_30%,_#3D3D3D26_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image src={"./icons/home-coins.svg"} width={30} height={30} alt="coins" />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Accounting Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and integrity—supporting
//                   organizations across industries for over a decade.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Center Text and Search */}
//           <div
//             ref={sectionRef}
//             className="basis-[40%] flex-grow flex flex-col items-center gap-5"
//           >
//             <p
//               ref={line1Ref}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque will-change-transform overflow-hidden"
//             >
//               Tax and Business
//             </p>
//             <p
//               ref={line2Ref}
//               className="text-6xl text-white font-medium font-Bricolage_Grotesque will-change-transform overflow-hidden"
//             >
//               Consultancy Services
//             </p>
//             <p className="text-sm text-white font-Bricolage_Grotesque w-3/4 text-center">
//               {/* YesToBoss offers expert Tax and Business Consultancy Services to reduce tax,
//               boost compliance, and grow profit. */}

//               <ShinnyText text=' YesToBoss offers expert Tax and Business Consultancy Services to reduce tax,
//               boost compliance, and grow profit.' disabled={false} speed={4} className='custom-class' />

//             </p>

//             <div
//               ref={searchBoxRef}
//               className="bg-white rounded-4xl flex mt-5 items-center w-3/4 justify-between py-1 px-1 will-change-transform"
//             >
//               <div className="flex gap-2">
//                 <IoSearchOutline className="text-black ms-5 text-2xl" />
//                 <input
//                   type="text"
//                   className="border-none outline-none text-black"
//                   placeholder="Search services..."
//                 />
//               </div>
//               <button className="bg-black text-white rounded-4xl px-5 py-4">
//                 Search Service
//               </button>
//             </div>
//           </div>

//           {/* Right Cards */}
//           <div className="flex flex-col justify-between h-[75vh]">
//             <div ref={addToRefs}>
//               <div className="flex relative top-3 -left-4 z-50">
//                 <Image
//                   src={"./icons/home-pizza-icon.svg"}
//                   width={50}
//                   height={50}
//                   alt="pizza"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>

//               <div className="w-72 h-48 rounded-xl bg-[linear-gradient(to_bottom_right,_#FFFFFF26_40%,_#0D0D0D80_100%)] border border-[#FFFFFF]/15 p-5">
//                 <Image src={"./icons/home-coins.svg"} width={30} height={30} alt="coins" />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Auditing Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   We’ve built a reputation for precision, trust, and integrity—supporting
//                   organizations across industries for over a decade.
//                 </p>
//               </div>
//             </div>

//             <div ref={addToRefs}>
//               <div className="relative top-5 left-4 z-50">
//                 <Image
//                   src={"./icons/home-donut-icon2.svg"}
//                   width={50}
//                   height={50}
//                   alt="donut"
//                   className="bg-[#2a2a2a] rounded-md"
//                 />
//               </div>
//               <div className="w-72 h-48 rounded-xl bg-white/90"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../layout";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinnyText } from "../animations";
import Marquee from "react-fast-marquee";
import { error } from "console";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "GST Registration",
  "ITR Filing",
  "Company Incorporation",
  "Trademark Registration",
  "Accounting Service",
  "MSME Registration",
  "PAN Application",
];

 const HomeHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLParagraphElement | null>(null);
  const line2Ref = useRef<HTMLParagraphElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const circularRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  cardsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });
    });

    let requestId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const centerX = innerWidth / 2;
        const centerY = innerHeight / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        cardsRef.current.forEach((card) => {
          const bounding = card.getBoundingClientRect();
          const cardCenterX = bounding.left + bounding.width / 2;

          // Determine if card is on left or right side of screen
          const isLeftSide = cardCenterX < centerX;

          // Apply opposite rotation direction based on side
          const directionX = isLeftSide ? 1 : -1;
          const directionY = 1; // Optional: same vertical for both

          gsap.to(card, {
            rotateY: (deltaX / 17) * directionX,
            rotateX: (-deltaY / 17) * directionY,
            duration: 0.6,
            ease: "power2.out",
            overwrite: true,
          });
        });

        requestId = null;
      });
    };

    const handleMouseLeave = () => {
      cardsRef.current.forEach((card) => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from([line1Ref.current, line2Ref.current], {
        yPercent: 200,
        opacity: 0,
        skewY: 10,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        clipPath: "inset(0 0 100% 0)",
      });

      tl.from(
        circularRef.current,
        {
          scale: 0.3,
          rotateY: 120,
          opacity: 0,
          transformOrigin: "center center",
          duration: 1.8,
          ease: "expo.out",
        },
        "-=1.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentService = services[serviceIndex];
    const typingDelay = 100;
    const holdDelay = 2000;

    if (typingIndex < currentService.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(`${currentService.slice(0, typingIndex + 1)}`);
        setTypingIndex(typingIndex + 1);
      }, typingDelay);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, holdDelay);

      return () => clearTimeout(timeout);
    }
  }, [typingIndex, serviceIndex]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setFilteredServices([]);
      return;
    }

    const filtered = services.filter((service) =>
      service.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredServices(filtered);
  };

  {
    /* bg-[url('/images/home-hero-bg-image.svg')] */
  }


  return (
    <main>
      <div className=" py-2 pb-10 bg-no-repeat  bg-[url('/images/home-hero-bg-image.svg')] bg-cover bg-center text-white ">
        <div className="w-[90vw] mx-auto">
          <Header />
        </div>

        <div className="flex items-center justify-center gap-5 lg:gap-8 xl:gap-10 px-5 sm:px-8 md:px-10  xl:px-16 mt-14 lg:mt-16 xl:mt-24">
          {/* Left Cards */}
          <div className="hidden lg:flex flex-col    justify-between h-[75vh]">
            <div
              ref={addToRefs}
              className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  relative"
            >
              <div className="absolute left-14 -bottom-5 z-50">
                <Image
                  src="/icons/home-calculator.svg"
                  width={50}
                  height={50}
                  alt="calculator"
                  className="bg-[#2a2a2a] rounded-md"
                  priority
                />
              </div>

              {/* <div className="w-full h-full"> */}
              {/* <Image
                  src="/images/home-hero-image1.svg"
                  alt="calculator"
                  className="bg-[#2a2a2a] rounded-md object-cover"
                  priority
                  fill
                /> */}

              <video
                src="/videos/home-hero-video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-lg object-cover absolute w-full h-full hover:scale-125 transition-all duration-700"
              />
              {/* </div> */}
            </div>

            <div ref={addToRefs}>
              <div className="flex justify-end relative top-2 left-4 z-50">
                <Image
                  src="/icons/home-s-icon.svg"
                  width={50}
                  height={50}
                  alt="home-s"
                  className="bg-[#2a2a2a] rounded-md"
                  priority
                />
              </div>

              <div className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  hover:scale-125 transition-all duration-700 bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] border border-[#FFFFFF]/15 p-5">
                <Image
                  src="/icons/home-coins.svg"
                  width={30}
                  height={30}
                  alt="coins"
                  className="hidden lg:block"
                />
                <p className="mt-5 font-Bricolage_Grotesque font-medium">
                  Accounting Services
                </p>
                <p className="text-xs mt-3 font-Bricolage_Grotesque">
                  From bookkeeping to balance sheets, we handle it all. Gain
                  clarity, control, and peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div
            ref={sectionRef}
            className="basis-[50%] xl:basis-[40%] flex-grow flex flex-col items-center gap-0 md:gap-2"
          >
            <p
              ref={line1Ref}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-medium font-Bricolage_Grotesque overflow-hidden"
            >
              Tax and Business
            </p>
            <p
              ref={line2Ref}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center font-Bricolage_Grotesque overflow-hidden"
            >
              Consultancy Services
            </p>
            <div className="text-sm mt-3 sm:mt-0 sm:w-3/4 text-center font-Bricolage_Grotesque">
              <ShinnyText
                text="At YesToBoss, we provide expert Tax and Business Consultancy Services to minimize your taxes and grow."
                disabled={false}
                speed={2}
                className="custom-class"
              />
            </div>

            <div className="relative xl:w-3/4 mt-5" ref={searchBoxRef}>
              <div className="bg-white rounded-4xl flex gap-3 items-center justify-between py-1 px-1">
                <div className="flex gap-2 flex-grow items-center">
                  <IoSearchOutline className="text-black ms-5 text-2xl" />
                  <input
                    type="text"
                    className="border-none outline-none text-black w-full text-sm"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleSearch}
                  />
                </div>
                <button className="bg-black text-white rounded-4xl px-5 py-2 md:py-4 w-fit">
                  Search <span className="hidden sm:inline-block">Service</span> 
                </button>
              </div>

              <div
                className={`absolute left-0 right-0 mt-2 bg-white rounded-xl  shadow-lg z-10 overflow-hidden transition-all duration-500 ease-in-out
         ${
           query
             ? "opacity-100 scale-y-100 h-fit max-h-28 scrollbar-hide overflow-y-auto pointer-events-auto"
             : "opacity-0 scale-y-0 pointer-events-none"
         } `}
              >
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    >
                      {service}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No service found
                  </div>
                )}
              </div>
            
            </div>
          </div>

          {/* Right Cards */}
          <div className="hidden lg:flex flex-col  justify-between h-[75vh]">
            <div ref={addToRefs}>
              <div className="flex relative top-3 -left-4 z-50">
                <Image
                  src="/icons/home-pizza-icon.svg"
                  width={50}
                  height={50}
                  alt="pizza"
                  className="bg-[#2a2a2a] rounded-md"
                  priority
                />
              </div>

              <div className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 hover:scale-125 transition-all duration-700  rounded-xl bg-gradient-to-br from-[#FFFFFF26] to-[#0D0D0D80] border border-[#FFFFFF]/15 p-5">
                <Image
                  src="/icons/home-coins.svg"
                  width={30}
                  height={30}
                  alt="coins"
                  className="hidden lg:block"
                />
                <p className="mt-5 font-Bricolage_Grotesque font-medium">
                  Auditing Services
                </p>
                <p className="text-xs mt-3 font-Bricolage_Grotesque">
                  Our expert auditing services deliver precise reporting,
                  uncover risks, and ensure total financial transparency and
                  compliance.
                </p>
              </div>
            </div>

            <div
              ref={addToRefs}
              className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  relative"
            >
              <div className="absolute left-4 -top-5 z-50">
                <Image
                  src="/icons/home-calculator.svg"
                  width={50}
                  height={50}
                  alt="calculator"
                  className="bg-[#2a2a2a] rounded-md"
                  priority
                />
              </div>

              {/* <div className="w-full h-full">
                <Image
                  src="/images/home-hero-image2.svg"
                  alt="calculator"
                  className="bg-[#2a2a2a] rounded-md object-cover"
                  priority
                  fill
                />
              </div> */}

              <video
                src="/videos/home-hero-video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-lg object-cover absolute w-full h-full hover:scale-125 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeHero;
