import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
// import Cta from '../Cta';
// import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
// import Div from '../Div';
// import SectionHeading from '../SectionHeading';
// import TeamSlider from '../Slider/TeamSlider';
// import Spacing from '../Spacing';

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
      {/* End Page Heading Section */}

      {/* Start About Section */}
     
    </>
  );
}
