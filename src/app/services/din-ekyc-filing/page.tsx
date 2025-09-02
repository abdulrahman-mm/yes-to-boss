import ServiceSectionBulletpoints from "@/components/common/ServiceSectionBulletpoints";
import ServiceSectionFAQ from "@/components/common/ServiceSectionFAQ";
import ServiceSectionHero from "@/components/common/ServiceSectionHero";
import ServiceSectionWhy from "@/components/common/ServiceSectionWhy";
import ServiceWhyChooseUs from "@/components/common/ServiceWhyChooseUs";
import DinTypesOfDIR3KYCForms from "@/components/services/Din ekyc filing/DinTypesOfDIR3KYCForms";
import DinWhoShouldFileDIR3KYC from "@/components/services/Din ekyc filing/DinWhoShouldFileDIR3KYC";
import { dinEKycFilingHeroData, dinWhyFileDirKyc, dinFaqData, dinWhyChooseUsData } from "@/data";
import { dinDocumentsRequiredForFilingData } from "@/data/dinEkycFiling/dinDocumentsRequiredForFilingData";
import { dinEKycDueDateData } from "@/data/dinEkycFiling/dinEKycDueDateData";
import { dinEKycPenaltyForNonFiling } from "@/data/dinEkycFiling/dinEKycPenaltyForNonFiling";

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={dinEKycFilingHeroData} />
      <ServiceSectionWhy WhyData={dinWhyFileDirKyc} />
      <DinWhoShouldFileDIR3KYC/>
      <DinTypesOfDIR3KYCForms/>
      <ServiceSectionBulletpoints listData={dinDocumentsRequiredForFilingData}/>
      <ServiceWhyChooseUs WhyChooseUsData={dinWhyChooseUsData}/>
      <ServiceSectionBulletpoints listData={dinEKycDueDateData}/>
      <ServiceSectionBulletpoints listData={dinEKycPenaltyForNonFiling}/>
      <ServiceSectionFAQ faqData={dinFaqData} />
    </div>
  );
};

export default page;
