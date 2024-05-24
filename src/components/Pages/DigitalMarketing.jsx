import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function DigitalMarketing() {
    pageTitle('Digital Marketing');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='Digital Marketing'
                bgSrc='/images/hero_bg_3.jpeg'
                pageLinkText={params.serviceDetailsId}
            />
            <Spacing lg='145' md='80' />
            <Div className="container">
                <SectionHeading
                    title='Design working process'
                    subtitle=''
                    variant='cs-style1 text-center'
                />
                <Spacing lg='90' md='45' />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Search Engine Optimization (SEO)'
                            subtitle='Enhance your online visibility and organic search
              rankings with our SEO services. We employ industry-leading strategies to optimize your
              website, increase organic traffic, and drive results'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Content Marketing'
                            subtitle='Our content marketing experts craft compelling, high-quality
              content that resonates with your target audience. From blog posts to infographics, we
              help you tell your brand story effectively.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Social Media Marketing'
                            subtitle='Harness the power of social media to engage with your
              audience, build brand loyalty, and drive conversions. Our social media specialists create
              and execute tailored strategies across various platforms..'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                </Div>
            </Div>



            <Spacing lg='120' md='50' />
            <Div className="container">
                <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-radius_15 cs-shine_hover_1">
                            <img src="/images/digital.jpeg"  height="150px" width="200px" alt="Service" className='cs-radius_15 w-100' />
                        </Div>
                        <Spacing lg='0' md='40' />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h6 className="cs-font_50 cs-m0">Our digital marketing experts are ready to boost your online presence, drive traffic, and
                            increase conversions. From SEO and content marketing to social media advertising, we
                            have the expertise to take your brand to the next level.</h6>

                    </Div>
                </Div>
            </Div>
            <Spacing lg='90' md='45' />
            <div className='container'>
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Pay-Per-Click (PPC) Advertising'
                            subtitle=': Get immediate results with PPC advertising
              campaigns. We create and manage cost-effective campaigns to maximize your ROI,
              targeting the right audience at the right time.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Email Marketing'
                            subtitle='Stay connected with your customers through personalized email
              campaigns. Our email marketing strategies help you nurture leads, boost customer
              retention, and drive sales.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Influencer Marketing'
                            subtitle='Partner with influencers who align with your brand to reach a
              broader audience. We identify and collaborate with influencers to create authentic and
              impactful campaigns.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                </Div>
            </div>

            <Spacing lg='150' md='80' />
            <TestimonialSlider />
            <Spacing lg='145' md='80' />
            <Div className="container cs-shape_wrap_4">
                <Div className="cs-shape_4"></Div>
                <Div className="cs-shape_4"></Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-xl-5 col-lg-6">
                            <SectionHeading
                                title='Some pre questions and answers'
                                subtitle='FAQ’s'
                            />
                            <Spacing lg='90' md='45' />
                        </Div>
                        <Div className="col-lg-6 offset-xl-1">
                            <Accordion />
                        </Div>
                    </Div>
                </Div>
            </Div>
            
        </>
    )
}
