// // import Image from "next/image";
// // import React from "react";

// // export const HomeTestimonial = () => {
// //   return (
// //     <section>
// //       <div className="bg-white min-h-screen p-16 general-sans">
// //         <p className="border rounded-2xl px-3 font-medium text-sm py-1 border-gray-300 w-fit mx-auto">
// //           Testimonials
// //         </p>

// //         <p className="font-medium text-5xl mt-5 mx-auto w-fit">
// //           Real Stories.True Trust.
// //         </p>
// //         <p className="font-medium text-5xl mt-1 mx-auto w-fit">
// //           Proven Results
// //         </p>
// //         <p className="font-normal text-sm mt-1 mx-auto w-fit">
// //           Hear what our clients say about our service, support, and success
// //         </p>

        
// //         <div className="flex gap-5 mt-12">
// //           <div className="rounded-3xl h-auto w-80 flex-grow hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200">
// //             <div className="relative w-full h-64">
// //               <Image
// //                 className="object-cover rounded-t-3xl"
// //                 alt="image"
// //                 fill
// //                 src="/images/dummy-image1.svg"
// //               />
// //             </div>
// //             <p className="p-4 font-inter font-semibold text-sm text-gray-800">
// //               Their team has been instrumental in keeping our finances organized
// //               and compliant. From tax planning to payroll, everything is handled
// //               with precision and professionalism.
// //             </p>
// //           </div>

// //           <div className="rounded-3xl h-auto w-80 flex-grow hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200">
// //             <div className="relative w-full h-64">
// //               <Image
// //                 className="object-cover rounded-t-3xl"
// //                 alt="image"
// //                 fill
// //                 src="/images/dummy-image1.svg"
// //               />
// //             </div>
// //             <p className="p-4 font-inter font-semibold text-sm text-gray-800">
// //               Their team has been instrumental in keeping our finances organized
// //               and compliant. From tax planning to payroll, everything is handled
// //               with precision and professionalism.
// //             </p>
// //           </div>

// //           <div className="rounded-3xl h-auto w-80 flex-grow hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200">
// //             <div className="relative w-full h-64">
// //               <Image
// //                 className="object-cover rounded-t-3xl"
// //                 alt="image"
// //                 fill
// //                 src="/images/dummy-image1.svg"
// //               />
// //             </div>
// //             <p className="p-4 font-inter font-semibold text-sm text-gray-800">
// //               Their team has been instrumental in keeping our finances organized
// //               and compliant. From tax planning to payroll, everything is handled
// //               with precision and professionalism.
// //             </p>
// //           </div>
      
// //           <div className="rounded-3xl h-auto w-80 flex-grow hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200">
// //             <div className="relative w-full h-64">
// //               <Image
// //                 className="object-cover rounded-t-3xl"
// //                 alt="image"
// //                 fill
// //                 src="/images/dummy-image1.svg"
// //               />
// //             </div>
// //             <p className="p-4 font-inter font-semibold text-sm text-gray-800">
// //               Their team has been instrumental in keeping our finances organized
// //               and compliant. From tax planning to payroll, everything is handled
// //               with precision and professionalism.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };




// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const HomeTestimonial = () => {
//   const headingRef = useRef<HTMLDivElement>(null);
//   const subheadingRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     if (headingRef.current && subheadingRef.current && textRef.current) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//         },
//       });

//       tl.fromTo(
//         headingRef.current,
//         {
//           clipPath: "inset(0 100% 0 0)",
//           opacity: 0,
//         },
//         {
//           clipPath: "inset(0 0% 0 0)",
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//         }
//       )
//         .fromTo(
//           subheadingRef.current,
//           {
//             clipPath: "inset(0 100% 0 0)",
//             opacity: 0,
//           },
//           {
//             clipPath: "inset(0 0% 0 0)",
//             opacity: 1,
//             duration: 1,
//             ease: "power2.out",
//           },
//           "-=0.7"
//         )
//         .fromTo(
//           textRef.current,
//           {
//             y: 20,
//             opacity: 0,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power2.out",
//           },
//           "-=0.5"
//         );
//     }
//   }, []);

//   return (
//     <section className="bg-white min-h-screen p-16 general-sans">
//       <p className="border rounded-2xl px-3 font-medium text-sm py-1 border-gray-300 w-fit mx-auto text-gray-700">
//         Testimonials
//       </p>

//       {/* Clip Path Animated Headings */}
//       <div
//         ref={headingRef}
//         className="font-medium text-5xl mt-5 mx-auto w-fit text-center opacity-0"
//       >
//         Real Stories. True Trust.
//       </div>
//       <div
//         ref={subheadingRef}
//         className="font-medium text-5xl mt-1 mx-auto w-fit text-center opacity-0"
//       >
//         Proven Results.
//       </div>
//       <p
//         ref={textRef}
//         className="font-normal text-sm mt-1 mx-auto w-fit text-gray-600 text-center opacity-0"
//       >
//         Hear what our clients say about our service, support, and success
//       </p>

//       {/* Testimonial Cards */}
//       <div className="flex flex-wrap gap-8 mt-16 justify-center">
//         {[...Array(4)].map((_, index) => (
//           <div
//             key={index}
//             className="rounded-3xl h-auto w-80 flex-grow hover:-translate-y-3 transition-all duration-300 overflow-hidden border border-gray-200 shadow-md bg-white"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 className="object-cover rounded-t-3xl"
//                 alt="image"
//                 fill
//                 src="/images/dummy-image1.svg"
//               />
//             </div>
//             <p className="p-4 font-inter font-semibold text-sm text-gray-800">
//               Their team has been instrumental in keeping our finances organized
//               and compliant. From tax planning to payroll, everything is handled
//               with precision and professionalism.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };








"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomeTestimonial = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Clip-path animation for text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      headingRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    )
      .fromTo(
        subheadingRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.7"
      )
      .fromTo(
        textRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 60,
        rotate: 5,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 95%",
        },
      }
    );
  }, []);
  

  return (
    <section className="bg-white min-h-screen p-16 general-sans">
      {/* Title Section */}
      <p className="border rounded-2xl px-3 font-medium text-sm py-1 border-gray-300 w-fit mx-auto text-gray-700">
        Testimonials
      </p>

      <div
        ref={headingRef}
        className="font-medium text-5xl mt-5 mx-auto w-fit text-center opacity-0"
      >
        Real Stories. True Trust.
      </div>

      <div
        ref={subheadingRef}
        className="font-medium text-5xl mt-1 mx-auto w-fit text-center opacity-0"
      >
        Proven Results.
      </div>

      <p
        ref={textRef}
        className="font-normal text-sm mt-1 mx-auto w-fit text-gray-600 text-center opacity-0"
      >
        Hear what our clients say about our service, support, and success
      </p>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-8 mt-16 justify-center">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {cardsRef.current[index] = el}}
            className="rounded-3xl h-auto w-80 flex-grow transform transition-all duration-300 hover:-translate-y-3 overflow-hidden border border-gray-200 shadow-lg bg-white"
          >
            <div className="relative w-full h-64">
              <Image
                className="object-cover rounded-t-3xl"
                alt="image"
                fill
                src="/images/dummy-image1.svg"
              />
            </div>
            <p className="p-4 font-inter font-semibold text-sm text-gray-800">
              Their team has been instrumental in keeping our finances organized
              and compliant. From tax planning to payroll, everything is handled
              with precision and professionalism.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

