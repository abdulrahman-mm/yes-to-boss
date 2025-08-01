import {
  ITR1FinanceHelpsTax,
  ITR1Hero,
  ITR1InternalAudit,
  ITR1KeyServices,
  ITR1WhyYouChooseUs,
} from "@/components/services/ITR1";
import React from "react";

const page = () => {
  return (
    <>
      <ITR1Hero />
      <ITR1InternalAudit />
      <ITR1WhyYouChooseUs />
      <ITR1KeyServices />
      <ITR1FinanceHelpsTax />
    </>
  );
};

export default page;
