import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
import ITR3PenaltyForLateFiling from "@/components/services/ITR3/ITR3PenaltyForLateFiling";
import ITR3StructureOfTheForm from "@/components/services/ITR3/ITR3StructureOfTheForm";
import {
  ITR3DocumentsRequiredData,
  ITR3FaqData,
  ITR3FilingDueDatesData,
  ITR3IncomeNotAllowedData,
  ITR3ReturnFilingHeroData,
  ITR3WhatHappensAfterFilingData,
  ITR3WhoCanFileData,
  ITR3WhoCannotFileData,
  ITR3WhyFileData,
} from "@/data";
import { ITR3WhyChooseUsData } from "@/data/ITR3ReturnFiling/ITR3WhyChooseUsData";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={ITR3ReturnFilingHeroData} />
      <ServiceSectionWhy WhyData={ITR3WhyFileData} />
      <ServiceSectionBulletpoints listData={ITR3WhoCanFileData} />
      <ServiceSectionBulletpoints listData={ITR3WhoCannotFileData} />
      <ServiceSectionBulletpoints listData={ITR3DocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={ITR3FilingDueDatesData} />

      <ServiceSectionBulletpoints listData={ITR3IncomeNotAllowedData} />
      <ServiceWhyChooseUs WhyChooseUsData={ITR3WhyChooseUsData} />
      <ServiceSectionBulletpoints listData={ITR3WhatHappensAfterFilingData} />

      <ITR3StructureOfTheForm/>
      <ITR3PenaltyForLateFiling/>
      <ServiceSectionFAQ faqData={ITR3FaqData} />
    </div>
  );
};

export default page;
