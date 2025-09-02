import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
import {
  GSTAfterGSTRegistrationData,
  GSTCertificateData,
  GSTDocumentsRequiredData,
  GSTPenaltyForNotRegisteringData,
  gstRegistrationFaqData,
  gstRegistrationHeroData,
  gstRegistrationWhyRegisterData,
  GSTTypesOfGSTData,
  GSTWhoNeedsToRegisterData,
  GSTWhyChooseUs,
} from "@/data";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={gstRegistrationHeroData} />
      <ServiceSectionWhy WhyData={gstRegistrationWhyRegisterData} />
      <ServiceSectionBulletpoints listData={GSTWhoNeedsToRegisterData} />
      <ServiceSectionBulletpoints listData={GSTDocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={GSTTypesOfGSTData} />
      <ServiceWhyChooseUs WhyChooseUsData={GSTWhyChooseUs} />

      <ServiceSectionBulletpoints listData={GSTAfterGSTRegistrationData} />
      <ServiceSectionBulletpoints listData={GSTPenaltyForNotRegisteringData} />

      <ServiceSectionBulletpoints listData={GSTCertificateData} />
      <ServiceSectionBulletpoints listData={GSTWhyChooseUs} />
      <ServiceSectionFAQ faqData={gstRegistrationFaqData} />
    </div>
  );
};

export default page;
