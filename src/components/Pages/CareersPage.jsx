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
import MovingText from '../MovingText';

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
                            require='Requirements: Proficiency in HTML, CSS, JavaScript, and experience with front-end frameworks like React or Angular.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='IT Project Manager'
                            subtitle='We are seeking an experienced IT Project Manager to oversee the planning and execution of technology projects. Your role will be to ensure projects are delivered on time, within scope, and within budget.'
                            require='Requirements: Strong organizational skills, experience in project management, and familiarity with project management tools like Jira or Trello.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='UI/UX Designer'
                            subtitle='As a UI/UX Designer, you will create intuitive and visually appealing interfaces that enhance user experience. You will work closely with product managers and developers to design and prototype user-centered solutions.'
              require='Requirements: Proficiency in design tools like Adobe XD, Sketch, or Figma, and a strong portfolio demonstrating your design process.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>

                    
                </Div>
                
            </Div>
            <MovingText text="Email your resume at " />
     
    </>
  );
}
