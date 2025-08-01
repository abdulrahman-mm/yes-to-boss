// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// interface HeaderProps {
//   bgColor?: string;
//   textColor?: string;
// }

// const navLinks = [
//   { displayName: "Home", pathName: "/" },
//   { displayName: "About Us", pathName: "/about" },
//   { displayName: "Contact Us", pathName: "/contact" },
//   { displayName: "Reviews", pathName: "/reviews" },
//   { displayName: "Procedures", pathName: "/procedures" },
//   { displayName: "Blog", pathName: "/blog" },
// ];

// export const Header: React.FC<HeaderProps> = ({
//   bgColor = "white",
//   textColor = "black",
// }) => {
//   const headerRef = useRef<HTMLElement | null>(null);
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Slide in header
//     tl.from(headerRef.current, {
//       y: -80,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     })

//       // Logo bounce
//       .from(
//         logoRef.current,
//         {
//           scale: 0.5,
//           opacity: 0,
//           duration: 1,
//           ease: "bounce.out",
//         },
//         "-=0.6"
//       )

//       // Nav links pop-in stagger
//       .from(
//         navLinksRef.current,
//         {
//           opacity: 0,
//           scale: 0.8,
//           y: -20,
//           duration: 0.5,
//           ease: "back.out(1.7)",
//           stagger: 0.1,
//         },
//         "-=0.7"
//       );
//   }, []);

//   return (
//     <header
//       ref={headerRef}
//       className={`bg-${bgColor} px-5 py-2 mx-16 rounded-4xl`}
//     >
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="relative w-32 h-[40px]" ref={logoRef}>
//           {bgColor === "white" ? (
//             <Image
//               src="/icons/yes-to-boss-logo.svg"
//               alt="Yes To Boss Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           ) : (
//             <Image
//               src="/icons/yes-to-boss-white-logo.svg"
//               alt="Yes To Boss Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           )}
//         </div>

//         {/* Navigation */}
//         <div className="flex font-medium gap-8">
//           {navLinks.map(({ displayName, pathName }, index) => (
//             <Link
//               key={displayName}
//               href={pathName}
//               ref={(el) => {
//                 navLinksRef.current[index] = el;
//               }}
//               style={{ color: textColor }}
//               className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = textColor;
//                 e.currentTarget.style.color = bgColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = textColor;
//               }}
//             >
//               {displayName}
//               {/* <ShinnyText text={displayName} disabled={false} speed={3} className='custom-class' /> */}
//             </Link>
//           ))}
//         </div>

//         {/* Optional right-side space */}
//         <div className="w-1/12"></div>
//       </div>
//     </header>
//   );
// };



// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// interface HeaderProps {
//   bgColor?: "white" | "black";
//   textColor?: string;
// }

// const navLinks = [
//   { displayName: "Home", pathName: "/" },
//   { displayName: "About Us", pathName: "/about" },
//   { displayName: "Contact Us", pathName: "/contact" },
//   { displayName: "Services", pathName: "/services/ITR-1" },
//   { displayName: "Blog", pathName: "/blog" },
// ];

// export const Header: React.FC<HeaderProps> = ({
//   bgColor = "white",
//   textColor = "black",
// }) => {
//   const headerRef = useRef<HTMLElement | null>(null);
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial states
//       gsap.set(headerRef.current, { y: -80, opacity: 0 });
//       gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });
//       gsap.set(navLinksRef.current, { opacity: 0, scale: 0.8, y: -20 });

//       const safeNavLinks = navLinksRef.current.filter(Boolean);

//       const tl = gsap.timeline();

//       tl.to(headerRef.current, {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         onStart: () => {
//           if (headerRef.current)
//             headerRef.current.classList.remove("invisible");
//         },
//       })
//         .to(
//           logoRef.current,
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 1,
//             ease: "bounce.out",
//           },
//           "-=0.6"
//         )
//         .to(
//           safeNavLinks,
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 0.5,
//             ease: "back.out(1.7)",
//             stagger: 0.1,
//           },
//           "-=0.7"
//         );
//     }, headerRef);

//     return () => ctx.revert(); // clean up GSAP context
//   }, []);

