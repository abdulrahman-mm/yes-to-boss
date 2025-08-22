import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import GSTDocumentRequiredForFiling from "@/components/services/GST return filing/GSTDocumentRequiredForFiling";
import GSTFaq from "@/components/services/GST return filing/GSTFaq";
import GSTPenaltyForLateGst from "@/components/services/GST return filing/GSTPenaltyForLateGst";
import GSTReturnFilingHero from "@/components/services/GST return filing/GSTReturnFilingHero";
import GSTTypesOfGSTReturns from "@/components/services/GST return filing/GSTTypesOfGSTReturns";
import GSTWhatHappenIfIFileGstLate from "@/components/services/GST return filing/GSTWhatHappenIfIFileGstLate";
import GSTWhatYouGet from "@/components/services/GST return filing/GSTWhatYouGet";
import GSTWhoMustFileGSTReturns from "@/components/services/GST return filing/GSTWhoMustFileGSTReturns";
import GSTWhyFIleGSTReturns from "@/components/services/GST return filing/GSTWhyFIleGSTReturns";
import React from "react";
import { gstFaqData, gstHeroData } from "@/data";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";

const page = () => {
  return (
    <>
      {/* <GSTReturnFilingHero /> */}
      <ServiceSectionHero heroSectionData={gstHeroData} />
      <GSTWhyFIleGSTReturns />
      <GSTWhoMustFileGSTReturns />
      <GSTDocumentRequiredForFiling />
      <GSTTypesOfGSTReturns />
      <GSTWhatYouGet />
      <GSTPenaltyForLateGst />
      <GSTWhatHappenIfIFileGstLate />
      {/* <GSTFaq/> */}
      <ServiceSectionFAQ faqData={gstFaqData} />
    </>
  );
};

export default page;
