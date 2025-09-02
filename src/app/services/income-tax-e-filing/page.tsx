import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
import ITREligibilityFiling from "@/components/services/Income tax e-filing/ITREligibilityFiling";
import ITRNewTaxRegimeFY2024_25 from "@/components/services/Income tax e-filing/ITRNewTaxRegimeFY2024_25";
import ITRResidentIndividualsAged60_80Years from "@/components/services/Income tax e-filing/ITRResidentIndividualsAged60_80Years";
import ITRResidentIndividualsAgedMoreThan80 from "@/components/services/Income tax e-filing/ITRResidentIndividualsAgedMoreThan80";
import {
  incomeDocumentsRequiredData,
  incomeDueDatesForITRFilingData,
  incomeFaqData,
  incomeMandatoryITRFilingData,
  incomePenaltiesForNotFilingData,
  incomePostFilingData,
  incomeTaxEFilingHeroData,
  incomeTaxWhoNeedsToFile,
  incomeTaxWhyFile,
  incomeTypesOfITRFilingsData,
  incomeWhyChooseUs,
} from "@/data";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={incomeTaxEFilingHeroData} />
      <ServiceSectionWhy WhyData={incomeTaxWhyFile} />
      <ServiceSectionBulletpoints listData={incomeTaxWhoNeedsToFile} />
      <ServiceSectionBulletpoints listData={incomeMandatoryITRFilingData} />
      <ServiceSectionBulletpoints listData={incomeDocumentsRequiredData} />
      <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
      <ServiceSectionBulletpoints listData={incomeDueDatesForITRFilingData} />
      <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData} />
      <ServiceSectionBulletpoints listData={incomePostFilingData} />
      <ServiceSectionBulletpoints listData={incomePenaltiesForNotFilingData} />
      <ServiceWhyChooseUs WhyChooseUsData={incomeWhyChooseUs} />
      <ITREligibilityFiling />
      <ITRResidentIndividualsAged60_80Years/>
      <ITRResidentIndividualsAgedMoreThan80/>
      <ITRNewTaxRegimeFY2024_25/>
      <ServiceSectionFAQ faqData={incomeFaqData} />
    </div>
  );
};

export default page;
