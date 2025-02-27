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
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Galacticos Soccer Jersey',
      src: '/images/galacticos_jersey.png',
      category: 'smart_merchandise',
    },
    {
      title: 'Stmmy Mylar Bags',
      src: '/images/stmmy_bags.png',
      category: 'smart_merchandise',
    },
    {
      title: 'Vector ALBPTSD Phygital',
      src: '/images/albptsd.png',
      category: 'fan_engagement',
    },
    {
      title: 'Streamillonaire Frends & Family',
      src: '/images/stmmy_launch.png',
      category: 'fan_engagement',
    },
    {
      title: 'Bubble Boy',
      src: '/images/bubbleboyy.png',
      category: 'creative_collabs',
    },
    {
      title: 'Loverrr',
      src: '/images/loverrr_4.png',
      category: 'creative_collabs',
    },
    {
      title: 'Creatives Fashion Show',
      src: '/images/mos_creative.png',
      category: 'creative_collabs',
    },
    // {
    //   title: 'Streamillonaire Frens & Family',
    //   src: '/images/portfolio_4.jpeg',
    //   category: 'ui_ux_design',
    // },
    // {
    //   title: 'Colorful Art Work',
    //   src: '/images/portfolio_5.jpeg',
    //   category: 'logo_design',
    // },
    // {
    //   title: 'Colorful Art Work',
    //   src: '/images/portfolio_6.jpeg',
    //   category: 'web_design',
    // },
  ];
  const categoryMenu = [
    {
      title: 'Fan Engagement',
      category: 'fan_engagement',
    },
    {
      title: 'Smart Merchandise',
      category: 'smart_merchandise',
    },
    {
      title: 'Creative Collaborations',
      category: 'creative_collabs',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
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
                src={item.src}
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
