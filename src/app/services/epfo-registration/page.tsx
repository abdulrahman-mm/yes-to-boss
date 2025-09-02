import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'
import { epfoBenefitsofEPFRegistrationData, epfoDocumentsRequiredForRegistrationData, epfoFaqData, epfoHeroData, epfoRequiredDetailsData, epfoWhoCanApplyForRegistrationData, epfoWhyChooseYesToBoss, epfoWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden">
      <ServiceSectionHero heroSectionData={epfoHeroData} />
      <ServiceSectionWhy WhyData={epfoWhyRegisterData} />
      <ServiceSectionBulletpoints listData={epfoWhoCanApplyForRegistrationData}/>
      <ServiceSectionBulletpoints listData={epfoDocumentsRequiredForRegistrationData}/>
      <ServiceWhyChooseUs WhyChooseUsData={epfoWhyChooseYesToBoss}/>

      <ServiceSectionBulletpoints listData={epfoRequiredDetailsData}/>
      <ServiceSectionBulletpoints listData={epfoBenefitsofEPFRegistrationData}/>
      <ServiceSectionFAQ faqData={epfoFaqData} />

    </div>
  )
}

export default page