import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { epfoFaqData, epfoHeroData, epfoWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
      <ServiceSectionHero heroSectionData={epfoHeroData} />
      <ServiceSectionWhy WhyData={epfoWhyRegisterData} />
      <ServiceSectionFAQ faqData={epfoFaqData} />

    </>
  )
}

export default page