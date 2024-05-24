import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'

import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'

export default function PortfolioDetailsPage() {
  const params = useParams()
  pageTitle('Facebook  Marketing Course');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Facebook  Marketing Course'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      />
      <whatsaapDetailSpacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/portfolio_details_1.jpeg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Facebook Marketing course' 
              subtitle='Course details' 
            >
              <Spacing lg='40' md='20'/>
              <p>Harness the unparalleled reach of Facebook to connect with your target audience. Learn
advanced techniques for optimizing your Facebook presence, advertising, and analytics.
Our Facebook Marketing Course covers:</p>
              <Spacing lg='10' md='10'/>
              {/* <p>Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Key Points:-</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                {/* <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3> */}
                <p className='cs-m0'>Creating and managing Facebook ad campaigns</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                {/* <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3> */}
                <p className='cs-m0'>Building a thriving Facebook community</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                {/* <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3> */}
                <p className='cs-m0'>Analyzing data to enhance your Facebook marketing ROI</p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
