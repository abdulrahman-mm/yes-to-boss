// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import {
//   epfoBenefitsofEPFRegistrationData,
//   epfoDocumentsRequiredForRegistrationData,
//   epfoFaqData,
//   epfoHeroData,
//   epfoRequiredDetailsData,
//   epfoWhoCanApplyForRegistrationData,
//   epfoWhyChooseYesToBoss,
//   epfoWhyRegisterData,
// } from "@/data";
// import React from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "EPFO Registration Online for Employees – Apply PF Online",
//   description:
//     "EPFO Registration Online for Employees made simple. Apply PF Online to stay compliant and manage employee provident fund accounts quickly and securely.",
//   keywords: [
//     "EPFO registration for employer",
//     "Apply PF Online",
//     "EPFO Registration Online for Employees",
//     "Online PF registration",
//     "EPF account registration",
//   ],
// };

// const page = () => {
//   return (
//     <div className="overflow-hidden">
//       <ServiceSectionHero heroSectionData={epfoHeroData} />
//       <ServiceSectionWhy WhyData={epfoWhyRegisterData} />
//       <ServiceSectionBulletpoints
//         listData={epfoWhoCanApplyForRegistrationData}
//       />
//       <ServiceSectionBulletpoints
//         listData={epfoDocumentsRequiredForRegistrationData}
//       />
//       <ServiceWhyChooseUs WhyChooseUsData={epfoWhyChooseYesToBoss} />

//       <ServiceSectionBulletpoints listData={epfoRequiredDetailsData} />
//       <ServiceSectionBulletpoints
//         listData={epfoBenefitsofEPFRegistrationData}
//       />
//       <ServiceSectionFAQ faqData={epfoFaqData} />
//     </div>
//   );
// };

// export default page;





import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {
  epfoBenefitsofEPFRegistrationData,
  epfoDocumentsRequiredForRegistrationData,
  epfoFaqData,
  epfoHeroData,
  epfoRequiredDetailsData,
  epfoWhoCanApplyForRegistrationData,
  epfoWhyChooseYesToBoss,
  epfoWhyRegisterData,
} from "@/data";

// Dynamic imports
const ServiceSectionHero = dynamic(
  () => import("@/components/common/ServiceSectionHero")
);
const ServiceSectionWhy = dynamic(
  () => import("@/components/common/ServiceSectionWhy")
);
const ServiceSectionBulletpoints = dynamic(
  () => import("@/components/common/ServiceSectionBulletpoints")
);
const ServiceWhyChooseUs = dynamic(
  () => import("@/components/common/ServiceWhyChooseUs")
);
const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ")
);

export const metadata: Metadata = {
  title: "epfo registration for employer",
  description:
    "EPFO Registration Online for Employees made simple. Apply PF Online to stay compliant and manage employee provident fund accounts quickly and securely.",
  keywords: [
    "EPFO registration for employer",
    "Apply PF Online",
    "EPFO Registration Online for Employees",
    "Online PF registration",
    "EPF account registration",
  ],
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={epfoHeroData} />
      <ServiceSectionWhy WhyData={epfoWhyRegisterData} />
      <ServiceSectionBulletpoints listData={epfoWhoCanApplyForRegistrationData} />
      <ServiceSectionBulletpoints listData={epfoDocumentsRequiredForRegistrationData} />
      <ServiceWhyChooseUs WhyChooseUsData={epfoWhyChooseYesToBoss} />
      <ServiceSectionBulletpoints listData={epfoRequiredDetailsData} />
      <ServiceSectionBulletpoints listData={epfoBenefitsofEPFRegistrationData} />
      <ServiceSectionFAQ faqData={epfoFaqData} />
    </div>
  );
};

export default page;
