import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { soleProprietorshipFaqData, soleProprietorshipHeroData, soleProprietorshipWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={soleProprietorshipHeroData}/>
    <ServiceSectionWhy WhyData={soleProprietorshipWhyRegisterData}/>
    <ServiceSectionFAQ faqData={soleProprietorshipFaqData}/>

    </>
  )
}

export default page