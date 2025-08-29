import React from "react";
import { serviceListTypes } from "@/types";

type ServiceSectionListProps = {
  listData: serviceListTypes;
};

const ServiceSectionBulletpoints: React.FC<ServiceSectionListProps> = ({
  listData,
}) => {
  return (
    <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16  ">
      <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
        {listData.heading}
      </p>

      {listData.bulletPointsTitle && (
        <p className="mt-2 font-medium text-xl">{listData.bulletPointsTitle}</p>
      )}

      <ul className="list-disc list-inside mt-5">
        {listData.bulletPoints?.map((item, index) => (
          <li key={index} className="text-lg">
            {item}{" "}
          </li>
        ))}
      </ul>

      {listData.bottomText && (
        <p className="mt-2 text-lg">{listData.bottomText}</p>
      )}
    </section>
  );
};

export default ServiceSectionBulletpoints;
