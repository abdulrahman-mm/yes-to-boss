import React from "react";

const ITR1PenaltyForLateFiling = () => {
  return (
     <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Penalty for Late Filing ITR-1
      </p>

      <table className="mt-5 border rounded-2xl text-lg">
          <thead className="border rounded-2xl">
               <tr>
                    <th className="border p-2">Total Income</th>
                    <th className="border p-2">Late Filing Fee</th>
               </tr>
          </thead>
          <thead className="rounded-2xl">
               <tr>
                    <td className="border p-2">Below ₹5 lakh</td>
                    <td className="border p-2">₹1,000</td>
               </tr>
               <tr>
                    <td className="border p-2">Above ₹5 lakh</td>
                    <td className="border p-2">₹5,000</td>
               </tr>
          </thead>
      </table>

      <p className="mt-5 font-medium text-xl">Additionally, 1% monthly interest is charged on unpaid taxes. You may also:</p>

      <ol className="list-disc list-inside text-lg">
          <li>Lose the right to carry forward losses</li>
          <li>Face scrutiny or prosecution in case of repeated non-filing</li>
          <li>Lose eligibility for refunds</li>
      </ol>
    </section>
  );
};

export default ITR1PenaltyForLateFiling;
