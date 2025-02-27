import React, { useEffect } from "react";
// import { useParams } from 'react-router-dom'
import { pageTitle } from "../../helper";
import Button from "../Button";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import PricingTableList from "../PricingTableFanEco/PricingTableList";

export default function FanEconomy() {
  pageTitle("Fan Economy");
  // const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Fan Tokenization"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Fan Token"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <img
          src="/images/portfolio_details_1.jpeg"
          alt="Details"
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Creative Economy"
              subtitle="Fan Tokenization"
            >
              <Spacing lg="40" md="20" />
              <p>
                Lagos Labs’ Digital Marketplace is a dynamic platform where fans
                can discover, trade, and collect licensed digital products from
                a diverse range of creators. This marketplace hosts exclusive,
                authenticated digital assets—spanning art, music, virtual
                fashion, and more—allowing fans to directly support their
                favorite artists and brands.
              </p>
              <Spacing lg="10" md="10" />
              <p>
                Beyond trading and collecting, the platform offers an
                interactive experience where fans can earn rewards for their
                participation, creating an ecosystem that incentivizes
                engagement and fosters a thriving community. Designed with
                seamless transactions and community building in mind, Lagos
                Labs’ Marketplaces redefines fan engagement, giving fans
                ownership, connectivity, and rewards all in one innovative
                space.
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
                <p className="cs-m0">Global</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Product:
                </h3>
                <p className="cs-m0">Digital Asset Marketplace</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Launch:
                </h3>
                <p className="cs-m0">09-May-2025</p>
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
              btnLink="/services/merchandising"
              btnText="Prev Service"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink="/services/mehchant" btnText="See More" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Learn about our<br /><i>exciting</i> projects"
          btnText="Contact Us Today"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
