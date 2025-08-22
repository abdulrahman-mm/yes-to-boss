import dynamic from "next/dynamic";
const AboutHero = dynamic(() => import("@/components/about/AboutHero"));
const AboutSecondSection = dynamic(() => import("@/components/about/AboutSecondSection"));
const AboutOurHistory = dynamic(() => import("@/components/about/AboutOurHistory"));
const AboutCertification = dynamic(() => import("@/components/about/AboutCertification"));


export default function About() {
  return (
    <>
    <AboutHero/>
    <AboutSecondSection/>
    <AboutOurHistory/>
    <AboutCertification/>
    </>
  )
}
