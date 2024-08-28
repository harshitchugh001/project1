import React from 'react'
import Div from '../Div'
// import ContactInfoWidget from '../Widget/ContactInfoWidget'
// import MenuWidget from '../Widget/MenuWidget'
// import Newsletter from '../Widget/Newsletter'
// import SocialWidget from '../Widget/SocialWidget'
// import TextWidget from '../Widget/TextWidget'
// import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/'
    },
    {
      title: 'Privacy Policy',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Digital Marketing',
      href: '/service/digitalmarketing'
    },
    {
      title: 'App Development',
      href: '/service/appdevelopment'
    },
    {
      title: 'Website Development',
      href: '/service/websitedevelopment'
    },
    {
      title: 'Brand Strategizing',
      href: '/service/brandstrategizing'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* <TextWidget 
                  logoSrc='/images/logo_side.png' 
                  logoAlt='Logo'
                  
                /> */}
                {/* <SocialWidget/> */}
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* <MenuWidget  menuHeading='Services'/> */}
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* <ContactInfoWidget title='Contact Us'/> */}
              </Div>
            </Div>
            
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2024 Futurity.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            
          </Div>
        </Div>
      </Div>
    </footer>
  )
}