// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { GlassSurface, StaggerMenu } from "../animations";

// interface HeaderProps {
//   bgColor?: "white" | "black";
//   textColor?: string;
// }

// const dropdownData = [
//   { pathName: "income-tax-efiling-in-india", label: "Income Tax e-Filing" },
//   { pathName: "income-tax-return-itr-1-filing-online", label: "ITR-1 Filing" },

//   {
//     pathName: "file-income-tax-return-itr-2-online",
//     label: "ITR-2 Return Filing",
//   },

//   {
//     pathName: "file-income-tax-return-itr-3-online",
//     label: "ITR-3 Return Filing",
//   },
//   {
//     pathName: "income-tax-return-itr-4-filing-online",
//     label: "ITR-4 Return Filing",
//   },
//   {
//     pathName: "sole-proprietorship-registration-online",
//     label: "Sole Proprietorship",
//   },
//   { pathName: "apply-udyam-registration-online", label: "Udayam Registration" },

//   { pathName: "apply-gst-registration-online", label: "GST Registration" },
//   { pathName: "apply-fssai-registration-online", label: "FSSAI Registration" },
//   {
//     pathName: "epfo-registration-online-for-employees",
//     label: "EPFO Registration",
//   },
//   { pathName: "dir-3-kyc-filing-online", label: " DIN eKYC Filing" },

//   { pathName: "file-tds-return-online", label: "TDS Return Filing" },
// ];

// const menuItems = [
//   { label: "Home", ariaLabel: "Go to home page", link: "/" },
//   { label: "About", ariaLabel: "Learn about us", link: "/about" },
//   { label: "Services", ariaLabel: "View our services", link: "/services" },
//   { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
// ];

// const socialItems = [
//   { label: "LinkedIn", link: "https://www.linkedin.com/company/yestoboss/" },
//   { label: "Facebook", link: "https://www.facebook.com/share/1EkhGhedjN/" },
//   {
//     label: "Instagram",
//     link: "https://www.instagram.com/yestobossservices?igsh=MTkzdWY3YmtpdGUwNQ==",
//   },
// ];
// export const Header: React.FC<HeaderProps> = ({
//   bgColor = "white",
//   textColor = "black",
// }) => {
//   const headerRef = useRef<HTMLElement | null>(null);
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   // const navLinksRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
//   const navLinksRef = useRef<
//     (HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | null)[]
//   >([]);

//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined" && window.innerWidth >= 768) {
//       const ctx = gsap.context(() => {
//         gsap.set(headerRef.current, { y: -80, opacity: 0 });
//         gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });
//         gsap.set(navLinksRef.current, { opacity: 0, scale: 0.8, y: -20 });

//         const tl = gsap.timeline();
//         tl.to(headerRef.current, {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           onStart: () => {
//             headerRef.current?.classList.remove("invisible");
//           },
//         })
//           .to(
//             logoRef.current,
//             { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" },
//             "-=0.6"
//           )
//           .to(
//             navLinksRef.current.filter(Boolean),
//             {
//               opacity: 1,
//               scale: 1,
//               y: 0,
//               duration: 0.5,
//               ease: "back.out(1.7)",
//               stagger: 0.1,
//             },
//             "-=0.7"
//           );
//       }, headerRef);

//       return () => ctx.revert();
//     }
//   }, []);

//   // useEffect(() => {
//   //   if (isSidebarOpen) {
//   //     gsap.set(".mobile-sidebar", { x: "-100%" });
//   //     gsap.to(".mobile-sidebar", { x: 0, duration: 0.5, ease: "power3.out" });
//   //   } else {
//   //     gsap.to(".mobile-sidebar", {
//   //       x: "-100%",
//   //       duration: 0.4,
//   //       ease: "power2.in",
//   //     });
//   //   }
//   // }, [isSidebarOpen]);

//   useEffect(() => {
//     if (isDropdownOpen) {
//       gsap.fromTo(
//         ".services-dropdown a",
//         { opacity: 0, y: -10 },
//         { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
//       );
//     }
//   }, [isDropdownOpen]);

