// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React from "react";

// // interface HeaderProps {
// //   bgColor?: string;
// //   textColor?: string;
// // }

// // export const Header: React.FC<HeaderProps> = ({
// //   bgColor = "white",
// //   textColor = "black",
// // }) => {
// //   const navLinks = [
// //     { displayName: "Home", pathName: "/" },
// //     { displayName: "About Us", pathName: "/about" },
// //     { displayName: "Contact Us", pathName: "/contact" },
// //     { displayName: "Reviews", pathName: "/reviews" },
// //     { displayName: "Procedures", pathName: "/procedures" },
// //     { displayName: "Blog", pathName: "/blog" },
// //   ];

// //   console.log("textcolor", textColor);
// //   console.log("bgcolor", bgColor);

// //   return (
// //     <header className={`bg-${bgColor} px-5 py-2 mx-16 rounded-4xl`}>
// //       <div className="flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="relative w-32 h-[40px]">
// //           {bgColor === "white" ? (
// //             <Image
// //               src="/icons/yes-to-boss-logo.svg"
// //               alt="Yes To Boss Logo"
// //               fill
// //               className="object-contain"
// //               priority
// //             />
// //           ) : (
// //             <Image
// //               src="/icons/yes-to-boss-white-logo.svg"
// //               alt="Yes To Boss Logo"
// //               fill
// //               className="object-contain"
// //               priority
// //             />
// //           )}
// //         </div>

// //         {/* Navigation */}
// //         <div className="flex font-medium gap-8">
// //           {navLinks.map(({ displayName, pathName }) => (

// //             <Link
// //               key={displayName}
// //               href={pathName}
// //               style={{
// //                 color: textColor,
// //               }}
// //               className="general-sans rounded-3xl px-3 py-1 transition-colors duration-200"
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.backgroundColor = textColor;
// //                 e.currentTarget.style.color = bgColor;
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.backgroundColor = "transparent";
// //                 e.currentTarget.style.color = textColor;
// //               }}
// //             >
// //               {displayName}
// //             </Link>
// //           ))}
// //         </div>

// //         {/* Optional right-side space */}
// //         <div className="w-1/12"></div>
// //       </div>
// //     </header>
// //   );
// // };

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// interface HeaderProps {
//   bgColor?: string;
//   textColor?: string;
// }

// export const Header: React.FC<HeaderProps> = ({
//   bgColor = "white",
//   textColor = "black",
// }) => {
//   const logoRef = useRef(null);
//   // const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
//   // const navLinksRef = useRef<Array<HTMLAnchorElement | null>>([]);
//   const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

//   const navLinks = [
//     { displayName: "Home", pathName: "/" },
//     { displayName: "About Us", pathName: "/about" },
//     { displayName: "Contact Us", pathName: "/contact" },
//     { displayName: "Reviews", pathName: "/reviews" },
//     { displayName: "Procedures", pathName: "/procedures" },
//     { displayName: "Blog", pathName: "/blog" },
//   ];

//   useEffect(() => {
//     // Animate logo
//     gsap.from(logoRef.current, {
//       x: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // Animate navigation links with stagger
//     gsap.from(navLinksRef.current, {
//       opacity: 0,
//       y: -20,
//       duration: 1,
//       ease: "power2.out",
//       stagger: 0.1,
//       delay: 0.5,
//     });
//   }, []);

//   return (
//     <header className={`bg-${bgColor} px-5 py-2 mx-16 rounded-4xl`}>
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
//               // ref={(el) => (navLinksRef.current[index] = el)}
//               ref={(el) => {
//                 navLinksRef.current[index] = el}}
//               // ref={(el) => {
//               //   navLinksRef.current[index] = el;
//               // }}

//               style={{
//                 color: textColor,
//               }}
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

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeaderProps {
  bgColor?: string;
  textColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  bgColor = "white",
  textColor = "black",
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const navLinks = [
    { displayName: "Home", pathName: "/" },
    { displayName: "About Us", pathName: "/about" },
    { displayName: "Contact Us", pathName: "/contact" },
    { displayName: "Reviews", pathName: "/reviews" },
    { displayName: "Procedures", pathName: "/procedures" },
    { displayName: "Blog", pathName: "/blog" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide in header
    tl.from(headerRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

      // Logo bounce
      .from(
        logoRef.current,
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: "bounce.out",
        },
        "-=0.6"
      )

      // Nav links pop-in stagger
      .from(
        navLinksRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: -20,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.7"
      );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`bg-${bgColor} px-5 py-2 mx-16 rounded-4xl`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-32 h-[40px]" ref={logoRef}>
          {bgColor === "white" ? (
            <Image
              src="/icons/yes-to-boss-logo.svg"
              alt="Yes To Boss Logo"
              fill
              className="object-contain"
              priority
            />
          ) : (
            <Image
              src="/icons/yes-to-boss-white-logo.svg"
              alt="Yes To Boss Logo"
              fill
              className="object-contain"
              priority
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex font-medium gap-8">
          {navLinks.map(({ displayName, pathName }, index) => (
            <Link
              key={displayName}
              href={pathName}
              ref={(el) => {
                navLinksRef.current[index] = el;
              }}
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
          ))}
        </div>

        {/* Optional right-side space */}
        <div className="w-1/12"></div>
      </div>
    </header>
  );
};