//   return (
//     <header
//       ref={headerRef}
//       className={`${
//         bgColor === "white" ? "bg-white" : "bg-black"
//       } invisible opacity-0 px-5 py-2 mx-16 rounded-4xl`}
//     >
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="relative w-32 h-[40px]" ref={logoRef}>
//           <Image
//             src={
//               bgColor === "white"
//                 ? "/icons/yes-to-boss-logo.svg"
//                 : "/icons/yes-to-boss-white-logo.svg"
//             }
//             alt="Yes To Boss Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Navigation */}
//         <div className="flex font-medium gap-8">
//           {navLinks.map(({ displayName, pathName }, index) => (
//             <Link
//               key={displayName}
//               href={pathName}
//               ref={(el) => {
//                 navLinksRef.current[index] = el;
//               }}
//               style={{ color: textColor }}
//               className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = textColor;
//                 e.currentTarget.style.color = bgColor;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = textColor;
//               }}
//             >
//               {displayName}
//             </Link>
//           ))}
//         </div>

//         {/* Optional right-side space */}
//         <div className="w-1/12"></div>
//       </div>
//     </header>
//   );
// };






// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// interface HeaderProps {
//   bgColor?: "white" | "black";
//   textColor?: string;
// }

// const navLinks = [
//   { displayName: "Home", pathName: "/" },
//   { displayName: "About Us", pathName: "/about" },
//   { displayName: "Contact Us", pathName: "/contact" },
//   {
//     displayName: "Services",
//     pathName: "/services/ITR-1",
//     hasDropdown: true, // <- only Services has this
//   },
//   { displayName: "Blog", pathName: "/blog" },
// ];


// const servicesDropdownItems = Array.from({ length: 13 }, (_, i) => ({
//   name: `Service ${i + 1}`,
//   path: `/services/service-${i + 1}`,
// }));

// export const Header: React.FC<HeaderProps> = ({
//   bgColor = "white",
//   textColor = "black",
// }) => {
//   const headerRef = useRef<HTMLElement | null>(null);
//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const dropdownItemRefs = useRef<HTMLAnchorElement[]>([]);

//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(headerRef.current, { y: -80, opacity: 0 });
//       gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });
//       gsap.set(navLinksRef.current, { opacity: 0, scale: 0.8, y: -20 });

//       const safeNavLinks = navLinksRef.current.filter(Boolean);

//       const tl = gsap.timeline();
//       tl.to(headerRef.current, {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         onStart: () => {
//           headerRef.current?.classList.remove("invisible");
//         },
//       })
//         .to(
//           logoRef.current,
//           { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" },
//           "-=0.6"
//         )
//         .to(
//           safeNavLinks,
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 0.5,
//             ease: "back.out(1.7)",
//             stagger: 0.1,
//           },
//           "-=0.7"
//         );
//     }, headerRef);

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     if (isDropdownOpen) {
//       gsap.set(dropdownRef.current, { display: "block", opacity: 0, y: -10 });
//       gsap.to(dropdownRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.4,
//         ease: "power2.out",
//       });

//       gsap.set(dropdownItemRefs.current, { opacity: 0, y: -10 });
//       gsap.to(dropdownItemRefs.current, {
//         opacity: 1,
//         y: 0,
//         stagger: 0.05,
//         duration: 0.3,
//         ease: "power1.out",
//       });
//     } else {
//       gsap.to(dropdownRef.current, {
//         opacity: 0,
//         y: -10,
//         duration: 0.3,
//         ease: "power1.in",
//         onComplete: () => {
//           gsap.set(dropdownRef.current, { display: "none" });
//         },
//       });
//     }
//   }, [isDropdownOpen]);

//   return (
//     <header
//       ref={headerRef}
//       className={`${
//         bgColor === "white" ? "bg-white" : "bg-black"
//       } invisible opacity-0 px-5 py-2 mx-16 rounded-4xl relative z-50`}
//     >
//       <div className="flex justify-between items-center relative">
//         {/* Logo */}
//         <div className="relative w-32 h-[40px]" ref={logoRef}>
//           <Image
//             src={
//               bgColor === "white"
//                 ? "/icons/yes-to-boss-logo.svg"
//                 : "/icons/yes-to-boss-white-logo.svg"
//             }
//             alt="Yes To Boss Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Navigation */}
//         <div className="flex font-medium gap-8 relative">
//           {navLinks.map(({ displayName, pathName, hasDropdown }, index) => (
//             <div
//               key={displayName}
//               onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
//               onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
//               className="relative"
//             >
//               <Link
//                 href={pathName}
//                 ref={(el) => {
//                   navLinksRef.current[index] = el;
//                 }}
//                 style={{ color: textColor }}
//                 className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = textColor;
//                   e.currentTarget.style.color = bgColor;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = "transparent";
//                   e.currentTarget.style.color = textColor;
//                 }}
//               >
//                 {displayName}
//               </Link>

//               {/* Dropdown */}
//               {hasDropdown && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-xl py-2 hidden z-40"
//                   onMouseEnter={() => setDropdownOpen(true)}
//                   onMouseLeave={() => setDropdownOpen(false)}
//                 >
//                   {servicesDropdownItems.map((item, i) => (
//                     <Link
//                       key={item.name}
//                       href={item.path}
//                       ref={(el) => {
//                         if (el) dropdownItemRefs.current[i] = el;
//                       }}
//                       className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Optional right-space */}
//         <div className="w-1/12"></div>
//       </div>
//     </header>
//   );
// };











"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HeaderProps {
  bgColor?: "white" | "black";
  textColor?: string;
}

