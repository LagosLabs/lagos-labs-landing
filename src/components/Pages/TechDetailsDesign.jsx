import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function TechDetailsDesign() {
  pageTitle('Tech Details');
  // const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Web Design & Consultancy'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText= 'Web Design Consultation'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Creative Design' 
          subtitle='Creative Design' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Design'
              subtitle="The first pillar in our conception. We recognize that design isn't just about aesthetics; it's about creating experiences that leave lasting impressions.."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Deploy'
              subtitle="Each launch of smart contracts or projects, isn't just about pushing code—we're shaping the future. Each deployment marks a milestone, streamlining processes and propelling our communities towards success."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Scale'
              subtitle="While we're building for today, we reserve growth and scalability into each smart contract or project to ensure competitiveness and resilience to the ever changing world of development."
            />
            <Spacing lg='30' md='30' />
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/tech/creative-design' btnText='Web page design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='eCommerce design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Landing page' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Email template' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Application design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Illustration' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/tech/creative-design' btnText='Infographic design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Mobile apps design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Banner, brochure, card' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/tech/creative-design' btnText='Other design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some prepared questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Learn about our <br /><i>exciting</i> projects"
          btnText='Contact Us Today' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
