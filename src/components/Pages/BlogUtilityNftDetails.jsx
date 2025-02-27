// import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pageTitle } from '../../helper/index.js'
import Cta from '../Cta/index.jsx'
import PageHeading from '../PageHeading/index.jsx'
import Div from '../Div/index.jsx'
import Sidebar from '../Sidebar.jsx/index.jsx'
import Spacing from '../Spacing/index.jsx'
// import axios from 'axios'

export default function BlogUtilityNftDetails() {
  // const params = useParams();
  pageTitle('Utility NFTs');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading 
        title='Empowering Artists'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='Exploring Tokenization'
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/portfolio_details_1.jpeg" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">27 Mar 2024</span>
                  <Link to="/blog/utility-based-nfts" className="cs-post_avatar">NFT</Link>
                </Div>
                <h2 className="cs-post_title">Empowering Artists: Exploring Tokenization and Blockchain Solutions for Intellectual Property Rights</h2>
                <p>
                  In my interactions with creators and artists, the question of how tokenization could empower them to reclaim their intellectual property (IP) and elevate their brand often arises.
                  Many artists express frustration with the current state of affairs, where digital streaming platforms (DSPs) disproportionately benefit big companies, leaving artists with meager revenues. Some have chosen to rebel, like grime artist <a href='https://x.com/grmdaily/status/1772643407128621406?s=48' >JME</a> and electronic artist James Blake, who recently launched with <a href='https://vault.fm'>vault.fm</a>.
                </p>
                <blockquote className="cs-primary_font">
                However, transitioning to blockchain and Web3 solutions presents its own set of challenges for artists and creatives.
                </blockquote>
                <p>They're not alone. <a href='https://x.com/historyinmemes/status/1766128240467587364?s=48'>Snoop Dogg,</a> KAMI, and Vector have also spoken out against the wealth disparities in DSPs, highlighting the need for a new business model that ensures fair compensation for creatives. Enter blockchain technology. Projects like sound.xyz, Audius, Mintable, and Royal are leveraging blockchain to address these issues. sound.xyz, built on the Ethereum Virtual Machine (EVM), allows fans to invest in projects and be rewarded for participation. Audius, on the Solana chain, rewards artists based on trends and active listening. Royal.io offers NFT-based royalty investment opportunities, while Mintable provides an NFT marketplace for artists to distribute their music.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/portfolio_37.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/portfolio_38.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>Hindrances Artists Face</h3>
                <p><i>Complexity:</i> The technical complexities of blockchain and Web3 can be daunting for artists unfamiliar with the technology. From understanding smart contracts to navigating different blockchain networks, the learning curve can be steep.</p>
                <p><i>Cost:</i> Deploying smart contracts and minting NFTs on blockchain networks often incurs gas fees, which can be prohibitively expensive for artists with limited resources.</p>
                <p><i>Marketplace Fragmentation:</i> The fragmentation of NFT marketplaces makes it challenging for artists to decide where to publish their work and reach their target audience effectively.</p>
                <p><i>Copyright Concerns:</i> While blockchain offers immutable record-keeping, it also raises concerns about copyright infringement and unauthorized use of intellectual property.</p>
                <h3>Solutions Available</h3>
                <p><i>Simplified Platforms:</i> User-friendly platforms like Mintable and Rarible are simplifying the process of minting and selling NFTs, making it more accessible to artists without technical expertise.</p>
                <p><i>Layer 2 Solutions:</i> Layer 2 scaling solutions like Polygon and Loopring offer cheaper and faster transactions compared to the Ethereum mainnet, reducing the cost barrier for artists.</p>
                <p><i>Marketplace Aggregators:</i> Platforms like OpenSea and Nifty Gateway aggregate NFT marketplaces, providing artists with broader visibility and reach across different networks.</p>
                <p><i>Copyright Protection:</i> Projects like Verisart and Ethernity Chain offer solutions for verifying the authenticity of digital art and protecting artists' copyright on the blockchain.</p>
                <blockquote className="cs-primary_font">
                  As the industry evolves, it's essential for artists to stay informed about these solutions and navigate the transition to blockchain and Web3 with confidence.
                </blockquote>
                <p>By embracing these solutions and leveraging the power of blockchain and Web3, artists can reclaim control over their intellectual property, connect directly with their audience, and build sustainable, decentralized models for monetizing their work.</p>
                <p>
                This post is part of our commitment to leveraging open-source technologies for the betterment of our communities.
                </p>
              </Div>
            </Div>
            {/* End Details Post Content */}

          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title="Learn about our<br /><i>exciting</i> projects"
          btnText='Contact Us Today' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
