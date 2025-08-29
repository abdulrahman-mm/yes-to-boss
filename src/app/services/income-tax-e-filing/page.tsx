import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { incomeFaqData, incomeTaxEFilingHeroData, incomeTaxWhyFile } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={incomeTaxEFilingHeroData}/>
    <ServiceSectionWhy WhyData={incomeTaxWhyFile}/>
    <ServiceSectionFAQ faqData={incomeFaqData}/>
    </>
  )
}

export default page