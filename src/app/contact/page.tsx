import dynamic from "next/dynamic";

const ContactUsHero = dynamic(() => import("@/components/contact/ContactUsHero"));
const ContactUsForm = dynamic(() => import("@/components/contact/ContactUsForm"));
const ContactEmpowerYourBusiness = dynamic(() => import("@/components/contact/ContactEmpowerYourBusiness"));
const ContactTrustedInsights = dynamic(() => import("@/components/contact/ContactTrustedInsights"));
const ContactFollowUs = dynamic(() => import("@/components/contact/ContactFollowUs"));



const contact = () => {
  return (
    <div className=" bg-gradient-to-br pb-20 from-[#212121] to-[#070707]">
      <ContactUsHero />
      <ContactUsForm/>
      <ContactEmpowerYourBusiness/>
      <ContactFollowUs/>
      <ContactTrustedInsights/>
    </div>
  );
};

export default contact;
