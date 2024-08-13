import React from 'react';
import parse from 'html-react-parser';
import './iconbox.scss';
import Div from '../Div';

export default function IconBox({ title, subtitle, icon, require }) {
  
  const mailtoLink = `mailto:your-email@example.com?subject=Applying for ${title}`;

  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
      <p className="cs-iconbox_subtitle">{require}</p>
      <Div>
        <a href={mailtoLink} className="cs-apply-button">
          Apply
        </a>
      </Div>
    </Div>
  );
}
