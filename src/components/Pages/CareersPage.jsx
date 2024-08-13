import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
// import Cta from '../Cta';
// import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import IconBox from '../IconBox'
// import SectionHeading from '../SectionHeading';
// import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

import SectionHeading from '../SectionHeading'

export default function CareersPage() {
  pageTitle('Careers');

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Careers"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Careers"
      />
      <Spacing lg='60' md='25' />
      {/* End Page Heading Section */}

      {/* Start About Section */}

      <Div className="container">
                <SectionHeading
                    title='Current Openings'
                    subtitle=''
                    variant='cs-style1 text-center'
                />
                <Spacing lg='90' md='45' />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Web Developer'
                            subtitle='Join our team as a Web Developer to create dynamic and responsive websites using the latest technologies. '
                            // require='Proficiency in HTML, CSS, JavaScript, and experience with front-end frameworks like React or Angular.'
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
     
    </>
  );
}
