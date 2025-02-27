import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  pageTitle('Inspirations');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(6);
  const portfolioData = [
    {
      title: 'Loverrr International',
      subtitle: 'See Details',
      href: '/portfolio/loverrr',
      src: '/images/loverrr_int.png',
      software: 'Adobe',
      category: 'fan_engagement',
      location: 'Chicago',
      client: 'Loverrr International',
      date: '16-Feb-2024'
    },
    {
      title: 'BubbleBoy',
      subtitle: 'See Details',
      href: '/portfolio/bubbleboy', 
      src: '/images/bubbleboy.png',
      software: 'Adobe',
      category: 'fan_engagement',
      location: 'Chicago',
      client: 'Wolve Productions',
      date: '7-Jul-2023'
    },
    {
      title: 'Galacticos FC Soccer Jerseys',
      subtitle: 'See Details',
      href: '/portfolio/galacticos',
      src: '/images/galacticos.jpg', 
      software: 'Adobe, Solidity',
      category: 'fan_engagement',
      location: 'Chicago',
      client: 'Galacticos FC Chicago',
      date: '7-Mar-2023'
    },
    {
      title: 'Creative After Dark',
      subtitle: 'See Details',
      href: '/portfolio/creative',
      src: '/images/creative_1.jpg',
      software: 'Adobe, OBS, XOGO',
      category: 'fan_engagement',
      location: 'Chicago',
      client: 'Streamillonaire',
      date: '26-Aug-2022'
    },
    {
      title: 'Streamillonaire',
      subtitle: 'See Details',
      href: '/portfolio/streamillonaire',
      src: '/images/stmmy.png',
      software: 'Adobe, Solidity',
      category: 'dapp_development',
      location: 'Chicago',
      client: 'Streamillonaire',
      date: '22-Sep-2022'
    },
    {
      title: 'Pasuma',
      subtitle: 'See Details',
      href: '/portfolio/pasuma',
      src: '/images/pasuma_.png',
      software: 'Adobe, Solidity',
      category: 'fan_engagement',
      location: 'Chicago',
      client: 'Streamillonaire',
      date: '22-Sep-2022'
    },
    {
      title: 'Mylar Baggies',
      subtitle: 'See Details',
      href: '/portfolio/baggies',
      src: '/images/mylar_1.png',
      software: 'Adobe, Solidity',
      category: 'web3_branding',
      location: 'Chicago',
      client: 'Streamillonaire',
      date: '22-Sep-2022'
    },
  ];

  const categoryMenu = [
    {
      title: 'DApp Development',
      category: 'dapp_development',
    },
    {
      title: 'Fan Engagement',
      category: 'fan_engagement',
    },
    {
      title: 'Web3 Branding',
      category: 'web3_branding',
    },
    {
      title: 'Blockchain Consulting',
      category: 'blockchain_consulting',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Inspirations"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Inspiration"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Recent works inspiring <br> our development</br>" subtitle="Motivators" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                // category={item.category}
                // client={item.client}
                // location={item.location}
                // software={item.software}
                // date={item.date}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="hello@lagoslabs.dev"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
