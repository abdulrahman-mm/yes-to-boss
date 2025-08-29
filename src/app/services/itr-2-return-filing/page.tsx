import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { ITR2FaqData, ITR2ReturnFilingHeroData, ITR2WhyFileData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={ITR2ReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={ITR2WhyFileData}/>

    <ServiceSectionFAQ faqData={ITR2FaqData}/>
    </>
  )
}

export default page