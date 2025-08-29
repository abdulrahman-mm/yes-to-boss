import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionTables from '@/components/common/ServiceSectionTables'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import { udayamFaqData, udayamHeroData, udayamTableData, udayamWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={udayamHeroData}/>
    <ServiceSectionWhy WhyData={udayamWhyRegisterData}/>

    <ServiceSectionTables tableData={udayamTableData}/>

    <ServiceSectionFAQ faqData={udayamFaqData} />
    </>
  )
}

export default page