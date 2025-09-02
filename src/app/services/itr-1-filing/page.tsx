// "use client";
// import ITR1PenaltyForLateFiling from "@/components/services/ITR1/ITR1PenaltyForLateFiling";
// import ITR1StructureOfITR1 from "@/components/services/ITR1/ITR1StructureOfITR1";
// import dynamic from "next/dynamic";
// import React from "react";
// import {
//   itr1FaqData,
//   itr1FilingDueDateData,
//   itr1HeroData,
//   itr1IncomeNotAllowedData,
//   itr1WhatHappensAfterFilingData,
//   itr1WhoCanFileData,
//   itr1WhoCannotFileData,
//   itr1WhyChooseUs,
//   itr1WhyFileData,
// } from "@/data";
// import ServiceSectionHero from "@/components/common/ServiceSectionHero";
// import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
// import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
// import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";


// const ITR1DocumentsRequired = dynamic(
//   () => import("@/components/services/ITR1/ITR1DocumentsRequired"),
//   { ssr: false, loading: () => <p>Loading Documents Required...</p> }
// );

// const Page = () => {
//   return (
//     <>
//       <ServiceSectionHero heroSectionData={itr1HeroData} />
//       <ServiceSectionWhy WhyData={itr1WhyFileData} />
//       <ServiceSectionBulletpoints listData={itr1WhoCanFileData} />
//       <ServiceSectionBulletpoints listData={itr1WhoCannotFileData} />
//       <ServiceSectionBulletpoints listData={itr1FilingDueDateData} />
//       <ServiceSectionBulletpoints listData={itr1IncomeNotAllowedData} />
//       <ServiceSectionBulletpoints listData={itr1WhatHappensAfterFilingData} />
//       <ServiceWhyChooseUs WhyChooseUsData={itr1WhyChooseUs} />
//       <ITR1DocumentsRequired />
//       <ITR1StructureOfITR1 />
//       <ITR1PenaltyForLateFiling />
//       <ServiceSectionFAQ faqData={itr1FaqData} />
//     </>
//   );
// };

// export default Page;









"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  itr1FaqData,
  itr1FilingDueDateData,
  itr1HeroData,
  itr1IncomeNotAllowedData,
  itr1WhatHappensAfterFilingData,
  itr1WhoCanFileData,
  itr1WhoCannotFileData,
  itr1WhyChooseUs,
  itr1WhyFileData,
} from "@/data";

// ✅ Dynamic imports
const ServiceSectionHero = dynamic(
  () => import("@/components/common/ServiceSectionHero"),
  { ssr: false, loading: () => <p>Loading Hero...</p> }
);

const ServiceSectionWhy = dynamic(
  () => import("@/components/common/ServiceSectionWhy"),
  { ssr: false, loading: () => <p>Loading Why Section...</p> }
);

const ServiceSectionBulletpoints = dynamic(
  () => import("@/components/common/ServiceSectionBulletpoints"),
  { ssr: false, loading: () => <p>Loading Bulletpoints...</p> }
);

const ServiceWhyChooseUs = dynamic(
  () => import("@/components/common/ServiceWhyChooseUs"),
  { ssr: false, loading: () => <p>Loading Why Choose Us...</p> }
);

const ServiceSectionFAQ = dynamic(
  () => import("@/components/common/ServiceSectionFAQ"),
  { ssr: false, loading: () => <p>Loading FAQ...</p> }
);

const ITR1DocumentsRequired = dynamic(
  () => import("@/components/services/ITR1/ITR1DocumentsRequired"),
  { ssr: false, loading: () => <p>Loading Documents Required...</p> }
);

const ITR1StructureOfITR1 = dynamic(
  () => import("@/components/services/ITR1/ITR1StructureOfITR1"),
  { ssr: false, loading: () => <p>Loading ITR1 Structure...</p> }
);

const ITR1PenaltyForLateFiling = dynamic(
  () => import("@/components/services/ITR1/ITR1PenaltyForLateFiling"),
  { ssr: false, loading: () => <p>Loading Penalty Info...</p> }
);

const Page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={itr1HeroData} />
      <ServiceSectionWhy WhyData={itr1WhyFileData} />
      <ServiceSectionBulletpoints listData={itr1WhoCanFileData} />
      <ServiceSectionBulletpoints listData={itr1WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={itr1FilingDueDateData} />
      <ServiceSectionBulletpoints listData={itr1IncomeNotAllowedData} />
      <ServiceSectionBulletpoints listData={itr1WhatHappensAfterFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={itr1WhyChooseUs} />
      <ITR1DocumentsRequired />
      <ITR1StructureOfITR1 />
      <ITR1PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={itr1FaqData} />
    </div>
  );
};

export default Page;