const navLinks = [
  { displayName: "Home", pathName: "/" },
  { displayName: "About Us", pathName: "/about" },
  { displayName: "Contact Us", pathName: "/contact" },
  {
    displayName: "Services",
    pathName: "/services/ITR-1",
    hasDropdown: true,
  },
  { displayName: "Blog", pathName: "/blog" },
];

const servicesDropdownItems = [
  { name: "ITR-1 Filing", path: "/services/ITR-1" },
  { name: "ITR-2 Filing", path: "/services/itr-2" },
  { name: "ITR-3 Filing", path: "/services/itr-3" },
  { name: "ITR-4 Filing", path: "/services/itr-4" },
  { name: "GST Registration", path: "/services/gst-registration" },
  { name: "GST Return Filing", path: "/services/gst-return" },
  { name: "MSME Registration", path: "/services/msme" },
  { name: "Company Registration", path: "/services/company" },
  { name: "Startup India Registration", path: "/services/startup-india" },
  { name: "TDS Return Filing", path: "/services/tds-return" },
  { name: "ROC Compliance", path: "/services/roc" },
  { name: "PAN Application", path: "/services/pan" },
  { name: "Digital Signature (DSC)", path: "/services/dsc" },
];


export const Header: React.FC<HeaderProps> = ({
  bgColor = "white",
  textColor = "black",
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownItemRefs = useRef<HTMLAnchorElement[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      gsap.set(dropdownRef.current, { display: "block", opacity: 0, y: -10 });
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.set(dropdownItemRefs.current, { opacity: 0, y: -10 });
      gsap.to(dropdownItemRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(dropdownRef.current, { display: "none" });
        },
      });
    }
  }, [isDropdownOpen]);

  return (
    <header
      ref={headerRef}
      className={`${
        bgColor === "white" ? "bg-white" : "bg-black"
      } invisible opacity-0 px-5 py-2 mx-16 rounded-4xl relative z-50`}
    >
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="relative w-32 h-[40px]" ref={logoRef}>
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
        </div>

        {/* Navigation */}
        <div className="flex font-medium gap-8 relative">
          {navLinks.map(({ displayName, pathName, hasDropdown }, index) => {
            if (hasDropdown) {
              return (
                <div
                  key={displayName}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {/* Services Link */}
                  <Link
                    href={pathName}
                    ref={(el) => {navLinksRef.current[index] = el}}
                    style={{ color: textColor }}
                    className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = textColor;
                      e.currentTarget.style.color = bgColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = textColor;
                    }}
                  >
                    {displayName}
                  </Link>

                  {/* Dropdown */}
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-5 w-56 bg-white shadow-lg rounded-xl  hidden z-40"
                  >
                    {servicesDropdownItems.map((item, i) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        ref={(el) => {
                          if (el) dropdownItemRefs.current[i] = el;
                        }}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={displayName}
                href={pathName}
                ref={(el) => {navLinksRef.current[index] = el}}
                style={{ color: textColor }}
                className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = textColor;
                  e.currentTarget.style.color = bgColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = textColor;
                }}
              >
                {displayName}
              </Link>
            );
          })}
        </div>

        {/* Optional right-space */}
        <div className="w-1/12"></div>
      </div>
    </header>
  );
};

