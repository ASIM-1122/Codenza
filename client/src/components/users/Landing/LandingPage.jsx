import React from 'react'
import Navbar from '../../common/Navbar';
import Layout from '../../users/Layout'
import Footer from '../../common/Footer';

import {
  HeroSection,
  StepsSection,
  AccuracySection,
  DownloadAppSection,
  TestimonialsSection,
  PartnersSection,
  WhyChooseUsSection,
  ProDocsSection,
  FinalCTASection,
} from "../index";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Layout>
      <HeroSection />
      <StepsSection />
      <AccuracySection />
      <DownloadAppSection />
      <TestimonialsSection />
      <PartnersSection />
      <WhyChooseUsSection />
      <ProDocsSection />
      <FinalCTASection />
      </Layout>
      <Footer />
    </>
  )
}

export default LandingPage
   