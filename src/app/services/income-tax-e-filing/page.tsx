import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'
import { incomeDocumentsRequiredData, incomeDueDatesForITRFilingData, incomeFaqData, incomeMandatoryITRFilingData, incomePenaltiesForNotFilingData, incomePostFilingData, incomeTaxEFilingHeroData, incomeTaxWhoNeedsToFile, incomeTaxWhyFile, incomeTypesOfITRFilingsData, incomeWhyChooseUs } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={incomeTaxEFilingHeroData}/>
    <ServiceSectionWhy WhyData={incomeTaxWhyFile}/>

    <ServiceSectionBulletpoints listData={incomeTaxWhoNeedsToFile}/>
    <ServiceSectionBulletpoints listData={incomeMandatoryITRFilingData}/>

    <ServiceSectionBulletpoints listData={incomeDocumentsRequiredData}/>
    <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData}/>

    <ServiceSectionBulletpoints listData={incomeDueDatesForITRFilingData}/>
    <ServiceSectionBulletpoints listData={incomeTypesOfITRFilingsData}/>
    <ServiceSectionBulletpoints listData={incomePostFilingData}/>
    <ServiceSectionBulletpoints listData={incomePenaltiesForNotFilingData}/>

    <ServiceWhyChooseUs WhyChooseUsData={incomeWhyChooseUs}/>
    <ServiceSectionFAQ faqData={incomeFaqData}/>
    </>
  )
}

export default page