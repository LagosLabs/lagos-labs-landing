import React, { useEffect } from "react";
// import { useParams } from 'react-router-dom'
import { pageTitle } from "../../helper";
// import Accordion from '../Accordion'
import Button from "../Button";
import Cta from "../Cta";
// import IconBox from '../IconBox'
import PricingTableList from "../PricingTableMehchant/PricingTableList";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
// import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from "../Spacing";
// import VideoModal from '../VideoModal'

export default function Mehchant() {
  pageTitle("mehchant");
  // const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="E-commerce Marketplace"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Mehchant"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src="/images/admin_mehch.png"
          alt="Details"
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="The Creators Marketplace"
              subtitle="Mehchant"
            >
              <Spacing lg="40" md="20" />
              <p>
                Mehchant is poised to disrupt the traditional merchandising
                industry by integrating e-commerce and social media, offering a
                new way for artists and fans to connect. With a dedicated
                in-house platform, merchandising license agreements, and a focus
                on quality and interaction, Mehchant is positioned to become a
                leader in artist-driven merchandise, creating lasting value for
                both creators and fans.
              </p>
              <Spacing lg="10" md="10" />
              <p>
                Through innovative features, strong partnerships, and a
                commitment to community, Mehchant aims to redefine artist-fan
                engagement and create a platform that empowers creative
                expression and community building.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Category:
                </h3>
                <p className="cs-m0">Development</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Location:
                </h3>
                <p className="cs-m0">Chicago, IL USA</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Product:
                </h3>
                <p className="cs-m0">E-commerce</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Launch:
                </h3>
                <p className="cs-m0">14-Feb-2025</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Shop Now:
                </h3>
                {/* <p className='cs-m0'>Andreo Bowla</p> */}
                <a
                  href="https://mehchant.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="cs-m0">Here</p>
                </a>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>

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

        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/services/fan-economy"
              btnText="Prev Service"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink="/services/merchandising" btnText="See More" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Cta
          title="Learn about our <br /><i>exciting</i> projects"
          btnText="Contact Us Today"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
