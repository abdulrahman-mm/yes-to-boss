import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { ITR3FaqData, ITR3ReturnFilingHeroData, ITR3WhyFileData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={ITR3ReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={ITR3WhyFileData}/>
    <ServiceSectionFAQ faqData={ITR3FaqData}/>
    </>
  )
}

export default page