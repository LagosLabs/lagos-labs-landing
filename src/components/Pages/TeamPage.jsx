import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';

export default function TeamPage() {
  pageTitle('Team');
  const teamData = [
    {
      memberImage: '/images/greg.png',
      memberName: 'Gregory Ajayi',
      memberDesignation: 'Founder and CTO',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/gregoryajayi',
        twitter: 'https://www.twitter.com/lagosnco_',
        instagram: 'https://www.instagram.com/lagosnco',
      },
    },
    {
      memberImage: '/images/katherine.png',
      memberName: 'Katherine Koo',
      memberDesignation: 'Co-founder & COO',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/katherinekoo1',
        instagram: 'https://www.instagram.com/katherinewhoo',
      }, 
    },
    {
      memberImage: '/images/femi.jpeg',
      memberName: 'Femi Ogundayo',
      memberDesignation: 'Co-founder & CTO',
      memberSocial: {
        twitter: 'https://www.twitter.com/cocofemi',
        instagram: 'https://www.instagram.com/femisavy'
      },
    },
    // {
    //   memberImage: '/images/cheeckey.jpeg',
    //   memberName: 'Cheecky',
    //   memberDesignation: 'Creative Director',
    //   memberSocial: {
    //     instagram: 'https://www.instagram.com/_cheeckey_',
    //   }, 
    // },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <PageHeading
        title="Meet the Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our collaborative team <br/>driving change"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Learn about our <br /><i>exciting</i> projects"
            btnText="Contact Us Today"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
