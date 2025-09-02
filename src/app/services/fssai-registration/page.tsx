"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  fssaiRegistrationFaqData,
  fssaiHeroData,
  fssaiWhyRegisterForFssaiLicense,
  fssaiTableData,
  fssaiConsequencesOfNotRegisteringData,
  fssaiDocumentsRequiredForFssaiReistrationData,
  fssaiWhoNeedFssaiRegistrationData,
  fssaiWhyChooseYesToBossForFssaiRegistrationData,
} from "@/data";

// Dynamic imports
const ServiceSectionFAQ = dynamic(() => import("@/components/common/ServiceSectionFAQ"));
const ServiceSectionHero = dynamic(() => import("@/components/common/ServiceSectionHero"));
const ServiceSectionWhy = dynamic(() => import("@/components/common/ServiceSectionWhy"));
const ServiceSectionTables = dynamic(() => import("@/components/common/ServiceSectionTables"));
const ServiceSectionBulletpoints = dynamic(() => import("@/components/common/ServiceSectionBulletpoints"));
const FSSAIRegistrationRenewal = dynamic(() => import("@/components/services/FSSAI Registration/FSSAIRegistrationRenewal"));
const ServiceWhyChooseUs = dynamic(() => import("@/components/common/ServiceWhyChooseUs"));

const Page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={fssaiHeroData} />
      <ServiceSectionWhy WhyData={fssaiWhyRegisterForFssaiLicense} />
      <ServiceSectionBulletpoints listData={fssaiWhoNeedFssaiRegistrationData} />
      <ServiceSectionTables tableData={fssaiTableData} />
      <ServiceSectionBulletpoints listData={fssaiDocumentsRequiredForFssaiReistrationData} />
      <FSSAIRegistrationRenewal />
      <ServiceSectionBulletpoints listData={fssaiConsequencesOfNotRegisteringData} />
      <ServiceWhyChooseUs WhyChooseUsData={fssaiWhyChooseYesToBossForFssaiRegistrationData} />
      <ServiceSectionFAQ faqData={fssaiRegistrationFaqData} />
    </div>
  );
};

export default Page;
