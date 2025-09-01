import React from "react";

const ITR2StructureOfTheITR2Data = () => {
  return (
    <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Structure of the ITR-2 Form
      </p>

      <p className="mt-5 font-medium text-xl">
        ITR-2 is divided into major parts and multiple schedules:
      </p>

      <ol className="list-disc list-inside space-y-2 text-lg">
        <li>Part A: Personal details like Name, PAN, Aadhaar, etc.</li>
        <li>
          Part B-TI: Computation of Total Income (salary, capital gains, etc.)
        </li>
        <li>Part B-TTI: Computation of Tax Liability</li>
      </ol>

      <p className="mt-5 font-medium text-xl">Verification Section </p>
      <p className="mt-5 font-medium text-xl">Schedules Include: </p>

      <ol className="list-disc list-inside  space-y-2 text-lg">
        <li> Capital Gains (Schedule CG)</li>
        <li>Foreign Assets (Schedule FA)</li>
        <li>Deductions (80C to 80U)</li>
        <li>TDS/TCS, Advance Tax, and Relief Claims</li>
      </ol>
    </section>
  );
};

export default ITR2StructureOfTheITR2Data;
