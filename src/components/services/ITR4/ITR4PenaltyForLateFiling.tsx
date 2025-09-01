import React from "react";

const ITR4PenaltyForLateFiling = () => {
  return (
    <section className="general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        Penalty for Late Filing ITR-4
      </p>

      <table className="mt-10">
        <thead>
          <tr>
            <th className="p-4 px-6 md:px-8 border">Total Income</th>
            <th className="p-4 px-6 md:px-8 border">Late Fee</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-4 px-6 md:px-8 border">Below ₹5 lakh</td>
            <td className="p-4 px-6 md:px-8 border">₹1,000</td>
          </tr>
          <tr>
            <td className="p-4 px-6 md:px-8 border">Above ₹5 lakh</td>
            <td className="p-4 px-6 md:px-8 border">₹5,000</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-5 font-medium text-xl">
        Additional charges: 1% monthly interest on due taxes. Late filing may
        lead to:{" "}
      </p>

      <ul className="list-disc list-inside mt-5 space-y-2 text-lg">
        <li>Loss of refund</li>
        <li>Disallowed loss carry forward</li>
        <li>Legal notices or scrutiny</li>
      </ul>
    </section>
  );
};

export default ITR4PenaltyForLateFiling;