//   return (
//     <>
//       <GlassSurface
//         displace={15}
//         distortionScale={-450}
//         redOffset={5}
//         greenOffset={15}
//         blueOffset={15}
//         brightness={60}
//         opacity={0.8}
//         width={"screen"}
//         mixBlendMode="screen"
//       >
//         <header ref={headerRef} className="flex-grow">
//           {/* Desktop Navbar */}
//           <div
//             className={`hidden md:flex w-full justify-between items-center ${
//               bgColor === "white" ? "bg-transparent" : "bg-black"
//             } px-5 py-2 lg:mx-16 rounded-4xl relative z-10`}
//           >
//             {/* Logo */}
//             <div className="relative w-32 h-[40px]" ref={logoRef}>
//               <Link href="/">
//                 <Image
//                   src={
//                     bgColor === "white"
//                       ? "/icons/yes-to-boss-white-logo.svg"
//                       : "/icons/yes-to-boss-white-logo.svg"
//                   }
//                   alt="Yes To Boss Logo"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Navigation */}
//             <div className="flex font-medium gap-5 xl:gap-8 ">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About Us", path: "/about" },
//                 { name: "Contact Us", path: "/contact" },
//               ].map((item, index) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   ref={(el) => {
//                     if (el) navLinksRef.current[index] = el;
//                   }}
//                   // style={{ color: textColor }}
//                   style={{ color: 'white' }}
//                   className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200"
//                   // onMouseEnter={(e) => {
//                   //   e.currentTarget.style.backgroundColor = textColor;
//                   //   e.currentTarget.style.color = bgColor;
//                   // }}
//                   // onMouseLeave={(e) => {
//                   //   e.currentTarget.style.backgroundColor = "transparent";
//                   //   e.currentTarget.style.color = textColor;
//                   // }}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* Services */}
//               <div
//                 className=""
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <button
//                   ref={(el) => {
//                     if (el) navLinksRef.current[3] = el; // ✅ fixed index
//                   }}
//                   // style={{ color: textColor }}
//                   style={{ color: 'white' }}
//                   className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200 cursor-pointer"
//                 >
//                   Services
//                 </button>

//                 <div
//                   className={`services-dropdown absolute left-0 right-0 top-full z-50 mt-2 grid grid-cols-5 shadow-lg rounded-xl p-4 transition-all duration-500 w-full  transform ${
//                     isDropdownOpen
//                       ? "opacity-100 -translate-0 visible"
//                       : "opacity-0 -translate-y-16 invisible"
//                   } ${
//                     bgColor === "white"
//                       ? "bg-white text-black"
//                       : "bg-gradient-to-r from-[#212121] to-[#070707] text-white"
//                   }`}
//                 >
//                   {dropdownData.map((service) => (
//                     <Link
//                       key={service.pathName}
//                       href={`/services/${service.pathName}`}
//                       className={`px-4 py-2 text-base rounded-md ${
//                         bgColor === "black"
//                           ? "hover:bg-white hover:text-black"
//                           : "hover:bg-black hover:text-white"
//                       } transition-all duration-300`}
//                       role="menuitem"
//                     >
//                       {service.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="w-1/12" />
//           </div>

//           {/* Mobile Header */}
//           {/* <div className="flex justify-between items-center mt-2 px-4 md:hidden ">
//           <Link href="/">
//             <img
//               src={
//                 textColor === "black"
//                   ? "/icons/yes-to-boss-white-logo.svg"
//                   : "/icons/yes-to-boss-logo.svg"
//               }
//               alt="Logo"
//               className="w-20 h-10 object-contain"
//             />
//           </Link>

//           <RxHamburgerMenu
//             className="text-3xl"
//             onClick={() => setIsSidebarOpen(true)}
//           />
//         </div> */}

//           {/* Mobile Sidebar */}
//           {/* <div
//           className={`mobile-sidebar fixed z-[100] h-screen top-0 right-0 w-full bg-gradient-to-b from-[#212121] to-[#070707] p-5 sm:p-10 transform transition-transform duration-500 ease-in-out overflow-y-auto ${
//             isSidebarOpen ? "translate-x-0 " : "translate-x-full "
//           } lg:hidden`}
//         >
//           <div className="flex text-white justify-end items-center px-6 py-4">
//             <button
//               onClick={() => setIsSidebarOpen(false)}
//               className="text-2xl font-semibold"
//             >
//               ✕
//             </button>
//           </div>

