import React from "react";
import { Route, Routes } from "react-router-dom";
// import ReactGA from 'react-ga4';

import AboutPage from "./components/Pages/AboutPage";
import BlogPage from "./components/Pages/BlogPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";

import TeamPage from "./components/Pages/TeamPage";
import BlogHowNot from "./components/Pages/BlogHowNot";
import BlogNFTDetails from "./components/Pages/BlogNFTDetails";
import BlogUtilityNftDetails from "./components/Pages/BlogUtilityNftDetails";
import BlogWeb3Biz from "./components/Pages/BlogWeb3Biz";
import BlogTodoDapp from "./components/Pages/BlogTodoDapp";
import BlogSoa from "./components/Pages/BlogSoa";

import BlogDataDetails from "./components/Pages/BlogDataDetails";
import Mehchant from "./components/Pages/Mehchant";
import FanEconomy from "./components/Pages/FanEconomy";

import Layout from "./components/Layout";
import FaqPage from "./components/Pages/FaqPage";
import Litepaper from "./components/Pages/Litepaper";
import Services from "./components/Pages/Services";
import Portfolio from "./components/Pages/Portfolio";
import Activation from "./components/Pages/Activation";
import Merchandising from "./components/Pages/Merchandising";
import Pricing from "./components/Pages/Pricing";
// new page deployment

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<AboutPage />} />

          <Route path="services" element={<Services />} />

          <Route path="services/merchandising" element={<Merchandising />} />
          <Route path="services/fan-economy" element={<FanEconomy />} />
          <Route path="services/activation" element={<Activation />} />
          <Route path="services/mehchant" element={<Mehchant />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/a-case-for-nfts" element={<BlogNFTDetails />} />
          <Route
            path="blog/how-not-to-start-a-web3-biz"
            element={<BlogHowNot />}
          />
          <Route
            path="blog/a-case-for-data-engineers"
            element={<BlogDataDetails />}
          />
          <Route path="blog/web3-soa" element={<BlogSoa />} />
          <Route
            path="blog/utility-based-nfts"
            element={<BlogUtilityNftDetails />}
          />
          <Route path="blog/todo-dapp" element={<BlogTodoDapp />} />
          <Route
            path="blog/important-roles-in-web3"
            element={<BlogWeb3Biz />}
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />

          <Route path="/litepaper" element={<Litepaper />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
