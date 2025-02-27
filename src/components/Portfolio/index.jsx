import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './portfolio.scss';

export default function Portfolio({ href, src, title, subtitle, variant, category, client, location, software, date }) {
  return (
    <Link
      to={href}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <h3 className="cs-portfolio_category">{category}</h3>
          <p className="cs-portfolio_client">{client}</p>
          <p className="cs-portfolio_location">{location}</p>
          <p className="cs-portfolio_software">{software}</p>
          <p className="cs-portfolio_date">{date}</p>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
        </Div>
      </>
    </Link>
  );
}
