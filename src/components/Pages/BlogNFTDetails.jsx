// import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pageTitle } from '../../helper/index.js'
import Cta from '../Cta/index.jsx'
import PageHeading from '../PageHeading/index.jsx'
import Div from '../Div/index.jsx'
import Sidebar from '../Sidebar.jsx/index.jsx'
import Spacing from '../Spacing/index.jsx'

export default function BlogNFTDetails() {
  // const params = useParams();
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading 
        title='A Case for NFTs'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='NFTs'
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
                <img src="/images/nft_post.png" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">01 Mar 2024</span>
                  <Link to="/blog/a-case-for-nfts" className="cs-post_avatar">Non-Fungible Tokens</Link>
                </Div>
                <h2 className="cs-post_title">A Case for NFTs in the Lifestyle and Service Industries</h2>
                <p>In recent years, non-fungible tokens (NFTs) have taken the digital world by storm, 
                  revolutionizing how we perceive and interact with digital assets. Initially popularized 
                  in the art world, NFTs have since expanded into various industries, including gaming, 
                  entertainment, and collectibles. However, one area that holds immense untapped potential for NFTs is the lifestyle and service industries..</p>
                <blockquote className="cs-primary_font">
                NFTs offer a unique opportunity for businesses in the lifestyle and service industries to 
                create digital assets that represent authenticity and ownership. Whether it's a digital 
                certificate of authenticity for luxury goods, a membership token for exclusive services, 
                or a virtual ticket for live events, NFTs can provide consumers with a tangible digital 
                representation of ownership and status.
                </blockquote>
                <h3>Exclusive Experiences</h3>
                <p>NFTs enable businesses to offer exclusive experiences and perks to their customers. 
                  By tokenizing access to VIP events, behind-the-scenes tours, or personalized services, 
                  businesses can create a sense of exclusivity and prestige for their most loyal customers. 
                  NFTs also allow businesses to gamify loyalty programs, rewarding customers with unique 
                  digital assets that unlock special privileges and rewards. For Instance, Starbucks' Odyssey 
                  offers exclusive perks for holders. Some of which include an all inclusive tour of one of their South America coffee plants.</p>
                <p>Another example is that of fooball giants Manchester United, which offers NFTs as a case for digital ownership of part of the club.
                  Most recently, in 2024, German Bundesliga team Eintracht Frankfurt offered a piece of digital history via NFT to 5000 guests at their home game. </p>

                <h3>Monetization Opportunities</h3>
                <p>NFTs open up new revenue streams for businesses in the lifestyle and service industries. 
                  Whether it's selling digital collectibles, offering limited-edition merchandise, or auctioning 
                  off exclusive experiences, NFTs provide businesses with a novel way to monetize their brand and offerings. 
                  Additionally, NFTs can be fractionalized, allowing businesses to sell fractional ownership of high-value assets or services to a wider audience.
                </p>
                <h3>Brand Engagement and Community Building</h3>
                <p>NFTs offer businesses a powerful tool for brand engagement and community building. By creating digital collectibles, branded merchandise, or interactive experiences, businesses can foster a sense of belonging and community among their customers. NFTs also enable businesses to incentivize user-generated content and collaboration, encouraging customers to become active participants in the brand's ecosystem.</p>
                <h3>Innovative Marketing Campaigns</h3>
                <p>NFTs provide businesses with a canvas for innovative marketing campaigns and promotions. Whether it's launching a digital scavenger hunt, hosting a virtual art exhibition, or partnering with influencers on exclusive collaborations, NFTs allow businesses to create buzz and excitement around their brand in creative and unexpected ways. Additionally, NFTs can serve as a form of social currency, allowing customers to showcase their affiliation with the brand and share their experiences with others.</p>
                <p>In conclusion, NFTs hold immense potential for businesses in the lifestyle and service industries to create value, engage customers, and drive innovation. By leveraging NFTs to tokenize ownership, offer exclusive experiences, monetize offerings, build community, and execute creative marketing campaigns, businesses can differentiate themselves in a competitive market and unlock new opportunities for growth and success. As the NFT landscape continues to evolve, the possibilities for businesses in the lifestyle and service industries are endless.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/* <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form> */}
            {/* End Comment Section */}
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
          title="Learn about our <br /><i>exciting</i> projects"
          btnText='Contact Us Today' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
