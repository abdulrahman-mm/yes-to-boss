import React from "react";

const data = [
  "Business or Profession",
  "Capital Gains (STCG/LTCG)",
  "More than one house property",
  "Foreign assets or income",
  "Lottery or betting",
  "Income taxed under special rates (115BBDA, 115BBE)",
];

const ITR1IncomeNotAllowed = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Income Not Allowed in ITR-1
      </p>

      <p className="mt-2 font-medium text-xl">Avoid using ITR-1 if you earn from:</p>

      <ul className="list-disc list-inside mt-5 text-lg">
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ITR1IncomeNotAllowed;
