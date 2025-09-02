import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionTables from '@/components/common/ServiceSectionTables'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'
import { udayamDocumentsRequiredData, udayamFaqData, udayamHeroData, udayamPenaltyForNotRegisteringData, udayamTableData, udayamWhoCanApplyData, udayamWhyChooseYesToBossData, udayamWhyRegisterData } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden">
    <ServiceSectionHero heroSectionData={udayamHeroData}/>
    <ServiceSectionWhy WhyData={udayamWhyRegisterData}/>
    <ServiceSectionBulletpoints listData={udayamWhoCanApplyData}/>
    <ServiceSectionTables tableData={udayamTableData}/>
    <ServiceWhyChooseUs WhyChooseUsData={udayamWhyChooseYesToBossData}/>
    <ServiceSectionBulletpoints listData={udayamDocumentsRequiredData}/>
    <ServiceSectionBulletpoints listData={udayamPenaltyForNotRegisteringData}/>
    <ServiceSectionFAQ faqData={udayamFaqData} />
    </div>
  )
}

export default page