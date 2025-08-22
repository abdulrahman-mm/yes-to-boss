// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Header } from "../layout";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ShinnyText } from "../animations";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   "GST Registration",
//   "ITR Filing",
//   "Company Incorporation",
//   "Trademark Registration",
//   "Accounting Service",
//   "MSME Registration",
//   "PAN Application",
// ];

//  const HomeHero = () => {
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

//   useEffect(() => {
//     cardsRef.current.forEach((card) => {
//       gsap.set(card, {
//         transformPerspective: 1000,
//         transformStyle: "preserve-3d",
//       });
//     });

//     let requestId: number | null = null;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (requestId) return;
//       requestId = requestAnimationFrame(() => {
//         const { innerWidth, innerHeight } = window;
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         const centerX = innerWidth / 2;
//         const centerY = innerHeight / 2;

//         const deltaX = mouseX - centerX;
//         const deltaY = mouseY - centerY;

//         cardsRef.current.forEach((card) => {
//           const bounding = card.getBoundingClientRect();
//           const cardCenterX = bounding.left + bounding.width / 2;

//           // Determine if card is on left or right side of screen
//           const isLeftSide = cardCenterX < centerX;

//           // Apply opposite rotation direction based on side
//           const directionX = isLeftSide ? 1 : -1;
//           const directionY = 1; // Optional: same vertical for both

//           gsap.to(card, {
//             rotateY: (deltaX / 17) * directionX,
//             rotateX: (-deltaY / 17) * directionY,
//             duration: 0.6,
//             ease: "power2.out",
//             overwrite: true,
//           });
//         });

