import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import React from 'react'
import {fssaiRegistrationFaqData,fssaiHeroData,fssaiWhyRegisterForFssaiLicense,fssaiTableData} from '@/data'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceSectionTables from '@/components/common/ServiceSectionTables'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={fssaiHeroData}/>
    <ServiceSectionWhy WhyData={fssaiWhyRegisterForFssaiLicense} />

    <ServiceSectionTables tableData={fssaiTableData}/>
    <ServiceSectionFAQ faqData={fssaiRegistrationFaqData}/>

    </>
  )
}

export default page;