// import React from "react";
// import { IoMailSharp } from "react-icons/io5";
// import { HiLocationMarker } from "react-icons/hi";
// import Image from "next/image";

// export const ContactUsForm = () => {
//   return (
//     <section >
//       <div className="p-16 text-white  general-sans">
//         <p className="text-center font-semibold text-5xl mt-5">Contact Us</p>
//         <p className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5">
//           Any question or remarks? Just write us a message!
//         </p>
//       </div>

//       <div className="relative max-w-screen h-screen ">
//         <div className="h-[350px] absolute z-10 right-5 w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full"></div>

//         <div className="h-[307px] w-[307px] absolute left-5 bottom-0 right-0 z-10 rounded-full bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)]"></div>

//         <div className="h-[185px] w-[185px] absolute left-44 top-5 right-0 z-10 rounded-full bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)]"></div>

//         <div className="h-[128px] absolute z-10 left-[40%] bottom-28 w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full"></div>

//         <div className="h-[119px] w-[119px] absolute right-36 bottom-2  z-10 rounded-full bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)]"></div>

//         <div className="mt-16 absolute justify-center w-full  z-40  flex  text-white ">
//           <div className="flex w-[85%] justify-center border border-white/30 rounded-4xl backdrop-blur-xl ">
//             <div className="p-10 bg-gradient-to-r from-black/50 to-black/20  rounded-s-4xl basis-[70%]">
//               <p className="font-inter font-bold text-4xl">
//                 Contact Information
//               </p>

//               <div className="flex gap-3 items-center mt-20">
//                 <IoMailSharp className="text-xl" />
//                 <p className="font-inter text-xl font-bold">
//                   yestoboss@gmail.com
//                 </p>
//               </div>

//               <div className="flex gap-3 items-start mt-14">
//                 <HiLocationMarker className="text-3xl" />
//                 <div className="font-inter text-[15px] font-semibold flex flex-col">
//                   <p className="font-inter text-[15px] font-semibold">
//                   No 33/ 14 , Ground floor, Jayammal St,
//                   </p>
//                   <p className="font-inter text-[15px] font-semibold">
//                     G Ayyavoo Colony, Aminjikarai,
//                   </p>
//                   <p className="font-inter text-[15px] font-semibold">Chennai, Tamil Nadu 600029</p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/40 flex flex-col gap-12">
//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label className=" " htmlFor="">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label className=" " htmlFor="">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label className=" " htmlFor="">
//                     Email
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1 w-1/2 ">
//                   <label className=" " htmlFor="">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-10 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-1/2">
//                   <label className=" " htmlFor="">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1 w-1/2 ">
//                   <label className=" " htmlFor="">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     className="border-b border-white outline-none pb-2"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-7 font-inter font-medium">
//                 <div className="flex flex-col gap-1 w-full">
//                   <label className=" " htmlFor="">
//                     Message
//                   </label>
//                   <textarea
//                     name=""
//                     id=""
//                     className="border-b border-white outline-none pb-2 placeholder-white text-sm "
//                     rows={1}
//                     placeholder="Write your message..."
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1 items-end">
//                 <button className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg">
//                   Send Message
//                 </button>
//                 <Image
//                   src={"./icons/paper-rocket-icon.svg"}
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

import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";

export const ContactUsForm = () => {
  return (
    <section className="min-h-screen  overflow-hidden">
      {/* Header */}
      <div className="p-16 text-white general-sans  z-20">
        <p className="text-center font-semibold text-5xl mt-5">Contact Us</p>
        <p className="font-inter text-[#F1F1F1] font-normal text-xl text-center mt-5">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="relative">
        {/* Background circles */}
        <div className="absolute z-0 h-[350px] w-[350px] bg-gradient-to-bl from-[#98FFCE] via-[#838FFF] to-[#60B2FF] rounded-full right-10 top-40"></div>
        <div className="absolute z-0 h-[307px] w-[307px] bg-[linear-gradient(to_top_right,_#98FFCE,_#5F9FFF,_#8571FF,_#3F2FA5)] rounded-full bottom-10 left-5"></div>
        <div className="absolute z-0 h-[185px] w-[185px] bg-[linear-gradient(to_bottom_right,_#5F9FFF,_#7E69FF,_#FE3D41)] rounded-full top-10 left-48"></div>
        <div className="absolute z-0 h-[128px] w-[128px] bg-gradient-to-br from-[#5F9FFF] via-[#A06CFF] to-[#1E00FF] rounded-full bottom-32 left-[40%]"></div>
        <div className="absolute z-0 h-[119px] w-[119px] bg-[linear-gradient(to_bottom_right,_#FF3BDE,_#7E69FF,_#828FF1,#8DFFC9)] rounded-full bottom-5 right-36"></div>

        {/* Form Container */}
        <div className=" z-20 flex justify-center mt-16 pb-20">
          <div className="flex w-[85%] border border-white/30 rounded-4xl backdrop-blur-xl text-white">
            {/* Left Section */}
            <div className="p-10 bg-gradient-to-r from-black/50 to-black/20 rounded-s-4xl basis-[70%]">
              <p className="font-inter font-bold text-4xl">
                Contact <span className="text-[#989FFF]">Information</span>{" "}
              </p>

              <p className="h-2 w-2/5 mt-3 bg-white/30"></p>

              <div className="flex gap-3 items-center mt-20">
                <img src={"./icons/contact-form-email.svg"} alt="a" />
                <p className="font-inter font-medium">yestoboss@gmail.com</p>
              </div>

              <div className="flex gap-3 items-center mt-7">
                <img src={"./icons/contact-form-phone.svg"} alt="a" />
                <p className="font-inter font-medium">yestoboss@gmail.com</p>
              </div>

              <div className="flex gap-3 items-start mt-7">
                <img src={"./icons/contact-form-location.svg"} alt="a" />

                <div className="font-inter text-[15px] font-semibold flex flex-col">
                  <p>No 33/14, Ground floor, Jayammal St,</p>
                  <p>G Ayyavoo Colony, Aminjikarai,</p>
                  <p>Chennai, Tamil Nadu 600029</p>
                </div>
              </div>


              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.2141600090897!2d80.21654007928126!3d13.072275374019252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1752495251666!5m2!1sen!2sin"
              loading="lazy"
              className="w-full rounded-2xl h-52 mt-20"
            ></iframe>
            </div>

            {/* Right Section */}
            <div className="px-10 pt-10 basis-full rounded-e-4xl bg-black/40 flex flex-col gap-12">
              <div className="flex justify-between gap-10 font-inter font-medium">
                <div className="flex flex-col gap-1 w-1/2">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-10 font-inter font-medium">
                <div className="flex flex-col gap-1 w-1/2">
                  <label>Email</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-10 font-inter font-medium">
                <div className="flex flex-col gap-1 w-1/2">
                  <label>City</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label>State</label>
                  <input
                    type="text"
                    className="border-b border-white outline-none pb-2 bg-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-7 font-inter font-medium">
                <div className="flex flex-col gap-1 w-full">
                  <label>Message</label>
                  <textarea
                    className="border-b border-white outline-none pb-2 placeholder-white text-sm bg-transparent resize-none"
                    rows={2}
                    placeholder="Write your message..."
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end">
                <button className="bg-white px-8 py-3 w-fit text-black rounded-md font-inter font-medium text-lg">
                  Send Message
                </button>
                <Image
                  src={"/icons/paper-rocket-icon.svg"}
                  alt="icon"
                  width={200}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
