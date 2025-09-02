import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
import ITR2PenaltyForLateFiling from "@/components/services/ITR2/ITR2PenaltyForLateFiling";
import ITR2StructureOfTheITR2Data from "@/components/services/ITR2/ITR2StructureOfTheITR2Data";
import {
  ITR2DocumentsRequiredData,
  ITR2FaqData,
  ITR2FilingDueDatesData,
  ITR2ReturnFilingHeroData,
  ITR2WhatHappensAfterFilingData,
  ITR2WhoCanFileData,
  ITR2WhoCannotFileData,
  ITR2WhyChooseYestoBossData,
  ITR2WhyFileData,
} from "@/data";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={ITR2ReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={ITR2WhyFileData} />
      <ServiceSectionBulletpoints listData={ITR2WhoCanFileData} />
      <ServiceSectionBulletpoints listData={ITR2WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={ITR2DocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={ITR2FilingDueDatesData} />
      <ServiceSectionBulletpoints listData={ITR2WhatHappensAfterFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={ITR2WhyChooseYestoBossData} />
      <ServiceSectionBulletpoints listData={ITR2WhatHappensAfterFilingData} />
      <ITR2StructureOfTheITR2Data />
      <ITR2PenaltyForLateFiling />
      <ServiceSectionFAQ faqData={ITR2FaqData} />
    </div>
  );
};

export default page;
