import React, { useEffect } from "react";
// import { useParams } from 'react-router-dom'
import { pageTitle } from "../../helper";
// import Accordion from '../Accordion'
import Button from "../Button";
import Cta from "../Cta";
// import IconBox from '../IconBox'
// import PricingTableList from "../PricingTableMerch/PricingTableList";
import PricingTableList from "../PricingTableMehchant/PricingTableList";

import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
// import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from "../Spacing";
import Div from "../Div";
// import VideoModal from '../VideoModal'

export default function Merchandising() {
  pageTitle("Merchandising");
  // const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Smart Merchandising"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Merchandising"
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
            <SectionHeading title="Smart Merchandising" subtitle="Merchandise">
              <Spacing lg="40" md="20" />
              <p>
                Smart merchandising with NFC (Near Field Communication)
                technology offers an innovative way for fans to engage with
                exclusive merchandise while ensuring the authenticity of each
                item. By embedding NFC chips into products, fans can tap their
                phones to access unique content, event invites, and personalized
                experiences directly from their favorite creators.
              </p>
              <Spacing lg="10" md="10" />
              <p>
                This technology also protects creators' intellectual property by
                verifying genuine merchandise, preventing counterfeits, and
                preserving the integrity of the artist’s brand in a secure and
                interactive way.
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
                <p className="cs-m0">Merchandising</p>
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
                <p className="cs-m0">29-Nov-2024</p>
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
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Providing best <br/>pricing for client"
            subtitle="Pricing & Packaging"
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
              btnLink="/services/mehchant"
              btnText="Prev Service"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink="/services/activation" btnText="See More" />
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
