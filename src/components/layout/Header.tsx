"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
  bgColor?: "white" | "black";
  textColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  bgColor = "white",
  textColor = "black",
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);
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
    >
      <div
        className={`hidden md:flex justify-between  items-center relative ${
          bgColor === "white" ? "bg-white" : "bg-black"
        }  px-5 py-2 lg:mx-16 rounded-4xl relative z-50`}
      >
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
        <div className="flex font-medium gap-5 xl:gap-8 relative">
          <Link
            href="/"
            ref={(el) => {
              if (el) navLinksRef.current[0] = el;
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
            Home
          </Link>

          <Link
            href="/about"
            ref={(el) => {
              if (el) navLinksRef.current[1] = el;
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
            About Us
          </Link>

          <Link
            href="/contact"
            ref={(el) => {
              if (el) navLinksRef.current[2] = el;
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
            Contact Us
          </Link>

          {/* Services Dropdown (Non-clickable) */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div
              ref={(el) => {
                if (el) navLinksRef.current[3] = el;
              }}
              style={{ color: textColor }}
              className="general-sans rounded-3xl lg:px-3 py-1 transition-colors duration-200 cursor-default"
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
            </div>

            <div
              ref={dropdownRef}
              className="absolute left-0 top-5 w-56 bg-white shadow-lg rounded-xl hidden z-50"
            >
              {[
                "ITR-1 Filing",
                "ITR-2 Filing",
                "ITR-3 Filing",
                "ITR-4 Filing",
              
              ].map((service, i) => (
                <Link
                  key={i}
                  href={`/services/${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[()]/g, "")}`}
                  ref={(el) => {
                    if (el) dropdownItemRefs.current[i] = el;
                  }}
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-xl"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            ref={(el) => {
              if (el) navLinksRef.current[4] = el;
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
            Blog
          </Link>
        </div>

        {/* Optional right-space */}
        <div className="w-1/12"></div>
      </div>

      <div className="flex justify-between items-center mt-2 md:hidden">
        <img
          src={
            textColor === "black"
              ? "/icons/yes-to-boss-white-logo.svg"
              : "/icons/yes-to-boss-logo.svg"
          }
          alt="q"
          className="w-20 h-10 object-contain"
        />
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </header>
  );
};
