import React from "react";
import { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  const [tab, setTab] = useState("monthly");
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li
          className={tab === "monthly" ? "active" : ""}
          onClick={() => setTab("monthly")}
        >
          Monthly
        </li>
        <li
          className={tab === "yearly" ? "active" : ""}
          onClick={() => setTab("yearly")}
        >
          Yearly
        </li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Standard"
              price="29"
              currency="$"
              timeline="monthly"
              features={[
                "Store setup",
                "1 additional inventory location",
                "Localized global selling",
                "Basic store analytics",
                "Up to 77% off Shippping discount",
                "3-days store cashout",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Standard"
              price="19"
              currency="$"
              timeline="yearly"
              features={[
                "Store setup",
                "1 additional inventory location",
                "Localized global selling",
                "Basic store analytics",
                "Up to 77% off Shippping discount",
                "3-days store cashout",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Professional"
              price="99"
              currency="$"
              timeline="monthly"
              features={[
                "All Standard features",
                "5 inventory locations",
                "Localized global selling",
                "Up to 88% off Shippping discount",
                "Enhanced store manager",
                "Email marketing",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Professional"
              price="89"
              currency="$"
              timeline="yearly"
              features={[
                "All Standard features",
                "5 inventory locations",
                "Localized global selling",
                "Up to 88% off Shippping discount",
                "Enhanced store manager",
                "Email marketing",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Enterprise"
              price="Contact Us"
              currency=""
              timeline="monthly"
              features={[
                "All standard & professional features",
                "Multiple store management",
                "Upto 88% off Shippping discount",
                "Dedicated account manager",
                "Mehchant API access",
                "Custom store design",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Enterprise"
              price="Contact Us"
              currency=""
              timeline="yearly"
              features={[
                "All standard & professional features",
                "Multiple store management",
                "Upto 88% off Shippping discount",
                "Dedicated account manager",
                "Mehchant API access",
                "Custom store design",
              ]}
              btnText="Purchase Now"
              btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
