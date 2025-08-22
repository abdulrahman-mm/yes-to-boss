import React from "react";

const ITR1WhoCanFile = () => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16  ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Who Can File ITR-1 Sahaj?
      </p>

      <p className="mt-2 font-medium text-xl">
        ITR-1 is applicable only to resident individuals whose total income is
        up to ₹50 lakh and includes:
      </p>

      <ul className="list-disc list-inside mt-5">
        <li className="text-lg">Income from Salary or Pension </li>
        <li  className="text-lg">Income from a Single House Property</li>
        <li className="text-lg">
          Other Sources (e.g., interest from savings accounts, fixed deposits)
        </li>
        <li className="text-lg">Agricultural income up to ₹5,000</li>
      </ul>

      <p className="mt-2 text-lg">

        You can also file if you club income with a spouse or minor, as long as
        it falls within eligible limits.
      </p>
    </section>
  );
};

export default ITR1WhoCanFile;
