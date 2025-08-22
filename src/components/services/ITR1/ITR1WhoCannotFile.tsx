import React from "react";

const data = [
  "You are an NRI or RNOR (Resident Not Ordinarily Resident)",
  "Your income exceeds ₹50 lakh",
  "You earn from multiple house properties",
  "You have capital gains (short/long-term)",
  "You earn from lottery, gambling, or horse racing ",
  "You have business/professional income",
  "You’re a director in a company",
  "You own unlisted shares",
  "You have foreign income or assets",
  "You claim tax on deferred ESOPs or deductions under Section 194N",
];
const ITR1WhoCannotFile = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Who Cannot File ITR-1?
      </p>

      <p className="mt-2  font-medium text-xl">You are not eligible to file ITR-1 if:</p>

      <ul className="list-disc list-inside mt-5 text-lg">
         {data.map(item=><li key={item}>{item}</li>)}
      </ul>

      <p className="mt-2 text-lg">
        {" "}
        You can also file if you club income with a spouse or minor, as long as
        it falls within eligible limits.
      </p>
    </section>
  );
};

export default ITR1WhoCannotFile;
