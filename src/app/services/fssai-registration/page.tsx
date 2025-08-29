import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
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
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceSectionTables from "@/components/common/ServiceSectionTables";
import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import FSSAIRegistrationRenewal from "@/components/services/FSSAI Registration/FSSAIRegistrationRenewal";

const page = () => {
  return (
    <>
      <ServiceSectionHero heroSectionData={fssaiHeroData} />
      <ServiceSectionWhy WhyData={fssaiWhyRegisterForFssaiLicense} />
      <FSSAIRegistrationRenewal/>
      <ServiceSectionBulletpoints
        listData={fssaiConsequencesOfNotRegisteringData}
      />
      <ServiceSectionBulletpoints
        listData={fssaiDocumentsRequiredForFssaiReistrationData}
      />
      <ServiceSectionBulletpoints
        listData={fssaiWhoNeedFssaiRegistrationData}
      />
      <ServiceSectionBulletpoints
        listData={fssaiWhyChooseYesToBossForFssaiRegistrationData}
      />
      <ServiceSectionTables tableData={fssaiTableData} />
      <ServiceSectionFAQ faqData={fssaiRegistrationFaqData} />
    </>
  );
};

export default page;
