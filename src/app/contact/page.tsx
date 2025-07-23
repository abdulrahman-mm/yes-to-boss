import { ContactEmpowerYourBusiness, ContactFollowUs, ContactTrustedInsights, ContactUsForm, ContactUsHero } from "@/components/contact";
import { Footer } from "@/components/layout";

const contact = () => {
  return (
    <div className=" bg-gradient-to-br pb-20 from-[#212121] to-[#070707]">
      <ContactUsHero />
      <ContactUsForm/>
      <ContactEmpowerYourBusiness/>
      <ContactFollowUs/>
      <ContactTrustedInsights/>
      <Footer/>
    </div>
  );
};

export default contact;
