import { AboutCertification, AboutHero,AboutOurHistory,AboutSecondSection } from '@/components/about'
import { Footer } from '@/components/layout'
import React from 'react'

export default function About() {
  return (
    <>
    <AboutHero/>
    <AboutSecondSection/>
    <AboutOurHistory/>
    <AboutCertification/>
    <Footer/>
    </>
  )
}
