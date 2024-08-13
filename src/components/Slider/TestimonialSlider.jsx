import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'Shatan Tech transformed our business operations with their cutting-edge technology solutions. Their expertise and commitment to excellence are unparalleled. The results speak for themselves—our efficiency has skyrocketed, and we couldn’t be more pleased with the partnership.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Working with Shatan Tech has been a game-changer for our company. Their team’s in-depth knowledge and innovative approach provided us with tailored solutions that met all our business needs. They truly understand the technology landscape and deliver beyond expectations.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_3.jpeg',
      testimonialText:
        'We approached Shatan Tech for a complex project, and they delivered with precision and expertise. Their ability to seamlessly integrate advanced technology into our existing systems has significantly improved our operational efficiency. We highly recommend their services.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'Shatan Tech is a reliable partner who truly understands our business challenges. Their strategic approach and technical proficiency have helped us achieve our goals faster and more effectively. We’re incredibly impressed with the quality of service they provide.',
      avatarName: 'Ahon Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '3.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
