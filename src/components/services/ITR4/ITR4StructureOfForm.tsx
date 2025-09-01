import React from "react";

const ITR4StructureOfForm = () => {
  return (
    <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Structure of ITR-4 Form
      </p>

      <ol className="list-disc list-inside mt-5 space-y-2 text-lg">
        <li>Part A: General Information (PAN, address, contact)</li>
        <li>
          Part B: Gross Total Income (salary, business, house property, others)
        </li>
        <li>Part C: Deductions (80C, 80D, 80E, etc.) & Taxable Income</li>
        <li>
          Part D: Tax Computation (tax, surcharge, cess, advance tax, refunds)
        </li>
      </ol>

      <p className="mt-5 font-medium text-xl">
        Schedules:
      </p>

      <ol className="list-disc list-inside  space-y-2 text-lg">
        <li>Schedule IT: Advance/self-assessment tax</li>
        <li>Schedule TDS/TCS: TDS on salary & other income</li>
        <li>Schedule 44AD/44ADA/44AE: Details under presumptive schemes</li>
      </ol>

      <p className="mt-5 font-medium text-xl">
        Annexure-less Filing
      </p>

      <p className="text-lg">No documents required to be attached. Keep all proofs handy</p>
    </section>
  );
};

export default ITR4StructureOfForm;
