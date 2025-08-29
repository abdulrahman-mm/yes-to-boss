import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import React from 'react'
import {tdsFaqData, tdsReturnFilingHeroData,tdsWhyFileTDSReturnsData,tdsPaymentDueDatesData, tdsReturnFilingDueDatesData, tdsReturnFormsAndUsage, tdsPenaltyForTDSNonComplianceData} from '@/data'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionTables from '@/components/common/ServiceSectionTables'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={tdsReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={tdsWhyFileTDSReturnsData}/>

    <ServiceSectionTables tableData={tdsPaymentDueDatesData}/>
    <ServiceSectionTables tableData={tdsReturnFilingDueDatesData}/>
    <ServiceSectionTables tableData={tdsReturnFormsAndUsage}/>
    <ServiceSectionTables tableData={tdsPenaltyForTDSNonComplianceData}/>
    <ServiceSectionFAQ faqData={tdsFaqData}/>

    
    </>
  )
}

export default page