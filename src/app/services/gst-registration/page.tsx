import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { gstHeroData, gstRegistrationFaqData, gstRegistrationHeroData, gstRegistrationWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={gstRegistrationHeroData}/>
    <ServiceSectionWhy WhyData={gstRegistrationWhyRegisterData}/>
    <ServiceSectionFAQ faqData={gstRegistrationFaqData}/>
    </>
  )
}

export default page