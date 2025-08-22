import React from "react";

const ITR1StructureOfITR1 = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Structure of the ITR-1 Form
      </p>

      <p className="mt-5 font-medium text-xl">
        ITR-1 (Sahaj) consists of five parts and two schedules:
      </p>

      <ul className="mt-3 list-disc list-inside text-lg">
        <li>
          {" "}
          <span className="font-semibold">Part A:</span> General Info (PAN,
          Aadhaar, contact, etc.)
        </li>
        <li>
          <span className="font-semibold">Part B</span>: Gross Total Income
          (salary, house property, other sources)
        </li>
        <li>
          {" "}
          <span className="font-semibold"> Part C </span>: Deductions & Taxable
          Income (80C, 80D, 80G, etc.)
        </li>
        <li>
          <span className="font-semibold"> Part D </span>: Tax Calculation &
          Bank Details
        </li>
        <li>
          <span className="font-semibold"> Part E </span>: Additional
          Disclosures
        </li>
      </ul>

      <p className="mt-5 font-medium text-xl">Schedules:</p>

      <ul className="mt-3 list-disc list-inside text-lg">
        <li>
          {" "}
          <span className="font-semibold">Schedule IT:</span> Advance
          tax/Self-assessment tax paid
        </li>
        <li>
          <span className="font-semibold">Schedule TDS/TCS</span>: TDS/TCS
          details from Form 26AS
        </li>
      </ul>
    </section>
  );
};

export default ITR1StructureOfITR1;
