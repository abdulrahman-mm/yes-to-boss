import ServiceSectionBulletpoints from '@/components/common/ServiceSectionBulletpoints'
import ServiceSectionFAQ from '@/components/common/ServiceSectionFAQ'
import ServiceSectionHero from '@/components/common/ServiceSectionHero'
import ServiceSectionWhy from '@/components/common/ServiceSectionWhy'
import ServiceWhyChooseUs from '@/components/common/ServiceWhyChooseUs'
import { soleEligibilityForSoleProprietorshipData, soleOngoingComplianceAfterRegistrationData, soleProprietorshipFaqData, soleProprietorshipHeroData, soleProprietorshipWhyRegisterData, soleRulesAndRegulationsData, soletDocumentsRequired, soleTypesOfSoleProprietorshipData, soleWhyChooseUs } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceSectionHero heroSectionData={soleProprietorshipHeroData}/>
    <ServiceSectionWhy WhyData={soleProprietorshipWhyRegisterData}/>


    <ServiceSectionBulletpoints listData={soleRulesAndRegulationsData}/>
    <ServiceSectionBulletpoints listData={soleTypesOfSoleProprietorshipData}/>
    <ServiceSectionBulletpoints listData={soleEligibilityForSoleProprietorshipData}/>
    <ServiceWhyChooseUs WhyChooseUsData={soleWhyChooseUs}/>

    <ServiceSectionBulletpoints listData={soletDocumentsRequired}/>
    <ServiceSectionBulletpoints listData={soleOngoingComplianceAfterRegistrationData}/>

    <ServiceSectionFAQ faqData={soleProprietorshipFaqData}/>



    </>
  )
}

export default page