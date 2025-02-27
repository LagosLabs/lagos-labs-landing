import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero6 from '../Hero/Hero6';

export default function ShowcasePortfolioHome() {
  pageTitle('Projects');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSocialLinks = [
    {
      name: 'LinkedIn',
      links: 'https://linkedin.com/company/lagos-labs',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/lagoslabs',
    },
    {
      name: 'Twitter',
      links: 'https://www.twitter.com/lagoslabs',
    },
  ];

  const showcaseData = [
    {
      title: 'Mehchant  <br/>e-commercer',
      imgUrl: '/images/slider_1.jpeg',
      href: '/case-study/case-study-details',
    },
    {
      title: 'Smart Merchandising',
      imgUrl: '/images/slider_2.jpeg',
      href: '/case-study/case-study-details',
    },
    {
      title: 'Digital Fan Token',
      imgUrl: '/images/slider_3.jpeg',
      href: '/case-study/case-study-details',
    },
    {
      title: 'Fan Activation',
      imgUrl: '/images/slider_4.jpeg',
      href: '/case-study/case-study-details',
    },
    {
      title: 'Mehchant <br/>for Creators',
      imgUrl: '/images/slider_4.jpeg',
      href: '/case-study/case-study-details',
    },
  ];

  return (
    <Hero6
      heroSocialLinks={heroSocialLinks}
      socialLinksHeading="Follow Us"
      showcaseData={showcaseData}
    />
  );
}
