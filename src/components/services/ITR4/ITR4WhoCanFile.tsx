import React from "react";

const ITR4WhoCanFile = () => {
  return (
    <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        {/* {listData.heading} */}
        Who Can File ITR-4 Sugam?
      </p>

      <p className="mt-2 font-medium text-xl">
        Applicable to Resident Individuals, HUFs, and Firms (non-LLPs) with
      </p>

      <ul className="list-disc list-inside mt-5 space-y-2">
        <li className="text-lg"> Income up to ₹50 lakh </li>
        <li className="text-lg">
          {" "}
          Business income under Section 44AD (turnover up to ₹2 crore){" "}
        </li>
        <li className="text-lg">
          Professional income under Section 44ADA (gross receipts up to ₹50
          lakh)
        </li>
        <li className="text-lg">
          Transport income under Section 44AE (own ≤10 goods vehicles)
        </li>
      </ul>

      <p className="mt-2 font-medium text-xl">You may also file if you have:</p>

      <ul className="list-disc list-inside mt-5 space-y-2">
        <li className="text-lg">You may also file if you have:</li>
        <li className="text-lg">Income from one house property</li>
        <li className="text-lg">Income from other sources (like interest)</li>
      </ul>
    </section>
  );
};

export default ITR4WhoCanFile;
