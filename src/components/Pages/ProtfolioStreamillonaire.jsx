

import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero6 from '../Hero/Hero6';
import Spacing from '../Spacing';
import Div from '../Div';
import Button from '../Button';
import SectionHeading from '../SectionHeading';


export default function PortfolioStreamillonaire() {
  pageTitle('Stream 2 Earn Baggies');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const showcaseData = [
    {
      title: '',
      imgUrl: '/images/streamillonaire_1.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/mylar_2.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/lagos_event.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/lagos_evt.png',
      href: '',
    },
    {
      title: '',
      imgUrl: '/images/southside.png',
      href: '',
    },
  ];

  return (
    <>
      <Hero6
        showcaseData={showcaseData}
      />
        <Spacing lg='150' md='80' />
      <Div className="container">
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Web 3 Branding"
              subtitle="NFT"
            >
              <Spacing lg='40' md='20' />
              <p>The Streamillonaire Project is a utility NFT created by us for rewarding our participants via our custom NFT Merchandizing License Agreement. </p>
              <Spacing lg='10' md='10' />
              <p>Holders of the NFT are rewarded from sales of merch sold. This is governed by a snapshot of holders during earnings calls, and confirmed via blockchain ledger system for authenticity and ownership.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Web 3 Branding</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Chicago</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>03-Sep-2022</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Streamillonaire</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/galacticos' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/creative' btnText='Next Project' />
          </Div>
        </Div>
      </Div>
    </>
  );
}
