import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero6 from '../Hero/Hero6';

export default function Services() {
  pageTitle('Services');
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
      title: 'Fulfilled by <br/> Mehchant',
      imgUrl: '/images/fbmm.png',
      href: '/services/Mehchant',
    },
    {
      title: 'Smart <br/> Merchandising',
      imgUrl: '/images/smart_merch.jpeg',
      href: '/services/merchandising',
    },
    {
      title: 'Digital <br/> Asset Management',
      imgUrl: '/images/creative_1.jpg',
      href: '/services/fan-economy',
    },
    {
      title: 'Fan <br/> Activation',
      imgUrl: '/images/creative_5.png',
      href: '/services/activation',
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
