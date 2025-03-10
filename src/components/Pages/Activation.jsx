import React, { useEffect } from "react";
// import { useParams } from 'react-router-dom'
import { pageTitle } from "../../helper";
// import Accordion from '../Accordion'
import Button from "../Button";
import Cta from "../Cta";
// import IconBox from '../IconBox'
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
// import PricingTableList from "../PricingTableActivate/PricingTableList";
// import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from "../Spacing";
// import VideoModal from '../VideoModal'

export default function Activation() {
  pageTitle("Activation");
  // const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Fan Activation"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Engagement"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src="/images/portfolio_details_1.jpeg"
          alt="Details"
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title="E-commerce Fulfillment" subtitle="Mehchant">
              <Spacing lg="40" md="20" />
              <p>
                Lagos Labs’ fan activation projects are designed to create
                unforgettable, interactive experiences for fans at events and
                shows. By integrating innovative technologies like augmented
                reality (AR), Near Field Communication (NFC), and immersive
                digital content, we craft dynamic user journeys that engage
                audiences from start to finish.{" "}
              </p>
              <Spacing lg="10" md="10" />
              <p>
                Our activations provide unique touchpoints during events,
                allowing fans to connect with artists and brands in meaningful
                ways—whether through interactive merchandise, exclusive content
                unlocked via NFC, or AR-enhanced environments. With a focus on
                fostering lasting memories and building vibrant communities,
                Lagos Labs transforms each event into an engaging and
                personalized fan experience.
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
                <p className="cs-m0">Fan Engagement</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Location:
                </h3>
                <p className="cs-m0">Global</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Product:
                </h3>
                <p className="cs-m0">Various</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Launch:
                </h3>
                <p className="cs-m0">22-Sep-2022</p>
                <Spacing lg="30" md="30" />
              </Div>
              {/* <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Andreo Bowla</p>
                <Spacing lg='30' md='30'/>
              </Div> */}
            </Div>
          </Div>
        </Div>

        {/* Start Pricing Section */}
        {/* <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Providing best <br/>pricing for client"
            subtitle="Pricing & Packaging"
          />
          <Spacing lg="85" md="40" />
          <PricingTableList />
        </Div>
        <Spacing lg="125" md="55" /> */}
        {/* End Pricing Section */}

        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/services/merchandising"
              btnText="Prev Service"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink="/services/fan-economy" btnText="See More" />
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
