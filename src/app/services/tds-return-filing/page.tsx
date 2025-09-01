import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import React from 'react'
import {tdsFaqData, tdsReturnFilingHeroData,tdsWhyFileTDSReturnsData,tdsPaymentDueDatesData, tdsReturnFilingDueDatesData, tdsReturnFormsAndUsage, tdsPenaltyForTDSNonComplianceData, tdsWhoMustFileTDSReturnsData, tdsDocumentsRequiredData, tdsWhyChooseYestoBoss, tdsThresholdsToRemember} from '@/data'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionTables from '@/components/common/ServiceSectionTables'
import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={tdsReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={tdsWhyFileTDSReturnsData}/>
    <ServiceSectionBulletpoints listData={tdsWhoMustFileTDSReturnsData}/>
    <ServiceSectionBulletpoints listData={tdsDocumentsRequiredData}/>
    <ServiceWhyChooseUs WhyChooseUsData={tdsWhyChooseYestoBoss}/>
    <ServiceSectionTables tableData={tdsPaymentDueDatesData}/>
    <ServiceSectionTables tableData={tdsReturnFilingDueDatesData}/>
    <ServiceSectionTables tableData={tdsReturnFormsAndUsage}/>
    <ServiceSectionTables tableData={tdsPenaltyForTDSNonComplianceData}/>
    <ServiceSectionBulletpoints listData={tdsThresholdsToRemember}/>
    <ServiceSectionFAQ faqData={tdsFaqData}/>

    
    </>
  )
}

export default page