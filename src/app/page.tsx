import gsap from "gsap";
import dynamic from "next/dynamic";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HomeHero = dynamic(() => import("@/components/home/HomeHero"));
const HomeWhyYouHaveToChooseUs = dynamic(
  () => import("@/components/home/HomeWhyYouHaveToChooseUs")
);
const HomeOurCoreServices = dynamic(
  () => import("@/components/home/HomeOurCoreServices")
);
const HomeWhatMakesUsDifferent = dynamic(
  () => import("@/components/home/HomeWhatMakesUsDifferent")
);
const HomeTaxBusinessConsultingService = dynamic(
  () => import("@/components/home/HomeTaxBusinessConsultingService")
);
const HomeSpecializedRegistrationFilings = dynamic(
  () => import("@/components/home/HomeSpecializedRegistrationFilings")
);
const HomeReachUs = dynamic(() => import("@/components/home/HomeReachUs"));
// const HomeTestimonial = dynamic(() => import('@/components/home/HomeTestimonial'));

import type { Metadata } from "next";
// import HomeTestimonial from "@/components/home/HomeTestimonial";

export const metadata: Metadata = {
  title: "income tax consultancy services | YesToBoss",
  description:
    "YesToBoss offers expert Income Tax Consultancy Services for individuals & businesses. File ITR online, save tax legally, with professional financial support.",
  keywords: [
    "Tax consultancy services",
    "Best chartered accountant firms in india",
    "tax advisor in india",
    "tax auditor in india",
    "financial Consultancy services in India",
    "tax consultancy services in chennai income tax consultancy services",
    
  ],
};    

export default function Home() {
  // useEffect(() => {
  //   const trigger = ScrollTrigger.create({
  //     trigger: ".xxx",
  //     start: "bottom 20%", // When the bottom of the section hits the bottom of the viewport
  //     onEnter: () => {
  //       gsap.to(".xxx", {
  //         backgroundColor: "white",
  //         color: "black",
  //         duration: 1,
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(".xxx", {
  //         backgroundColor: "black",
  //         color: "white",
  //         duration: 1,
  //       });
  //     },
  //   });

  //   return () => {
  //     trigger.kill(); // clean up only this trigger
  //   };
  // }, []);

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
    <div className="overflow-hidden">
      <HomeHero />
      <HomeWhyYouHaveToChooseUs />
      <HomeOurCoreServices />
      <HomeWhatMakesUsDifferent />
      <HomeTaxBusinessConsultingService />
      <HomeSpecializedRegistrationFilings />
      <HomeReachUs />
      {/* <HomeTestimonial />/ */}
    </div>
  );
}
