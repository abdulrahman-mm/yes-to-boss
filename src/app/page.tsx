"use client";

import gsap from "gsap";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HomeHero = dynamic(() => import('@/components/home/HomeHero'));
const HomeWhyYouHaveToChooseUs = dynamic(() => import('@/components/home/HomeWhyYouHaveToChooseUs'));
const HomeOurCoreServices = dynamic(() => import('@/components/home/HomeOurCoreServices'));
const HomeWhatMakesUsDifferent = dynamic(() => import('@/components/home/HomeWhatMakesUsDifferent'));
const HomeTaxBusinessConsultingService = dynamic(() => import('@/components/home/HomeTaxBusinessConsultingService'));
const HomeSpecializedRegistrationFilings = dynamic(() => import('@/components/home/HomeSpecializedRegistrationFilings'));
const HomeReachUs = dynamic(() => import('@/components/home/HomeReachUs'));
const HomeTestimonial = dynamic(() => import('@/components/home/HomeTestimonial'));


export default function Home() {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".xxx",
      start: "bottom 20%", // When the bottom of the section hits the bottom of the viewport
      onEnter: () => {
        gsap.to(".xxx", {
          backgroundColor: "white",
          color: "black",
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(".xxx", {
          backgroundColor: "black",
          color: "white",
          duration: 1,
        });
      },
    });

    return () => {
      trigger.kill(); // clean up only this trigger
    };
  }, []);

  // useEffect(() => {
  //   const elements = gsap.utils.toArray(".xxx");

  //   const triggers = elements.map((el) =>
  //     ScrollTrigger.create({
  //       trigger: el,
  //       start: "bottom center",
  //       onEnter: () => {
  //         gsap.to(el, {
  //           backgroundColor: "white",
  //           color: "black",
  //           duration: 1,
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(el, {
  //           backgroundColor: "black",
  //           color: "white",
  //           duration: 1,
  //         });
  //       },
  //     })
  //   );

  //   return () => {
  //     triggers.forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <HomeHero />
      <HomeWhyYouHaveToChooseUs />
      <HomeOurCoreServices />
      <HomeWhatMakesUsDifferent />
      <HomeTaxBusinessConsultingService />
      <HomeSpecializedRegistrationFilings />
      <HomeReachUs />
      <HomeTestimonial />/
    </>
  );
}
