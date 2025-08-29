// import ServiceDocumentsRequired from "@/components/common/ServiceDocumentsRequired";
// import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import {
  dinEKycFilingHeroData,
  dinWhyFileDirKyc,
  dinFaqData,
  // dinWhyChooseUsData,
} from "@/data";

const page = () => {
  return (
    <>
      <ServiceSectionHero heroSectionData={dinEKycFilingHeroData} />
      <ServiceSectionWhy WhyData={dinWhyFileDirKyc} />

      {/* <ServiceDocumentsRequired /> */}
      {/* <ServiceSectionBulletpoints listData={dinWhyChooseUsData} /> */}
      <ServiceSectionFAQ faqData={dinFaqData} />
    </>
  );
};

export default page;
