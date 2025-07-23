// import React from "react";

// export const HomeReachUs = () => {
//   return (
//     <section className="p-16 bg-black text-white">
//       <div className="flex gap-12">
//         <div className="w-[45%]">
//           <p className="text-5xl font-semibold general-sans">Reach Us</p>

//           <p className="mt-12 text-white/60 general-sans">
//             Let us help you register, manage, and grow your
//             business—stress-free. Contact us today for expert consultancy that
//             puts your success first.
//           </p>
//           <div className="mt-32 rounded-2xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
//               loading="lazy"
//               className="w-full rounded-2xl h-52"
//             ></iframe>
//           </div>
//         </div>

//         <div className="flex general-sans flex-col flex-grow gap-8 border border-[#424242] p-14 rounded-2xl bg-[#1b1b1b]">
//           <div className="flex gap-5">
//             <div className="flex flex-col gap-3 w-1/2">
//               <label htmlFor="" className="text-sm font-semibold ">First Name</label>
//               <input type="text" name="" id="" className="border border-[#FFFFFF]/30 rounded-lg p-3" placeholder="Steve"/>
//             </div>

//             <div className="flex flex-col gap-3 w-1/2">
//               <label htmlFor="" className="text-sm font-semibold">Last Name</label>
//               <input type="text" name="" id="" className="border border-[#FFFFFF]/30 rounded-lg p-3" placeholder="Steve"/>
//             </div>

           
//           </div>

//           <div className="flex flex-col gap-3">
//               <label htmlFor="" className="text-sm font-semibold">Last Name</label>
//               <input type="text" name="" id="" className="border border-[#FFFFFF]/30 rounded-lg p-3" placeholder="Steve"/>
//             </div>

//             <div className="flex flex-col gap-3">
//               <label htmlFor="" className="text-sm font-semibold">Last Name</label>
//               <input type="text" name="" id="" className="border border-[#FFFFFF]/30 rounded-lg p-3" placeholder="Steve"/>
//             </div>

//             <div className="flex flex-col gap-3">
//               <label htmlFor="" className="text-sm font-semibold">Last Name</label>
//               <input type="text" name="" id="" className="border border-[#FFFFFF]/30 rounded-lg p-3" placeholder="Steve"/>
//             </div>

//             <button className="bg-white px-8 py-3 w-fit text-black rounded font-semibold">
//                Submit
//             </button>
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomeReachUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 70%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
        },
      });

      gsap.from(mapRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="p-16 bg-black text-white overflow-hidden">
      <div className="flex gap-12">
        <div className="w-[45%]">
          <p
            ref={headingRef}
            className="text-5xl font-semibold general-sans"
          >
            Reach Us
          </p>

          <p
            ref={textRef}
            className="mt-12 text-white/60 general-sans"
          >
            Let us help you register, manage, and grow your
            business—stress-free. Contact us today for expert consultancy that
            puts your success first.
          </p>

          <div className="mt-32 rounded-2xl" ref={mapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
              loading="lazy"
              className="w-full rounded-2xl h-52"
            ></iframe>
          </div>
        </div>

        <div
          ref={formRef}
          className="flex general-sans flex-col flex-grow gap-8 border border-[#424242] p-14 rounded-2xl bg-[#1b1b1b]"
        >
          <div className="flex gap-5">
            <div className="flex flex-col gap-3 w-1/2">
              <label htmlFor="" className="text-sm font-semibold">
                First Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-[#FFFFFF]/30 rounded-lg p-3"
                placeholder="Steve"
              />
            </div>

            <div className="flex flex-col gap-3 w-1/2">
              <label htmlFor="" className="text-sm font-semibold">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-[#FFFFFF]/30 rounded-lg p-3"
                placeholder="Steve"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="Steve"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="Steve"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-sm font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#FFFFFF]/30 rounded-lg p-3"
              placeholder="Steve"
            />
          </div>

          <button className="bg-white px-8 py-3 w-fit text-black rounded font-semibold">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
