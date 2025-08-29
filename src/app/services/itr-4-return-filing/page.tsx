import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { ITR4FaqData, ITR4ReturnFilingHeroData, ITR4WhyFileData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={ITR4ReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={ITR4WhyFileData}/>
    <ServiceSectionFAQ faqData={ITR4FaqData}/>
    </>
  )
}

export default page