//           <nav className="flex flex-col gap-4 px-6 py-4 text-2xl text-white">
//             <Link href="/" onClick={() => setIsSidebarOpen(false)}>
//               Home
//             </Link>
//             <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
//               About Us
//             </Link>
//             <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
//               Contact Us
//             </Link>
//             <Link href="/services" onClick={() => setIsSidebarOpen(false)}>
//               Services
//             </Link>
//           </nav>
//         </div> */}

//           {/* <div style={{ height: "100vh", background: "#1a1a1a" }} className=" md:h-0 md:hidden"> */}
//           <StaggerMenu
//             position="right"
//             items={menuItems}
//             socialItems={socialItems}
//             displaySocials={true}
//             displayItemNumbering={true}
//             menuButtonColor="#fff"
//             openMenuButtonColor="#fff"
//             changeMenuColorOnOpen={true}
//             colors={["black", "1d1d1d"]}
//             // colors={['#B19EEF', '#5227FF']}
//             // logoUrl={textColor === "black"
//             //   ? "/icons/yes-to-boss-white-logo.svg"
//             //   : "/icons/yes-to-boss-logo.svg"}

//             logoUrl="/icons/yes-to-boss-white-logo.svg"
//             accentColor="#ff6b6b"
//           />
//           {/* </div> */}
//         </header>

//         {/* <GlassSurface
//   width={300}
//   height={200}
//   borderRadius={24}
//   className="my-custom-class"
// >
//   <h2>Glass Surface Content</h2>
// </GlassSurface> */}
//       </GlassSurface>
//     </>
//   );
// };

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { StaggerMenu } from "../animations";

interface HeaderProps {
  bgColor?: "white" | "black";
  textColor?: string;
}

