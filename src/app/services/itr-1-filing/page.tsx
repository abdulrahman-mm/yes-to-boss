"use client";

import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ITR1FilingDueDate from "@/components/services/ITR1/ITR1FilingDueDate";
import ITR1IncomeNotAllowed from "@/components/services/ITR1/ITR1IncomeNotAllowed";
import ITR1PenaltyForLateFiling from "@/components/services/ITR1/ITR1PenaltyForLateFiling";
import ITR1StructureOfITR1 from "@/components/services/ITR1/ITR1StructureOfITR1";
import ITR1WhoCanFile from "@/components/services/ITR1/ITR1WhoCanFile";
import ITR1WhoCannotFile from "@/components/services/ITR1/ITR1WhoCannotFile";
import dynamic from "next/dynamic";
import React from "react";
import {itr1FaqData,itr1HeroData, itr1WhyFileData} from '@/data'
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";

// Dynamic imports for components
// const ITR1Hero = dynamic(() => import("@/components/services/ITR1/ITR1Hero"), {
//   ssr: false,
//   loading: () => <p>Loading Hero...</p>,
// });



// const ITR1FinanceServices = dynamic(
//   () => import("@/components/services/ITR1/ITR1FinanceServices"),
//   { ssr: false, loading: () => <p>Loading Finance Services...</p> }
// );

// const ITR1WhyYouChooseUs = dynamic(
//   () => import("@/components/services/ITR1/ITR1WhyYouChooseUs"),
//   { ssr: false, loading: () => <p>Loading Why Choose Us...</p> }
// );

// const ITR1KeyServices = dynamic(
//   () => import("@/components/services/ITR1/ITR1KeyServices"),
//   { ssr: false, loading: () => <p>Loading Key Services...</p> }
// );

// const ITR1FinanceHelpsTax = dynamic(
//   () => import("@/components/services/ITR1/ITR1FinanceHelpsTax"),
//   { ssr: false, loading: () => <p>Loading Finance & Tax...</p> }
// );

// const ITR1WhoMustFileGSTReturns = dynamic(
//   () => import("@/components/services/ITR1/ITR1WhoMustFileGSTReturns"),
//   { ssr: false, loading: () => <p>Loading GST Returns Info...</p> }
// );

const ITR1DocumentsRequired = dynamic(
  () => import("@/components/services/ITR1/ITR1DocumentsRequired"),
  { ssr: false, loading: () => <p>Loading Documents Required...</p> }
);

// const ITR1TypesOfGstReturns = dynamic(
//   () => import("@/components/services/ITR1/ITR1TypesOfGstReturns"),
//   { ssr: false, loading: () => <p>Loading GST Return Types...</p> }
// );

// const ITR1WhatYouGet = dynamic(
//   () => import("@/components/services/ITR1/ITR1WhatYouGet"),
//   { ssr: false, loading: () => <p>Loading Benefits...</p> }
// );

// const ITR1FAQ = dynamic(() => import("@/components/services/ITR1/ITR1FAQ"), {
//   ssr: false,
//   loading: () => <p>Loading FAQ...</p>,
// });





const Page = () => {
  return (
    <>
      <ServiceSectionHero heroSectionData={itr1HeroData}/>
      <ServiceSectionWhy WhyData={itr1WhyFileData}/>

      
      <ITR1WhoCanFile />
      <ITR1WhoCannotFile />
      <ITR1FilingDueDate />
      <ITR1IncomeNotAllowed />
      <ITR1DocumentsRequired />
      <ITR1StructureOfITR1/>
      <ITR1PenaltyForLateFiling/>

      {/* <ITR1FinanceServices /> */}
      {/* <ITR1WhyYouChooseUs /> */}
      {/* <ITR1KeyServices /> */}
      {/* <ITR1FinanceHelpsTax /> */}
      {/* <ITR1WhoMustFileGSTReturns /> */}
      {/* <ITR1TypesOfGstReturns /> */}
      {/* <ITR1WhatYouGet /> */}
      {/* <ITR1FAQ /> */}

      <ServiceSectionFAQ  faqData={itr1FaqData}/>
    </>
  );
};

export default Page;
