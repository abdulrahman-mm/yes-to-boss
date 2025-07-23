import {
  HomeHero,
  HomeWhyYouHaveToChooseUs,
  HomeOurCoreServices,
  HomeWhatMakesUsDifferent,
  HomeTaxBusinessConsultingService,
  HomeSpecializedRegistrationFilings,
  HomeReachUs,
  HomeTestimonial,
} from "@/components/home";
import { Footer } from "@/components/layout";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhyYouHaveToChooseUs />
      <HomeOurCoreServices />   
      <HomeWhatMakesUsDifferent />
      <HomeTaxBusinessConsultingService />
      <HomeSpecializedRegistrationFilings />
      <HomeReachUs />
      <HomeTestimonial/>
      <Footer />
    </>
  );
}
