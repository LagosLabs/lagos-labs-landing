import React from 'react'
//import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://www.linkedin.com/company/lagos-labs/' target="_blank"  rel="noreferrer" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a href='https://www.twitter.com/lagoslabs' target="_blank"  rel="noreferrer" className="cs-center">
        <Icon icon="fa6-brands:x-twitter" />               
      </a>
      <a href='https://www.youtube.com/@LagosLabs' target="_blank"  rel="noreferrer" className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </a>
      <a href='https://instagram.com/lagoslabs' target="_blank"  rel="noreferrer" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </a>
    </Div>
  )
}
