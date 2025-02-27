import React, { useEffect } from "react";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTableMehchant/PricingTableList";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Div from "../Div";
import { pageTitle } from "../../helper";

export default function Pricing() {
  pageTitle("Pricing");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Div className="container">
        {/* Start Page Heading Section */}
        <PageHeading
          title="Pricing"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="Pricing"
        />
        {/* End Page Heading Section */}
        <Div className="row mt-5">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="We are Tokenizing the Fan Experience for All."
              subtitle="Pricing"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Here at Lagos Labs, we're a passionate community of artists,
                creatives, tech and sustainability enthusiasts harnessing
                blockchain, decentralization and open-source technologies for
                our communities. We were established in 2021 with the clear
                vision of tokenizing our fan economy with rewarding
                opportunities for participation.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle=""
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
    </>
  );
}
