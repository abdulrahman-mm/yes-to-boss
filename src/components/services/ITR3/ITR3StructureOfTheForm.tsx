import React from "react";

const ITR3StructureOfTheForm = () => {
  return (
    <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Structure of the ITR-3 Form
      </p>

      <p className="mt-5 font-medium text-xl">
        ITR-3 is structured into parts and schedules:
      </p>

      <ol className="list-disc list-inside space-y-2 text-lg">
        <li> Part A – Personal details and filing status</li>
        <li>Part B-TI – Computation of Total Income</li>
        <li>Part B-TTI – Computation of Tax Liability</li>
        <li>Verification Section – Digital or physical verification</li>
      </ol>

      <p className="mt-5 font-medium text-xl">Schedules Include: </p>

      <ol className="list-disc list-inside  space-y-2 text-lg">
        <li> Business or Profession Income (Schedule BP)</li>
        <li>Capital Gains (Schedule CG)</li>
        <li>Foreign Assets (Schedule FA)</li>
        <li>Deductions (Schedule VI-A)</li>
        <li>TDS/TCS, Advance Tax</li>
        <li>Assets and Liabilities</li>
      </ol>
    </section>
  );
};

export default ITR3StructureOfTheForm;