const dropdownData = [
  { pathName: "income-tax-efiling-in-india", label: "Income Tax e-Filing" },
  { pathName: "income-tax-return-itr-1-filing-online", label: "ITR-1 Filing" },

  {
    pathName: "file-income-tax-return-itr-2-online",
    label: "ITR-2 Return Filing",
  },

  {
    pathName: "file-income-tax-return-itr-3-online",
    label: "ITR-3 Return Filing",
  },
  {
    pathName: "income-tax-return-itr-4-filing-online",
    label: "ITR-4 Return Filing",
  },
  {
    pathName: "sole-proprietorship-registration-online",
    label: "Sole Proprietorship",
  },
  { pathName: "apply-udyam-registration-online", label: "Udayam Registration" },

  { pathName: "apply-gst-registration-online", label: "GST Registration" },
  { pathName: "apply-fssai-registration-online", label: "FSSAI Registration" },
  {
    pathName: "epfo-registration-for-employer",
    label: "EPFO Registration",
  },
  { pathName: "dir-3-kyc-filing-online", label: " DIN eKYC Filing" },

  { pathName: "file-tds-return-online", label: "TDS Return Filing" },
];

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about-us" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact-us" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/yestoboss/" },
  { label: "Facebook", link: "https://www.facebook.com/share/1EkhGhedjN/" },
  {
    label: "Instagram",
    link: "https://www.instagram.com/yestobossservices?igsh=MTkzdWY3YmtpdGUwNQ==",
  },
];
export const Header: React.FC<HeaderProps> = ({
  bgColor = "white",
  textColor = "black",
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  // const navLinksRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
  const navLinksRef = useRef<
    (HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | null)[]
  >([]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<number | null>(null);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const ctx = gsap.context(() => {
        gsap.set(headerRef.current, { y: -80, opacity: 0 });
        gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });
        gsap.set(navLinksRef.current, { opacity: 0, scale: 0.8, y: -20 });

        const tl = gsap.timeline();
        tl.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onStart: () => {
            headerRef.current?.classList.remove("invisible");
          },
        })
          .to(
            logoRef.current,
            { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.6"
          )
          .to(
            navLinksRef.current.filter(Boolean),
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.1,
            },
            "-=0.7"
          );
      }, headerRef);

      return () => ctx.revert();
    }
  }, []);

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     gsap.fromTo(
  //       ".services-dropdown a",
  //       { opacity: 0, y: -10 },
  //       { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
  //     );
  //   }
  // }, [isDropdownOpen]);

  return (
    <>
      <header ref={headerRef}>
        {/* Desktop Navbar */}
        <div
          className={`hidden md:flex justify-between items-center ${
            bgColor === "white" ? "bg-white" : "bg-black"
          } px-5 py-2 lg:mx-16 rounded-4xl relative z-10`}
        >
          {/* Logo */}
          <div className="relative w-32 h-[40px]" ref={logoRef}>
            <Link href="/">
              <Image
                src={
                  bgColor === "white"
                    ? "/icons/yes-to-boss-logo.svg"
                    : "/icons/yes-to-boss-white-logo.svg"
                }
                alt="Yes To Boss Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex font-medium gap-5 xl:gap-8 ">
            {[
              { name: "Home", path: "/" },
              // { name: "Services", path: "/services" },
              { name: "About Us", path: "/about-us" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                ref={(el) => {
                  if (el) navLinksRef.current[index] = el;
                }}
                style={{ color: textColor }}
                className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = textColor;
                  e.currentTarget.style.color = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = textColor;
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Services */}
            {/* <div
              className=""
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                ref={(el) => {
                  if (el) navLinksRef.current[3] = el; // ✅ fixed index
                }}
                style={{ color: textColor }}
                className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200 cursor-pointer"
              >
                Services
              </button>

              <div
                className={`services-dropdown absolute left-0 right-0 top-12 z-50 mt-2 grid grid-cols-5 shadow-lg rounded-xl p-4 transition-all duration-500 w-full  transform ${
                  isDropdownOpen
                    ? "opacity-100 -translate-0 visible"
                    : "opacity-0 -translate-y-16 invisible"
                } ${
                  bgColor === "white"
                    ? "bg-white text-black"
                    : "bg-gradient-to-r from-[#212121] to-[#070707] text-white"
                }`}
              >
                {dropdownData.map((service) => (
                  <Link
                    key={service.pathName}
                    href={`/services/${service.pathName}`}
                    className={`px-4 py-2 text-base rounded-md ${
                      bgColor === "black"
                        ? "hover:bg-white hover:text-black"
                        : "hover:bg-black hover:text-white"
                    } transition-all duration-300`}
                    role="menuitem"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div> */}

            <div
              className=" inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Trigger Button */}
              <button
              ref={(el) => {
                if (el) navLinksRef.current[3] = el; // ✅ fixed index
              }}
                style={{ color: textColor }}
                className="general-sans rounded-3xl lg:px-4 py-1.5 transition-colors duration-200 cursor-pointer hover:opacity-80"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = textColor;
                  e.currentTarget.style.color = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = textColor;
                }}
              >
                Services
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-15 z-50  w-full mx-auto  grid grid-cols-4 xl:grid-cols-5 gap-2 shadow-2xl rounded-xl p-4 border transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 visible pointer-events-auto"
                    : "opacity-0 -translate-y-4 invisible pointer-events-none"
                } ${
                  bgColor === "white"
                    ? "bg-white text-black border-gray-200"
                    : "bg-gradient-to-r from-[#1e1e1e] to-[#0c0c0c] text-white border-neutral-700"
                }`}
              >
                {dropdownData.map((service) => (
                  <Link
                    key={service.pathName}
                    href={`/services/${service.pathName}`}
                    className={`px-3 py-2 rounded-lg text-sm font-medium  transition-all duration-200 ${
                      bgColor === "white"
                        ? "hover:bg-black hover:text-white"
                        : "hover:bg-white hover:text-black"
                    }`}
                    role="menuitem"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/12" />
        </div>

        {/* <div style={{ height: "100vh", background: "#1a1a1a" }} className=" md:h-0 md:hidden"> */}
        <StaggerMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["black", "1d1d1d"]}
          // colors={['#B19EEF', '#5227FF']}
          // logoUrl={textColor === "black"
          //   ? "/icons/yes-to-boss-white-logo.svg"
          //   : "/icons/yes-to-boss-logo.svg"}

          logoUrl="/icons/yes-to-boss-white-logo.svg"
          accentColor="#ff6b6b"
        />
        {/* </div> */}
      </header>
    </>
  );
};
