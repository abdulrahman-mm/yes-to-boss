import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'
import ITR4PenaltyForLateFiling from '@/components/services/ITR4/ITR4PenaltyForLateFiling'
import ITR4StructureOfForm from '@/components/services/ITR4/ITR4StructureOfForm'
import ITR4WhoCanFile from '@/components/services/ITR4/ITR4WhoCanFile'
import { ITR4DocumentsRequiredData, ITR4FaqData, ITR4FilingDueDateData, ITR4ReturnFilingHeroData, ITR4WhatHappensAfterFilingData, ITR4WhoCannotFileData, ITR4WhyChooseUs, ITR4WhyFileData } from '@/data'
import React from 'react'

const page = () => {

  
  return (
    <div className="overflow-hidden">
    <ServiceSectionHero heroSectionData={ITR4ReturnFilingHeroData}/>
    <ServiceSectionWhy WhyData={ITR4WhyFileData}/>
    <ITR4WhoCanFile/>
    <ServiceSectionBulletpoints listData={ITR4WhoCannotFileData}/>
    <ServiceSectionBulletpoints listData={ITR4DocumentsRequiredData}/>
    <ServiceSectionBulletpoints listData={ITR4FilingDueDateData}/>
    <ServiceWhyChooseUs WhyChooseUsData={ITR4WhyChooseUs}/>
    <ServiceSectionBulletpoints listData={ITR4WhatHappensAfterFilingData}/>
<ITR4StructureOfForm/>
<ITR4PenaltyForLateFiling/>
    <ServiceSectionFAQ faqData={ITR4FaqData}/>
    </div>
  )
}

export default page