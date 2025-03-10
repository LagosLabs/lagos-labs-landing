import React from "react";
// import ReactGA from 'react-ga4';

import IconBox from "../IconBox";
// import Card from '../Card';
// import FunFact from '../FunFact';
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PricingTableList from "../PricingTable/PricingTableList";
// import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from "../Slider/PostSlider";
// import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
//import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from "../../helper";

// Custom GA Hook for page views
// const usePageView = () => {
//   useEffect(() => {
//     ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
//   }, []);
// };

// Custom GA Hook for event tracking
// const useTrackEvent = () => {
//   return (action, params = {}) => {
//     ReactGA.event({ action, params });
//   };
// };

export default function Home() {
  pageTitle("Home");

  // usePageView();
  // const trackEvent = useTrackEvent();

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "LinkedIn",
      links: "https://linkedin.com/company/lagos-labs",
    },
    {
      name: "Instagram",
      links: "https://www.instagram.com/lagoslabs",
    },
    {
      name: "Twitter",
      links: "https://www.twitter.com/lagoslabs",
    },
  ];

  // FunFact Data
  // const funfaceData = [
  //   {
  //     title: 'Average Monthly Users',
  //     factNumber: '100K',
  //   },
  //   {
  //     title: 'Fulfilled Daily Transactions',
  //     factNumber: '1M',
  //   },
  //   {
  //     title: 'Countries',
  //     factNumber: '100',
  //   },
  //   {
  //     title: 'Revenue Redistributed',
  //     factNumber: '$10M',
  //   },
  // ];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // const handleLinkClick = (action, label) => {
  //   trackEvent('click', {
  //     event_category: 'navigation',
  //     event_label: label,
  //     action: action,
  //     non_interaction: false,
  //   });
  // };

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Unleash <br/> New <br/> Dimensions."
        subtitle="At Lagos Labs, we edefine fan engagement by leveraging licensing, innovation, and creativity to produce exclusive merchandise, immersive experiences, and meaningful collaborations that connect artists, creators, and their communities globally."
        btnLink="/about"
        scrollDownId="#about"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/eko_bridge.gif"
        // onEventClick={handleLinkClick}
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Design. Deploy. Scale."
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="Fan Activation"
              subtitle="Our fan activation experiences bring audiences closer to the action, creating interactive touchpoints that make every event unforgettable."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="Smart Merchandising"
              subtitle="With our smart merchandising solutions, creators can offer exclusive, NFC-enabled products that connect fans to digital experiences while ensuring seamless fulfillment worldwide."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="Creative Collaborations"
              subtitle="We foster creative collaborations that blend talent and technology, allowing artists and brands to co-create unique projects that captivate and inspire audiences."
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      {/* End FunFact Section */}

      {/* Start Pricing Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Get started <br/>on Mehchant"
          subtitle="Mehchant by Lagos Labs"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Pricing Section */}

      {/* Start Tech Section */}
      <Spacing lg="150" md="80" />
      {/* <Div id="tech">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="How we're driving change"
                subtitle="What The Tech?"
                btnText="Learn more"
                btnLink="/tech"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Ticketing"
                    link="/projects/ticketing"
                    src="/images/d_tickets.png"
                    alt="Tech"
                    onClick={() => handleLinkClick('Ticketing')}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Streaming"
                    link="/projects/dsp"
                    src="/images/alujo.png"
                    alt="Tech"
                    onClick={() => handleLinkClick('Streaming')}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Marketplace"
                    link="/projects/marketplace"
                    src="/images/stmmy.png"
                    alt="Tech"
                    onClick={() => handleLinkClick('Marketplace')}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Food"
                    link="/projects/food"
                    src="/images/abiinchii.png"
                    alt="Tech"
                    onClick={() => handleLinkClick('Food')}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/nuella.jpg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-1">
            <SectionHeading
              title="Our mission is to empower fans, connect communities, and redefine how you interact with brands and creators."
              subtitle="Our Mission"
              btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>

      {/* End Service Section */}
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          At Lagos Labs, we aim to transform fan engagement by seamlessly
          integrating innovative technology into creative discourse.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=PYpDs7wZoio"
          bgUrl="/images/portfolio_details_2.jpg"
          // onEventClick={handleLinkClick}
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet the <br/> Team"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Learn More "
                subtitle="Media & Education"
                btnText="View More Publications"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our Global Partners and Collaborators" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Learn about our <br /><i>exciting</i> projects"
          btnText="Contact Us Today"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
          // onEventClick={handleLinkClick}
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