//         requestId = null;
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
//       if (requestId) cancelAnimationFrame(requestId);
//     };
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.from([line1Ref.current, line2Ref.current], {
//         yPercent: 200,
//         opacity: 0,
//         skewY: 10,
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.2,
//         clipPath: "inset(0 0 100% 0)",
//       });

//       tl.from(
//         circularRef.current,
//         {
//           scale: 0.3,
//           rotateY: 120,
//           opacity: 0,
//           transformOrigin: "center center",
//           duration: 1.8,
//           ease: "expo.out",
//         },
//         "-=1.2"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const [query, setQuery] = useState("");
//   const [filteredServices, setFilteredServices] = useState<string[]>([]);
//   const [placeholder, setPlaceholder] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [serviceIndex, setServiceIndex] = useState(0);

//   // Typing effect
//   useEffect(() => {
//     const currentService = services[serviceIndex];
//     const typingDelay = 100;
//     const holdDelay = 2000;

//     if (typingIndex < currentService.length) {
//       const timeout = setTimeout(() => {
//         setPlaceholder(`${currentService.slice(0, typingIndex + 1)}`);
//         setTypingIndex(typingIndex + 1);
//       }, typingDelay);

//       return () => clearTimeout(timeout);
//     } else {
//       const timeout = setTimeout(() => {
//         setTypingIndex(0);
//         setServiceIndex((prev) => (prev + 1) % services.length);
//       }, holdDelay);

//       return () => clearTimeout(timeout);
//     }
//   }, [typingIndex, serviceIndex]);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const input = e.target.value;
//     setQuery(input);

//     if (input.trim() === "") {
//       setFilteredServices([]);
//       return;
//     }

//     const filtered = services.filter((service) =>
//       service.toLowerCase().includes(input.toLowerCase())
//     );

//     setFilteredServices(filtered);
//   };

//   {
//     /* bg-[url('/images/home-hero-bg-image.svg')] */
//   }


//   return (
//     <main>
//       <div className=" py-2 pb-10 bg-no-repeat  bg-[url('/images/home-hero-bg-image.svg')] bg-cover bg-center text-white ">
//         <div className="w-[90vw] mx-auto">
//           <Header />
//         </div>

//         <div className="flex items-center justify-center gap-5 lg:gap-8 xl:gap-10 px-5 sm:px-8 md:px-10  xl:px-16 mt-14 lg:mt-16 xl:mt-24">
//           {/* Left Cards */}
//           <div className="hidden lg:flex flex-col    justify-between h-[75vh]">
//             <div
//               ref={addToRefs}
//               className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  relative"
//             >
//               <div className="absolute left-14 -bottom-5 z-50">
//                 <Image
//                   src="/icons/home-calculator.svg"
//                   width={50}
//                   height={50}
//                   alt="calculator"
//                   className="bg-[#2a2a2a] rounded-md"
//                   priority
//                 />
//               </div>

//               {/* <div className="w-full h-full"> */}
//               {/* <Image
//                   src="/images/home-hero-image1.svg"
//                   alt="calculator"
//                   className="bg-[#2a2a2a] rounded-md object-cover"
//                   priority
//                   fill
//                 /> */}

//               <video
//                 src="/videos/home-hero-video1.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="auto"
//                 className="rounded-lg object-cover absolute w-full h-full hover:scale-125 transition-all duration-700"
//               />
//               {/* </div> */}
//             </div>

//             <div ref={addToRefs}>
//               <div className="flex justify-end relative top-2 left-4 z-50">
//                 <Image
//                   src="/icons/home-s-icon.svg"
//                   width={50}
//                   height={50}
//                   alt="home-s"
//                   className="bg-[#2a2a2a] rounded-md"
//                   priority
//                 />
//               </div>

//               <div className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  hover:scale-125 transition-all duration-700 bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src="/icons/home-coins.svg"
//                   width={30}
//                   height={30}
//                   alt="coins"
//                   className="hidden lg:block"
//                 />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Accounting Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   From bookkeeping to balance sheets, we handle it all. Gain
//                   clarity, control, and peace of mind.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Center Text */}
//           <div
//             ref={sectionRef}
//             className="basis-[50%] xl:basis-[40%] flex-grow flex flex-col items-center gap-0 md:gap-2"
//           >
//             <p
//               ref={line1Ref}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-medium font-Bricolage_Grotesque overflow-hidden"
//             >
//               Tax and Business
//             </p>
//             <p
//               ref={line2Ref}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center font-Bricolage_Grotesque overflow-hidden"
//             >
//               Consultancy Services
//             </p>
//             <div className="text-sm mt-3 sm:mt-0 sm:w-3/4 text-center font-Bricolage_Grotesque">
//               <ShinnyText
//                 text="At YesToBoss, we provide expert Tax and Business Consultancy Services to minimize your taxes and grow."
//                 disabled={false}
//                 speed={2}
//                 className="custom-class"
//               />
//             </div>

//             <div className="relative xl:w-3/4 mt-5" ref={searchBoxRef}>
//               <div className="bg-white rounded-4xl flex gap-3 items-center justify-between py-1 px-1">
//                 <div className="flex gap-2 flex-grow items-center">
//                   <IoSearchOutline className="text-black ms-5 text-2xl" />
//                   <input
//                     type="text"
//                     className="border-none outline-none text-black w-full text-sm"
//                     placeholder={placeholder}
//                     value={query}
//                     onChange={handleSearch}
//                   />
//                 </div>
//                 <button className="bg-black text-white rounded-4xl px-5 py-2 md:py-4 w-fit">
//                   Search <span className="hidden sm:inline-block">Service</span> 
//                 </button>
//               </div>

//               <div
//                 className={`absolute left-0 right-0 mt-2 bg-white rounded-xl  shadow-lg z-10 overflow-hidden transition-all duration-500 ease-in-out
//          ${
//            query
//              ? "opacity-100 scale-y-100 h-fit max-h-28 scrollbar-hide overflow-y-auto pointer-events-auto"
//              : "opacity-0 scale-y-0 pointer-events-none"
//          } `}
//               >
//                 {filteredServices.length > 0 ? (
//                   filteredServices.map((service, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
//                     >
//                       {service}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="px-4 py-2 text-gray-500">
//                     No service found
//                   </div>
//                 )}
//               </div>
            
//             </div>
//           </div>

//           {/* Right Cards */}
//           <div className="hidden lg:flex flex-col  justify-between h-[75vh]">
//             <div ref={addToRefs}>
//               <div className="flex relative top-3 -left-4 z-50">
//                 <Image
//                   src="/icons/home-pizza-icon.svg"
//                   width={50}
//                   height={50}
//                   alt="pizza"
//                   className="bg-[#2a2a2a] rounded-md"
//                   priority
//                 />
//               </div>

//               <div className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 hover:scale-125 transition-all duration-700  rounded-xl bg-gradient-to-br from-[#FFFFFF26] to-[#0D0D0D80] border border-[#FFFFFF]/15 p-5">
//                 <Image
//                   src="/icons/home-coins.svg"
//                   width={30}
//                   height={30}
//                   alt="coins"
//                   className="hidden lg:block"
//                 />
//                 <p className="mt-5 font-Bricolage_Grotesque font-medium">
//                   Auditing Services
//                 </p>
//                 <p className="text-xs mt-3 font-Bricolage_Grotesque">
//                   Our expert auditing services deliver precise reporting,
//                   uncover risks, and ensure total financial transparency and
//                   compliance.
//                 </p>
//               </div>
//             </div>

//             <div
//               ref={addToRefs}
//               className="w-44 lg:w-52 xl:w-72 h-56 xl:h-48 rounded-xl  relative"
//             >
//               <div className="absolute left-4 -top-5 z-50">
//                 <Image
//                   src="/icons/home-calculator.svg"
//                   width={50}
//                   height={50}
//                   alt="calculator"
//                   className="bg-[#2a2a2a] rounded-md"
//                   priority
//                 />
//               </div>

//               {/* <div className="w-full h-full">
//                 <Image
//                   src="/images/home-hero-image2.svg"
//                   alt="calculator"
//                   className="bg-[#2a2a2a] rounded-md object-cover"
//                   priority
//                   fill
//                 />
//               </div> */}

//               <video
//                 src="/videos/home-hero-video2.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="auto"
//                 className="rounded-lg object-cover absolute w-full h-full hover:scale-125 transition-all duration-700"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default HomeHero;





"use client";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "../layout";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinnyText } from "../animations";

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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // 1. Animation setup (3D transform on cards)
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });
    });

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        ticking = true;

        requestAnimationFrame(() => {
          const { innerWidth, innerHeight } = window;
          const centerX = innerWidth / 2;
          const centerY = innerHeight / 2;

          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;

          cardsRef.current.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const isLeftSide = cardCenterX < centerX;

            const directionX = isLeftSide ? 1 : -1;
            const directionY = 1;

            gsap.to(card, {
              rotateY: (deltaX / 17) * directionX,
              rotateX: (-deltaY / 17) * directionY,
              duration: 0.6,
              ease: "power2.out",
              overwrite: true,
            });
          });

          ticking = false;
        });
      }
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 2. Text and icon animations on mount
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

  // 3. Typing animation
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const currentService = services[serviceIndex];
    const typingDelay = 100;
    const holdDelay = 2000;

    if (typingIndex < currentService.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(currentService.slice(0, typingIndex + 1));
        setTypingIndex((prev) => prev + 1);
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

  // 4. Search filter
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

  return (
    <main>
      <div className="py-2 pb-10 bg-no-repeat bg-[url('/images/home-hero-bg-image.svg')] bg-cover bg-center text-white">
        <div className="w-full md:w-[90vw] mx-auto">
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

            {/* <div className="relative xl:w-3/4 mt-5" ref={searchBoxRef}>
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
            
            </div> */}
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
