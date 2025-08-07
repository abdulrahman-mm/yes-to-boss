// import React from "react";
// import Image from "next/image";

// export const ContactUsForm = () => {
//   return (
//     <section className="min-h-screen  overflow-hidden">
//       {/* Header */}
//       <div className="p-16 text-white general-sans  z-20">
//         <p className="text-center font-semibold text-5xl mt-5">Contact Us</p>
//         <p className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5">
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <div className="relative">
//         {/* Background circles */}
//         <div className="absolute z-0 h-[350px] w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-10 top-40"></div>
//         <div className="absolute z-0 h-[307px] w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5"></div>
//         <div className="absolute z-0 h-[185px] w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-48"></div>
//         <div className="absolute z-0 h-[128px] w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]"></div>
//         <div className="absolute z-0 h-[119px] w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-36"></div>

//         {/* Form Container */}
//         <div className=" z-20 flex justify-center mt-16 pb-20">
//           <div className="flex w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
//             {/* Left Section */}
//             <div className="p-10 bg-gradient-to-r from-black/50 to-black/20 rounded-s-4xl basis-[70%]">
//               <p className="font-inter font-bold text-4xl">
//                 Contact <span className="text-[#989FFF]">Information</span>{" "}
//               </p>

//               <p className="h-2 w-2/5 mt-3 bg-white/30"></p>

//               <div className="flex gap-3 items-center mt-20">
//                 <img src={"./icons/contact-form-email.svg"} alt="a" />
//                 <p className="font-inter font-medium">yestoboss@gmail.com</p>
//               </div>

//               <div className="flex gap-3 items-center mt-7">
//                 <img src={"./icons/contact-form-phone.svg"} alt="a" />
//                 <p className="font-inter font-medium">yestoboss@gmail.com</p>
//               </div>

//               <div className="flex gap-3 items-start mt-7">
//                 <img src={"./icons/contact-form-location.svg"} alt="a" />

//                 <div className="font-inter text-[15px] font-semibold flex flex-col">
//                   <p>No 33/14, Ground floor, Jayammal St,</p>
//                   <p>G Ayyavoo Colony, Aminjikarai,</p>
//                   <p>Chennai, Tamil Nadu 600029</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
//                 loading="lazy"
//                 className="w-full rounded-2xl h-52 mt-20"
//               ></iframe>
//             </div>

