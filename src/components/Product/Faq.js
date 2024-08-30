import React, { useState } from 'react';
import './FAQ.css'; // Assuming you'll add CSS to this file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 days of purchase. Please ensure that the product is in its original condition."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking link provided in your order confirmation email."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary by location."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team via email at support@example.com or through our contact form on the website."
    },
  ];

  return (
    <section className="faq-section mb-12 py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
      <div className="container mx-auto px-4">
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-2xl font-semibold text-gray-800">{faq.question}</h3>
                <span className={`accordion-icon ${activeIndex === index ? 'rotate-180' : ''}`}>+</span>
              </button>
              <div
                className={`accordion-body ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
