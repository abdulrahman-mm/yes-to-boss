import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import GSTDocumentRequiredForFiling from "@/components/services/GST return filing/GSTDocumentRequiredForFiling";
import GSTPenaltyForLateGst from "@/components/services/GST return filing/GSTPenaltyForLateGst";
import GSTWhatHappenIfIFileGstLate from "@/components/services/GST return filing/GSTWhatHappenIfIFileGstLate";
import GSTWhatYouGet from "@/components/services/GST return filing/GSTWhatYouGet";
import GSTWhoMustFileGSTReturns from "@/components/services/GST return filing/GSTWhoMustFileGSTReturns";
import React from "react";
import { gstFaqData, gstHeroData, gstReturnFilingTableData, gstWhyFile } from "@/data";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceSectionTables from "@/components/common/ServiceSectionTables";

const page = () => {
  return (
    <>
      <ServiceSectionHero heroSectionData={gstHeroData} />
      <ServiceSectionWhy WhyData={gstWhyFile} />
      <GSTWhoMustFileGSTReturns />
      <GSTDocumentRequiredForFiling />
      <ServiceSectionTables tableData={gstReturnFilingTableData}/>
      <GSTWhatYouGet />
      <GSTPenaltyForLateGst />
      <GSTWhatHappenIfIFileGstLate />
      <ServiceSectionFAQ faqData={gstFaqData} />
    </>
  );
};

export default page;