//             {/* Right Section */}
//             <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/40 flex flex-col gap-12">
//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>Last Name</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>Phone Number</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>City</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label>State</label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2 bg-transparent"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-7 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-full">
//                   <label>Message</label>
//                   <textarea
//                     className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
//                     rows={2}
//                     placeholder="Write your message..."
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1 items-end">
//                 <button className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg">
//                   Send Message
//                 </button>
//                 <Image
//                   src={"/icons/paper-rocket-icon.svg"}
//                   alt="icon"
//                   width={200}
//                   height={60}
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
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export const ContactUsForm = () => {
//   const formRef = useRef(null);
//   const inputGroupsRef = useRef<(HTMLParagraphElement | null)[]>([]);
//   const circlesRef = useRef<(HTMLParagraphElement | null)[]>([]);
//   const buttonRef = useRef(null);
//   const rocketRef = useRef(null);
//   const headingRef = useRef<HTMLParagraphElement | null>(null);
//   const subtextRef = useRef<HTMLParagraphElement | null>(null);

//   useEffect(() => {
//     // Input fields stagger
//     gsap.from(inputGroupsRef.current, {
//       opacity: 0,
//       y: 30,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: formRef.current,
//         start: "top 70%",
//       },
//     });

//     // Background circles random floating
//     circlesRef.current.forEach((circle) => {
//       const animateCircle = () => {
//         gsap.to(circle, {
//           x: gsap.utils.random(-100, 100),
//           y: gsap.utils.random(-50, 50),
//           duration: gsap.utils.random(2, 4),
//           ease: "sine.inOut",
//           onComplete: animateCircle,
//         });
//       };
//       animateCircle();
//     });

//     // Button and rocket animation
//     gsap.from([buttonRef.current, rocketRef.current], {
//       scale: 0,
//       opacity: 0,
//       duration: 0.6,
//       delay: 1,
//       ease: "back.out(1.7)",
//       scrollTrigger: {
//         trigger: buttonRef.current,
//         start: "top 100%",
//       },
//     });
//   }, []);

//   useEffect(() => {
//     // Animate heading
//     gsap.from(headingRef.current, {
//       y: 30,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top 85%",
//       },
//     });

//     // Animate subtext
//     gsap.from(subtextRef.current, {
//       y: 30,
//       opacity: 0,
//       duration: 1,
//       delay: 0.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: subtextRef.current,
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <section className="min-h-screen overflow-hidden">
//       <div className="p-16 text-white general-sans z-20">
//         <p
//           ref={(el) => {
//             headingRef.current = el;
//           }}
//           className="text-center font-semibold text-5xl mt-5"
//         >
//           Contact Us
//         </p>
//         <p
//           ref={(el) => {
//             subtextRef.current = el;
//           }}
//           className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5"
//         >
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <div className="relative">
//         {/* Background Circles */}
//         {[
//           "h-[350px] w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-10 top-40",
//           "h-[307px] w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5",
//           "h-[185px] w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-48",
//           "h-[128px] w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]",
//           "h-[119px] w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-36",
//         ].map((cls, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               circlesRef.current[i] = el;
//             }}
//             className={`absolute z-0 ${cls}`}
//           />
//         ))}

//         {/* Form Container */}
//         <div ref={formRef} className="z-20 flex justify-center mt-16 pb-20">
//           <div className="flex w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
//             {/* Left Section */}
//             <div className="p-10 bg-black/50 rounded-s-4xl basis-[70%]">
//               <p className="font-inter font-bold text-4xl">
//                 Contact <span className="text-[#989FFF]">Information</span>
//               </p>
//               <p className="h-2 w-2/5 mt-3 bg-white/30"></p>

//               <div className="flex gap-3 items-center mt-20">
//                 <img src={"./icons/contact-form-email.svg"} alt="email" />
//                 <p className="font-inter font-medium">yestoboss@gmail.com</p>
//               </div>

//               <div className="flex gap-3 items-center mt-7">
//                 <img src={"./icons/contact-form-phone.svg"} alt="phone" />
//                 <p className="font-inter font-medium">+91 98765 43210</p>
//               </div>

//               <div className="flex gap-3 items-start mt-7">
//                 <img src={"./icons/contact-form-location.svg"} alt="location" />
//                 <div className="font-inter text-[15px] font-semibold flex flex-col">
//                   <p>No 33/14, Ground floor, Jayammal St,</p>
//                   <p>G Ayyavoo Colony, Aminjikarai,</p>
//                   <p>Chennai, Tamil Nadu 600029</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
//                 loading="lazy"
//                 className="w-full rounded-2xl h-52 mt-20"
//               ></iframe>
//             </div>

//             {/* Right Section */}
//             <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/50 flex flex-col gap-12">
//               {[
//                 // First + Last Name
//                 <div
//                   className="flex justify-between gap-10 font-inter font-medium"
//                   key="row1"
//                   ref={(el) => {
//                     inputGroupsRef.current[0] = el;
//                   }}
//                 >
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>First Name</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>Last Name</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                 </div>,

//                 // Email + Phone
//                 <div
//                   className="flex justify-between gap-10 font-inter font-medium"
//                   key="row2"
//                   ref={(el) => {
//                     inputGroupsRef.current[1] = el;
//                   }}
//                 >
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>Email</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>Phone Number</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                 </div>,

//                 // City + State
//                 <div
//                   className="flex justify-between gap-10 font-inter font-medium"
//                   key="row3"
//                   ref={(el) => {
//                     inputGroupsRef.current[2] = el;
//                   }}
//                 >
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>City</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1 w-1/2">
//                     <label>State</label>
//                     <input
//                       type="text"
//                       className="border-b border-white outline-none pb-2 bg-transparent"
//                     />
//                   </div>
//                 </div>,

//                 // Message
//                 <div
//                   className="flex justify-between gap-7 font-inter font-medium"
//                   key="row4"
//                   ref={(el) => {
//                     inputGroupsRef.current[3] = el;
//                   }}
//                 >
//                   <div className="flex flex-col gap-1 w-full">
//                     <label>Message</label>
//                     <textarea
//                       className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
//                       rows={2}
//                       placeholder="Write your message..."
//                     ></textarea>
//                   </div>
//                 </div>,
//               ]}

//               {/* Button */}
//               <div className="flex flex-col gap-1 items-end">
//                 <button
//                   className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg"
//                   ref={buttonRef}
//                 >
//                   Send Message
//                 </button>
//                 <Image
//                   ref={rocketRef}
//                   src={"/icons/paper-rocket-icon.svg"}
//                   alt="rocket"
//                   width={200}
//                   height={60}
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
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export const ContactUsForm = () => {
//   const formRef = useRef(null);
//   const inputGroupsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
//   const buttonRef = useRef(null);
//   const rocketRef = useRef(null);
//   const headingRef = useRef<HTMLParagraphElement | null>(null);
//   const subtextRef = useRef<HTMLParagraphElement | null>(null);

//   useEffect(() => {
//     const inputEls = inputGroupsRef.current.filter(Boolean);
//     const circleEls = circlesRef.current.filter(Boolean);

//     // Input stagger animation
//     if (inputEls.length > 0 && formRef.current) {
//       gsap.from(inputEls, {
//         opacity: 0,
//         y: 30,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 70%",
//         },
//       });
//     }

//     // Animate background circles
//     circleEls.forEach((circle) => {
//       const animate = () => {
//         gsap.to(circle, {
//           x: gsap.utils.random(-100, 100),
//           y: gsap.utils.random(-50, 50),
//           duration: gsap.utils.random(2, 4),
//           ease: "sine.inOut",
//           onComplete: animate,
//         });
//       };
//       animate();
//     });

//     // Button and rocket animation
//     if (buttonRef.current || rocketRef.current) {
//       gsap.from([buttonRef.current, rocketRef.current], {
//         scale: 0,
//         opacity: 0,
//         duration: 0.6,
//         delay: 1,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: buttonRef.current,
//           start: "top 100%",
//         },
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (headingRef.current) {
//       gsap.from(headingRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 85%",
//         },
//       });
//     }

//     if (subtextRef.current) {
//       gsap.from(subtextRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         delay: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: subtextRef.current,
//           start: "top 85%",
//         },
//       });
//     }
//   }, []);

//   return (
//     <section className="min-h-screen overflow-hidden">
//       <div className="p-16 text-white general-sans z-20">
//         <p ref={headingRef} className="text-center font-semibold text-5xl mt-5">
//           Contact Us
//         </p>
//         <p
//           ref={subtextRef}
//           className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5"
//         >
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <div className="relative">
//         {/* Background Circles */}
//         {[
//           "h-[350px] w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-10 top-40",
//           "h-[307px] w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5",
//           "h-[185px] w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-48",
//           "h-[128px] w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]",
//           "h-[119px] w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-36",
//         ].map((cls, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               circlesRef.current[i] = el;
//             }}
//             className={`absolute z-0 ${cls}`}
//           />
//         ))}

//         {/* Form Container */}
//         <div ref={formRef} className="z-20 flex justify-center mt-16 pb-20">
//           <div className="flex w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
//             {/* Left */}
//             <div className="p-10 bg-black/50 rounded-s-4xl basis-[70%]">
//               <p className="font-inter font-bold text-4xl">
//                 Contact <span className="text-[#989FFF]">Information</span>
//               </p>
//               <p className="h-2 w-2/5 mt-3 bg-white/30" />

//               <div className="flex gap-3 items-center mt-20">
//                 <img src="./icons/contact-form-email.svg" alt="email" />
//                 <p className="font-inter font-medium">yestoboss@gmail.com</p>
//               </div>
//               <div className="flex gap-3 items-center mt-7">
//                 <img src="./icons/contact-form-phone.svg" alt="phone" />
//                 <p className="font-inter font-medium">+91 98765 43210</p>
//               </div>
//               <div className="flex gap-3 items-start mt-7">
//                 <img src="./icons/contact-form-location.svg" alt="location" />
//                 <div className="font-inter text-[15px] font-semibold flex flex-col">
//                   <p>No 33/14, Ground floor, Jayammal St,</p>
//                   <p>G Ayyavoo Colony, Aminjikarai,</p>
//                   <p>Chennai, Tamil Nadu 600029</p>
//                 </div>
//               </div>
            
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
//                 loading="lazy"
//                 className="w-full rounded-2xl h-52 mt-20"
//               ></iframe>
//             </div>

//             {/* Right */}
//             <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/50 flex flex-col gap-12">
//               {[
//                 // Row 1
//                 {
//                   key: "row1",
//                   labels: ["First Name", "Last Name"],
//                   refs: [0],
//                 },
//                 // Row 2
//                 {
//                   key: "row2",
//                   labels: ["Email", "Phone Number"],
//                   refs: [1],
//                 },
//                 // Row 3
//                 {
//                   key: "row3",
//                   labels: ["City", "State"],
//                   refs: [2],
//                 },
//               ].map((row, idx) => (
//                 <div
//                   key={row.key}
//                   ref={(el) => {
//                     inputGroupsRef.current[row.refs[0]] = el;
//                   }}
//                   className="flex justify-between gap-10 font-inter font-medium"
//                 >
//                   {row.labels.map((label, i) => (
//                     <div className="flex flex-col gap-1 w-1/2" key={i}>
//                       <label>{label}</label>
//                       <input
//                         type="text"
//                         className="border-b border-white outline-none pb-2 bg-transparent"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               ))}

//               {/* Message */}
//               <div
//                 ref={(el) => {
//                   inputGroupsRef.current[3] = el;
//                 }}
//                 className="flex justify-between gap-7 font-inter font-medium"
//               >
//                 <div className="flex flex-col gap-1 w-full">
//                   <label>Message</label>
//                   <textarea
//                     className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
//                     rows={2}
//                     placeholder="Write your message..."
//                   ></textarea>
//                 </div>
//               </div>

//               {/* Button + Rocket */}
//               <div className="flex flex-col gap-1 items-end">
//                 <button
//                   className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg"
//                   ref={buttonRef}
//                 >
//                   Send Message
//                 </button>
//                 <Image
//                   ref={rocketRef}
//                   src={"/icons/paper-rocket-icon.svg"}
//                   alt="rocket"
//                   width={200}
//                   height={60}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

 const ContactUsForm = () => {
  const formRef = useRef(null);
  const inputGroupsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef(null);
  const rocketRef = useRef(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const subtextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const inputEls = inputGroupsRef.current.filter(Boolean);
    const circleEls = circlesRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Heading Animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }

      // Subtext Animation
      if (subtextRef.current) {
        gsap.from(subtextRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtextRef.current,
            start: "top 85%",
          },
        });
      }

      // Input stagger animation
      if (inputEls.length > 0 && formRef.current) {
        gsap.from(inputEls, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
          },
        });
      }

      // Button and Rocket
      if (buttonRef.current || rocketRef.current) {
        gsap.from([buttonRef.current, rocketRef.current], {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 120%",
          },
        });
      }

      // Floating circles animation
      circleEls.forEach((circle) => {
        const animate = () => {
          gsap.to(circle, {
            x: gsap.utils.random(-100, 100),
            y: gsap.utils.random(-50, 50),
            duration: gsap.utils.random(2, 4),
            ease: "sine.inOut",
            onComplete: animate,
          });
        };
        animate();
      });
    }, formRef);

    // Refresh ScrollTrigger after layout changes
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    // <section className="min-h-screen overflow-hidden">
    //   <div className="p-16 text-white general-sans z-20">
    //     <p ref={headingRef} className="text-center font-semibold text-5xl mt-5">
    //       Contact Us
    //     </p>
    //     <p
    //       ref={subtextRef}
    //       className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5"
    //     >
    //       Any question or remarks? Just write us a message!
    //     </p>
    //   </div>

    //   <div className="relative">
    //     {/* Background Circles */}
    //     {[
    //       "h-[350px] w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-10 top-40",
    //       "h-[307px] w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5",
    //       "h-[185px] w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-48",
    //       "h-[128px] w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]",
    //       "h-[119px] w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-36",
    //     ].map((cls, i) => (
    //       <div
    //         key={i}
    //         ref={(el) => {circlesRef.current[i] = el}}
    //         className={`absolute z-0 ${cls}`}
    //       />
    //     ))}

    //     {/* Form Container */}
    //     <div ref={formRef} className="z-20 flex justify-center mt-16 pb-20">
    //       <div className="flex w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
    //         {/* Left */}
    //         <div className="p-10 bg-black/50 rounded-s-4xl basis-[70%]">
    //           <p className="font-inter font-bold text-4xl">
    //             Contact <span className="text-[#989FFF]">Information</span>
    //           </p>
    //           <p className="h-2 w-2/5 mt-3 bg-white/30" />
    //           <div className="flex gap-3 items-center mt-20">
    //             <img src="./icons/contact-form-email.svg" alt="email" />
    //             <p className="font-inter font-medium">yestoboss@gmail.com</p>
    //           </div>
    //           <div className="flex gap-3 items-center mt-7">
    //             <img src="./icons/contact-form-phone.svg" alt="phone" />
    //             <p className="font-inter font-medium">+91 98765 43210</p>
    //           </div>
    //           <div className="flex gap-3 items-start mt-7">
    //             <img src="./icons/contact-form-location.svg" alt="location" />
    //             <div className="font-inter text-[15px] font-semibold flex flex-col">
    //               <p>No 33/14, Ground floor, Jayammal St,</p>
    //               <p>G Ayyavoo Colony, Aminjikarai,</p>
    //               <p>Chennai, Tamil Nadu 600029</p>
    //             </div>
    //           </div>
    //           <iframe
    //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
    //             loading="lazy"
    //             className="w-full rounded-2xl h-52 mt-20"
    //           ></iframe>
    //         </div>

    //         {/* Right */}
    //         <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/50 flex flex-col gap-12">
    //           {[
    //             {
    //               key: "row1",
    //               labels: ["First Name", "Last Name"],
    //               refs: [0],
    //             },
    //             {
    //               key: "row2",
    //               labels: ["Email", "Phone Number"],
    //               refs: [1],
    //             },
    //             {
    //               key: "row3",
    //               labels: ["City", "State"],
    //               refs: [2],
    //             },
    //           ].map((row, idx) => (
    //             <div
    //               key={row.key}
    //               ref={(el) => {inputGroupsRef.current[row.refs[0]] = el}}
    //               className="flex justify-between gap-10 font-inter font-medium"
    //             >
    //               {row.labels.map((label, i) => (
    //                 <div className="flex flex-col gap-1 w-1/2" key={i}>
    //                   <label>{label}</label>
    //                   <input
    //                     type="text"
    //                     className="border-b border-white outline-none pb-2 bg-transparent"
    //                   />
    //                 </div>
    //               ))}
    //             </div>
    //           ))}

    //           {/* Message */}
    //           <div
    //             ref={(el) => {inputGroupsRef.current[3] = el}}
    //             className="flex justify-between gap-7 font-inter font-medium"
    //           >
    //             <div className="flex flex-col gap-1 w-full">
    //               <label>Message</label>
    //               <textarea
    //                 className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
    //                 rows={2}
    //                 placeholder="Write your message..."
    //               ></textarea>
    //             </div>
    //           </div>

    //           {/* Button + Rocket */}
    //           <div className="flex flex-col gap-1 items-end">
    //             <button
    //               className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg"
    //               ref={buttonRef}
    //             >
    //               Send Message
    //             </button>
    //             <Image
    //               ref={rocketRef}
    //               src={"/icons/paper-rocket-icon.svg"}
    //               alt="rocket"
    //               width={200}
    //               height={60}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <section className="min-h-screen overflow-hidden">
  <div className="px-6 md:p-16 text-white general-sans z-20">
    <p ref={headingRef} className="text-center font-semibold text-3xl md:text-5xl mt-5">
      Contact Us
    </p>
    <p
      ref={subtextRef}
      className="font-inter text-[#F1F1F1] font-normal text-base md:text-xl text-center mt-5"
    >
      Any question or remarks? Just write us a message!
    </p>
  </div>

  <div className="relative">
    {/* Background Circles */}
    {[
      "h-[250px] w-[250px] md:h-[350px] md:w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-0 md:right-10 top-40",
      "h-[200px] w-[200px] md:h-[307px] md:w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5",
      "h-[130px] w-[130px] md:h-[185px] md:w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-20 md:left-48",
      "h-[100px] w-[100px] md:h-[128px] md:w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]",
      "h-[100px] w-[100px] md:h-[119px] md:w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-10 md:right-36",
    ].map((cls, i) => (
      <div
        key={i}
        ref={(el) => {
          circlesRef.current[i] = el;
        }}
        className={`absolute z-0 ${cls}`}
      />
    ))}

    {/* Form Container */}
    <div ref={formRef} className="z-20 flex justify-center mt-10 md:mt-16 pb-20 px-5">
      <div className="flex flex-col lg:flex-row w-full lg:w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
        {/* Left */}
        <div className="p-3 sm:p-6 md:p-10 bg-black/50 rounded-t-4xl lg:rounded-s-4xl lg:rounded-tr-none basis-full lg:basis-[70%]">
          <p className="font-inter font-bold text-2xl md:text-4xl">
            Contact <span className="text-[#989FFF]">Information</span>
          </p>
          <p className="h-1 md:h-2 w-2/5 mt-3 bg-white/30" />
          <div className="flex gap-3 items-center mt-10 md:mt-20">
            <img src="./icons/contact-form-email.svg" alt="email" />
            <p className="font-inter font-medium text-sm md:text-base">yestoboss@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center mt-5 md:mt-7">
            <img src="./icons/contact-form-phone.svg" alt="phone" />
            <p className="font-inter font-medium text-sm md:text-base">+91 98765 43210</p>
          </div>
          <div className="flex gap-3 items-start mt-5 md:mt-7">
            <img src="./icons/contact-form-location.svg" alt="location" />
            <div className="font-inter text-xs md:text-[15px] font-semibold flex flex-col">
              <p>No 33/14, Ground floor, Jayammal St,</p>
              <p>G Ayyavoo Colony, Aminjikarai,</p>
              <p>Chennai, Tamil Nadu 600029</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
            loading="lazy"
            className="w-full rounded-2xl h-40 md:h-52 mt-10 md:mt-20"
          ></iframe>
        </div>

        {/* Right */}
        <div className="px-3 sm:px-6 md:px-10 pt-8 md:pt-10 pb-10 basis-full rounded-b-4xl lg:rounded-e-4xl lg:rounded-bl-none bg-black/50 flex flex-col gap-6 md:gap-10">
          {[
            {
              key: "row1",
              labels: ["First Name", "Last Name"],
              refs: [0],
            },
            {
              key: "row2",
              labels: ["Email", "Phone Number"],
              refs: [1],
            },
            {
              key: "row3",
              labels: ["City", "State"],
              refs: [2],
            },
          ].map((row, idx) => (
            <div
              key={row.key}
              ref={(el) => {
                inputGroupsRef.current[row.refs[0]] = el;
              }}
              className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 font-inter font-medium"
            >
              {row.labels.map((label, i) => (
                <div className="flex flex-col gap-1 w-full md:w-1/2" key={i}>
                  <label>{label}</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent text-sm md:text-base"
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Message */}
          <div
            ref={(el) => {
              inputGroupsRef.current[3] = el;
            }}
            className="flex flex-col gap-1 font-inter font-medium"
          >
            <label>Message</label>
            <textarea
              className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
              rows={2}
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button + Rocket */}
          <div className="flex flex-col gap-1 items-end">
            <button
              className="bg-white px-6 md:px-8 py-2 md:py-3 w-fit text-black rounded-md font-inter font-medium text-base md:text-lg"
              ref={buttonRef}
            >
              Send Message
            </button>
            <Image
              ref={rocketRef}
              src={"/icons/paper-rocket-icon.svg"}
              alt="rocket"
              width={160}
              height={60}
              className="mt-2 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactUsForm;